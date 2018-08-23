(function(doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
          var clientWidth = docEl.clientWidth,
              MAX_WIDTH = 750;
          if (!clientWidth) {
              return;
          }
          if (clientWidth >= MAX_WIDTH) {
              docEl.style.fontSize = '100px';
          } else {
              docEl.style.fontSize = 100 * (clientWidth / MAX_WIDTH) + 'px';
          }
      };
  recalc();
  if (!doc.addEventListener) {
      return;
  }
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

// 后台生成的渠道（测试）  内容为var TTH5_QIDS = ['null','ceshi1'];
// document.write('<scr' + 'ipt type="text/javascript" src="http://testing.eastday.com/toutiao_h5_test/channeljs/h5toutiao/h5toutiaocookie.js"></scr' + 'ipt>')

// 后台生成的渠道（正式）  内容为var TTH5_QIDS = ['null','ceshi1'];
// document.write('<scr' + 'ipt type="text/javascript" src="//mini.eastday.com/toutiaoh5/channeljs/h5toutiao/h5toutiaocookie.js"></scr' + 'ipt>')
/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});
//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($, undefined){
  var prefix = '', eventPrefix,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
    testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty, transitionDuration, transitionTiming, transitionDelay,
    animationName, animationDuration, animationTiming, animationDelay,
    cssReset = {}

  function dasherize(str) { return str.replace(/([A-Z])/g, '-$1').toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

  if (testEl.style.transform === undefined) $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-'
      eventPrefix = event
      return false
    }
  })

  transform = prefix + 'transform'
  cssReset[transitionProperty = prefix + 'transition-property'] =
  cssReset[transitionDuration = prefix + 'transition-duration'] =
  cssReset[transitionDelay    = prefix + 'transition-delay'] =
  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
  cssReset[animationName      = prefix + 'animation-name'] =
  cssReset[animationDuration  = prefix + 'animation-duration'] =
  cssReset[animationDelay     = prefix + 'animation-delay'] =
  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }

  $.fn.animate = function(properties, duration, ease, callback, delay){
    if ($.isFunction(duration))
      callback = duration, ease = undefined, duration = undefined
    if ($.isFunction(ease))
      callback = ease, ease = undefined
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
    if (duration) duration = (typeof duration == 'number' ? duration :
                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
    if (delay) delay = parseFloat(delay) / 1000
    return this.anim(properties, duration, ease, callback, delay)
  }

  $.fn.anim = function(properties, duration, ease, callback, delay){
    var key, cssValues = {}, cssProperties, transforms = '',
        that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
        fired = false

    if (duration === undefined) duration = $.fx.speeds._default / 1000
    if (delay === undefined) delay = 0
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties
      cssValues[animationDuration] = duration + 's'
      cssValues[animationDelay] = delay + 's'
      cssValues[animationTiming] = (ease || 'linear')
      endEvent = $.fx.animationEnd
    } else {
      cssProperties = []
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ')
        cssValues[transitionDuration] = duration + 's'
        cssValues[transitionDelay] = delay + 's'
        cssValues[transitionTiming] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback)
      } else
        $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout

      fired = true
      $(this).css(cssReset)
      callback && callback.call(this)
    }
    if (duration > 0){
      this.bind(endEvent, wrappedCallback)
      // transitionEnd is not always firing on older Android phones
      // so make sure it gets fired
      setTimeout(function(){
        if (fired) return
        wrappedCallback.call(that)
      }, ((duration + delay) * 1000) + 25)
    }

    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft

    this.css(cssValues)

    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) })
    }, 0)

    return this
  }

  testEl = null
})(Zepto)

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($, undefined){
  var document = window.document,
    origShow = $.fn.show, origHide = $.fn.hide, origToggle = $.fn.toggle

  function anim(el, speed, opacity, scale, callback) {
    if (typeof speed == 'function' && !callback) callback = speed, speed = undefined
    var props = { opacity: opacity }
    if (scale) {
      props.scale = scale
      el.css($.fx.cssPrefix + 'transform-origin', '0 0')
    }
    return el.animate(props, speed, null, callback)
  }

  function hide(el, speed, scale, callback) {
    return anim(el, speed, 0, scale, function(){
      origHide.call($(this))
      callback && callback.call(this)
    })
  }

  $.fn.show = function(speed, callback) {
    origShow.call(this)
    if (speed === undefined) speed = 0
    else this.css('opacity', 0)
    return anim(this, speed, 1, '1,1', callback)
  }

  $.fn.hide = function(speed, callback) {
    if (speed === undefined) return origHide.call(this)
    else return hide(this, speed, '0,0', callback)
  }

  $.fn.toggle = function(speed, callback) {
    if (speed === undefined || typeof speed == 'boolean')
      return origToggle.call(this, speed)
    else return this.each(function(){
      var el = $(this)
      el[el.css('display') == 'none' ? 'show' : 'hide'](speed, callback)
    })
  }

  $.fn.fadeTo = function(speed, opacity, callback) {
    return anim(this, speed, opacity, null, callback)
  }

  $.fn.fadeIn = function(speed, callback) {
    var target = this.css('opacity')
    if (target > 0) this.css('opacity', 0)
    else target = 1
    return origShow.call(this).fadeTo(speed, target, callback)
  }

  $.fn.fadeOut = function(speed, callback) {
    return hide(this, speed, null, callback)
  }

  $.fn.fadeToggle = function(speed, callback) {
    return this.each(function(){
      var el = $(this)
      el[
        (el.css('opacity') == 0 || el.css('display') == 'none') ? 'fadeIn' : 'fadeOut'
      ](speed, callback)
    })
  }

})(Zepto)

/* global document:true */
/**
 * 扩展Array对象的方法(判断数组中是否包含指定值)
 * @param  {[type]} item 指定值
 * @return {[type]}      [description]
 */
try {
  if(!Array.prototype.contains){
      // 利用Array的原型prototype点出一个我想要封装的方法名contains 
      Array.prototype.contains = function (element) { 
          for (var i = 0; i < this.length; i++) { 
              //如果数组中某个元素和你想要测试的元素对象element相等，则证明数组中包含这个元素，返回true
              if (this[i] === element) {  
                  return true;
              }
          }
      };
  }
} catch (e) {
  console.error(e);
}
// forEach方法的兼容解决方法
try {
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
      var T, k;
      if (this === null) {
        throw new TypeError(' this is null or not defined');
      }
      var O = Object(this);
      var len = O.length >>> 0; // jshint ignore:line
      if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function');
      }
      if (arguments.length > 1) {
        T = thisArg;
      }
      k = 0;
      while (k < len) {
        var kValue;
        if (k in O) {
          kValue = O[k];
          callback.call(T, kValue, k, O);
        }
        k++;
      }
    };
  }
} catch (e) {
  console.error(e);
}

