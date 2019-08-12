const utils = require('../../../utils/index.js')

const children = [
	'/java/java_base/test1',
	'/java/java_base/test2'
]

module.exports = [
	'', //读取对应目录下的README.md
	utils.genSidebar('Java基础', children),  //构建侧边栏分组
];