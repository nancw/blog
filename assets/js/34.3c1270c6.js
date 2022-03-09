(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{830:function(s,a,n){"use strict";n.r(a);var t=n(12),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#_1、进程管理"}},[s._v("1、进程管理")])]),n("li",[n("a",{attrs:{href:"#_2、防火墙命令"}},[s._v("2、防火墙命令")])]),n("li",[n("a",{attrs:{href:"#_3、端口查看"}},[s._v("3、端口查看")])])])]),n("p"),s._v(" "),n("h2",{attrs:{id:"_1、进程管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、进程管理"}},[s._v("#")]),s._v(" 1、进程管理")]),s._v(" "),n("p",[n("a",{attrs:{href:"http://c.biancheng.net/view/1061.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考链接"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"_1-1-查看进程-ps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-查看进程-ps"}},[s._v("#")]),s._v(" 1.1 查看进程 ps")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可以查看系统中所有的进程；")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -le "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可以查看系统中所有的进程，而且还能看到进程的父进程的 PID 和进程优先级；")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -l "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只能看到当前 Shell 产生的进程；")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_1-2-查看进程树-pstree"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-查看进程树-pstree"}},[s._v("#")]),s._v(" 1.2 查看进程树 pstree")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看进程树")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -a\t显示启动每个进程对应的完整指令，包括启动进程的路径、参数等。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -c\t不使用精简法显示进程信息，即显示的进程中包含子进程和父进程。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -n\t根据进程 PID 号来排序输出，默认是以程序名排序输出的。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p\t显示进程的 PID。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -u\t显示进程对应的用户名称")]),s._v("\npstree "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PID或用户名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"_1-3-列出进程调用和文件信息-lsof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-列出进程调用和文件信息-lsof"}},[s._v("#")]),s._v(" 1.3 列出进程调用和文件信息 lsof")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -c 字符串\t只列出以字符串开头的进程打开的文件。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# +d 目录名\t列出某个目录中所有被进程调用的文件。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -u 用户名\t只列出某个用户的进程打开的文件。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p pid\t列出某个 PID 进程打开的文件。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询系统中所有进程调用的文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" /sbin/init "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询某个文件被哪个进程调用")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" +d /usr/lib "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询某个目录下所有的文件是被哪些进程调用的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -c httpd "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看以httpd开头的进程调用了哪些文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询PID是1的进程调用的文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -u root "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#按照用户名查询某个用户的进程调用的文件")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -al /proc/3793 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询进程所在文件位置")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"_1-4-调整进程优先级-nice、renice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-调整进程优先级-nice、renice"}},[s._v("#")]),s._v(" 1.4 调整进程优先级 nice、renice")]),s._v(" "),n("p",[s._v("调整进程优先级，每个进程都有一个介于 -20 到 19 之间的 nice 值。默认情况下，进程的 nice 值为 0。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nice可以给要启动的进程赋予 NI 值，但是不能修改已运行进程的 NI 值")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -n NI值：给命令赋予 NI 值，该值的范围为 -20~19")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nice")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-n NI值"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 命令\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# renice 命令可以在进程运行时修改其 NI 值，从而调整优先级")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("renice")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("优先级"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" PID\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_1-5-终止进程-kill、killall"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-终止进程-kill、killall"}},[s._v("#")]),s._v(" 1.5 终止进程 kill、killall")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 终止进程")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0\t EXIT \t程序退出时收到该信息。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1\t HUP\t挂掉电话线或终端连接的挂起信号，这个信号也会造成某些进程在没有终止的情况下重新初始化。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 2\t INT\t表示结束进程，但并不是强制性的，常用的 "Ctrl+C" 组合键发出就是一个 kill -2 的信号。')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3\t QUIT\t退出。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 9\t KILL\t杀死进程，即强制结束进程。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 11 SEGV \t段错误。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 15 TERM\t正常结束进程，是 kill 命令的默认信号。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("信号"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" PID\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过程序的进程名来杀死一类进程")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i：交互式，询问是否要杀死某个进程；")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -I：忽略进程名的大小写；")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("信号"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 进程名\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"_1-6-命令放在后台运行的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-命令放在后台运行的方法"}},[s._v("#")]),s._v(" 1.6 命令放在后台运行的方法 &")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把命令放入后台执行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注，放入后台执行的命令不能与前台有交互，否则这个命令是不能在后台执行的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("命令"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_1-7-查看当前终端放入后台的工作-jobs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-查看当前终端放入后台的工作-jobs"}},[s._v("#")]),s._v(" 1.7 查看当前终端放入后台的工作 jobs")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -l\t列出进程的 PID 号。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -n\t只列出上次发出通知后改变了状态的进程。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -p\t只列出进程的 PID 号。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -r\t只列出运行中的进程。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -s\t只列出已停止的进程。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_1-8-后台命令脱离终端运行-nohup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-后台命令脱离终端运行-nohup"}},[s._v("#")]),s._v(" 1.8 后台命令脱离终端运行 nohup")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nohup 命令的作用就是让后台工作在离开操作终端时，也能够正确地在后台执行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("命令"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"_2、防火墙命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、防火墙命令"}},[s._v("#")]),s._v(" 2、防火墙命令")]),s._v(" "),n("h3",{attrs:{id:"_2-1-centos6-iptables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-centos6-iptables"}},[s._v("#")]),s._v(" 2.1 centos6 - iptables")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启防护墙")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables start\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭防火墙")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables stop\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看防火墙状态")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables status\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启防火墙")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables restart\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#永久关闭防护墙")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" iptables off\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#永久关闭后启用")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" iptables on\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭所有80端口")]),s._v("\niptables -I INPUT -p tcp --dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -j DROP\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启ip段192.168.1.0/24端的80口")]),s._v("\niptables -I INPUT -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/24 -p tcp --dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -j ACCEPT\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#多个端口")]),s._v("\niptables -A Filter -p tcp -m multiport --destination-port "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22,53")]),s._v(",80 -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".20.3 -j REJECT\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#iptables 限制ip访问")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通过iptables限制9889端口的访问（只允许192.168.1.201、192.168.1.202、192.168.1.203）,其他ip都禁止访问")]),s._v("\niptables -I INPUT -p tcp --dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9889")]),s._v(" -j DROP\niptables -I INPUT -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.201 -p tcp --dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9889")]),s._v(" -j ACCEPT\niptables -I INPUT -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.202 -p tcp --dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9889")]),s._v(" -j ACCEPT\niptables -I INPUT -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.203 -p tcp --dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9889")]),s._v(" -j ACCEPT \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#注意命令的顺序不能反了")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("h3",{attrs:{id:"_2-2-centos7-firewal"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-centos7-firewal"}},[s._v("#")]),s._v(" 2.2 centos7 - firewal")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启防火墙")]),s._v("\nsystemctl start firewalld \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭防火墙")]),s._v("\nsystemctl stop firewalld \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看防火墙状态")]),s._v("\nsystemctl status firewalld\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置开机启动")]),s._v("\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" firewalld \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁止开机启动")]),s._v("\nsystemctl disable firewalld \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启防火墙")]),s._v("\nfirewall-cmd --reload \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看开放端口")]),s._v("\nfirewall-cmd --list-ports\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示当前firewall规则")]),s._v("\nfirewall-cmd --list-all\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开放端口")]),s._v("\nfirewall-cmd --zone"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp --permanent \nfirewall-cmd --permanent --add-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭端口")]),s._v("\nfirewall-cmd --zone"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --remove-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp --permanent\nfirewall-cmd --permanent --remove-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开放192.168.1.1单个源IP的访问")]),s._v("\nfirewall-cmd --permanent --add-source"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开放192.168.1.0/24整个源IP段的访问")]),s._v("\nfirewall-cmd --permanent --add-source"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.0/24\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#移除规则")]),s._v("\nfirewall-cmd --permanent --remove-source"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开放http服务")]),s._v("\nfirewall-cmd --permanent --add-service"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除上述规则")]),s._v("\nfirewall-cmd --permanent --remove-service"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许指定IP访问本机8080端口")]),s._v("\nfirewall-cmd --permanent --add-rich-rule"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'rule family="ipv4" source address="192.168.1.1" port protocol="tcp" port="8080" accept\'')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许指定IP段访问本机8080-8090端口")]),s._v("\nfirewall-cmd --permanent --add-rich-rule"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'rule family="ipv4" source address="192.168.1.0/24" port protocol="tcp" port="8080-8090" accept\'')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止指定IP访问本机8080端口")]),s._v("\nfirewall-cmd --permanent --add-rich-rule"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'rule family="ipv4" source address="192.168.1.1" port protocol="tcp" port="8080" reject\'')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br")])]),n("h3",{attrs:{id:"_2-3-ubuntu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-ubuntu"}},[s._v("#")]),s._v(" 2.3 ubuntu")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#打开防火墙")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭防火墙")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw disable \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看防火墙状态")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw disable \n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw allow "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许外部访问80端口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw delete allow "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁止外部访问80 端口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw allow from "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.1 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许此IP访问所有的本机端口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw deny smtp              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁止外部访问smtp服务 ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw delete allow           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#smtp 删除上面建立的某条规则")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#拒绝所有的TCP流量从10.0.0.0/8 到192.168.0.1地址的22端口")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw deny proto tcp from "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.0/8 to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.1 port "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可以允许所有RFC1918网络（局域网/无线局域网的）访问这个主机（/8,/16,/12是一种网络分级）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw allow from "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),s._v(".0.0/8\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw allow from "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".0.0/12\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw allow from "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.0/16\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h2",{attrs:{id:"_3、端口查看"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、端口查看"}},[s._v("#")]),s._v(" 3、端口查看")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ntulp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4443")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);