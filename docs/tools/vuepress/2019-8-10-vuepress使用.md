# Vuepress使用

## 导航栏和侧边栏优化

### 导航栏优化

在`docs/.vuepress/config.js`配置文件中，导航栏的配置类似下面：

```javascript
module.exports = {
	themeConfig: {
		//导航栏配置
		nav: [
		{
			text: 'Java相关',   //导航栏1
			items: [
				{
					text: '基础',   //下拉栏分组1
					items: [
						{text: 'Java基础', link: '/java/java_base/'},
						{text: 'Spring', link: '/java/spring/'},
						{text: 'SpringBoot', link: '/java/springboot/'},
						{text: 'SpringCloud', link: '/java/springcloud/'}
					]
				},
				{
					text: '进阶',   //下拉栏分组2
					items: [
						{text: 'Java虚拟机', link: ''}
					]
				}
			]
		}, 
		{
			text: 'Linux相关',    //导航栏2
			items: [
				{text: 'Linux基础', link: '/linux/linux_base/'}
			]
		},
		{text: 'Kubernetes相关', link: '/kubernetes/'},
		{text: '前端相关', link: '/frontend/'}
		]
	}
}
```

如果分组多了，都配置在`config.js`下的话，维护很困难。所以，将导航栏的配置独立到根目录下的`config/navconf.js`中，然后，在`config.js`中引用独立出来的`navconf.js`即可。

根目录`config/navconf.js`：

```javascript
module.exports = [
	{
		text: 'Java相关',
		items: [
			{
				text: '基础',
				items: [
				{text: 'Java基础', link: '/java/java_base/'},
				{text: 'Spring', link: '/java/spring/'},
				{text: 'SpringBoot', link: '/java/springboot/'},
				{text: 'SpringCloud', link: '/java/springcloud/'}
				]
			},
			{
				text: '进阶',
				items: [
				{text: 'Java虚拟机', link: ''}
				]
			}
		]
	}, 
	{
		text: 'Linux相关',
		items: [
			{text: 'Linux基础', link: '/linux/linux_base/'}
		]
	},
	{text: 'Kubernetes相关', link: '/kubernetes/'},
	{text: '前端相关', link: '/frontend/'}
];
```

### 侧边栏优化

`config.js`中侧边栏的配置类似：

```javascript
module.exports = {
	themeConfig: {
		//侧边栏配置
		sideBar: {
			'/java/java_base/': [
				'', //读取上面目录下的README.md
				{
					title: 'Group1',   //分组
					collapseable: true,   //可折叠
					children: [
						'/java/java_base/test1',  //读取/java/java_base/test1.md文件
						'/java/java_base/test2'
					]
				}
			]
		}
	}
}

```

和导航栏一样，如果要md文章很多，都集中在`config.js`中配置，那就炸了。所以，将侧边栏的配置单独抽取出来。具体做法是：在根目录的`config/sidebarconf/index.js`负责读取所有目录的信息，单个目录通过建立对应的`index.js`文件来管理。

`config/sidebarconf/index.js`如下：

```javascript
// java基础
const java_base = require('./java/java_base/index.js')

/**
 * 侧边栏的配置
 * 当路由深度越深时应当排序在更前方
 * 示例: /frontend 和 /frontend/css
 * 
 * 应当将 /frontend/css 写在更上方
 */
module.exports = {
  // java基础
  '/java/java_base/': java_base,

  // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
  // '/': [''] // 此处选择禁用
};
```

`./java/java_base/index.js`如下：

```javascript
const utils = require('../../../utils/index.js')

const children = [
	'/java/java_base/test1',
	'/java/java_base/test2'
]

module.exports = [
	'', //读取对应目录下的README.md
	utils.genSidebar('Java基础', children),  //构建侧边栏分组
];
```

侧边栏分组抽取成一个函数，根目录下`config/utils/index.js`：

```javascript
const utils = {
  genSidebar: function (title, children = [''], collapsable = true) {
    return {
      title,
      collapsable,
      children
    }
  }
};

module.exports = utils;
```

**总结：**

1. 新增导航栏，只需要在根目录`config/navconf.js`中修改即可。
2. 新增侧边栏。先要建立对应目录的`index.js`文件，然后，将单个目录的`index.js`在`config/sidebarconf/index.js`中引用即可