/**
* 提供命名管理，管理全局变量。
* 所有全局变量必须命名在GLOBAL里面的命名空间下，将变量冲突、覆盖问题降到最小。
* @type {{}}
*/
var GLOBAL = {};
/**
* 给创建命名空间提供一个统一接口
* 调用方法：GLOBAL.namespace('Ie');这样便创建了一个ie的命名空间。
* 创建完命名空间后，如果需要定义一个全局变量，方法如下：GLOBAL.Ie.isIe6;
* 使用该变量的方法也是：GLOBAL.Ie.isIe6
* @param str
*/
GLOBAL.namespace = function(str){
  var arr = str.split("."),o = GLOBAL;
  for(var i = (arr[0] === "GLOBAL") ? 1 : 0; i < arr.length; i++){
      o[arr[i]] = o[arr[i]] || {};
      o = o[arr[i]];
  }
};

GLOBAL.namespace('Util');
GLOBAL.namespace('Js');
GLOBAL.namespace('Cookie');
GLOBAL.namespace('Array');
GLOBAL.namespace('Os');
GLOBAL.namespace('Browser');
GLOBAL.namespace('App')


/* 公用的工具方法(头条H5) */
GLOBAL.Util = {
  /**
   * 获取随机数
   * @param  {number} min 随机数下限
   * @param  {number} max 随机数上限
   * @return {number}     大于等于min且小于max的数
   */
  getRandom: function(min, max){
      return Math.floor(Math.random() * (max - min) + min);
  },
  replaceRed: function (AllText,type) {//替换字符串加红
        if(AllText==undefined || AllText==''){
            return ''; 
        }

        function  replaceAll(FindText, RepText,AllText) {//替换字符串加红
            regExp = new RegExp(FindText,'g'); 
            return AllText.replace(regExp, RepText); 
        }

        var RedText= AllText;
        if(type==1){
            RedText = replaceAll('\<\%\%','<span class="text-red">',RedText);
            RedText = replaceAll('\%\%\>','</span>',RedText);
        }else{
            RedText = replaceAll('\{\%\%','<span class="text-red">',RedText);
            RedText = replaceAll('\%\%\}','</span>',RedText);
        }
        return RedText; 
    },
    replaceMobile: function (AllText) {//替换手机字符
        if(AllText==undefined || AllText==''){
            return ''; 
        }

        function  replaceAll(FindText, RepText,AllText) {//替换字符串加红
            regExp = new RegExp(FindText,'g'); 
            return AllText.replace(regExp, RepText); 
        }
        return AllText.substring(0, 3) + "****" + AllText.substring(7, 11); 
    },
  /**
    * 动态加载js文件
    * @param  {string}   url      js文件的url地址
    * @param  {Function} callback 加载完成后的回调函数
    */
  getScript: function(url, callback, element) {
      var head = document.getElementsByTagName('head')[0],
          js = document.createElement('script');

      js.setAttribute('type', 'text/javascript'); 
      js.setAttribute('src', url); 
      if(element){
          element.appendChild(js);
      } else {
          head.appendChild(js);
      }
      //执行回调
      var callbackFn = function(){
          if(typeof callback === 'function'){
              callback();
          }
      };

      if (document.all) { // IE
          js.onreadystatechange = function() {
              if (js.readyState === 'loaded' || js.readyState === 'complete') {
                  callbackFn();
              }
          };
      } else {
          js.onload = function() {
              callbackFn();
          };
      }
  },
  /**
   * 动态创建广告代码
   * @param  {string}   scriptCode     脚本代码
   * @param  {Function} callback   回调
   * @param  {DOM}   element  广告js代码父级标签
   * @return {undefined}    
   */
  createScript: function(scriptCode, callback, element){
      if(scriptCode){
          var head = document.getElementsByTagName('head')[0],
              js = document.createElement('script');
          js.setAttribute('type', 'text/javascript'); 
          js.innerHTML = scriptCode;
          if(element){
              element.appendChild(js);
          } else {
              head.appendChild(js);
          }
          //执行回调
          callback();
      }
  },
  /**
   * 过滤html标签
   * @param  {String} str 源字符串
   * @return {String}     过滤之后的字符串
   */
  filterHtmlTags: function(str){
      if(!str || typeof str !== 'string'){
          return;
      }
      return str.replace(/<\/?[^>]*>/g, '');
  },
  /**
   * 获取url中参数的值
   * @param  {[type]} name 参数名
   * @return {[type]}      参数值
   */
  getQueryString: function(name){
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURI(r[2]);
      return null;
  },

  /**
   * 打乱数组
   * @param  {[type]} arr 目标数组
   * @return {[type]}     [description]
   */
  dislocateArr: function(arr) {
      return arr.sort(function() {
          return 0.5 - Math.random(); 
      });
  },

  /**
   * 对数量进行处理，过万的数据显示“xxx万”（xxx：向上取整, 如：10.2万以及10.9万 都会转化成 11万）
   * @param  {String|Number} num 数量
   * @return {String}    处理后的数据
   */
  getSpecialCountStr: function(num){
      if(typeof num !== 'string' && typeof num !== 'number'){
          return num;
      }
      num = parseInt(num, 10);
      if(num > 9999){
          return Math.ceil(num / 10000) + '万';
      }
      return '' + num;
  },

  /**
   * 计算指定时间与当前时间的时间差 并转换成相应格式字符串
   * 如：xx分钟前，xx小时前，昨天 xx:xx，前天 xx:xx，xx-xx xx:xx
   * @param  {[type]} str 时间字符串（格式：2016-02-26 09:12）
   * @return {[type]}     [description]
   */
  getSpecialTimeStr: function(str) {
      var targetTime = this.strToTime(str);
      if (!targetTime) {
          return false;
      }
      var currentTime = new Date().getTime();
      var tdoa = Number(currentTime - targetTime),
          dayTime = 24 * 60 * 60 * 1000, // 1天
          hourTime = 60 * 60 * 1000, // 1小时
          minuteTime = 60 * 1000; // 1分钟

      if (tdoa >= dayTime) { // 天
          var h = tdoa / dayTime;
          if (h > 2) {
              return this.timeToString(targetTime);
          } else if (h > 1) {
              return '前天';
          } else {
              return '昨天';
          }
      } else if (tdoa >= hourTime) { // 小时
          return Math.floor(tdoa / hourTime) + '小时前';
      } else if (tdoa >= minuteTime) {
          return Math.floor(tdoa / minuteTime) + '分钟前';
      } else {
          return '最新';
          // return Math.floor(tdoa / 1000) + '秒前';
      }
  },

  /**
   * 计算指定时间与当前时间的时间差 并转换成相应格式字符串
   * 如：
      当天开始的比赛显示具体时间：  9:00开始
      第二天开始的比赛显示：        明天9:00
      第三天开始的比赛显示：        后天9:00
      其它显示日期：               9月9日
   * @param  {String} str 时间字符串（格式：2016-02-26 09:12）
   * @param  {String} curServerTime 时间戳（格式：1500014061037）
   * @return {[type]}     [description]
   */
  getSpecialTimeStrForLive: function(str, curServerTime) {
      var targetTime = this.strToTime(str);
      if (!targetTime) {
          return false;
      }
      var curDateTime = this.getCurrentDateTime(curServerTime);
      var curDate = curDateTime.split(' ')[0];
      var curDateTimeEnd = this.strToTime(curDate + ' 23:59');
      var tomorrowDateTimeEnd = curDateTimeEnd + (24 * 60 * 60 * 1000);
      var tatDateTimeEnd = curDateTimeEnd + (2 * 24 * 60 * 60 * 1000);
      if (targetTime > tatDateTimeEnd) {
          return '9月9日';
      } else if (targetTime > tomorrowDateTimeEnd) {
          return '后天9:00';
      } else if (targetTime > curDateTimeEnd) {
          return '明天9:00';
      } else {
          return '9:00开始';
      }
  },

  /**
   * 时间戳转时间
   * @param {Number} curServerTime 可选 时间戳
   * @return {String} 时间字符串
   */
  getCurrentDateTime: function(curServerTime) {
      curServerTime = curServerTime || (+new Date());
      return this.dateToStringWithYear(new Date(parseInt(curServerTime)));
  },

  /**
   * 字符串转换成时间（毫秒）
   * @param  {[type]} str 时间字符串（格式：2016-02-26 09:12）
   * 注意：iphone不支持（格式：2016-02-26 09:12）需要转换成：（格式：2016/02/26 09:12）
   * @return {[type]}     [description]
   */
  strToTime: function(str) {
      try {
          return Date.parse(str.replace(/-/g, "/"));
      } catch (e) {
          console.error(e);
          return false;
      }
  },

  /**
   * 时间戳转换为字符串
   * @param  {[type]} t 时间戳
   * @param  {[type]} splitStr 分隔符
   * @return {[type]}   [description]
   */
  timeToString: function(t, splitStr) {
      return this.dateToString(this.timeToDate(t), splitStr);
  },

  /**
   * 毫秒级时间转日期时间
   * @param  {[type]} t 毫秒时间戳
   * @return {[type]}   日期时间
   */
  timeToDate: function(t) {
      return new Date(t);
  },

  /**
   * 日期转字符串
   * @param  {[type]} d           日期时间
   * @param  {[type]} splitStr 分隔符
   * @return {[type]}             默认返回 MM-dd HH:mm
   */
  dateToString: function(d, splitStr) {
      var month = (d.getMonth() + 1).toString(),
          day = d.getDate().toString(),
          h = d.getHours().toString(),
          m = d.getMinutes().toString();
      month = month.length > 1 ? month : ('0' + month);
      day = day.length > 1 ? day : ('0' + day);
      h = h.length > 1 ? h : ('0' + h);
      m = m.length > 1 ? m : ('0' + m);
      var str = month + '-' + day + ' ' + h + ':' + m; // MM-dd HH:mm
      if (splitStr) {
          str = str.replace(/-/g, splitStr);
      }
      return str;
  },

  /**
   * 日期转字符串
   * @param  {[type]} d           日期时间
   * @param  {[type]} splitStr 分隔符
   * @return {[type]}             默认返回 yyyy-MM-dd HH:mm
   */
  dateToStringWithYear: function(d, splitStr) {
      var year = d.getFullYear().toString(),
          month = (d.getMonth() + 1).toString(),
          day = d.getDate().toString(),
          h = d.getHours().toString(),
          m = d.getMinutes().toString();
      month = month.length > 1 ? month : ('0' + month);
      day = day.length > 1 ? day : ('0' + day);
      h = h.length > 1 ? h : ('0' + h);
      m = m.length > 1 ? m : ('0' + m);
      var str = year + '-' + month + '-' + day + ' ' + h + ':' + m; // yyyy-MM-dd HH:mm
      if (splitStr) {
          str = str.replace(/-/g, splitStr);
      }
      return str;
  },

  /**
   * 日期转字符串
   * @param  {[type]} d           日期时间
   * @param  {[type]} splitStr 分隔符
   * @return {[type]}             默认返回 yyyyMMdd
   */
  dateToStringWithDay: function(d, splitStr) {
    var year = d.getFullYear().toString(),
        month = (d.getMonth() + 1).toString(),
        day = d.getDate().toString(),
    month = month.length > 1 ? month : ('0' + month);
    day = day.length > 1 ? day : ('0' + day);
    var str = year  + month + day ; // yyyyMMdd
    if (splitStr) {
        str = year + splitStr + month + splitStr + day ;
    }
    return str;
},

  /**
   * 毫秒转成时间字符串
   * @param  {Number}  seconds 毫秒[必需]
   * @param  {Boolean} hasHour 是否需要区分小时[可选]
   * @return {String}          hasHour[true]: hh:mm:ss；否则[默认]：mm:ss。
   */
  msToTimestr: function(ts, hasHour){
     var seconds = (ts ? Number(ts) / 1000 : 0);
     return GLOBAL.Util.secondsToTimestr(seconds, hasHour);
  },

  /**
   * 秒转成时间字符串
   * @param  {Number}  seconds 秒[必需]
   * @param  {Boolean} hasHour 是否需要区分小时[可选]
   * @return {String}          hasHour[true]: hh:mm:ss；否则[默认]：mm:ss。
   */
  secondsToTimestr: function(seconds, hasHour){
      var hh, mm, ss;
      // 传入的时间为空或小于0
      if(seconds == null || seconds < 0 ){
          return;
      }
      seconds = Math.ceil(seconds);
      // 得到小时
      hh = seconds / 3600 | 0;
      seconds = parseInt(seconds) - hh * 3600;
      if(parseInt(hh) < 10){
          hh = '0' + hh;
      }
      // 得到分
      mm = seconds / 60 | 0;
      if(parseInt(mm) < 10){
          mm = '0' + mm;
      }
      // 得到秒
      ss = parseInt(seconds) - mm * 60;
      if(ss < 10){
          ss = '0' + ss;
      }
      if(hasHour){
          return hh + ':' + mm + ':' + ss;
      }
      return mm + ':' + ss;
  },

  /**
   * 获取滚动高度
   * @return {[type]} [description]
   */
  getScrollTop: function() {
      // if (document.documentElement && document.documentElement.scrollTop) {
      //     return document.documentElement.scrollTop;
      // } else if (document.body) {
      //     return document.body.scrollTop;
      // }
      var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
      try {
          if(document.body){
              bodyScrollTop = document.body.scrollTop;
          }
          if(document.documentElement){
              documentScrollTop = document.documentElement.scrollTop;
          }
      } catch (e) {}
      scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
      return scrollTop;
  },

  getScrollHeight: function(){
  　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
      try {
          if(document.body){
              bodyScrollHeight = document.body.scrollHeight;
          }
          if(document.documentElement){
              documentScrollHeight = document.documentElement.scrollHeight;
          }
      } catch (e) {}
      scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
      return scrollHeight;
  },

  /**
   * 获取文档高度
   * @return {[type]} [description]
   */
  getClientHeight: function() {
      if (document.body.clientHeight && document.documentElement.clientHeight) {
          return (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
      } else {
          return (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
      }
  },

  //浏览器视口的高度
  getWindowHeight: function(){
      var windowHeight = 0;
      if(document.compatMode === "CSS1Compat"){
          windowHeight = document.documentElement.clientHeight;
      }else{
          windowHeight = document.body.clientHeight;
      }
      return windowHeight;
  },

  /**
   * browser的判断
   * @return {[type]} [description]
   */
  getBrowserType: function() {
      var agent = navigator.userAgent.toLowerCase();
      var browser_type = "";
      if (agent.indexOf("msie") > 0) {
          browser_type = "IE";
      }
      if (agent.indexOf("firefox") > 0) {
          browser_type = "firefox";
      }
      if (agent.indexOf("chrome") > 0 && agent.indexOf("mb2345browser") < 0 && agent.indexOf("360 aphone browser") < 0) {
          browser_type = "chrome";
      }
      if (agent.indexOf("360 aphone browser") > 0 || agent.indexOf("qhbrowser") > 0) {
          browser_type = "360";
      }
      if (agent.indexOf("ucbrowser") > 0) {
          browser_type = "UC";
      }
      if (agent.indexOf("micromessenger") > 0) {
          browser_type = "WeChat";
      }
      if ((agent.indexOf("mqqbrowser") > 0 || agent.indexOf("qq") > 0) && agent.indexOf("micromessenger") < 0) {
          browser_type = "QQ";
      }
      if (agent.indexOf("miuibrowser") > 0) {
          browser_type = "MIUI";
      }
      if (agent.indexOf("mb2345browser") > 0) {
          browser_type = "2345";
      }
      if (agent.indexOf("sogoumobilebrowser") > 0) {
          browser_type = "sogou";
      }
      if (agent.indexOf("liebaofast") > 0) {
          browser_type = "liebao";
      }
      if (agent.indexOf('weibo') > 0) {
          browser_type = "weibo";
      }
      if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0 && agent.indexOf("ucbrowser") < 0 && agent.indexOf("micromessenger") < 0 && agent.indexOf("mqqbrowser") < 0 && agent.indexOf("miuibrowser") < 0 && agent.indexOf("mb2345browser") < 0 && agent.indexOf("sogoumobilebrowser") < 0 && agent.indexOf("liebaofast") < 0 && agent.indexOf("qhbrowser") < 0 && agent.indexOf("weibo") < 0) {
          browser_type = "safari";
      }
      return browser_type;
  },

  /**
   * OS的判断
   * @return {[type]} [description]
   */
  getOsType: function() {
      var agent = navigator.userAgent.toLowerCase(), 
          os_type = '', 
          index = '', 
          version = '';
      if (/android/i.test(navigator.userAgent)) {
          index = agent.indexOf("android");
          version = agent.substr(index + 8, 3);
          os_type = "Android " + version;
      }
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
          index = agent.indexOf("os");
          version = agent.substr(index + 3, 4);
          os_type = "iOS " + version;
      }
      if (/Linux/i.test(navigator.userAgent) && !/android/i.test(navigator.userAgent) && !/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
          os_type = "Linux";
      }
      if (/windows|win32/i.test(navigator.userAgent)) {
          os_type = "windows32";
      }
      if (/windows|win64/i.test(navigator.userAgent)) {
          os_type = "windows64";
      }
      return os_type;
  },

  /**
   * 获取当前手机屏幕分辨率的高宽
   * @return {json} {w: xxx, h: xxx}
   */
  getPixel: function(){
      var width = window.screen.width;
      var height = window.screen.height;
      return {w: width, h: height};
  },

  /**
   * 获取字符串字节数
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  getBytes: function(str){
      var byteLen=0,len=str.length;
      if(str){
          for(var i=0; i<len; i++){
              if(str.charCodeAt(i)>255){
                  byteLen += 2;
              }
              else{
                  byteLen++;
              }
          }
          return byteLen;
      }
      else{
          return 0;
      }
  },

  /**
   * Javascript获取页面来源(referer)
   * @from http://www.au92.com/archives/javascript-get-referer.html
   * @return {[type]} [description]
   */
  getReferrer: function() {
      var referrer = '';
      try {
          referrer = window.top.document.referrer;
      } catch(e) {
          if(window.parent) {
              try {
                  referrer = window.parent.document.referrer;
              } catch(e2) {
                  referrer = '';
              }
          }
      }
      if(referrer === '') {
          referrer = document.referrer;
      }
      return referrer;
  },

  /**
   * 获取url（排除url中参数）
   * @return {[type]} [description]
   */
  getUrlNoParams: function() {
      var locaUrl = window.location.href,
          endIndex = 0;
      if(locaUrl.indexOf("?") >= 0){
          endIndex = locaUrl.indexOf("?");
          return locaUrl.substring(0, endIndex);
      }
      if(locaUrl.indexOf("#") >= 0){
          endIndex = locaUrl.indexOf("#");
          return locaUrl.substring(0, endIndex);
      }
      return locaUrl;
  },

  /**
   * 获取url
   * @return {[type]} [description]
   */
  getUrl: function() {
      var locaUrl = window.location.href,
          endIndex = 0;
      if(locaUrl.indexOf("?") >= 0){
          endIndex = locaUrl.indexOf("?");
          return locaUrl.substring(0, endIndex);
      }
      if(locaUrl.indexOf("#") >= 0){
          endIndex = locaUrl.indexOf("#");
          return locaUrl.substring(0, endIndex);
      }
      return locaUrl;
  },

  /**
   * 设置iframe宽高
   * @param {[type]} ifm iframe DOM对象
   */
  setIframe: function(ifm) {   
      var ifm= ifm || window.frames['iframe'] || document.getElementById('iframe') || null;
      if(ifm){
          var subWeb = document.frames ? document.frames["iframe"].document : ifm.contentDocument;
          if(ifm != null && subWeb != null) {
             ifm.height = subWeb.body.scrollHeight;
             ifm.width = subWeb.body.scrollWidth;
          }   
      }
  },

  /**
   * 设置iframe content宽高
   * @param {[type]} ifm iframe DOM对象
   */
  setIframeContent: function(ifm) {   
      var ifm= ifm || window.frames['iframe'] || document.getElementById('iframe') || null;
      if(ifm){
          var subWeb = document.frames ? document.frames["iframe"].document : ifm.contentDocument;
          if(ifm != null && subWeb != null) {
             subWeb.documentElement.width = ifm.parentNode.offsetWidth;
             subWeb.documentElement.height = ifm.parentNode.offsetHeight;
             subWeb.body.setAttribute('width', ifm.parentNode.offsetWidth);
             subWeb.body.setAttribute('height', ifm.parentNode.offsetHeight);
          }   
      }
  },

  createStyle: function(style, callback, element){
      if(style){
          var head = document.getElementsByTagName('head')[0],
              css = document.createElement('style');
          css.innerHTML =  style;
          if(element){
              element.appendChild(css);
          } else {
              head.appendChild(css);
          }
          //执行回调
          callback && callback();
      }
  },

  /**
   * pageVisibility.js by zhangxinxu 2012-11-29
   *  var pageVisibility = {
   *      hidden: Boolean
   *      visibilityState: String
   *      visibilitychange: Function
   *  };
   * @return {Object} {
   *    hidden: Boolean
   *    visibilityState: String
   *    visibilitychange: Function
   * }
   */
  pageVisibility: function(){
      var pageVisibility = (function() {
          var prefixSupport, keyWithPrefix = function(prefix, key) {
              if (prefix !== "") {
                  // 首字母大写
                  return prefix + key.slice(0,1).toUpperCase() + key.slice(1);    
              }
              return key;
          };
          var isPageVisibilitySupport = (function() {
              var support = false;
              if (typeof window.screenX === "number") {
                  ["webkit", "moz", "ms", "o", ""].forEach(function(prefix) {
                      if (support === false && document[keyWithPrefix(prefix, "hidden")] !== undefined) {
                          prefixSupport = prefix;
                          support = true;  
                      }
                  });        
              }
              return support;
          })();
          
          var isHidden = function() {
              if (isPageVisibilitySupport) {
                  return document[keyWithPrefix(prefixSupport, "hidden")];
              }
              return undefined;
          };
          
          var visibilityState = function() {
              if (isPageVisibilitySupport) {
                  return document[keyWithPrefix(prefixSupport, "visibilityState")];
              }
              return undefined;
          };
          
          return {
              hidden: isHidden(),
              visibilityState: visibilityState(),
              visibilitychange: function(fn, usecapture) {
                  usecapture = undefined || false;
                  if (isPageVisibilitySupport && typeof fn === "function") {
                      return document.addEventListener(prefixSupport + "visibilitychange", function(evt) {
                          this.hidden = isHidden();
                          this.visibilityState = visibilityState();
                          fn.call(this, evt);
                      }.bind(this), usecapture);
                  }
                  return undefined;
              }
          };    
      })(undefined);
      return pageVisibility;
  }

};

