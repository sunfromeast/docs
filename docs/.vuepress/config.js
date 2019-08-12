const navconf = require('../../config/navconf.js')
const sidebarconf = require('../../config/sidebarconf/index.js')

module.exports = {
  title: 'YGTAO',
  description: '非学无以广才，非志无以成学',
  base: '/docs/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    lastUpdated: '上次更新',
    sidebarDepth: 2,
    nav: navconf,
    sidebar: sidebarconf,
    repo: 'sunfromeast/docs',
    editLinks: true,
    editLinkText: '编辑文档',
    docsDir: 'docs',
  }
}
