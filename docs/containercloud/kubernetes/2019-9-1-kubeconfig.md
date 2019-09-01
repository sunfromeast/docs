# 客户端配置文件kubeconfig

kubeconfig配置文件提供了接入多个集群的相关配置信息（包括：各个集群、各个用户、各个上下文）。

使用kubeadm初始化集群后生成的`/etc/kubernetes/admin.conf`即为kubeconfig格式的配置文件，其由kubeadm init命令自动生成，可以由kubectl加载（默认路径$HOME/.kube/config）后用于接入服务器。

`kubectl config`命令常用操作：

```markdown
# 1 显示kubeconfig文件的信息
kubectl config view 

# 2 设置cluster
kubectl config set-cluster ...

# 3 设置user
kubectl config set-credentials ...

# 4 设置上下文
kubectl config set-context ...

# 5 使用指定上下文
kubectl config use-context ...
```

显示当前kubeconfig如下：

```markdown
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: DATA+OMITTED
    server: https://192.168.144.3:6443
  name: kubernetes
contexts:
- context:
    cluster: kubernetes
    user: kubernetes-admin
  name: kubernetes-admin@kubernetes
current-context: kubernetes-admin@kubernetes
kind: Config
preferences: {}
users:
- name: kubernetes-admin
  user:
    client-certificate-data: REDACTED
    client-key-data: REDACTED
```

> 其中：
>
> -clusters：集群列表，包含访问APIServer的URL和集群名称。
>
> -users：用户列表，包含访问APIServer时的用户名和认证信息。
>
> -context：kubelet可用的上下文列表，由cluster和user组合而成。
>
> current-context：当前使用的上下文

## 测试kubeconfig

测试过程：新建一个用户kube-user1，然后，将该用户和默认集群kubernetes管联。

<font color=red>所有操作在master节点进行</font>

### 生成私钥和证书

```markdown
 cd /etc/kubernetes/pki

# 生成证书
openssl genrsa -out kube-user1.key 2048

opensll req -new -in kube-user1.key -out kube-user1.csr -subj "/CN=kube-user1/O=kubernetes"

openssl x509 -req -in kube-user1.csr -CA ca.crt -CAkey ca.key \
-CAcreateserial -out kube-user1.crt -days 3650

# 验证证书
openssl x509 -in kube-user1.crt -text -noout
```

### 创建集群、用户、上下文

```markdown
# 创建集群，已经存在，可以省略这一步
kubectl config set-cluster kubernetes --embed-certs=true \
--certificate-authority=/etc/kubernetess/pki/ca.crt \
--server="https://192.168.144.3:6443"

# 创建用户
kubectl config set-credentials kube-user1 --embed-certs=true \
--client-certificate=/etc/kubernetes/pki/kube-user1.crt \
--client-key=/etc/kubernetes/pki/kube-user1.key

# 配置context
kubectl config set-context kube-user1@kubernetes --cluster=kubernetes --user=kube-user1

# 指定要使用的上下文
kubectl config use-context kube-user1@kubernetes
```

> - 由于此时的用户kube-user1没有被授权，所以，访问集群资源会报错。
> - 如果需要临时使用某个context，不必切换context，只需在kubectl命令使用--context选项指定目标context即可。

给kube-user1绑定角色授权，使其可以访问集群资源

```markdown
# 先切换kubernetes-admin@kubernetes
kubectl config use-context kubernetes-admin@kubernetes

# 创建一个角色，可以访问service
kubectl create role services-admin --resource="services" \
--verb="*"

# 给kube-user1绑定角色进行授权
kubectl create rolebinding kubeuser1-rb --user=kube-user1 --role=services-admin

# 测试访问
kubectl get svc --context=kube-user1@kubernetes
```

