const utils = require('../../../utils/index.js')

const children = [
//	'/java/java_base/test1',
//	'/java/java_base/test2'
]

const initialization = [
	['/sourcecode/springboot/2019-10-20-SpringApplication初始化阶段-构造阶段.md', '构造阶段'],
	['/sourcecode/springboot/2019-10-20-SpringApplication初始化阶段-配置阶段.md', '配置阶段'],

]

const running_stage = [
	['/sourcecode/springboot/2019-10-22-SpringApplication准备阶段.md', '准备阶段'],
	['/sourcecode/springboot/2019-10-22-理解SpringApplicationRunListeners.md', 'SpringApplicationRunListener'],
]
module.exports = [
	['', '前言'], //读取对应目录下的README.md
//	utils.genSidebar('Java基础', children),  //构建侧边栏分组
	utils.genSidebar('SpringApplication初始化阶段', initialization),  //构建侧边栏分组
	utils.genSidebar('SpringApplication运行阶段', running_stage)  //构建侧边栏分组
];