/* 原声JavaScript扩展 */
GLOBAL.Js = {
  /**
   * 去空白
   * @param ostr 需处理的值
   * @returns {string|void|XML|*} 处理后的值
   */
  trim: function (ostr){
      return ostr.replace(/^\s+|\s+$/g,'');
  },
  isNumber: function (s){
      return !isNaN(s);
  },
  isString: function (s){
      return typeof s === 'string';
  },
  isBoolean: function (s){
      return typeof s === 'boolean';
  },
  isFunction: function (s){
      return typeof s === 'function';
  },
  isNull: function (s){
      return s === null;
  },
  isUndefined: function (s){
      return typeof s === 'undefined';
  },
  isEmpty: function (s){
      return /^\s*$/.test(s);
  },
  isArray: function (s){
      return s instanceof Array;
  }
};

/* cookie扩展 */
GLOBAL.Cookie = {
  /**
   * 设置cookie
   * @param name 名称
   * @param value 值
   * @param expires 有效时间（单位：小时）（可选） 默认：24h
   */
  set: function(name, value, expires){
      var expTimes = expires ? (Number(expires) * 60 * 60 * 1000) : (24 * 60 * 60 * 1000); // 毫秒
      var expDate = new Date();
      expDate.setTime(expDate.getTime() + expTimes);
      var expString = expires ? '; expires=' + expDate.toUTCString() : '';
      var pathString = '; path=/';
      document.cookie = name + '=' + encodeURI(value) + expString + pathString;
  },
  /**
   * 读cookie
   * @param name
   */
  get: function(name){
      var cookieStr = '; ' + document.cookie + '; ';
      var index = cookieStr.indexOf('; ' + name + '=');
      if(index !== -1){
          var s = cookieStr.substring(index + name.length + 3, cookieStr.length);
          return decodeURI(s.substring(0, s.indexOf('; ')));
      } else {
          return null;
      }
  },
  /**
   * 删除cookie
   * @param name
   */
  del: function(name){
      var exp = new Date(new Date().getTime() - 1);
      var s = this.read(name);
      if(s !== null) {
          document.cookie = name + '=' + s + '; expires=' + exp.toUTCString() + '; path=/';
      }
  }
};

