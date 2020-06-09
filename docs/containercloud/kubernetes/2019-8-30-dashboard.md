# Kubernetes部署Dashboard

## 获取Dashboard的部署文件

可以从github上的kubernetes/dashboard项目中下载dashboard的部署文件

```markdown
wget https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml
```

kubernetes-dashboard.yml文件中的内容为：

```markdown
# Copyright 2017 The Kubernetes Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# ------------------- Dashboard Secret ------------------- #

apiVersion: v1
kind: Secret
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard-certs
  namespace: kube-system
type: Opaque

---
# ------------------- Dashboard Service Account ------------------- #

apiVersion: v1
kind: ServiceAccount
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kube-system

---
# ------------------- Dashboard Role & Role Binding ------------------- #

kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: kubernetes-dashboard-minimal
  namespace: kube-system
rules:
  # Allow Dashboard to create 'kubernetes-dashboard-key-holder' secret.
- apiGroups: [""]
  resources: ["secrets"]
  verbs: ["create"]
  # Allow Dashboard to create 'kubernetes-dashboard-settings' config map.
- apiGroups: [""]
  resources: ["configmaps"]
  verbs: ["create"]
  # Allow Dashboard to get, update and delete Dashboard exclusive secrets.
- apiGroups: [""]
  resources: ["secrets"]
  resourceNames: ["kubernetes-dashboard-key-holder", "kubernetes-dashboard-certs"]
  verbs: ["get", "update", "delete"]
  # Allow Dashboard to get and update 'kubernetes-dashboard-settings' config map.
- apiGroups: [""]
  resources: ["configmaps"]
  resourceNames: ["kubernetes-dashboard-settings"]
  verbs: ["get", "update"]
  # Allow Dashboard to get metrics from heapster.
- apiGroups: [""]
  resources: ["services"]
  resourceNames: ["heapster"]
  verbs: ["proxy"]
- apiGroups: [""]
  resources: ["services/proxy"]
  resourceNames: ["heapster", "http:heapster:", "https:heapster:"]
  verbs: ["get"]

---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: kubernetes-dashboard-minimal
  namespace: kube-system
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: kubernetes-dashboard-minimal
subjects:
- kind: ServiceAccount
  name: kubernetes-dashboard
  namespace: kube-system

---
# ------------------- Dashboard Deployment ------------------- #

kind: Deployment
apiVersion: apps/v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kube-system
spec:
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      k8s-app: kubernetes-dashboard
  template:
    metadata:
      labels:
        k8s-app: kubernetes-dashboard
    spec:
      containers:
      - name: kubernetes-dashboard
        image: k8s.gcr.io/kubernetes-dashboard-amd64:v1.10.1
        ports:
        - containerPort: 8443
          protocol: TCP
        args:
          - --auto-generate-certificates
          # Uncomment the following line to manually specify Kubernetes API server Host
          # If not specified, Dashboard will attempt to auto discover the API server and connect
          # to it. Uncomment only if the default does not work.
          # - --apiserver-host=http://my-address:port
        volumeMounts:
        - name: kubernetes-dashboard-certs
          mountPath: /certs
          # Create on-disk volume to store exec logs
        - mountPath: /tmp
          name: tmp-volume
        livenessProbe:
          httpGet:
            scheme: HTTPS
            path: /
            port: 8443
          initialDelaySeconds: 30
          timeoutSeconds: 30
      volumes:
      - name: kubernetes-dashboard-certs
        secret:
          secretName: kubernetes-dashboard-certs
      - name: tmp-volume
        emptyDir: {}
      serviceAccountName: kubernetes-dashboard
      # Comment the following tolerations if Dashboard must not be deployed on master
      tolerations:
      - key: node-role.kubernetes.io/master
        effect: NoSchedule

---
# ------------------- Dashboard Service ------------------- #

kind: Service
apiVersion: v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kube-system
spec:
  ports:
    - port: 443
      targetPort: 8443
  selector:
    k8s-app: kubernetes-dashboard

```

由于科学上网的原因，需要修改镜像的地址，修改地址可以参考[这里](https://www.ilanni.com/?p=14534)。如果你想将dashboard暴露出去访问，需要修改`Service`的`type:NodePort`，`nodePort`端口可以改为30001。

## 部署Dashboard

```markdown
kubectl apply -f kubernetes-dashboard.yaml
```

部署完成后，可以检查服务的运行状态

```markdown
kubectl get pod -n kube-system
kubectl get svc -n kube-system
```

## 访问Dashboard

使用火狐浏览器访问：https://192.168.144.3:30001，可以访问到dashboard页面。

谷歌浏览器禁止不安全的证书访问，所以，在谷歌浏览器中输入上述地址，是访问不到的。可以使用openssl重新生成证书解决。

```markdown
# 生成私钥
openssl genrsa -out dashboard.key 2048
# 生成证书签名请求
openssl req -new -out dashboard.csr -key dashboard.key -subj '/CN=192.168.144.3'
# 生成证书
openssl x509 -req -in dashboard.csr -signkey dashboard.key -out dashboard.crt -days 3650

# 删除原有证书
kubectl delete secret kubernetes-dashboard-certs -n kube-system
# 重新创建新的证书secret
kubectl create secret generic kubernetes-dashboard-certs -n kube-system --from-file=dashboard.key --from-file=dashboard.crt -n kube-system
# 重启dashboard的pod
kubectl delete pod <dashboard-pod-name> -n kube-system
```

然后，就可以在谷歌浏览器中访问dashboard了。

**相关链接：**

1. [官方github创建serviceaccount和clusterrolebinding](https://github.com/kubernetes/dashboard/wiki/Creating-sample-user)

## 登录Dashboard

dashboard的登录有两种方式：kubeconfig（HTTPS）和token（HTTP）。

1. token登录方式

   需要创建一个serviceaccount，并将其进行集群角色绑定（ClusterRoleBinding）。

   ```markdown
   # 1 创建一个serviceaccount
   kubectl create serviceaccount dashboard-admin -n kube-system
   # 2 将serviceaccount进行集群角色绑定
   kubectl create clusterrolebinding dashboard-admin --clusterrole=cluster-admin --serviceaccount=kube-system:dashboard-admin
   # 3 查看secret
   kubectl describe secrets -n kube-system $(kubectl -n kube-system get secret | awk '/dashboard-admin/{print $1}')
   ```

   在dashboard中输入secret中的token，即可以登录成功。

   