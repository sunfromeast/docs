(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{259:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"使用openssl生成自签名证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用openssl生成自签名证书","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用openssl生成自签名证书")]),s._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v(" 1 生成根秘钥")]),s._v("\n$ openssl genrsa -out ca.key 2048\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v(" 2 创建证书签名请求（csr）")]),s._v("\n$ openssl req -new -key ca.key -out ca.csr -sub='/CN=192.168.144.3'\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v(" 3 签署自己的证书")]),s._v("\n$ oepnssl x509 -req -days 3650 -in ca.csr -signkey ca.key -out ca.crt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])},[],!1,null,null,null);t.default=e.exports}}]);