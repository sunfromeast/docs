## ServiceAccount自动化

Kubernetes中创建的每一个Pod都自动挂载了一个存储卷在容器的`/var/run/secrets/kubernetes.io/serviceaccount`目录，该目录下存在三个文件，分别是：

- ca.crt
- namespace
- token：保存ServiceAccount对象的认证token，容器中应用进程使用它向APIServer发起请求。

Kubernetes系统通过三个独立的组件间相互协作来实现服务账户的自动化：

- Service Account准入控制器
- token controller令牌控制器
- Service Account账户控制器

### Service Account准入控制器

Service Account是APIServer的一部分，负责创建或更新Pod时对其按需进行ServiceAccount对象相关信息的修改。包括：

- Pod若没有明确指定使用ServiceAccount对象，则将其设置为“default”。反之，则拒绝请求。
- Pod不含imagePullSecrets，则把ServiceAccount对象的ImagePullSecrets添加其上。
- 为pod添加secret类型的volume用于保存token，并将其挂载到容器内的`/var/run/secrets/kubernetes.io/serviceaccount`目录。

### token controller令牌控制器

其完成的任务为：

- 监控Service Account对象的创建，并为其添加对应的用于访问API的Secret对象。
- 监控Service Account对象的删除，并删除对应的secret对象。
- 监控secret对象的添加，确保其引用的Service Account对象存在
- 监控secret对象的删除，并删除Service Account对象对此secret的引用。

## 创建ServiceAccount对象

一个pod只能有一个ServiceAccount对象，但一个ServiceAccount对象可以由多个pod共享。创建pod时，可以使用`.spec.serviceAccountName`属性直接引用要使用的ServiceAccount对象。当然，如果你不指定，默认使用的是当前命名空间中默认的ServiceAccount对象。

创建ServiceAccount对象有命令行和配置文件两种方式：

```markdown
kubectl create serviceaccount mytest -n kube-system
```

配置清单方式：

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: mytest
  namespace: kube-system
```

## 调用imagePullSecret对象

pod从私有仓库拉取镜像时需要进行认证，除了可以在pod清单文件的`.spec.imagePullSecrets`中指定secret外，还可以在ServiceAccount中指定。

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: mytest
  namespace: kube-system
imagePullSecrets:
 - name: local-harbor-secret
```



