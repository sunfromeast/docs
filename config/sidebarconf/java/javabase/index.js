const utils = require('../../../utils/index.js')

const children = [
//	'/java/java_base/test1',
//	'/java/java_base/test2'
]


children_reflect = [
	['/java/javabase/2019-10-31-反射.md', '反射']
]
module.exports = [
	['', '前言'], //读取对应目录下的README.md
	utils.genSidebar('反射', children_reflect),  //构建侧边栏分组
];