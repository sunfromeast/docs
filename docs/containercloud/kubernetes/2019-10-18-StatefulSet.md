# StatefulSet

## 概述

​	Deployment控制器适用于无状态的web应用，由Deployment控制的各个Pod之间是平等的关系。这个并不能覆盖所有的应用编排问题。

​	对于分布式应用（主从、主备）、数据存储类应用来说，如果用Deployment控制器部署，那么在多个Pod实例的情况下，对应着多份数据，如果某个Pod重启，该Pod所有的状态都丢失。

​	所以，对于这些实例之间有不对等的关系，以及实例对外部数据库有依赖的应用，称为有状态的应用。Kubernetes对有状态应用的支持，使用的是StatefulSet。

​	StatefulSet可以从两方面理解：

> - 拓扑状态：Pod实例之间不对等，按先后顺序启动。
> - 存储状态：Pod实例要绑定存储数据。
>
> 所以，StatefulSet的核心功能：通过某种方式记录这些状态，在Pod被重建时，为新Pod恢复这些状态。

## Headless Service

​	Service是Kubernetes项目用于将一组Pod暴露给外界访问的一种机制。

​	Service是如何被访问到的？

> - VIP：一般的Service都有一个VIP，通过这个VIP将服务转发到Service所代理的一个后端Pod上。
>
> - DNS：
>
>   - Normal Service：对于一般Service，解析的dns（“my-svc”."mynamespace".svc.cluster.local）就是对应着Service的VIP，后续的访问方式和方法1一样。
>
>   - Headless Service：这种类型的Service不需要分配VIP，而是直接以DNS记录的方式解析出被代理的Pod的IP地址。所有被代理的Pod的IP都会绑定这样一个DNS记录
>
>     ```markdown
>     <podName>.<headless-service>.<namespace>.svc.cluster.local
>     ```

一个Headless Service对应的yaml文件：

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  ports:
  - port: 80
    name: web
  clusterIP: None
  selector:
    app: nginx
```

## StatefulSet

StatefulSet的yaml文件

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  serviceName: "nginx"
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.9.1
        ports:
        - containerPort: 80
          name: web
```

和Deployment相比，就是多了spec.serviceName字段。