GLOBAL.Array = {
  /**
   * 获取数组1中排除数组2中的值之后的数组
   * @param  {[type]} arr1 仅包含基本数据类型值的数组1
   * @param  {[type]} arr2 仅包含基本数据类型值的数组2
   * @return {[type]}      [description]
   */
  difference: function(arr1, arr2){
      try {
          var arr = [],
              i = 0,
              len1 = arr1.length;
          for (i = 0; i < len1; i++) {
              if(!arr2.contains(arr1[i])){
                  arr.push(arr1[i]);
              }
          }
          return arr;
      } catch(e) {
          console.error(e);
          return arr1;
      }
  }
};

// 操作系统
GLOBAL.Os = function () { 
  var u = navigator.userAgent,
      Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"),  
      mobile = false;  
  for (var v = 0; v < Agents.length; v++) {  
      if (u.indexOf(Agents[v]) > -1) { 
          mobile = true; 
          break; 
      }  
  }
  return {
      //移动终端浏览器版本信息 
      mobile: mobile, //是否为移动终端 
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
      iphone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器 
      ipad: u.indexOf('iPad') > -1, //是否iPad 
      webapp: u.indexOf('Safari') === -1 //是否web应该程序，没有头部与底部 
  }; 
}();

// 浏览器
GLOBAL.Browser = function () { 
  var ua = navigator.userAgent, //获取判断用的对象
      mobile = GLOBAL.Os.mobile;
  if(mobile){    // mobile
      //移动终端浏览器版本信息
      return { 
          wechat: ua.indexOf('MicroMessenger') > -1, // 在微信中打开  
          weibo: ua.toLowerCase().indexOf('weibo') > -1, // 在新浪微博客户端打开
          qq: ua.indexOf('QQ/') > -1, // 在QQ、QQ空间中打开 
          qqbrowser: ua.indexOf('MQQBrowser') > -1 // 在QQ空间打开
      }; 
  }
  return {};
}();

