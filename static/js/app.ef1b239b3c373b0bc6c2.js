webpackJsonp([1],[,,,,,,,,,,,,,,function(t,e,i){"use strict";var n=i(28),s=i.n(n),a=i(1),o=i(13),l={computed:s()({},i.i(o.b)(["myInfo","services","skills","sections","portfolio"])),methods:{sendEmail:function(){document.getElementById("link_email").click()},goto:function(t){t=t.replace(/ /g,""),window.setTimeout(function(){var e="section-"+t.toLowerCase();document.getElementById(e).scrollIntoView({behavior:"smooth"}),window.setTimeout(function(){"contact"===t.toLowerCase()&&document.getElementById("txt_email").focus()},250)},250)},gotoTop:function(){window.scroll({top:0,left:0,behavior:"smooth"})}}};a.default.mixin(l)},function(t,e,i){"use strict";var n=i(73),s=i.n(n),a=i(75),o=i.n(a),l=i(56),r=i.n(l);s.a.polyfill(),o.a.polyfill(),r.a.polyfill()},function(t,e,i){"use strict";var n=i(1),s=i(13);n.default.use(s.a);var a={info:{name:"Muhammad Ubaid Raza",shortName:"M. Ubaid Raza",title:"Full Stack Web Developer",subTitle:'Jack of all trades, master of "some"',email:"mubaidr@gmail.com",skype:"mubaidr",location:"Rawalpindi, Pakistan",formspreeURL:"https://formspree.io/mubaidr@gmail.com",profiles:[{title:"Github",url:"https://github.com/mubaidr",icon:"code"},{title:"Linkedin",url:"https://www.linkedin.com/in/muhammad-ubaid-raza-b0859a100/",icon:"business"},{title:"Blog",url:"https://mubaidr.github.io/blog/",icon:"create"},{title:"Twitter",url:"https://twitter.com/mubaidr",icon:"public"},{title:"Freelancer",url:"https://www.freelancer.com/u/razamubaid",icon:"business_center"}]},sections:{about:{heading:"About Me",subheading:"Who I Am ?",icon:"info_outline",summary:"Web developer with production experience of 4 years in web application development and experienced with all stages of the development cycle for dynamic web projects.",objective:"An opportunity to work and upgrade myself, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community."},skills:{heading:"Skills & Tools",subheading:"How I Do ?",icon:"view_list"},services:{heading:"Development Capabilities",subheading:"What Can I Do ?",icon:"assignment"},portfolio:{heading:"Portfolio",subheading:"What I Have Done So Far",icon:"view_carousel"},contact:{heading:"Contact",subheading:"Have An Opportunity You Want To Discuss?",icon:"mail_outline"}},services:[{title:"Frontend Development",subtitle:"Vue.JS, JavaScript, HTML5, CSS3, JQuery",summary:"Develop fully functional responsive prototypes based on Business Requirements using HTML5, CSS3, JavaScript and Vue.JS/JQuery.",progress:10},{title:"Backend Development",subtitle:"ASP.NET (MVC, Webforms, API), Node.JS",summary:"Development of server-side web application logic and integration with the front-end. Writing web services and APIs to be consumed by front-end and mobile applications.",progress:8},{title:"Database Design & Development",subtitle:"MSSQL, MongoDB",summary:"Developed relational databases to provide data to web applications. Designed and implemented stored procedures views and other application database code objects.",progress:8},{title:"Cross Platform App Development",subtitle:"Cordova, Phonegap, Android, Iphone, Windows",summary:"Cross platform application development using Cordova framework for Android, Iphone and Windows Phone.",progress:7}],skills:[{title:"JavaScript"},{title:"VueJS"},{title:"HTML5"},{title:"Canvas"},{title:"CSS3"},{title:"Bootstrap"},{title:"JQuery"},{title:"AJAX"},{title:"Pug"},{title:"Stylus"},{title:"SCSS"},{title:"Node.Js"},{title:"ExpressJs"},{title:"ASP.NET MVC"},{title:"ASP.NET Web Forms"},{title:"ASP.NET WebAPI"},{title:"MSSQL"},{title:"MongoDB"},{title:"Apache Cordova/Phonegap"},{title:"Chrome Extensions"},{title:"Opera Extensions"},{title:"Webpack"},{title:"Npm"},{title:"Git"},{title:"Eslint"},{title:"Bower"},{title:"UX & UI Design"},{title:"Hosting & Maintenance"}],portfolio:[{title:"Sample 1",summary:"Description 1",tags:["a","b","c"],link:null,images:["pattern.png"]},{title:"Sample 2",summary:"Description 1",tags:["a","b","c"],link:null,images:["pattern.png"]},{title:"Sample 3",summary:"Description 1",tags:["a","b","c"],link:null,images:["pattern.png"]},{title:"Sample 4",summary:"Description 1",tags:["a","b","c"],link:null,images:["pattern.png"]},{title:"Sample 5",summary:"Description 1",tags:["a","b","c"],link:null,images:["pattern.png"]},{title:"Sample 5",summary:"Description 1",tags:["a","b","c"],link:null,images:["pattern.png"]}]},o={},l={},r={myInfo:function(t){return t.info},services:function(t){return t.services},skills:function(t){return t.skills},sections:function(t){return t.sections},portfolio:function(t){return t.portfolio}},c=new s.a.Store({state:a,mutations:o,actions:l,getters:r});e.a=c},function(t,e,i){"use strict";var n=i(1),s=i(91),a=i.n(s);n.default.use(a.a)},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){function n(t){i(62)}var s=i(0)(i(23),i(88),n,null,null);t.exports=s.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(18),s=(i.n(n),i(15),i(1)),a=i(16),o=i(21),l=i.n(o),r=(i(14),i(17),i(19)),c=(i.n(r),i(20));i.n(c);new s.default({el:"#app",store:a.a,template:"<App/>",components:{App:l.a}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(77),s=i.n(n),a=i(76),o=i.n(a),l=i(78),r=i.n(l),c=i(81),d=i.n(c),m=i(80),u=i.n(m),p=i(82),v=i.n(p),f=i(79),_=i.n(f);e.default={name:"app",components:{"section-header":s.a,"section-footer":o.a,"section-about":r.a,"section-skills":v.a,"section-services":d.a,"section-portfolio":u.a,"section-contact":_.a},methods:{getSectionId:function(t){return"section-"+t.toLowerCase().replace(/ /g,"")}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(71),s=i.n(n);e.default={data:function(){return{scrollButtonVisible:!1}},computed:{emailAddressString:function(){return"mailto:"+this.myInfo.email+"?Subject=Hey Muhammad Ubaid, I’d really like to talk to you about this great opportunity!"}},methods:{gotoFromSideNav:function(t){this.$refs.leftSidenav.close(),this.goto(t)}},created:function(){var t=this;document.body.onscroll=s()(function(){t.scrollButtonVisible=document.body.scrollTop>180},200,{leading:!1,trailing:!0})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(74),s=i.n(n);e.default={data:function(){return{email:"",message:"",loading:!1,validation:{email:{dirty:!1},message:{dirty:!1}}}},computed:{isEmailValid:function(){return!this.validation.email.dirty||/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)},isMessageValid:function(){return!this.validation.message.dirty||this.message.length>10}},methods:{submit:function(){var t=this;t.dirtyFields(),t.isEmailValid&&t.isMessageValid&&(t.loading=!0,s()({url:t.myInfo.formspreeURL,method:"post",data:{email:t.email,message:t.message},success:function(){t.$refs.success_snackbar.open(),this.email="",this.message=""},error:function(){t.$refs.error_snackbar.open()},complete:function(){t.loading=!1}}))},dirtyFields:function(){this.validation.email.dirty=!0,this.validation.message.dirty=!0}},mounted:function(){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{},methods:{imageSource:function(t){for(var e=[],n=0;n<t.length;n++)e.push(i(93)("./"+t[n]));return e}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){t.exports=i.p+"static/img/pattern-large.3a4734f.png"},function(t,e,i){t.exports=i.p+"static/img/pattern-medium.a9c533e.png"},function(t,e,i){t.exports=i.p+"static/img/pattern-small.d29b10d.png"},function(t,e,i){t.exports=i.p+"static/img/pattern-xsmall.a271873.png"},function(t,e,i){t.exports=i.p+"static/img/pattern-xxsmall.e182bc1.png"},function(t,e,i){t.exports=i.p+"static/img/pattern.239c505.png"},,,,,,function(t,e,i){function n(t){i(59)}var s=i(0)(null,i(85),n,null,null);t.exports=s.exports},function(t,e,i){function n(t){i(58)}var s=i(0)(i(24),i(84),n,null,null);t.exports=s.exports},function(t,e,i){function n(t){i(64)}var s=i(0)(null,i(90),n,null,null);t.exports=s.exports},function(t,e,i){function n(t){i(60)}var s=i(0)(i(25),i(86),n,null,null);t.exports=s.exports},function(t,e,i){function n(t){i(57)}var s=i(0)(i(26),i(83),n,null,null);t.exports=s.exports},function(t,e,i){function n(t){i(61)}var s=i(0)(null,i(87),n,null,null);t.exports=s.exports},function(t,e,i){function n(t){i(63)}var s=i(0)(null,i(89),n,null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"full-width"},[i("h2",{staticClass:"md-headline"},[t._v("\n    "+t._s(t.sections.portfolio.heading)+"\n    "),i("br"),t._v(" "),i("span",{staticClass:"md-caption",domProps:{innerHTML:t._s(t.sections.portfolio.subheading)}})]),t._v(" "),t._l(t.portfolio,function(e){return i("portfolio-item",{key:e.title,attrs:{src:t.imageSource(e.images),item:e}})})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("md-whiteframe",{staticClass:"header-custom",attrs:{"md-tag":"md-toolbar","md-elevation":"3"}},[i("div",{staticClass:"md-toolbar-container"},[i("md-button",{staticClass:"btn-sidebar",nativeOn:{click:function(e){t.$refs.leftSidenav.toggle()}}},[i("md-tooltip",{attrs:{"md-direction":"top"}},[t._v("Menu")]),t._v(" "),i("md-icon",[t._v("menu")])],1),t._v(" "),i("h1",{staticClass:"md-title"},[t._v(t._s(t.myInfo.name)+"\n        "),i("span",{staticClass:"hide"},[t._v("Full Stack Web Developer")])]),t._v(" "),i("span",{staticStyle:{flex:"1"}}),t._v(" "),i("md-speed-dial",{staticClass:"md-fab-bottom-right fab-custom",class:{"static-speed-dial":t.scrollButtonVisible},attrs:{"md-direction":"left"}},[i("md-button",{staticClass:"md-fab animate-attention",attrs:{"md-fab-trigger":""}},[i("md-icon",{attrs:{"md-icon-morph":""}},[t._v("close")]),t._v(" "),i("md-icon",[t._v("mail")]),t._v(" "),i("md-tooltip",{attrs:{"md-direction":"top"}},[t._v("Contact Now")])],1),t._v(" "),i("md-button",{staticClass:"md-fab md-mini",nativeOn:{click:function(e){t.sendEmail(e)}}},[i("md-icon",[t._v("mail_outline")]),t._v(" "),i("md-tooltip",{attrs:{"md-direction":"top"}},[t._v("by Email")])],1),t._v(" "),i("md-button",{staticClass:"md-fab md-mini",nativeOn:{click:function(e){t.goto("Contact")}}},[i("md-icon",[t._v("chat_bubble_outline")]),t._v(" "),i("md-tooltip",{attrs:{"md-direction":"top"}},[t._v("by Contact Form")])],1)],1)],1)]),t._v(" "),i("md-sidenav",{ref:"leftSidenav",staticClass:"main-sidebar md-left md-fixed",attrs:{"md-swipeable":"",id:"leftSidenav"}},[i("md-whiteframe",{staticClass:"header-custom",attrs:{"md-tag":"md-toolbar","md-elevation":"0"}},[i("div",{staticClass:"md-toolbar-container"}),t._v(" "),i("md-list",{staticClass:"sidebar-menu"},t._l(t.sections,function(e){return"Portfolio"!=e.heading?i("md-list-item",{key:e.heading,staticClass:"custom",nativeOn:{click:function(i){t.gotoFromSideNav(e.heading)}}},[i("md-icon",{staticClass:"md-accent"},[t._v(t._s(e.icon))]),t._v(" "),i("span",[t._v(t._s(e.heading))]),t._v(" "),i("md-ink-ripple")],1):t._e()}))],1)],1),t._v(" "),i("a",{ref:"link_email",staticStyle:{display:"none",visibility:"hidden"},attrs:{id:"link_email",href:t.emailAddressString}},[t._v("Email Me")]),t._v(" "),i("transition",{attrs:{name:"slide-left",appear:"",mode:"out-in"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.scrollButtonVisible,expression:"scrollButtonVisible"}],staticClass:"btn-scroll-to-top"},[i("md-button",{staticClass:"md-fab md-clean",nativeOn:{click:function(e){t.gotoTop(e)}}},[i("md-icon",{staticClass:"md-accent"},[t._v("arrow_upward")])],1)],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("md-whiteframe",{staticClass:"footer-custom full-width",attrs:{"md-tag":"md-toolbar","md-elevation":"0"}},[i("ul",{staticClass:"footer-menu"},t._l(t.sections,function(e){return"Portfolio"!=e.heading?i("li",{key:e.heading,staticClass:"md-button",on:{click:function(i){t.goto(e.heading)}}},[i("md-icon",[t._v(t._s(e.icon))]),t._v(" "),i("span",[t._v(t._s(e.heading))]),t._v(" "),i("md-ink-ripple")],1):t._e()})),t._v(" "),i("div",{staticClass:"credits text-center full-width"},[i("span",[t._v("Powered by: Vue.js, Vue Material")]),t._v(" "),i("br"),t._v(" "),i("span",[t._v("Hosting by: GitHub")])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("md-whiteframe",{staticClass:"full-width contact-form",attrs:{"md-elevation":"0"}},[i("form",{attrs:{novalidate:""},on:{submit:function(e){e.stopPropagation(),e.preventDefault(),t.submit(e)}}},[i("div",{staticClass:"full-width"},[i("h2",{staticClass:"md-headline"},[t._v("\n          "+t._s(t.sections.contact.heading)+"\n          "),i("br"),t._v(" "),i("span",{staticClass:"md-caption",domProps:{innerHTML:t._s(t.sections.contact.subheading)}})])]),t._v(" "),i("p",{staticClass:"md-caption"},[t._v("Please feel free to get in touch via the form below, I will get back to you as soon as possible.")]),t._v(" "),i("md-spinner",{staticClass:"md-accent progress-custom",class:{show:t.loading},attrs:{"md-size":40,"md-indeterminate":""}}),t._v(" "),i("md-input-container",{class:{"md-input-invalid":!t.isEmailValid}},[i("label",[t._v("Your Email Address")]),t._v(" "),i("md-input",{attrs:{id:"txt_email",readonly:t.loading},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),i("span",{staticClass:"md-error"},[t._v("Please enter a valid Email address")])],1),t._v(" "),i("md-input-container",{class:{"md-input-invalid":!t.isMessageValid}},[i("label",[t._v("Message")]),t._v(" "),i("md-textarea",{attrs:{minlength:"500",maxlength:"500",readonly:t.loading},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),i("span",{staticClass:"md-error"},[t._v("Please enter some message")])],1),t._v(" "),i("md-button",{staticClass:"md-raised md-accent btn-custom",attrs:{type:"submit",disabled:t.loading}},[i("md-icon",[t._v("send")]),t._v("  \n        "),t.loading?i("span",[t._v("Sending")]):i("span",[t._v("Send")])],1)],1)]),t._v(" "),i("md-snackbar",{ref:"validation_snackbar",attrs:{"md-duration":"5000"}},[i("md-icon",[t._v("report_problem")]),t._v("  \n    "),i("span",[t._v("Please provide required fields.")]),t._v(" "),i("md-button",{staticClass:"md-accent",nativeOn:{click:function(e){t.$refs.validation_snackbar.close()}}},[t._v("Retry!")])],1),t._v(" "),i("md-snackbar",{ref:"error_snackbar",attrs:{"md-duration":"5000"}},[i("md-icon",[t._v("report_problem")]),t._v("  \n    "),i("span",[t._v("Error!")]),t._v(" "),i("md-button",{staticClass:"md-accent",nativeOn:{click:function(e){t.submit(e)}}},[t._v("Retry!")])],1),t._v(" "),i("md-snackbar",{ref:"success_snackbar",attrs:{"md-duration":"10000"}},[i("md-icon",[t._v("done")]),t._v("  \n    "),i("span",[t._v("Message sent successfully!")]),t._v(" "),i("md-button",{staticClass:"md-accent",nativeOn:{click:function(e){t.$refs.success_snackbar.close()}}},[t._v("Great!")])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticClass:"md-headline"},[t._v("\n    "+t._s(t.sections.services.heading)+"\n    "),i("br"),t._v(" "),i("span",{staticClass:"md-caption",domProps:{innerHTML:t._s(t.sections.services.subheading)}})]),t._v(" "),i("div",{staticClass:"full-width"},[i("md-layout",{attrs:{"md-gutter":"24"}},t._l(t.services,function(e){return i("md-layout",{key:e.title,attrs:{"md-flex":"50"}},[i("md-card",{staticClass:"custom-card full-width",attrs:{"md-with-hover":""}},[i("md-card-header",[i("div",{staticClass:"md-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"md-subhead"},[t._v(t._s(e.subtitle))])]),t._v(" "),i("md-card-content",[t._v("\n            "+t._s(e.summary)+"\n          ")])],1)],1)}))],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("section-header"),t._v(" "),i("md-layout",{staticClass:"padded-container"},[i("md-layout",{attrs:{"md-hide-small":"","md-flex":"15"}}),t._v(" "),i("md-layout",{staticClass:"full-width-child"},[i("section-about",{attrs:{id:t.getSectionId(t.sections.about.heading)}}),t._v(" "),i("section-skills",{attrs:{id:t.getSectionId(t.sections.skills.heading)}}),t._v(" "),i("section-services",{attrs:{id:t.getSectionId(t.sections.services.heading)}}),t._v(" "),i("section-contact",{attrs:{id:t.getSectionId(t.sections.contact.heading)}})],1),t._v(" "),i("md-layout",{attrs:{"md-hide-small":"","md-flex":"15"}})],1),t._v(" "),i("section-footer")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticClass:"md-headline"},[t._v("\n    "+t._s(t.sections.skills.heading)+"\n    "),i("br"),t._v(" "),i("span",{staticClass:"md-caption",domProps:{innerHTML:t._s(t.sections.skills.subheading)}})]),t._v(" "),i("div",t._l(t.skills,function(e){return i("md-chip",{key:e.title,staticClass:"custom-chip"},[t._v(t._s(e.title))])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",{staticClass:"md-headline"},[t._v("\n    "+t._s(t.sections.about.heading)+"\n    "),i("br"),t._v(" "),i("span",{staticClass:"md-caption",domProps:{innerHTML:t._s(t.sections.about.subheading)}})]),t._v(" "),i("md-whiteframe",{staticClass:"full-width bg-white",attrs:{"md-elevation":"2"}},[i("div",{staticClass:"padded-container"},[i("p",{domProps:{innerHTML:t._s(t.sections.about.summary)}}),t._v(" "),i("h2",{staticClass:"md-title"},[t._v("Objective")]),t._v(" "),i("p",{domProps:{innerHTML:t._s(t.sections.about.objective)}})])]),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"profile-icons full-width"},t._l(t.myInfo.profiles,function(e){return i("a",{key:e.title,attrs:{href:e.url}},[i("md-icon",[t._v(t._s(e.icon))]),t._v("  "+t._s(e.title)+"\n    ")],1)}))],1)},staticRenderFns:[]}},,,function(t,e,i){function n(t){return i(s(t))}function s(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./pattern-large.png":65,"./pattern-medium.png":66,"./pattern-small.png":67,"./pattern-xsmall.png":68,"./pattern-xxsmall.png":69,"./pattern.png":70};n.keys=function(){return Object.keys(a)},n.resolve=s,t.exports=n,n.id=93},function(t,e){},function(t,e){}],[22]);
//# sourceMappingURL=app.ef1b239b3c373b0bc6c2.js.map