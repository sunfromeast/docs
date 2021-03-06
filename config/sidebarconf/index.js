// 
const java_base = require('./java/javabase/index.js');
const springboot = require('./java/springboot/index.js');
const linuxbase = require('./linux/linuxbase/index.js')
const vuepress = require('./tools/vuepress/index.js');
const kubernetes = require('./containercloud/kubernetes/index.js')
const sourcecode_springboot = require('./sourcecode/springboot/index.js')
const offer = require('./others/offer/index.js')
/**
 * 侧边栏的配置
 * 当路由深度越深时应当排序在更前方
 * 示例: /frontend 和 /frontend/css
 * 
 * 应当将 /frontend/css 写在更上方
 */
module.exports = {
  // java基础
  '/java/javabase/': java_base,
  //springboot
  '/java/springboot/': springboot,
  //linux基础
  '/linux/linuxbase/': linuxbase,
  // 容器云
  '/containercloud/kubernetes/': kubernetes,
  //工具
  '/tools/vuepress': vuepress,
  //源码
  '/sourcecode/springboot/': sourcecode_springboot,
  //others
  '/others/offer/': offer
  // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
  // '/': [''] // 此处选择禁用
};
