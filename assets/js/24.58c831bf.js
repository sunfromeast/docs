(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{255:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"daemonset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#daemonset","aria-hidden":"true"}},[s._v("#")]),s._v(" DaemonSet")]),s._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[s._v("DaemonSet的作用是：在k8s集群的每一个节点上都创建一个Daemon Pod实例。有新的Node加入集群时，该Pod会自动在新节点上创建出来；旧节点删除时，上面的Pod会自动删除。")]),s._v(" "),t("h2",{attrs:{id:"yaml文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yaml文件","aria-hidden":"true"}},[s._v("#")]),s._v(" Yaml文件")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" DaemonSet\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fluentd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("elasticsearch\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("system\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("k8s-app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fluentd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("logging\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matchLabels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fluentd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("elasticsearch\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fluentd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("elasticsearch\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tolerations")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("role.kubernetes.io/master\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("effect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" NoSchedule\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fluentd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("elasticsearch\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" k8s.gcr.io/fluentd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("elasticsearch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.20")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("limits")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200Mi\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("requests")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cpu")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100m\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("memory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200Mi\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumeMounts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" varlog\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mountPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /var/log\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" varlibdockercontainers\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mountPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /var/lib/docker/containers\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("readOnly")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("terminationGracePeriodSeconds")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" varlog\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hostPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /var/log\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" varlibdockercontainers\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hostPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /var/lib/docker/containers\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br")])]),t("p",[s._v("Yaml文件和Deployment控制器的yaml文件很像。")]),s._v(" "),t("h2",{attrs:{id:"原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),t("p",[t("font",{attrs:{color:"red"}},[s._v("1. DaemonSet怎么保证每个Node上有且只有一个被管理的Pod？")])],1),s._v(" "),t("blockquote",[t("p",[s._v("DaemonSet有一个控制循环在不断检查，可能的结果有：")]),s._v(" "),t("ol",[t("li",[s._v("没有这种pod，就创建新的pod")]),s._v(" "),t("li",[s._v("有这种pod，但数量大于1，多余的pod删除，只保留一个")]),s._v(" "),t("li",[s._v("正好只有一个这种pod，正常，什么都不做。")])])]),s._v(" "),t("p",[t("font",{attrs:{color:"red"}},[s._v("2. 怎么在指定Node上创建pod？")])],1),s._v(" "),t("p",[s._v("之前可以使用下面方式指定")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nodeSelector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nodename\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("nodeSelector这个字段现在已经废弃了，使用功能更完善的nodeAffinity来代替")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pod\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" with"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("affinity\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("affinity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nodeAffinity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("requiredDuringSchedulingIgnoredDuringExecution")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  //每次调度时考虑\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nodeSelectorTerms")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matchExpressions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" metadata.name\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" In\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("geektime\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("DaemonSet Controller在创建Pod的时候，会自动在Pod对象里，加上这样一个nodeAffinity定义。")]),s._v(" "),t("p",[t("font",{attrs:{color:"red"}},[s._v("3. 怎么调度Pod到master节点上？")])],1),s._v(" "),t("p",[s._v("master一般是不能运行pod的，那么，daemon pod要怎么做才能运行在master节点上呢？DaemonSet在创建pod时会自动给pod添加一个与调度有关的字段"),t("font",{attrs:{color:"lsdf"}},[s._v("tolerations")]),s._v("。这个字段意思是：这个pod会容忍某些Node上的“污点”（Taint）。")],1),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pod\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" with"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("toleration\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tolerations")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node.kubernetes.io/unschedulable\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Exists\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("effect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" NoSchedule\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("上述配置，pod将会忽略标记了unschedulable污点的pod。")])])},[],!1,null,null,null);a.default=e.exports}}]);