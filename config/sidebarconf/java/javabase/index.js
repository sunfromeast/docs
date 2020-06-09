const utils = require('../../../utils/index.js')

const children = [
//	'/java/java_base/test1',
//	'/java/java_base/test2'
]


children_reflect = [
	['/java/javabase/2019-10-31-反射.md', '反射']
]
children_interface = [
	['/java/javabase/2020-6-7-接口.md', '接口基础']
]

children_proxy = [
	['/java/javabase/2020-6-9-java静态代理和动态代理.md','静态代理和动态代理']
]
module.exports = [
	['', '前言'], //读取对应目录下的README.md
	utils.genSidebar('反射', children_reflect),  //构建侧边栏分组
	utils.genSidebar('接口', children_interface),  //构建侧边栏分组
	utils.genSidebar('代理相关', children_proxy),  //构建侧边栏分组
];