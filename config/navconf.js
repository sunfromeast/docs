module.exports = [
	{
		text: 'Java相关',
		items: [
			{
				text: '基础',
				items: [
				{text: 'Java基础', link: '/java/javabase/'},
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
			{text: 'Linux基础', link: '/linux/linuxbase/'}
		]
	},
	{
		text: '容器云相关',
		items: [
			{
				text: 'Kubernetes相关',
				items: [
					{text: 'Docker', link: '/containercloud/docker/'},
					{text: 'Kubernetes', link: '/containercloud/kubernetes/'}
				] 
			}
		]
	},
	{text: '前端相关', link: '/frontend/'},
	{
		text: '源码',
		items: [
			{text: 'SpringBoot源码', link: '/sourcecode/springboot/'}
		]
	},
	{
		text: '工具',
		items: [
			{text: 'vuepress使用', link: '/tools/vuepress/'}
		]
	}
];