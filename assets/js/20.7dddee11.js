(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{621:function(t,a,s){t.exports=s.p+"assets/img/image-20211015102342328.b28354cc.png"},622:function(t,a,s){t.exports=s.p+"assets/img/image-20211104170446099.bc09bf58.png"},623:function(t,a,s){t.exports=s.p+"assets/img/image-20211104172451365.c7b0f71a.png"},624:function(t,a,s){t.exports=s.p+"assets/img/image-20211104170654919.426e8b0f.png"},625:function(t,a,s){t.exports=s.p+"assets/img/image-20211104173029708.03068537.png"},626:function(t,a,s){t.exports=s.p+"assets/img/image-20211104173116233.b9414bda.png"},627:function(t,a,s){t.exports=s.p+"assets/img/image-20211104173452310.872ff394.png"},844:function(t,a,s){"use strict";s.r(a);var v=s(12),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"结构化开发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结构化开发"}},[t._v("#")]),t._v(" 结构化开发")]),t._v(" "),v("p",[t._v("物理模型->逻辑模型")]),t._v(" "),v("h2",{attrs:{id:"系统设计基本原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#系统设计基本原理"}},[t._v("#")]),t._v(" 系统设计基本原理")]),t._v(" "),v("p",[t._v("抽象、模块化、信息隐蔽、模块独立")]),t._v(" "),v("h3",{attrs:{id:"模块独立"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模块独立"}},[t._v("#")]),t._v(" 模块独立")]),t._v(" "),v("h4",{attrs:{id:"耦合度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#耦合度"}},[t._v("#")]),t._v(" 耦合度")]),t._v(" "),v("p",[t._v("耦合描述的是模块之间联系的紧密程度。  如下图，耦合度从低到高排序")]),t._v(" "),v("p",[v("img",{attrs:{src:s(621),alt:"image-20211015102342328"}})]),t._v(" "),v("h4",{attrs:{id:"内聚"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内聚"}},[t._v("#")]),t._v(" 内聚")]),t._v(" "),v("p",[t._v("模块内部元素之间的紧密程度，从内聚性高->低，功能单一从强->弱：")]),t._v(" "),v("p",[t._v("① 功能内聚: 完成一个单一功能，各个部分协同工作，缺一不可。\n② 顺序内聚: 处理元素相关,而且必须顺序执行。\n③ 通信内聚: 所有处理元素集中在一个数据结构的区域上。\n④ 过程内聚: 处理元素相关,而且必须按特定的次序执行。\n⑤ 瞬时内聚: 所包含的任务必须在同一时间间隔内执行(如初始化模块)。\n⑥ 逻辑内聚: 完成逻辑上相关的一组任务。\n⑦ 偶然内聚: 完成一组没有关系或松散关系的任务。\n⑧ 巧合内聚: 就是偶然内聚，由于内容不相关，所以必然导致它与外界多个模块有关联，使得模块间耦合度增加。")]),t._v(" "),v("h2",{attrs:{id:"系统总体结构设计原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#系统总体结构设计原则"}},[t._v("#")]),t._v(" 系统总体结构设计原则")]),t._v(" "),v("p",[t._v("分解-协调原则、自顶向下原则、信息隐蔽抽象原则、一致性原则（统一规范、统一标准）、明确性原则（模块功能明确、接口明确）、模块之间耦合尽可能小、模块扇入扇出系数要合理、模块规模适当。")]),t._v(" "),v("h2",{attrs:{id:"系统模块结构设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#系统模块结构设计"}},[t._v("#")]),t._v(" 系统模块结构设计")]),t._v(" "),v("p",[t._v("模块具备四要素")]),t._v(" "),v("ul",[v("li",[t._v("输入输出、处理功能（模块把输入转输出）、内部数据（模块本身引用数据）、程序代码（用来实现模块功能的程序）")])]),t._v(" "),v("h3",{attrs:{id:"模块结构图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模块结构图"}},[t._v("#")]),t._v(" 模块结构图")]),t._v(" "),v("ul",[v("li",[v("img",{attrs:{src:s(622),alt:"image-20211104170446099"}})])]),t._v(" "),v("h2",{attrs:{id:"结构化分析方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结构化分析方法"}},[t._v("#")]),t._v(" 结构化分析方法")]),t._v(" "),v("p",[v("strong",[t._v("指导思想")]),t._v("：自顶向下、逐层分解；")]),t._v(" "),v("p",[v("strong",[t._v("基本原则")]),t._v("：功能的分解和抽象；")]),t._v(" "),v("p",[v("code",[t._v("DFD")]),t._v("数据流图")]),t._v(" "),v("ul",[v("li",[t._v("描述软件与外部环境之间的交互关系，以及软件内模块之间的调用关系；")]),t._v(" "),v("li",[v("img",{attrs:{src:s(623),alt:"image-20211104172451365"}})]),t._v(" "),v("li",[v("img",{attrs:{src:s(624),alt:"image-20211104170654919"}})])]),t._v(" "),v("p",[v("code",[t._v("ERD")]),t._v("实体关系图")]),t._v(" "),v("h3",{attrs:{id:"数据字典dd"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据字典dd"}},[t._v("#")]),t._v(" 数据字典DD")]),t._v(" "),v("h3",{attrs:{id:"加工逻辑的描述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加工逻辑的描述"}},[t._v("#")]),t._v(" 加工逻辑的描述")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("结构化语言")]),t._v(" "),v("ul",[v("li",[v("img",{attrs:{src:s(625),alt:"image-20211104173029708"}})])])]),t._v(" "),v("li",[v("p",[t._v("判定表")]),t._v(" "),v("ul",[v("li",[v("img",{attrs:{src:s(626),alt:"image-20211104173116233"}})])])]),t._v(" "),v("li",[v("p",[t._v("判定树")]),t._v(" "),v("ul",[v("li",[t._v("判定表的变形")])])])]),t._v(" "),v("h2",{attrs:{id:"结构化设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结构化设计"}},[t._v("#")]),t._v(" "),v("strong",[t._v("结构化设计")])]),t._v(" "),v("h3",{attrs:{id:"步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),v("ul",[v("li",[t._v("建立初始结构图、对结构图进行改进、书写设计文档、设计评审")])]),t._v(" "),v("h3",{attrs:{id:"划分模块遵守原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#划分模块遵守原则"}},[t._v("#")]),t._v(" "),v("strong",[t._v("划分模块遵守原则")])]),t._v(" "),v("ul",[v("li",[t._v("① 模块的大小要适中。系统分解时需要考虑模块的规模，过大的模块可能导致系统分解不充分，其内部可能包括不同类型的功能，需要进一步划分，尽量使得各个模块的功能单一;过小的模块将导致系统的复杂度增加，模块之间的调用过于频繁，反而降低了模块的独立性。一般来说，一个模块的大小是其实现代码为1~2页纸，或者其实现代码行数为50~200行，这种规模的模块易于实现和维护。")]),t._v(" "),v("li",[t._v("② 模块的扇入和扇出要合理。一个模块的扇出是指该模块直接调用的下级模块的个数；扇出大表示模块的复杂度高，需要控制和协调过多的下级模块。扇出过大一般是因为缺乏中间层次，应该适当增加中间层次的控制模块;扇出太小时可以把下级模块进一步分解成若干个子功能模块，或者合并到它的上级模块中。一个模块的扇入是指直接调用该模块的上级模块的个数;扇入大表示模块的复用程度高。设计良好的软件结构通常顶层扇出比较大，中间扇出较少，底层模块则有大扇入。一般来说，系统的平均扇入和扇出系数为3或4，不应该超过7，否则会增大出错的概率。")]),t._v(" "),v("li",[t._v("③ 深度和宽度适当。深度表示软件结构中模块的层数，如果层数过多，则应考虑是否有些模块设计过于简单，看能否适当合并。宽度是软件结构中同一个层次上的模块总数的最大值，一般说来，宽度越大系统越复杂，对宽度影响最大的因素是模块的扇出。在设计系统时，需要权衡系统的深度和宽度，尽量降低系统的复杂性，减少实施过程的难度，提高开发和维护的效率。")])]),t._v(" "),v("h3",{attrs:{id:"分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),v("ul",[v("li",[t._v("① 体系结构设计：定义软件的主要结构元素及其关系。\n② 数据设计：基于实体联系图确定软件涉及的文件系统结构及数据库表结构。\n③ 接口设计：描述用户界面、软件和其他硬件设备、其他软件系统及使用人员的外部接口,以及各种构件之间的内部接口。\n④ 过程设计：确定软件各个组成部分内的算法及内部数据结构，并选定某种过程的表达形式来描述各种算法。")])]),t._v(" "),v("h2",{attrs:{id:"数据流图到软件体系结构的映射"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据流图到软件体系结构的映射"}},[t._v("#")]),t._v(" 数据流图到软件体系结构的映射")]),t._v(" "),v("p",[v("img",{attrs:{src:s(627),alt:"image-20211104173452310"}})]),t._v(" "),v("h2",{attrs:{id:"设计模式六大原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计模式六大原则"}},[t._v("#")]),t._v(" 设计模式六大原则？")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("① "),v("strong",[t._v("单一职责原则")]),t._v("，就一个类而言，应该仅有一个引起它变化的原因；")])]),t._v(" "),v("li",[v("p",[t._v("② "),v("strong",[t._v("里式替换原则")]),t._v("，派生类一定适用于基类。即在软件中，基类替换成派生类，程序的行为没有变化；")])]),t._v(" "),v("li",[v("p",[t._v("③ "),v("strong",[t._v("依赖倒转原则")]),t._v("，要依赖抽象，不要依赖具体类；")])]),t._v(" "),v("li",[v("p",[t._v("④ "),v("strong",[t._v("接口隔离原则")]),t._v("，每个接口中不存在派生类用不到却必须实现的方法，如果不然，应将接口拆分，使用多个隔离的接口。")])]),t._v(" "),v("li",[v("p",[t._v("⑤ "),v("strong",[t._v("开闭原则")]),t._v("，对修改关闭，对扩展开放；")])]),t._v(" "),v("li",[v("p",[t._v("⑥ "),v("strong",[t._v("迪米特原则")]),t._v("，如果两个类不直接通信，那么这两个类就不应当发生直接的相互作用。如果一个类需要调用另一个类的某个方法的话，可以通过第三个类转发这个调用。")])]),t._v(" "),v("li",[v("p",[t._v("⑦ "),v("strong",[t._v("共同封闭原则")]),t._v("，一个变化若对包产生影响，则对该包中的所有类产生影响，而对其他包没影响。")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);