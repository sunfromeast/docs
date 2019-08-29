//包含config/utils/index.js引入getSideBar函数
const utils = require('../../../utils/index.js')

const children = [
	'/java/java_base/test1',
	'/java/java_base/test2'
]

module.exports = [
	['', '前言'], //读取对应目录下的README.md
	utils.genSidebar('基础介绍', children),  //构建侧边栏分组
	utils.genSidebar('部署指南', children),  //构建侧边栏分组
	utils.genSidebar('资源对象', children),  //构建侧边栏分组
	utils.genSidebar('资源管理', children),  //构建侧边栏分组
	utils.genSidebar('服务发现', children),  //构建侧边栏分组
	utils.genSidebar('存储卷和数据持久化', children),  //构建侧边栏分组
	utils.genSidebar('认证授权与准入控制', children),  //构建侧边栏分组
	utils.genSidebar('网络模型和策略', children),  //构建侧边栏分组
	utils.genSidebar('其他组件', children),  //构建侧边栏分组
	utils.genSidebar('Helm包管理器', children),  //构建侧边栏分组
];