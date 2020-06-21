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

//异常
children_exception = [
	['/java/javabase/2020-6-10-异常、断言、日志.md', '异常、断言、日志']
]

//集合
children_collection = [
	['/java/javabase/2020-6-11-ArrayList源码解析.md', 'ArrayList源码解读'],
	['/java/javabase/2020-6-12-LinkedList源码解析.md', "LinkedList源码解读"],
	['/java/javabase/2020-6-12-HashSet源码解析.md', 'HashSet源码解读'],
	['/java/javabase/2020-6-12-TreeSet源码解析.md', 'TreeSet源码解读'],
	['/java/javabase/2020-6-13-HashMap源码分析（jdk1.7）.md', 'HashMap(jdk1.7)源码解读'],
	['/java/javabase/2020-6-13-HashMap源码解析（jdk1.8）.md', 'HashMap(jdk1.8)源码解读'],
	['/java/javabase/2020-6-16-LinkedHashMap（jdk1.8）源码分析.md', 'LinkedHashMap(jdk1.8)源码解读'],
	['/java/javabase/2020-6-17-TreeMap（jdk1.8)源码解析.md', 'TreeMap(jdk1.8)源码解读'],
	['/java/javabase/2020-6-17-ConcurrentHashMap（jdk1.7）源码解读.md', 'ConcurrentHashMap(jdk1.7)源码解读'],
	['/java/javabase/2020-6-20-ConcurrentHashMap(jdk1.8)源码分析.md', 'ConcurrentHashMap(jdk1.8)源码解读']
]
module.exports = [
	['', '前言'], //读取对应目录下的README.md
	utils.genSidebar('反射', children_reflect),  //构建侧边栏分组
	utils.genSidebar('接口', children_interface),  //构建侧边栏分组
	utils.genSidebar('代理相关', children_proxy),  //构建侧边栏分组
	utils.genSidebar('异常相关', children_exception),
	utils.genSidebar('集合及源码', children_collection),
];