GLOBAL.App = function () {
    return {
        // 获取客户端信息
    getClientInfo: function (cb) {
        var obj = {
          'method': 'getClientInfo'
        };
        var userInfo = null
        window.setClientInfo = cb 
        try {
            if (GLOBAL.Os.android) { // 安卓
                window.JSToNative.postMessage(JSON.stringify(obj));
            } else { // ios
                window.webkit.messageHandlers.JSToNative_iOS.postMessage(obj);
            }
        } catch (e) { 
            console.error(e); 
        }
      },
    // 获取用户信息
    getUserInfo: function (cb) {
        var obj = {
            'method': 'getUserInfo'
        };
        var userInfo = null
        window.setUserInfo = cb 
        try {
            if (GLOBAL.Os.android) { // 安卓
                window.JSToNative.postMessage(JSON.stringify(obj));
            } else { // ios
                window.webkit.messageHandlers.JSToNative_iOS.postMessage(obj);
            }
        } catch (e) { 
            console.error(e); 
        }
    },
    toast: function (text) {
        var obj = {
            'method': 'alert',
            'msg': text
        };
        try {
            if (GLOBAL.Os.android) { // 安卓
                window.JSToNative.postMessage(JSON.stringify(obj));
            } else { // ios
                window.webkit.messageHandlers.JSToNative_iOS.postMessage(obj);
            }
        } catch (e) { 
            console.error(e); 
        }
    },
    // 日志发送
    sentLog: function (btn_id) {
        var scope = this
        var obj = {
          'method': 'DotStatistics',
          'btn_id': btn_id
        };
        try {
          if (GLOBAL.Os.android) { // 安卓
            window.JSToNative.postMessage(JSON.stringify(obj));
          } else { // ios
            window.webkit.messageHandlers.JSToNative_iOS.postMessage(obj);
          }
        } catch (e) { 
          console.error(e); 
        }
      },
      postMessage: function (obj) {
        try {
            if (GLOBAL.Os.android) { // 安卓
                window.JSToNative.postMessage(JSON.stringify(obj));
            } else { // ios
                window.webkit.messageHandlers.JSToNative_iOS.postMessage(obj);
            }
        } catch (e) { 
            console.error(e); 
        }
      },
      getConfig: function () {//公共配置
        config={
            url: 'http://test-api.dftoutiao.com/', // 接口地址http://test-api.dftoutiao.com/ 、https://test-kp.dftoutiao.com/
            hostname: 'http://test-api.dftoutiao.com/dftt_h5/',  // 笔记本测试地址,上传cdn后需要改为cdn路径
            userInfo: {accid: '0'}//accid配置
        }
        return config;
      },

      // 获取链接参数
      getParamsFromUrl: function () {
        var paramStr = window.location.search.slice(1).split('&')
        var obj = {}
        paramStr.map(function (item) {
          var arr = item.split('=')
          obj[arr[0]] = arr[1];
        })
        return obj
      },
      // 生命周期app回调
      // 页面显示
      viewDidAppear: function (cb) {
        window.viewDidAppear = cb
      },
      // 页面消失
      viewDidDisAppear: function (cb) {
        window.viewDidDisAppear = cb
      },
      // app前台显示
      enterForeground: function (cb) {
        window.enterForeground = cb
      },
      // app 后台
      enterBackground: function (cb) {
        window.enterBackground = cb
      },
      setCache: function (key, value) {
        var obj = {
            'method': 'setCache',
            'key': key,
            'value': value
        }
        try {
            if (GLOBAL.Os.android) { // 安卓
                window.JSToNative.postMessage(JSON.stringify(obj));
            } else { // ios
                window.webkit.messageHandlers.JSToNative_iOS.postMessage(obj);
            }
        } catch (e) { 
            console.error(e); 
        }
      },
      getCache: function (key, cb) {
        var obj = {
            'method': 'getCache',
            'key': key
        }
        window.getCacheCallback = cb
        try {
            if (GLOBAL.Os.android) { // 安卓
                window.JSToNative.postMessage(JSON.stringify(obj));
            } else { // ios
                window.webkit.messageHandlers.JSToNative_iOS.postMessage(obj);
            }
        } catch (e) { 
            console.error(e); 
        }
      },
      openConfirm: function (text, cb, cancelCb) {
        $('#universalConfirm .dialog-text p').text(text)
        $('#universalConfirm').addClass('flex').css({
            'opacity': 1
        }).fadeIn(300)
        $('#universalConfirm #ok').unbind('click').bind('click', function () {
            $('#goldTree').animate({'opacity': '0'}, 300, function () {
                $('#universalConfirm').removeClass('flex')
            })
            cb && typeof(cb) === 'function' && cb()
        })
        $('#universalConfirm #cancel').unbind('click').bind('click', function () {
            $('#goldTree').animate({'opacity': '0'}, 300, function () {
                $('#universalConfirm').removeClass('flex')
            })
            cancelCb && typeof(cancelCb) === 'function' && cancelCb()
        })
      }
    }
}();

