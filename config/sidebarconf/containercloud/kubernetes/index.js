//包含config/utils/index.js引入getSideBar函数
const utils = require('../../../utils/index.js')

const children = []
const children_deploy = [
	['/containercloud/kubernetes/2019-9-19-kubeadm概述.md', 'kubeadm概述'],
	['/containercloud/kubernetes/2019-8-30-kubeadm.md', 'Kubeadm部署集群']
]
//资源对象
const children_resourceObject = [
	['/containercloud/kubernetes/2019-9-3-pod.md', 'Pod'],
	['/containercloud/kubernetes/2019-8-31-secret.md', 'Secret'],
	['/containercloud/kubernetes/2019-10-18-StatefulSet.md', 'StatefulSet'],
	['/containercloud/kubernetes/2019-10-19-DaemonSet.md', 'DaemonSet'],
	['/containercloud/kubernetes/2019-10-19-CronJob.md', 'CronJob']
]

//资源管理
const children_resourceManage = [
	['/containercloud/kubernetes/2019-9-2-资源管理基础.md', '基础']
]

const volume = [
	['/containercloud/kubernetes/2019-10-25-pv_pvc.md', 'PV和PVC']
]
//认证授权
const children_authorication = [
	['/containercloud/kubernetes/2019-9-1-访问控制概述.md', "概述"],
	['/containercloud/kubernetes/2019-9-1-serviceaccount.md', "ServiceAccount"],
	['/containercloud/kubernetes/2019-9-1-kubeconfig.md', "配置文件kubeconfig"],
	['/containercloud/kubernetes/2019-9-1-rbac.md', "RBAC"],
]
const network = [
	['/containercloud/kubernetes/2019-10-28-单主机容器网络.md', '单主机容器网络'],
	['/containercloud/kubernetes/2019-10-29-跨主机容器网络.md', '跨主机容器网络']
]
const children_component = [
	['/containercloud/kubernetes/2019-8-30-dashboard.md', 'DashBoard']
]


module.exports = [
	['', '前言'], //读取对应目录下的README.md
	utils.genSidebar('基础介绍', children),  //构建侧边栏分组
	utils.genSidebar('部署指南', children_deploy),  //构建侧边栏分组
	utils.genSidebar('资源对象', children_resourceObject),  //构建侧边栏分组
	utils.genSidebar('资源管理', children_resourceManage),  //构建侧边栏分组
	utils.genSidebar('服务发现', children),  //构建侧边栏分组
	utils.genSidebar('存储卷和数据持久化', volume),  //构建侧边栏分组
	utils.genSidebar('认证授权与准入控制', children_authorication),  //构建侧边栏分组
	utils.genSidebar('网络模型和策略', network),  //构建侧边栏分组
	utils.genSidebar('其他组件', children_component),  //构建侧边栏分组
	utils.genSidebar('Helm包管理器', children),  //构建侧边栏分组
];