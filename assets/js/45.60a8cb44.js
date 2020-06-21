(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{230:function(a,s,e){"use strict";e.r(s);var n=e(0),t=Object(n.a)({},function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"截取命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#截取命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 截取命令")]),a._v(" "),e("h3",{attrs:{id:"cut"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cut","aria-hidden":"true"}},[a._v("#")]),a._v(" cut")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("//cut使用格式，cut处理的是行级数据\n$ cut -d '分割字符' -f fields\n$ cut -c 字符范围\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("blockquote",[e("p",[a._v("其中：")]),a._v(" "),e("p",[a._v("-d ,-f：一起使用")]),a._v(" "),e("p",[a._v("-f：选出第几段")]),a._v(" "),e("p",[a._v("-c： 以字符的单位选出固定区间")])]),a._v(" "),e("p",[a._v("使用示例：")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v('$ echo $PATH\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin\n\n$ echo $PATH | cut -d \':\' -f2\n/usr/local/bin\n\n$ echo $PATH | cut -d \':\' -f2,3\n/usr/local/bin:/usr/sbin\n\n$ export\ndeclare -x HISTCONTROL="ignoredups"\ndeclare -x HISTSIZE="1000"\ndeclare -x HOME="/root"\ndeclare -x HOSTNAME="k8s-master"\ndeclare -x LANG="en_US.UTF-8"\ndeclare -x LESSOPEN="||/usr/bin/lesspipe.sh %s"\ndeclare -x LOGNAME="root"\n\n$ export | cut -c 12-\nHISTCONTROL="ignoredups"\nHISTSIZE="1000"\nHOME="/root"\nHOSTNAME="k8s-master"\nLANG="en_US.UTF-8"\nLESSOPEN="||/usr/bin/lesspipe.sh %s"\nLOGNAME="root"\n\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br")])]),e("h3",{attrs:{id:"grep"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grep","aria-hidden":"true"}},[a._v("#")]),a._v(" grep")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("$ grep "),e("span",{pre:!0,attrs:{class:"token url"}},[a._v("["),e("span",{pre:!0,attrs:{class:"token content"}},[a._v("-acinv")]),a._v("] ["),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("--color=auto")]),a._v("]")]),a._v(" '查找的字符串' filename\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("其中：")]),a._v(" "),e("p",[a._v("-a：二进制文件以text文件方式查找数据")]),a._v(" "),e("p",[a._v("-c：统计找到“查找的字符串”的次数")]),a._v(" "),e("p",[a._v("-i：忽略大小写")]),a._v(" "),e("p",[a._v("-n：输出行号")]),a._v(" "),e("p",[a._v("-v：反向选择，显示出没有“查找的字符串”")])]),a._v(" "),e("h2",{attrs:{id:"排序命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排序命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 排序命令")]),a._v(" "),e("h3",{attrs:{id:"sort"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sort","aria-hidden":"true"}},[a._v("#")]),a._v(" sort")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("$ sort "),e("span",{pre:!0,attrs:{class:"token url"}},[a._v("["),e("span",{pre:!0,attrs:{class:"token content"}},[a._v("-fbMnrtuk")]),a._v("] ["),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("file or stdin")]),a._v("]")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("其中：")]),a._v(" "),e("p",[a._v("-f：忽略大小写")]),a._v(" "),e("p",[a._v("-b：忽略最前面的空格")]),a._v(" "),e("p",[a._v("-M：以月份排序")]),a._v(" "),e("p",[a._v("-n：纯数字排序")]),a._v(" "),e("p",[a._v("-r：反向排序")]),a._v(" "),e("p",[a._v("-u：行唯一")]),a._v(" "),e("p",[a._v("-t：分割符，默认Tab分割")]),a._v(" "),e("p",[a._v("-k：哪个区间排序")])]),a._v(" "),e("p",[a._v("使用示例：")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("//对/etc/passwd按:分割以第三列来排序\n$ cat /etc/passwd | sort -t ':' -k 3\n\n//输出的数据仅去账号\n$ last | cut -d ' ' -f1 | sort\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h3",{attrs:{id:"uniq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uniq","aria-hidden":"true"}},[a._v("#")]),a._v(" uniq")]),a._v(" "),e("p",[a._v("重复的数据只显示一个")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("$ uniq [-ic]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("​\t其中：")]),a._v(" "),e("p",[a._v("-i：忽略大小写")]),a._v(" "),e("p",[a._v("-c：计数")])]),a._v(" "),e("p",[a._v("使用示例：")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("//last列出账号列，排序，重复的仅取一个\n$ last | cut -d ' ' -f1 | sort | uniq\n\n//承上例，计数\n$ last | cut -d ' ' -f1 | sort | uniq -c\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h3",{attrs:{id:"wc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wc","aria-hidden":"true"}},[a._v("#")]),a._v(" wc")]),a._v(" "),e("p",[a._v("计数，统计文件有多少字、行、字符")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("$ wx [-lwm]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("其中：")]),a._v(" "),e("p",[a._v("-w：仅列出字")]),a._v(" "),e("p",[a._v("-l：仅列出行")]),a._v(" "),e("p",[a._v("-m：仅列出字符")])]),a._v(" "),e("p",[a._v("使用示例：")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("$ cat /etc/passwd | wc\n24      36    1099\n分别代表：行，字，字符数\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h2",{attrs:{id:"双向重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双向重定向","aria-hidden":"true"}},[a._v("#")]),a._v(" 双向重定向")]),a._v(" "),e("h3",{attrs:{id:"tee"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tee","aria-hidden":"true"}},[a._v("#")]),a._v(" tee")]),a._v(" "),e("p",[a._v("数据流输出到标准输出的同时，也可以保存到文件中做后续分析")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("$ tee [-a] file\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("其中：")]),a._v(" "),e("p",[a._v("-a：内容在file后面累加")])]),a._v(" "),e("p",[a._v("使用示例：")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("//last输出到last.list文件中，同时，在屏幕显示第一列\n$ last | tee last.list | cut -d ' ' -f1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"字符转换命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符转换命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 字符转换命令")]),a._v(" "),e("h3",{attrs:{id:"tr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tr","aria-hidden":"true"}},[a._v("#")]),a._v(" tr")]),a._v(" "),e("p",[a._v("删除或者替换一段信息中的文字")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("$ tr [-ds] SET1 ...\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("其中：")]),a._v(" "),e("p",[a._v("-d：删除信息当中的SET1字符串")]),a._v(" "),e("p",[a._v("-s：替换重复的字符")])]),a._v(" "),e("p",[a._v("使用示例：")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("//将/etc/passwd中所有的:删除\n$ cat /etc/passwd | tr -d ':'\n\n//将/etc/passwd中所有的小写字母大写\n$ cat /etc/passwd | tr -s "),e("span",{pre:!0,attrs:{class:"token url"}},[a._v("["),e("span",{pre:!0,attrs:{class:"token content"}},[a._v("a-z")]),a._v("] ["),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("A-Z")]),a._v("]")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h3",{attrs:{id:"col"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#col","aria-hidden":"true"}},[a._v("#")]),a._v(" col")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("$ col [-xb]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("其中：")]),a._v(" "),e("p",[a._v("-x：将tab键转换为对等的空格")]),a._v(" "),e("p",[a._v("-b：文字内有反斜杠，保留反斜杠最后接的字符")])]),a._v(" "),e("h2",{attrs:{id:"切割命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切割命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 切割命令")]),a._v(" "),e("h3",{attrs:{id:"split"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#split","aria-hidden":"true"}},[a._v("#")]),a._v(" split")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("$ split  [-bl] file PREFIX\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("其中：")]),a._v(" "),e("p",[a._v("-b：切割成的文件的大小，可加单位：b、k、m等")]),a._v(" "),e("p",[a._v("-l：以行进行切割")]),a._v(" "),e("p",[a._v("PREFIX：生成的切割文件的前缀")])]),a._v(" "),e("p",[a._v("使用示例：")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("$ split -b 300k /etc/passwd passwd\n\n//合并\n$ cat passwd* >> passwdback\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h2",{attrs:{id:"参数代换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数代换","aria-hidden":"true"}},[a._v("#")]),a._v(" 参数代换")]),a._v(" "),e("h3",{attrs:{id:"xargs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xargs","aria-hidden":"true"}},[a._v("#")]),a._v(" xargs")]),a._v(" "),e("p",[a._v("xargs接收管道符之前的输出，然后，将其默认按空格分隔，分隔后的数据作为xargs后命令的参数。")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("xargs [-epnd] command\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("blockquote",[e("p",[a._v("其中：")]),a._v(" "),e("p",[a._v("-e：EOF，结束字符串")]),a._v(" "),e("p",[a._v("-p：执行命令时，询问用户")]),a._v(" "),e("p",[a._v("-n：每次传入几个参数")]),a._v(" "),e("p",[a._v("-d：分隔符，将接收的字符串按指定分隔符分开")])]),a._v(" "),e("p",[a._v("相关链接：")]),a._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/wangqiguo/p/6464234.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("xargs命令详解，xargs与管道的区别"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"减号-用途"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#减号-用途","aria-hidden":"true"}},[a._v("#")]),a._v(" 减号-用途")]),a._v(" "),e("p",[a._v("替换stdin和stdout")]),a._v(" "),e("div",{staticClass:"language-markdown line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[a._v("//将/home中的文件打包传输到stdout，然后，经过管道，从stdin读取解压缩\n$ tar -cvf - /home | tar -xvf -\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])])])},[],!1,null,null,null);s.default=t.exports}}]);