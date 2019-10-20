const utils = require('../../../utils/index.js')

const children = [
]


const children_base = [
	['/java/springboot/2019-10-9-自定义注解.md', '自定义注解']
]

const originSource = [
	['/java/springboot/SpringApplication初始化阶段.md', 'SpringApplication初始化阶段']
]
module.exports = [
	['', '前言'], //读取对应目录下的README.md
	utils.genSidebar('基础', children_base) , //构建侧边栏分组
	utils.genSidebar('源码解析', originSource)
];