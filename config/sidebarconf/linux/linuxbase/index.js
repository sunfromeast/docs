const utils = require('../../../utils/index.js')

const children = [
]

//shell部分
const children_shell = [
	['/linux/linuxbase/2019-9-2-管道命令.md', '管道命令'],
	['/linux/linuxbase/2019-9-4-正则表达式.md', '正则表达式']
]
//工具总结
const children_tools = [
	['/linux/linuxbase/2019-8-29-openssl.md', 'openssl']
]
module.exports = [
	['', '前言'], //读取对应目录下的README.md
	utils.genSidebar('shell和shell script', children_shell),  //构建侧边栏分组
	utils.genSidebar('工具总结', children_tools)  //构建侧边栏分组
];