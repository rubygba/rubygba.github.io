webpackJsonp([1],{100:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main"}},[n(e.nowView,{tag:"component",attrs:{selected:e.selected}}),e._v(" "),n("img",{staticClass:"img-cache",attrs:{src:"",alt:""}}),e._v(" "),n("audio",{attrs:{id:"bgm",src:"static/bgm.mp3"}}),e._v(" "),n("audio",{attrs:{id:"di",src:"static/di.mp3"}}),e._v(" "),n("audio",{attrs:{id:"end1",src:"static/end1.mp3"}}),e._v(" "),n("audio",{attrs:{id:"end2",src:"static/end2.mp3"}}),e._v(" "),n("audio",{attrs:{id:"end3",src:"static/end3.mp3"}})],1)},staticRenderFns:[]}},101:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"txt-center",attrs:{id:"page2"}},[n("h2",[n("div",{staticClass:"svg"},[n("svg",[n("use",{attrs:{"xlink:href":"#css"}}),e._v(" "),n("text",{attrs:{id:"css",x:"50%",y:"50%"}},[e._v("问题"+e._s(e.i))])])])]),e._v(" "),n("div",{staticClass:"slide"},[1===e.i?n("div",{staticClass:"slide1"},[n("h5",[n("div",{staticClass:"svg"},[n("svg",[n("use",{attrs:{"xlink:href":"#css1"}}),e._v(" "),n("text",{attrs:{id:"css1"}},[n("tspan",{attrs:{x:"50%",y:"0"}},[e._v("你还记得当初遇到她时——")]),e._v(" "),n("tspan",{attrs:{x:"50%",y:"1.3em"}})])])])]),e._v(" "),n("ul",{},[n("li",{class:{selected:1===e.selected[1]},on:{click:function(t){e.select(1,1)}}},[n("p",[e._v("闹了个大误会。")])]),e._v(" "),n("li",{class:{selected:2===e.selected[1]},on:{click:function(t){e.select(1,2)}}},[n("p",[e._v("她亲切地带你参观校园。")])]),e._v(" "),n("li",{class:{selected:3===e.selected[1]},on:{click:function(t){e.select(1,3)}}},[n("p",[e._v("正巧看到她在帮助其他同学。")])])])]):e._e(),e._v(" "),2===e.i?n("div",{staticClass:"slide2"},[n("h5",[n("div",{staticClass:"svg"},[n("svg",[n("use",{attrs:{"xlink:href":"#css1"}}),e._v(" "),n("text",{attrs:{id:"css1"}},[n("tspan",{attrs:{x:"50%",y:"0"}},[e._v("之后，你们的生活交织在一起，")]),e._v(" "),n("tspan",{attrs:{x:"50%",y:"1.3em"}},[e._v("你们经常——")])])])])]),e._v(" "),n("ul",{},[n("li",{class:{selected:1===e.selected[2]},on:{click:function(t){e.select(2,1)}}},[n("p",[e._v("在社团活动室里待一下午。")])]),e._v(" "),n("li",{class:{selected:2===e.selected[2]},on:{click:function(t){e.select(2,2)}}},[n("p",[e._v("打电话聊天到深夜。")])]),e._v(" "),n("li",{class:{selected:3===e.selected[2]},on:{click:function(t){e.select(2,3)}}},[n("p",[e._v("放学后和她一起走过那条长长的坡道。")])])])]):e._e(),e._v(" "),3===e.i?n("div",{staticClass:"slide3"},[n("h5",[n("div",{staticClass:"svg"},[n("svg",[n("use",{attrs:{"xlink:href":"#css1"}}),e._v(" "),n("text",{attrs:{id:"css1"}},[n("tspan",{attrs:{x:"50%",y:"0"}},[e._v("那天，她约你来到你们")]),e._v(" "),n("tspan",{attrs:{x:"50%",y:"1.3em"}},[e._v("最熟悉的地方……")])])])])]),e._v(" "),n("ul",{},[n("li",{class:{selected:1===e.selected[3]},on:{click:function(t){e.select(3,1)}}},[n("p",[e._v("你们相处最久的教室里。")])]),e._v(" "),n("li",{class:{selected:2===e.selected[3]},on:{click:function(t){e.select(3,2)}}},[n("p",[e._v("校园里的那棵樱花树下。")])]),e._v(" "),n("li",{class:{selected:3===e.selected[3]},on:{click:function(t){e.select(3,3)}}},[n("p",[e._v("只属于你们俩的社团活动室。")])])])]):e._e()]),e._v(" "),n("div",{staticClass:"txt-center"},[n("button",{staticClass:"btn",class:{end:3===e.i},on:{click:e.goNext}},[e._v("下一题")])])])},staticRenderFns:[]}},23:function(e,t,n){n(93);var i=n(14)(n(48),n(100),null,null);e.exports=i.exports},40:function(e,t,n){"use strict";function i(e){return d.a.Util.getSpecialTimeStr(e)}function r(e){var t=Number(e);return 0!==t?d.a.Util.getSpecialCountStr(t):0}function o(e){return e.replace("//mini.eastday.com/mobile","//mmz.mop.com/a")}function s(e,t){var n=e||"default.png",i=t||"100x100";return"//s.moemoe.la/"+n+"?imageMogr2/thumbnail/!"+i+"r/gravity/center/crop/"+i}function a(e){return"//www.moemoe.la/detail/"+(e||"")}function c(e){if(!e)return"//www.moemoe.la/detail/";var t=e.indexOf("?"),n="";return-1!==t&&(n=e.slice(t+1)),"//www.moemoe.la/detail/"+n}function u(e){var t=new Date(e);if(!t)return!1;var n=t.getTime(),i=(new Date).getTime(),r=Number(i-n),o=new Date(i-864e5).getDate(),s=new Date(i-1728e5).getDate(),a=new Date(n).getDate();return r>=864e5?r/864e5>3?e:a===s?"前天":a===o?"昨天":e:r>=36e5?Math.floor(r/36e5)+"小时前":r>=6e4?Math.floor(r/6e4)+"分钟前":"最新"}Object.defineProperty(t,"__esModule",{value:!0}),t.specialTime=i,t.specialCountStr=r,t.specialUrl=o,t.prefixImgUrl=s,t.prefixDocUrl=a,t.decodeSchema=c,t.specialTime2=u;var d=n(45)},41:function(e,t,n){"use strict";var i=n(24),r=n(102),o=n(23),s=n.n(o);i.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"index",component:s.a}]})},45:function(e,t,n){"use strict";n.d(t,"a",function(){return i});try{Array.prototype.contains||(Array.prototype.contains=function(e){for(var t=0;t<this.length;t++)if(this[t]===e)return!0})}catch(e){}var i={};i.namespace=function(e){for(var t=e.split("."),n=i,r="GLOBAL"===t[0]?1:0;r<t.length;r++)n[t[r]]=n[t[r]]||{},n=n[t[r]]},i.namespace("Util"),i.namespace("Js"),i.namespace("Cookie"),i.namespace("Array"),i.namespace("Os"),i.namespace("Browser"),i.Util={getRandom:function(e,t){return Math.floor(Math.random()*(t-e)+e)},getScript:function(e,t,n){var i=document.getElementsByTagName("head")[0],r=document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("src",e),n?n.appendChild(r):i.appendChild(r);var o=function(){"function"==typeof t&&t()};document.all?r.onreadystatechange=function(){"loaded"!==r.readyState&&"complete"!==r.readyState||o()}:r.onload=function(){o()}},createScript:function(e,t,n){if(e){var i=document.getElementsByTagName("head")[0],r=document.createElement("script");r.setAttribute("type","text/javascript"),r.innerHTML=e,n?n.appendChild(r):i.appendChild(r),t()}},filterHtmlTags:function(e){if(e&&"string"==typeof e)return e.replace(/<\/?[^>]*>/g,"")},getQueryString:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?decodeURI(n[2]):null},dislocateArr:function(e){return e.sort(function(){return.5-Math.random()})},getSpecialCountStr:function(e){return"string"!=typeof e&&"number"!=typeof e?e:(e=parseInt(e,10),e>9999?Math.ceil(e/1e4)+"万":""+e)},getSpecialTimeStr:function(e){var t=this.strToTime(e);if(!t)return!1;var n=(new Date).getTime(),i=Number(n-t),r=new Date(n-864e5).getDate(),o=new Date(n-1728e5).getDate(),s=new Date(t).getDate();return i>=864e5?i/864e5>3?this.timeToString(t):s===o?"前天":s===r?"昨天":this.timeToString(t):i>=36e5?Math.floor(i/36e5)+"小时前":i>=6e4?Math.floor(i/6e4)+"分钟前":"最新"},strToTime:function(e){try{return Date.parse(e.replace(/-/g,"/"))}catch(e){return!1}},timeToString:function(e,t){return this.dateToString(this.timeToDate(e),t)},timeToDate:function(e){return new Date(e)},dateToString:function(e,t){var n=(e.getFullYear().toString(),(e.getMonth()+1).toString()),i=e.getDate().toString(),r=e.getHours().toString(),o=e.getMinutes().toString();n=n.length>1?n:"0"+n,i=i.length>1?i:"0"+i,r=r.length>1?r:"0"+r,o=o.length>1?o:"0"+o;var s=n+"-"+i+" "+r+":"+o;return t&&(s=s.replace(/-/g,t)),s},msToTimestr:function(e,t){var n=e?Number(e)/1e3:0;return i.Util.secondsToTimestr(n,t)},secondsToTimestr:function(e,t){var n,i,r;if(!(null==e||e<0))return e=Math.ceil(e),n=e/3600|0,e=parseInt(e)-3600*n,parseInt(n)<10&&(n="0"+n),i=e/60|0,parseInt(i)<10&&(i="0"+i),r=parseInt(e)-60*i,r<10&&(r="0"+r),t?n+":"+i+":"+r:i+":"+r},getScrollTop:function(){var e=0,t=0;try{document.body&&(e=document.body.scrollTop),document.documentElement&&(t=document.documentElement.scrollTop)}catch(e){}return e-t>0?e:t},getScrollHeight:function(){var e=0,t=0;try{document.body&&(e=document.body.scrollHeight),document.documentElement&&(t=document.documentElement.scrollHeight)}catch(e){}return e-t>0?e:t},getClientHeight:function(){return document.body.clientHeight&&document.documentElement.clientHeight?document.body.clientHeight<document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight:document.body.clientHeight>document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight},getWindowHeight:function(){return"CSS1Compat"===document.compatMode?document.documentElement.clientHeight:document.body.clientHeight},getBrowserType:function(){var e=navigator.userAgent.toLowerCase(),t="";return e.indexOf("msie")>0&&(t="IE"),e.indexOf("firefox")>0&&(t="firefox"),e.indexOf("chrome")>0&&e.indexOf("mb2345browser")<0&&e.indexOf("360 aphone browser")<0&&(t="chrome"),(e.indexOf("360 aphone browser")>0||e.indexOf("qhbrowser")>0)&&(t="360"),e.indexOf("ucbrowser")>0&&(t="UC"),e.indexOf("micromessenger")>0&&(t="WeChat"),(e.indexOf("mqqbrowser")>0||e.indexOf("qq")>0)&&e.indexOf("micromessenger")<0&&(t="QQ"),e.indexOf("miuibrowser")>0&&(t="MIUI"),e.indexOf("mb2345browser")>0&&(t="2345"),e.indexOf("sogoumobilebrowser")>0&&(t="sogou"),e.indexOf("liebaofast")>0&&(t="liebao"),e.indexOf("safari")>0&&e.indexOf("chrome")<0&&e.indexOf("ucbrowser")<0&&e.indexOf("micromessenger")<0&&e.indexOf("mqqbrowser")<0&&e.indexOf("miuibrowser")<0&&e.indexOf("mb2345browser")<0&&e.indexOf("sogoumobilebrowser")<0&&e.indexOf("liebaofast")<0&&e.indexOf("qhbrowser")<0&&(t="safari"),t},getOsType:function(){var e=navigator.userAgent.toLowerCase(),t="";if(/android/i.test(navigator.userAgent)){var n=e.indexOf("android"),i=e.substr(n+8,3);t="Android "+i}if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){var n=e.indexOf("os"),i=e.substr(n+3,3);t="iOS "+i}return!/Linux/i.test(navigator.userAgent)||/android/i.test(navigator.userAgent)||/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)||(t="Linux"),/windows|win32/i.test(navigator.userAgent)&&(t="windows32"),/windows|win32/i.test(navigator.userAgent)&&(t="windows64"),t},getPixel:function(){return window.screen.width+"*"+window.screen.height},getBytes:function(e){var t=0,n=e.length;if(e){for(var i=0;i<n;i++)e.charCodeAt(i)>255?t+=2:t++;return t}return 0},getReferrer:function(){var e="";try{e=window.top.document.referrer}catch(t){if(window.parent)try{e=window.parent.document.referrer}catch(t){e=""}}return""===e&&(e=document.referrer),e},getUrlNoParams:function(){var e=window.location.href,t=0;return e.indexOf("?")>=0?(t=e.indexOf("?"),e.substring(0,t)):e.indexOf("#")>=0?(t=e.indexOf("#"),e.substring(0,t)):e},getUrlNoQuery:function(){var e=window.location.href,t=0;return e.indexOf("?")>=0?(t=e.indexOf("?"),e.substring(0,t)):e},getUrl:function(){var e=window.location.href,t=0;return e.indexOf("?")>=0?(t=e.indexOf("?"),e.substring(0,t)):e.indexOf("#")>=0?(t=e.indexOf("#"),e.substring(0,t)):e},setIframe:function(e){var e=e||window.frames.iframe||document.getElementById("iframe")||null;if(e){var t=document.frames?document.frames.iframe.document:e.contentDocument;null!=e&&null!=t&&(e.height=t.body.scrollHeight,e.width=t.body.scrollWidth)}},setIframeContent:function(e){var e=e||window.frames.iframe||document.getElementById("iframe")||null;if(e){var t=document.frames?document.frames.iframe.document:e.contentDocument;null!=e&&null!=t&&(t.documentElement.width=e.parentNode.offsetWidth,t.documentElement.height=e.parentNode.offsetHeight,t.body.setAttribute("width",e.parentNode.offsetWidth),t.body.setAttribute("height",e.parentNode.offsetHeight))}},createStyle:function(e,t,n){if(e){var i=document.getElementsByTagName("head")[0],r=document.createElement("style");r.innerHTML=e,n?n.appendChild(r):i.appendChild(r),t&&t()}},pageVisibility:function(){return function(){var e,t=function(e,t){return""!==e?e+t.slice(0,1).toUpperCase()+t.slice(1):t},n=function(){var n=!1;return"number"==typeof window.screenX&&["webkit","moz","ms","o",""].forEach(function(i){!1===n&&void 0!==document[t(i,"hidden")]&&(e=i,n=!0)}),n}(),i=function(){if(n)return document[t(e,"hidden")]},r=function(){if(n)return document[t(e,"visibilityState")]};return{hidden:i(),visibilityState:r(),visibilitychange:function(t,o){if(o=!1,n&&"function"==typeof t)return document.addEventListener(e+"visibilitychange",function(e){this.hidden=i(),this.visibilityState=r(),t.call(this,e)}.bind(this),o)}}}()}},i.Js={trim:function(e){return e.replace(/^\s+|\s+$/g,"")},isNumber:function(e){return!isNaN(e)},isString:function(e){return"string"==typeof e},isBoolean:function(e){return"boolean"==typeof e},isFunction:function(e){return"function"==typeof e},isNull:function(e){return null===e},isUndefined:function(e){return void 0===e},isEmpty:function(e){return/^\s*$/.test(e)},isArray:function(e){return e instanceof Array}},i.Cookie={set:function(e,t,n){var i=n?60*Number(n)*60*1e3:864e5,r=new Date;r.setTime(r.getTime()+i);var o=n?" expires="+r.toUTCString():"";document.cookie=e+"="+encodeURI(t)+o+" path=/"},get:function(e){var t=" "+document.cookie+" ",n=t.indexOf(" "+e+"=");if(-1!==n){var i=t.substring(n+e.length+3,t.length);return decodeURI(i.substring(0,i.indexOf(" ")))}return null},del:function(e){var t=new Date((new Date).getTime()-1),n=this.read(e);null!==n&&(document.cookie=e+"="+n+" expires="+t.toUTCString+" path=/")}},i.Array={difference:function(e,t){try{var n=[],i=0,r=e.length;for(i=0;i<r;i++)t.contains(e[i])||n.push(e[i]);return n}catch(t){return e}}},i.Os=function(){for(var e=navigator.userAgent,t=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),n=!1,i=0;i<t.length;i++)if(e.indexOf(t[i])>-1){n=!0;break}return{mobile:n,ios:!!e.match(/\(i[^]+( U)? CPU.+Mac OS X/),android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iphone:e.indexOf("iPhone")>-1,ipad:e.indexOf("iPad")>-1,webapp:-1===e.indexOf("Safari")}}(),i.Browser=function(){var e=navigator.userAgent;return i.Os.mobile?{wechat:e.indexOf("MicroMessenger")>-1,weibo:e.toLowerCase().indexOf("weibo")>-1,qq:e.indexOf("QQ/")>-1,qqbrowser:e.indexOf("MQQBrowser")>-1}:{}}()},46:function(e,t,n){"use strict";var i=n(53),r=n.n(i),o=n(54),s=n.n(o),a=n(55),c=n.n(a),u=function(){function e(t){s()(this,e),t=t||{},this.callBack={},this.progress=t.progress?t.progress.bind(this):function(){},this.timeOut=t.timeOut||15,this.timeOutCB=t.timeOutCB?t.timeOutCB.bind(this):function(){},this.reset(),this.imgNode=[],this.loadTag()}return c()(e,[{key:"load",value:function(e){var t=this,n=this;return new r.a(function(i,r){t.isArrayFn(e)||r(new Error("It's not allow params")),e.length||r(new Error("It's not null")),n.reset(e.length),n.imgList=e,e.forEach(function(e){var r=new Image,o=n._timeOut(e);r.src=e,r.onload=n.onload.bind(t,e,o,i),r.onerror=n.onerror.bind(t,e,o,i)})})}},{key:"loadTag",value:function(){for(var e=this,t=document.getElementsByTagName("img"),n=0,i=t.length;n<i;n++)!function(n,i){if(t[n].attributes["p-src"]){var r=new Image,o=t[n].attributes["p-src"].value,s=e._timeOut(o);r.src=o,r.onload=function(){clearTimeout(s),t[n].src=o}}}(n)}},{key:"_timeOut",value:function(e){var t=this,n=setTimeout(function(){t.timeOutCB({name:e,msg:"load timer"}),clearTimeout(n)},1e3*t.timeOut);return n}},{key:"onload",value:function(e,t,n){clearTimeout(t),this.success.data.push(e),this.progress(++this.flag,this.count),this.complate(n)}},{key:"onerror",value:function(e,t,n){clearTimeout(t),this.err.data.push(e),this.progress(++this.flag,this.count),this.complate(n)}},{key:"complate",value:function(e){this.flag>=this.count&&e(this.success)}},{key:"reset",value:function(e){this.imgList=[],this.flag=0,this.count=e,this.success={code:0,msg:"success",data:[]},this.err={code:-1,msg:"load error",data:[]}}},{key:"isArrayFn",value:function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}}]),e}();t.a=u},47:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(42),r=n.n(i),o=n(24),s=n(44),a=n.n(s),c=n(43),u=n.n(c),d=n(41),l=n(23),f=n.n(l),m=n(40);o.a.config.productionTip=!1,o.a.prototype.$cookies=a.a,r()(m).forEach(function(e){o.a.filter(e,m[e])}),u.a.attach(document.body,{}),new o.a({el:"#app",router:d.a,template:"<App/>",components:{App:f.a}})},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(97),r=n.n(i),o=n(96),s=n.n(o),a=n(95),c=n.n(a),u=n(46);t.default={components:{Start:r.a,Question:s.a,End:c.a},data:function(){return{index:0,nowView:r.a,selected:["null",0,0,0],imgsArr:["static/title.png","static/bg.jpg","static/bg1.png","static/classroom_0_1_1.jpg","static/classroom_0_2_1.jpg","static/lian.png","static/room_0_1_3.jpg","static/room_0_2_3.jpg","static/sariel.png","static/school_0_1_2.jpg","static/school_0_2_2.jpg","static/school_0_3_2.jpg","static/sojyu.png"]}},computed:{},watch:{index:function(e,t){switch(e){case 0:this.nowView=r.a;break;case 1:this.nowView=s.a;break;case 2:this.nowView=c.a}}},created:function(){new u.a({progress:function(e,t){}}).load(this.imgsArr).then(function(e){}).catch(function(e){})},mounted:function(){function e(){t.volume=.8,t.play(),document.body.removeEventListener("touchstart",e)}var t=document.querySelector("#bgm");document.body.addEventListener("touchstart",e)},methods:{pad2:function(e){return e<10?"0"+e:e},generateBeforeDate:function(){var e=new Date;return e.getFullYear().toString()+this.pad2(e.getMonth()+1)+this.pad2(e.getDate())+this.pad2(e.getHours())+this.pad2(e.getMinutes())+this.pad2(e.getSeconds())},backTop:function(){document.body.scrollTop=document.documentElement.scrollTop=0}}}},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(94),r=n.n(i);t.default={components:{},props:{selected:Array},data:function(){return{strs:[["null"],["^1500「我心里有一些话，^1000\n今天一定要在这对你说出来。^1500\n一直以来我都将你看作是青梅竹马……。^1500\n也许我根本就是害怕^1000\n被你察觉到我的真正心意吧，^1000\n直到今天毕业了……^1000\n一想到今后我们可能会分道扬镳。^1500\n我才终于察觉到自己的这份心情……。^1500\n我希望你的眼里只有我一个人，^1500\n而不只是红颜知己。^1000\n所以我鼓起了勇气想对你说……。^1000\n我喜欢你。^1000\n在这个世界上，^1000\n我最喜欢的人，^1000\n就是你……。」"],["^1500「对，对不起。^1000\n把你叫到这种地方来……^1000\n知道吗？我呢，^1500\n一直希望能和学长你是同一个年级的。^1500\n如果我们同年的话，^1000\n不但大学四年都可以在一起，^1500\n还有军训都可以一起去……。^1000\n和学姐们比起来，^1000\n我一定是个既孩子气，^1000\n又任性的小女生吧。^1000\n如果你不喜欢我那么孩子气，^1000\n我一定会努力让自己像个大人的！^2000\n所以，^1000\n请你不要把我只当成妹妹，^1000\n和我交往好吗？^1000\n因为，^1000\n在这个世界上^1000\n我最喜欢的人就是学长你了，^1500\n喜欢的不得了……。」"],["^1500「把你叫到这种地方来，^1000\n真是不好意思。^1000\n在认识你之前，^1000\n身边净是些软弱的男人。^1500\n从来没有一个能引起我的兴趣。^1500\n之前我也一直没发现……。^1500\n到底是从什么时候我开始意识到你的存在，^1500\n连上课也没办法专心……。^1000\n最近，^1000\n更是连晚上也睡不着觉，^1000\n心跳得好快……。^1000\n一直被人说我太高傲，^1000\n不容易接近。^1000\n但只有你，^1000\n我不希望你这么认为。^1000\n不过，就算被拒绝也没关系。^2000\n只是，^1500\n以这样的心情，^1000\n我想说给你听。」"]],options:{strings:["^1000「大家好，我们是不是见过面？^2000\n在这个的...^2000\n我要给大家介绍一下我.^2000\n我就是一个程序员.^2000\n平时也没什么爱好.^2000\n我有一个理想，那就是.^1000.^1000.^1000」"],typeSpeed:30,backDelay:800,loop:!1,loopCount:!1}}},computed:{bgClass:function(){return"end-bg"+this.selected[2]+this.selected[3]},bgGirlClass:function(){return"end-bg-girl"+this.selected[1]}},created:function(){var e=document.querySelector("#bgm");e.pause(),e.volume=.12,e.play()},mounted:function(){var e=this;setTimeout(function(){var e=document.querySelector("#bgm");e.pause(),e.volume=.05,e.play()},600),setTimeout(function(){document.querySelector("#bgm").pause(),document.querySelector("#end"+e.selected[1]).play()},1300);var t=[];t=this.strs[this.selected[1]];new r.a(".end-txt",{strings:t,typeSpeed:50,backDelay:800,loop:!1,loopCount:!1})},methods:{}}},50:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{},data:function(){return{i:1,selected:["null",0,0,0]}},computed:{},created:function(){},mounted:function(){},methods:{goNext:function(){if(document.querySelector("#di").play(),0===this.selected[this.i])return void alert("请选择");this.i<3?this.i++:(this.$parent.index=2,this.$parent.selected=this.selected)},select:function(e,t){this.selected[e]=t,this.$forceUpdate(),document.querySelector("#di").play()}}}},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{},data:function(){return{}},computed:{},created:function(){},mounted:function(){},methods:{goQuestion:function(){document.querySelector("#di").play(),this.$parent.index=1}}}},93:function(e,t){},95:function(e,t,n){var i=n(14)(n(49),n(98),null,null);e.exports=i.exports},96:function(e,t,n){var i=n(14)(n(50),n(101),null,null);e.exports=i.exports},97:function(e,t,n){var i=n(14)(n(51),n(99),null,null);e.exports=i.exports},98:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"page3"}},[n("div",{staticClass:"end-bg",class:e.bgClass},[n("div",{staticClass:"end-bg-girl",class:e.bgGirlClass},[e._m(0)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"end-table"},[n("div",{staticClass:"end-txt"})])}]}},99:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"page1"}},[n("h1",{staticClass:"title"}),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"container"},[e._m(1),e._v(" "),n("div",{staticClass:"bottom-btn txt-center"},[n("button",{staticClass:"btn",on:{click:e.goQuestion}},[e._v("开始")])]),e._v(" "),n("p",{staticClass:"bottom-alert txt-center"},[e._v("建议浏览过程中打开声音")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"img-title"},[n("img",{attrs:{src:"static/title.png",alt:""}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"img-girls"},[n("img",{attrs:{src:"static/bg1.png",alt:""}})])}]}}},[47]);