# DaemonSet

## 概述

DaemonSet的作用是：在k8s集群的每一个节点上都创建一个Daemon Pod实例。有新的Node加入集群时，该Pod会自动在新节点上创建出来；旧节点删除时，上面的Pod会自动删除。

## Yaml文件

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluentd-elasticsearch
  namespace: kube-system
  labels:
    k8s-app: fluentd-logging
spec:
  selector:
    matchLabels:
      name: fluentd-elasticsearch
  template:
    metadata:
      labels:
        name: fluentd-elasticsearch
    spec:
      tolerations:
      - key: node-role.kubernetes.io/master
        effect: NoSchedule
      containers:
      - name: fluentd-elasticsearch
        image: k8s.gcr.io/fluentd-elasticsearch:1.20
        resources:
          limits:
            memory: 200Mi
          requests:
            cpu: 100m
            memory: 200Mi
        volumeMounts:
        - name: varlog
          mountPath: /var/log
        - name: varlibdockercontainers
          mountPath: /var/lib/docker/containers
          readOnly: true
      terminationGracePeriodSeconds: 30
      volumes:
      - name: varlog
        hostPath:
          path: /var/log
      - name: varlibdockercontainers
        hostPath:
          path: /var/lib/docker/containers

```

Yaml文件和Deployment控制器的yaml文件很像。

## 原理

<font color=red>1. DaemonSet怎么保证每个Node上有且只有一个被管理的Pod？</font>

> DaemonSet有一个控制循环在不断检查，可能的结果有：
>
> 1. 没有这种pod，就创建新的pod
> 2. 有这种pod，但数量大于1，多余的pod删除，只保留一个
> 3. 正好只有一个这种pod，正常，什么都不做。

<font color=red>2. 怎么在指定Node上创建pod？</font>

之前可以使用下面方式指定

```yaml
spec:
  nodeSelector:
    name: nodename
```

nodeSelector这个字段现在已经废弃了，使用功能更完善的nodeAffinity来代替

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: with-node-affinity
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:  //每次调度时考虑
        nodeSelectorTerms:
        - matchExpressions:
          - key: metadata.name
            operator: In
            values:
            - node-geektime

```

DaemonSet Controller在创建Pod的时候，会自动在Pod对象里，加上这样一个nodeAffinity定义。

<font color=red>3. 怎么调度Pod到master节点上？</font>

master一般是不能运行pod的，那么，daemon pod要怎么做才能运行在master节点上呢？DaemonSet在创建pod时会自动给pod添加一个与调度有关的字段<font color=lsdf>tolerations</font>。这个字段意思是：这个pod会容忍某些Node上的“污点”（Taint）。

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: with-toleration
spec:
  tolerations:
  - key: node.kubernetes.io/unschedulable
    operator: Exists
    effect: NoSchedule

```

上述配置，pod将会忽略标记了unschedulable污点的pod。



