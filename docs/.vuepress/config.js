const navconf = require('../../config/navconf.js')
const sidebarconf = require('../../config/sidebarconf/index.js')

module.exports = {
  title: 'YGTAO',
  description: '非学无以广才，非志无以成学',
  base: '/docs/',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-145385969-1' // UA-00000000-0
      }
    ]
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    sidebarDepth: 2,
    nav: navconf,
    sidebar: sidebarconf,
    repo: 'sunfromeast/docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑文档',
    serviceWorker: {
      updatePopup: { 
         message: "有内容更新！", 
         buttonText: "刷新" 
      }
    }
  }
}