window.JSON = window.JSON || {
  parse: function (str) {
    return eval('(' + str + ')')
  },
  stringify: function () {
      var e = Object.prototype.toString,
          n = Array.isArray || function (n) {
          return '[object Array]' === e.call(n)
      },
      t = {
          '"': '\\"',
          '\\': '\\\\',
          '\b': '\\b',
          '\f': '\\f',
          '\n': '\\n',
          '\r': '\\r',
          '	': '\\t'
      },
      r = function (e) {
          return t[e] || '\\u' + (e.charCodeAt(0) + 65536).toString(16).substr(1)
      },
      i = /[\\"\u0000-\u001F\u2028\u2029]/g
      return function a (t) {
          if (null == t) return 'null'
          if ('number' == typeof t) return isFinite(t) ? t.toString() : 'null'
          if ('boolean' == typeof t) return t.toString()
          if ('object' == typeof t) {
              if ('function' == typeof t.toJSON) return a(t.toJSON())
              if (n(t)) {
                  for (var o = '[', c = 0; c < t.length; c++) o += (c ? ', ' : '') + a(t[c])
                  return o + ']'
              }
              if ('[object Object]' === e.call(t)) {
                  var l = []
                  for (var val in t) t.hasOwnProperty(val) && l.push(a(val) + ': ' + a(t[val]))
                  return '{' + l.sort().join(', ') + '}'
              }
          }
          return '"' + t.toString().replace(i, r) + '"'
      }
  }()
};

/**
* 返回顶部动画
*/
//goTop(500);//500ms内滚回顶部
// function goTop(times) {
//     if (!!!times) {
//         $(window).scrollTop(0);
//         return;
//     }
//     var sh = $('body').scrollTop(); //移动总距离
//     var inter = 13.333; //ms,每次移动间隔时间
//     var forCount = Math.ceil(times / inter); //移动次数
//     var stepL = Math.ceil(sh / forCount); //移动步长
//     var timeId = null;

//     function ani() {
//         !!timeId && clearTimeout(timeId);
//         timeId = null;
//         //console.log($('body').scrollTop());
//         if ($('body').scrollTop() <= 0 || forCount <= 0) { //移动端判断次数好些，因为移动端的scroll事件触发不频繁，有可能检测不到有<=0的情况
//             $('body').scrollTop(0);
//             return;
//         }
//         forCount--;
//         sh -= stepL;
//         $('body').scrollTop(sh);
//         timeId = setTimeout(function() { ani(); }, inter);
//     }
//     ani();
// }


var App_Js_Agreement = 'js-m-action://';
/* 被APP调用的全局外部方法 */
// 分享
var GLOBAL_APP_PAR_shareUrl;
var GLOBAL_APP_PAR_shareTitle;
var GLOBAL_APP_PAR_shareDes;
var GLOBAL_APP_PAR_shareImg;
//分享新增
var GLOBAL_APP_PAR_shareSystem;
var GLOBAL_APP_PAR_shareType;
var GLOBAL_APP_PAR_shareTip;
var GLOBAL_APP_PAR_shareBons;
var GLOBAL_APP_PAR_shareBgImg;
var GLOBAL_APP_PAR_shareFrom;
function shareWithWebdata(){
	return GLOBAL_APP_PAR_shareImg+'@#$'+GLOBAL_APP_PAR_shareTitle+'@#$'+GLOBAL_APP_PAR_shareDes+'@#$'+GLOBAL_APP_PAR_shareUrl+'@#$'+GLOBAL_APP_PAR_shareSystem+'@#$'+GLOBAL_APP_PAR_shareType+'@#$'+GLOBAL_APP_PAR_shareTip+'@#$'+GLOBAL_APP_PAR_shareBons+'@#$'+GLOBAL_APP_PAR_shareBgImg+'@#$'+GLOBAL_APP_PAR_shareFrom;
}
var GLOBAL_APP_PAR_pushimg;
function pushimgToClient(){
	return GLOBAL_APP_PAR_pushimg;
}
function shareWithWebdataToWXHY(){
	return shareWithWebdata();
}
function shareWithWebdataToWXPYQ(){
	return shareWithWebdata();
}
function shareWithWebdataToQQ(){
	return shareWithWebdata();
}
function shareWithWebdataToQQKJ(){
	return shareWithWebdata();
}
function shareWithWebdataToSINAWB(){
	return shareWithWebdata();
}

// 获得用户信息
var GLOBAL_APP_PAR_userAccid;
var GLOBAL_APP_PAR_userMobile;
var GLOBAL_APP_PAR_userNick;
var GLOBAL_APP_PAR_userImage;
var GLOBAL_APP_PAR_userBonus;
var GLOBAL_APP_PAR_userMoney;
function setUserInfo(accid, mobile, nick, image, bonus, money){
	GLOBAL_APP_PAR_userAccid = accid;
	GLOBAL_APP_PAR_userMobile = mobile;
	GLOBAL_APP_PAR_userNick = nick;
	GLOBAL_APP_PAR_userImage = image;
	GLOBAL_APP_PAR_userBonus = bonus;
	GLOBAL_APP_PAR_userMoney = money;
}

// 获得客户端信息
var GLOBAL_APP_PAR_clientVersion = null;
var GLOBAL_APP_PAR_clientOEM = null;
var GLOBAL_APP_PAR_clientQid = null;
var GLOBAL_APP_PAR_clientIMEI = null;
var GLOBAL_APP_PAR_clientMachine = null;
var GLOBAL_APP_PAR_clientPlantform = null;
var GLOBAL_APP_PAR_clientQidWithtime = null;
function setClientInfo(version, oem, qid, imei, machine, plantform, qidwithtime){
	GLOBAL_APP_PAR_clientVersion = version;
	GLOBAL_APP_PAR_clientOEM = oem;
	GLOBAL_APP_PAR_clientQid = qid;
	GLOBAL_APP_PAR_clientIMEI = imei;
	GLOBAL_APP_PAR_clientMachine = machine;
	GLOBAL_APP_PAR_clientPlantform = plantform;
	GLOBAL_APP_PAR_clientQidWithtime = qidwithtime;
}

// 获得用户微信信息
var GLOBAL_APP_PAR_userNick;
var GLOBAL_APP_PAR_userImage;
var GLOBAL_APP_PAR_userOpenid;
function setUserWxInfo(nick, image, openid){
	GLOBAL_APP_PAR_userNick = nick;
	GLOBAL_APP_PAR_userImage = image;
	GLOBAL_APP_PAR_userOpenid = openid;
}

/* JS APP交互插件 */
(function ($) {
	function callapp(fun_name){
		location.href = App_Js_Agreement+fun_name;
	}
	function init_shar_info(opt){
		GLOBAL_APP_PAR_shareUrl = opt.shareUrl;
		GLOBAL_APP_PAR_shareTitle = opt.shareTitle;
		GLOBAL_APP_PAR_shareDes = opt.shareDes;
		GLOBAL_APP_PAR_shareImg = opt.shareImg;
        //新增分享参数5个
		GLOBAL_APP_PAR_shareSystem = opt.shareSystem;
		GLOBAL_APP_PAR_shareType = opt.shareType;
		GLOBAL_APP_PAR_shareTip = opt.shareTip;
		GLOBAL_APP_PAR_shareBons = opt.shareBons;
		GLOBAL_APP_PAR_shareBgImg = opt.shareBgImg;
		GLOBAL_APP_PAR_shareFrom = opt.shareFrom;

	}
	function init_pushimg_info(opt){
		GLOBAL_APP_PAR_pushimg = opt.imgUrl;
	}
	Zepto.ttapp = {
		share: function(opt){
			init_shar_info(opt);
			callapp('shareWithWebdata');
		},
		pushimg: function(opt){
			init_pushimg_info(opt);
			callapp('pushimgToClient');
		},
		login: function(){
			callapp('goToViewLogin');
		},
		home: function(){
			callapp('goToViewHome');
		},
		my: function(){
			callapp('goToViewMy');
		},
		wallet: function(){
			callapp('goToViewWallet');
		},
		mall: function(){
			callapp('goToViewmall');
		},
		mission: function(){
			callapp('goToViewmission');
		},
		invitation: function(){
			callapp('goToViewInvitation');
		},
		wakeapprentice: function(){
			callapp('goToViewWakeupApprentice');
		},
		bindmobile: function(){
			callapp('goToViewBindMobile');
		},
		bindwx: function(){
			callapp('goToViewBindWx');
		},
		openwx: function(){
			callapp('openWxClient');
		},
		userinfo: function(_callback){
			GLOBAL_APP_PAR_userAccid = null;
			callapp('setUserInfo');
			var get_userinfo_timer = setInterval(function(){
				if(GLOBAL_APP_PAR_userAccid != null){
					clearInterval(get_userinfo_timer);
					_callback({
						Accid: GLOBAL_APP_PAR_userAccid,
						Mobile: GLOBAL_APP_PAR_userMobile,
						Nick: GLOBAL_APP_PAR_userNick,
						Image: GLOBAL_APP_PAR_userImage,
						Bonus: GLOBAL_APP_PAR_userBonus,
						Money: GLOBAL_APP_PAR_userMoney
					});
				}
			}, 500);
		},
		share_wxhy: function(opt){
			init_shar_info(opt);
			callapp('shareWithWebdataToWXHY');
		},
		share_wxpyq: function(opt){
			init_shar_info(opt);
			callapp('shareWithWebdataToWXPYQ');
		},
		share_qq: function(opt){
			init_shar_info(opt);
			callapp('shareWithWebdataToQQ');
		},
		share_qqkj: function(opt){
			init_shar_info(opt);
			callapp('shareWithWebdataToQQKJ');
		},
		share_sinawb: function(opt){
			init_shar_info(opt);
			callapp('shareWithWebdataToSINAWB');
		},
		clientinfo: function(_callback){
			callapp('setClientInfo');
			var get_clientinfo_timer = setInterval(function(){
				if(GLOBAL_APP_PAR_clientPlantform != null){
					clearInterval(get_clientinfo_timer);
					_callback({
						Version: GLOBAL_APP_PAR_clientVersion,
						OEM: GLOBAL_APP_PAR_clientOEM,
						Qid: GLOBAL_APP_PAR_clientQid,
						IMEI: GLOBAL_APP_PAR_clientIMEI,
						Machine: GLOBAL_APP_PAR_clientMachine,
						Plantform: GLOBAL_APP_PAR_clientPlantform,
						QidWithTime: GLOBAL_APP_PAR_clientQidWithtime
					});
				}
			}, 500);
		},
		userwxinfo: function(_callback){
			callapp('setUserWxInfo');
			var get_userwxinfo_timer = setInterval(function(){
				if(GLOBAL_APP_PAR_userNick != null){
					clearInterval(get_userwxinfo_timer);
					_callback({
						Nick: GLOBAL_APP_PAR_userNick,
						Image: GLOBAL_APP_PAR_userImage,
						Openid: GLOBAL_APP_PAR_userOpenid
					});
				}
			}, 1000);
		}
	};
})(Zepto);
/**
 * 数据上报
 * @author zhuangxiaofan
 * @date 2018-01-17
 * @requires jQuery
 *
 * new AppReport({
       actentryid: 'null',
       actid: 'lucky_in',
       materialid: 'linkinvite'
   }, {
       invite: 'invite1',
   });
 * 第一个参数 设置上报参数
 * 第二个参数 绑定点击事件的按钮和上报类型,
 *      { 按钮id : '上报的type' }
 *      如传入 { invite : 'invite1' } 将执行
 *          $('invite').click(function() {
 *              this.post('invite1');
 *          });
 *
 */
AppReport = function($) {
    const EMPTY = 'null';
    var data = {
        'uid': EMPTY,
        'from': EMPTY,
        'softname': EMPTY,
        'appqid': EMPTY,
        'ttaccid': EMPTY,
        'thisurl': location.href,
        'actentryid': EMPTY,
        'actid': EMPTY,
        'materialid': '',
        'type': EMPTY,
        'loginid': EMPTY,
        'softtype': 'toutiao',
        'apptypeid': 'DFTT',
        'ver': EMPTY,
        'os': EMPTY,
        'deviceid': EMPTY
    };

    function AppReport(params) {

        this.console = function () {
            console.log(data);
        };

        /**
         * 设置参数
         * @param params
         * @returns {AppReport}
         */
        this.set = function(params) {
            for (var i in params) {
                data[i] = params[i];
            }
            return this;
        };

        /**
         * 执行上报方法
         */
        this.post = function() {

            if (arguments.length > 0) {
                this.set({type: arguments[0]});
            }

            $.ajax({
                url: '//stinvi.dftoutiao.com/appstatistics/appact',
                data: data,
                type: 'GET',
                dataType: 'jsonp',
                jsonp: 'jsonpcallback',
                timeout: 5000,
                success: function (response) {}
            });
        };

        /**
         *
         * @param userinfo
         * @returns {AppReport}
         */
        this.setUserInfo = function(userinfo) {
            this.set({
                ttaccid: userinfo.Accid ? userinfo.Accid : EMPTY,
                loginid: userinfo.Accid ? userinfo.Accid : EMPTY
            });
            return this;
        };

        /**
         *
         * @param clientinfo
         * @returns {AppReport}
         */
        this.setClientInfo = function(clientinfo) {
            this.set({
                uid: clientinfo.IMEI ? clientinfo.IMEI : EMPTY,
                softname: (clientinfo.OEM && clientinfo.Plantform)
                    ? (clientinfo.OEM + (clientinfo.Plantform == "android" ? "Android" : "IOS"))
                    : EMPTY,
                appqid: clientinfo.QidWithTime ? clientinfo.QidWithTime : (clientinfo.Qid ? clientinfo.Qid : EMPTY),
                apptypeid: clientinfo.OEM ? clientinfo.OEM : EMPTY,
                ver: clientinfo.Version ? clientinfo.Version : EMPTY,
                os: clientinfo.Plantform ? clientinfo.Plantform : EMPTY,
                deviceid: clientinfo.IMEI ? clientinfo.IMEI : EMPTY
            });
            return this;
        };

        this.set(params);

        var m = this,
            postButtons = arguments[1] || {};

        //绑定点击上报事件
        for (var i in postButtons) {
            $('#'+i).click(function() {
                m.post(postButtons[this.id]);
            })
        }

        // var c = function() {
        //     return [
        //         //setCookie
        //         function(name) {
        //             var Days = 30;
        //             var exp  = new Date();
        //             exp.setTime(exp.getTime() + Days*24*60*60*1000);
        //             document.cookie = name + "="+ encodeURI(value) + ";expires=" + exp.toUTCString();
        //         },
        //         //getCookie
        //         function(name) {
        //             var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        //             if(arr=document.cookie.match(reg))
        //                 return decodeURI(arr[2]);
        //             else
        //                 return null;
        //         }
        //     ];
        // }
    };

    return AppReport;
}($);