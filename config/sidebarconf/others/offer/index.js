//包含config/utils/index.js引入getSideBar函数
const utils = require('../../../utils/index.js')

/*const singleton = [
	['/others/offer/2019-11-4-单例模式.md', '面试2：单例模式']
]*/



module.exports = [
	['', '前言'], //读取对应目录下的README.md
	['/others/offer/2019-11-4-单例模式.md', '面试2：单例模式']
//	utils.genSidebar('面试2：单例模式', singleton),  //构建侧边栏分组
];