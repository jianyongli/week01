!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(J){var o,t=function(){function u(t){return null==t?String(t):H[I.call(t)]||"object"}function a(t){return"function"==u(t)}function o(t){return null!=t&&t==t.window}function s(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(t){return"object"==u(t)}function c(t){return i(t)&&!o(t)&&Object.getPrototypeOf(t)==Object.prototype}function l(t){var e=!!t&&"length"in t&&t.length,n=E.type(t);return"function"!=n&&!o(t)&&("array"==n||0===e||"number"==typeof e&&0<e&&e-1 in t)}function f(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function n(t){return t in e?e[t]:e[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function h(t,e){return"number"!=typeof e||L[f(t)]?e:e+"px"}function r(t){return"children"in t?O.call(t.children):E.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function p(t,e){var n,r=t?t.length:0;for(n=0;n<r;n++)this[n]=t[n];this.length=r,this.selector=e||""}function d(t,e){return null==e?E(t):E(t).filter(e)}function m(t,e,n,r){return a(e)?e.call(t,n,r):e}function v(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",r=n&&n.baseVal!==x;return e===x?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function g(e){try{return e?"true"==e||"false"!=e&&("null"==e?null:+e+""==e?+e:/^[\[\{]/.test(e)?E.parseJSON(e):e):e}catch(t){return e}}var x,b,E,j,T,w,C=[],S=C.concat,N=C.filter,O=C.slice,P=J.document,A={},e={},L={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},D=/^\s*<(\w+|!)[^>]*>/,$=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,k=/^(?:body|html)$/i,M=/([A-Z])/g,Z=["val","css","html","text","data","width","height","offset"],t=P.createElement("table"),z=P.createElement("tr"),R={tr:P.createElement("tbody"),tbody:t,thead:t,tfoot:t,td:z,th:z,"*":P.createElement("div")},q=/complete|loaded|interactive/,_=/^[\w-]*$/,H={},I=H.toString,V={},B=P.createElement("div"),X={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},U=Array.isArray||function(t){return t instanceof Array};return V.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=B).appendChild(t),r=~V.qsa(i,e).indexOf(t),o&&B.removeChild(t),r},T=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},w=function(n){return N.call(n,function(t,e){return n.indexOf(t)==e})},V.fragment=function(t,e,n){var r,i,o;return $.test(t)&&(r=E(P.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(F,"<$1></$2>")),e===x&&(e=D.test(t)&&RegExp.$1),e in R||(e="*"),(o=R[e]).innerHTML=""+t,r=E.each(O.call(o.childNodes),function(){o.removeChild(this)})),c(n)&&(i=E(r),E.each(n,function(t,e){-1<Z.indexOf(t)?i[t](e):i.attr(t,e)})),r},V.Z=function(t,e){return new p(t,e)},V.isZ=function(t){return t instanceof V.Z},V.init=function(t,e){var n,r;if(!t)return V.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&D.test(t))n=V.fragment(t,RegExp.$1,e),t=null;else{if(e!==x)return E(e).find(t);n=V.qsa(P,t)}else{if(a(t))return E(P).ready(t);if(V.isZ(t))return t;if(U(t))r=t,n=N.call(r,function(t){return null!=t});else if(i(t))n=[t],t=null;else if(D.test(t))n=V.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==x)return E(e).find(t);n=V.qsa(P,t)}}return V.Z(n,t)},(E=function(t,e){return V.init(t,e)}).extend=function(e){var n,t=O.call(arguments,1);return"boolean"==typeof e&&(n=e,e=t.shift()),t.forEach(function(t){!function t(e,n,r){for(b in n)r&&(c(n[b])||U(n[b]))?(c(n[b])&&!c(e[b])&&(e[b]={}),U(n[b])&&!U(e[b])&&(e[b]=[]),t(e[b],n[b],r)):n[b]!==x&&(e[b]=n[b])}(e,t,n)}),e},V.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=_.test(o);return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:O.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},E.contains=P.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},E.type=u,E.isFunction=a,E.isWindow=o,E.isArray=U,E.isPlainObject=c,E.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},E.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},E.inArray=function(t,e,n){return C.indexOf.call(e,t,n)},E.camelCase=T,E.trim=function(t){return null==t?"":String.prototype.trim.call(t)},E.uuid=0,E.support={},E.expr={},E.noop=function(){},E.map=function(t,e){var n,r,i,o,a=[];if(l(t))for(r=0;r<t.length;r++)null!=(n=e(t[r],r))&&a.push(n);else for(i in t)null!=(n=e(t[i],i))&&a.push(n);return 0<(o=a).length?E.fn.concat.apply([],o):o},E.each=function(t,e){var n,r;if(l(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(!1===e.call(t[r],r,t[r]))return t;return t},E.grep=function(t,e){return N.call(t,e)},J.JSON&&(E.parseJSON=JSON.parse),E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){H["[object "+e+"]"]=e.toLowerCase()}),E.fn={constructor:V.Z,length:0,forEach:C.forEach,reduce:C.reduce,push:C.push,sort:C.sort,splice:C.splice,indexOf:C.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=V.isZ(e)?e.toArray():e;return S.apply(V.isZ(this)?this.toArray():this,n)},map:function(n){return E(E.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return E(O.apply(this,arguments))},ready:function(t){return q.test(P.readyState)&&P.body?t(E):P.addEventListener("DOMContentLoaded",function(){t(E)},!1),this},get:function(t){return t===x?O.call(this):this[0<=t?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(n){return C.every.call(this,function(t,e){return!1!==n.call(t,e,t)}),this},filter:function(e){return a(e)?this.not(this.not(e)):E(N.call(this,function(t){return V.matches(t,e)}))},add:function(t,e){return E(w(this.concat(E(t,e))))},is:function(t){return 0<this.length&&V.matches(this[0],t)},not:function(e){var n=[];if(a(e)&&e.call!==x)this.each(function(t){e.call(this,t)||n.push(this)});else{var r="string"==typeof e?this.filter(e):l(e)&&a(e.item)?O.call(e):E(e);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return E(n)},has:function(t){return this.filter(function(){return i(t)?E.contains(this,t):E(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:E(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:E(t)},find:function(t){var n=this;return t?"object"==typeof t?E(t).filter(function(){var e=this;return C.some.call(n,function(t){return E.contains(t,e)})}):1==this.length?E(V.qsa(this[0],t)):this.map(function(){return V.qsa(this,t)}):E()},closest:function(n,r){var i=[],o="object"==typeof n&&E(n);return this.each(function(t,e){for(;e&&!(o?0<=o.indexOf(e):V.matches(e,n));)e=e!==r&&!s(e)&&e.parentNode;e&&i.indexOf(e)<0&&i.push(e)}),E(i)},parents:function(t){for(var e=[],n=this;0<n.length;)n=E.map(n,function(t){return(t=t.parentNode)&&!s(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return d(e,t)},parent:function(t){return d(w(this.pluck("parentNode")),t)},children:function(t){return d(this.map(function(){return r(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||O.call(this.childNodes)})},siblings:function(t){return d(this.map(function(t,e){return N.call(r(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return E.map(this,function(t){return t[e]})},show:function(){return this.each(function(){var t,e,n;"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=(t=this.nodeName,A[t]||(e=P.createElement(t),P.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),A[t]=n),A[t]))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(e){var n=a(e);if(this[0]&&!n)var r=E(e).get(0),i=r.parentNode||1<this.length;return this.each(function(t){E(this).wrapAll(n?e.call(this,t):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){E(this[0]).before(t=E(t));for(var e;(e=t.children()).length;)t=e.first();E(t).append(this)}return this},wrapInner:function(i){var o=a(i);return this.each(function(t){var e=E(this),n=e.contents(),r=o?i.call(this,t):i;n.length?n.wrapAll(r):e.append(r)})},unwrap:function(){return this.parent().each(function(){E(this).replaceWith(E(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=E(this);(e===x?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(t){return E(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return E(this.pluck("nextElementSibling")).filter(t||"*")},html:function(n){return 0 in arguments?this.each(function(t){var e=this.innerHTML;E(this).empty().append(m(this,n,t,e))}):0 in this?this[0].innerHTML:null},text:function(n){return 0 in arguments?this.each(function(t){var e=m(this,n,t,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this.pluck("textContent").join(""):null},attr:function(e,n){var t;return"string"!=typeof e||1 in arguments?this.each(function(t){if(1===this.nodeType)if(i(e))for(b in e)v(this,b,e[b]);else v(this,e,m(this,n,t,this.getAttribute(e)))}):0 in this&&1==this[0].nodeType&&null!=(t=this[0].getAttribute(e))?t:x},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){v(this,t)},this)})},prop:function(e,n){return e=X[e]||e,1 in arguments?this.each(function(t){this[e]=m(this,n,t,this[e])}):this[0]&&this[0][e]},removeProp:function(t){return t=X[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(M,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?g(r):x},val:function(e){return 0 in arguments?(null==e&&(e=""),this.each(function(t){this.value=m(this,e,t,this.value)})):this[0]&&(this[0].multiple?E(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(o){if(o)return this.each(function(t){var e=E(this),n=m(this,o,t,e.offset()),r=e.offsetParent().offset(),i={top:n.top-r.top,left:n.left-r.left};"static"==e.css("position")&&(i.position="relative"),e.css(i)});if(!this.length)return null;if(P.documentElement!==this[0]&&!E.contains(P.documentElement,this[0]))return{top:0,left:0};var t=this[0].getBoundingClientRect();return{left:t.left+J.pageXOffset,top:t.top+J.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,e){if(arguments.length<2){var n=this[0];if("string"==typeof t){if(!n)return;return n.style[T(t)]||getComputedStyle(n,"").getPropertyValue(t)}if(U(t)){if(!n)return;var r={},i=getComputedStyle(n,"");return E.each(t,function(t,e){r[e]=n.style[T(e)]||i.getPropertyValue(e)}),r}}var o="";if("string"==u(t))e||0===e?o=f(t)+":"+h(t,e):this.each(function(){this.style.removeProperty(f(t))});else for(b in t)t[b]||0===t[b]?o+=f(b)+":"+h(b,t[b])+";":this.each(function(){this.style.removeProperty(f(b))});return this.each(function(){this.style.cssText+=";"+o})},index:function(t){return t?this.indexOf(E(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&C.some.call(this,function(t){return this.test(y(t))},n(t))},addClass:function(n){return n?this.each(function(t){if("className"in this){j=[];var e=y(this);m(this,n,t,e).split(/\s+/g).forEach(function(t){E(this).hasClass(t)||j.push(t)},this),j.length&&y(this,e+(e?" ":"")+j.join(" "))}}):this},removeClass:function(e){return this.each(function(t){if("className"in this){if(e===x)return y(this,"");j=y(this),m(this,e,t,j).split(/\s+/g).forEach(function(t){j=j.replace(n(t)," ")}),y(this,j.trim())}})},toggleClass:function(n,r){return n?this.each(function(t){var e=E(this);m(this,n,t,y(this)).split(/\s+/g).forEach(function(t){(r===x?!e.hasClass(t):r)?e.addClass(t):e.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===x?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===x?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=k.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(E(t).css("margin-top"))||0,n.left-=parseFloat(E(t).css("margin-left"))||0,r.top+=parseFloat(E(e[0]).css("border-top-width"))||0,r.left+=parseFloat(E(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||P.body;t&&!k.test(t.nodeName)&&"static"==E(t).css("position");)t=t.offsetParent;return t})}},E.fn.detach=E.fn.remove,["width","height"].forEach(function(r){var i=r.replace(/./,function(t){return t[0].toUpperCase()});E.fn[r]=function(e){var t,n=this[0];return e===x?o(n)?n["inner"+i]:s(n)?n.documentElement["scroll"+i]:(t=this.offset())&&t[r]:this.each(function(t){(n=E(this)).css(r,m(this,e,t,n[r]()))})}}),["after","prepend","before","append"].forEach(function(e,a){var s=a%2;E.fn[e]=function(){var n,r,i=E.map(arguments,function(t){var e=[];return"array"==(n=u(t))?(t.forEach(function(t){return t.nodeType!==x?e.push(t):E.zepto.isZ(t)?e=e.concat(t.get()):void(e=e.concat(V.fragment(t)))}),e):"object"==n||null==t?t:V.fragment(t)}),o=1<this.length;return i.length<1?this:this.each(function(t,e){r=s?e:e.parentNode,e=0==a?e.nextSibling:1==a?e.firstChild:2==a?e:null;var n=E.contains(P.documentElement,r);i.forEach(function(t){if(o)t=t.cloneNode(!0);else if(!r)return E(t).remove();r.insertBefore(t,e),n&&function t(e,n){n(e);for(var r=0,i=e.childNodes.length;r<i;r++)t(e.childNodes[r],n)}(t,function(t){if(!(null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src)){var e=t.ownerDocument?t.ownerDocument.defaultView:J;e.eval.call(e,t.innerHTML)}})})})},E.fn[s?e+"To":"insert"+(a?"Before":"After")]=function(t){return E(t)[e](this),this}}),V.Z.prototype=p.prototype=E.fn,V.uniq=w,V.deserializeValue=g,E.zepto=V,E}();return J.Zepto=t,void 0===J.$&&(J.$=t),function(l){function f(t){return t._zid||(t._zid=e++)}function a(t,e,n,r){if((e=h(e)).ns)var i=(o=e.ns,new RegExp("(?:^| )"+o.replace(" "," .* ?")+"(?: |$)"));var o;return(j[f(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||f(t.fn)===f(n))&&(!r||t.sel==r)})}function h(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function p(t,e){return t.del&&!n&&t.e in r||!!e}function d(t){return T[t]||n&&r[t]||t}function c(i,t,e,o,a,s,u){var n=f(i),c=j[n]||(j[n]=[]);t.split(/\s/).forEach(function(t){if("ready"==t)return l(document).ready(e);var n=h(t);n.fn=e,n.sel=a,n.e in T&&(e=function(t){var e=t.relatedTarget;return!e||e!==this&&!l.contains(this,e)?n.fn.apply(this,arguments):void 0});var r=(n.del=s)||e;n.proxy=function(t){if(!(t=v(t)).isImmediatePropagationStopped()){t.data=o;var e=r.apply(i,t._args==g?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},n.i=c.length,c.push(n),"addEventListener"in i&&i.addEventListener(d(n.e),n.proxy,p(n,u))})}function m(e,t,n,r,i){var o=f(e);(t||"").split(/\s/).forEach(function(t){a(e,t,n,r).forEach(function(t){delete j[o][t.i],"removeEventListener"in e&&e.removeEventListener(d(t.e),t.proxy,p(t,i))})})}function v(r,i){return(i||!r.isDefaultPrevented)&&(i||(i=r),l.each(t,function(t,e){var n=i[t];r[t]=function(){return this[e]=s,n&&n.apply(i,arguments)},r[e]=w}),r.timeStamp||(r.timeStamp=Date.now()),(i.defaultPrevented!==g?i.defaultPrevented:"returnValue"in i?!1===i.returnValue:i.getPreventDefault&&i.getPreventDefault())&&(r.isDefaultPrevented=s)),r}function y(t){var e,n={originalEvent:t};for(e in t)i.test(e)||t[e]===g||(n[e]=t[e]);return v(n,t)}var g,e=1,x=Array.prototype.slice,b=l.isFunction,E=function(t){return"string"==typeof t},j={},o={},n="onfocusin"in J,r={focus:"focusin",blur:"focusout"},T={mouseenter:"mouseover",mouseleave:"mouseout"};o.click=o.mousedown=o.mouseup=o.mousemove="MouseEvents",l.event={add:c,remove:m},l.proxy=function(t,e){var n=2 in arguments&&x.call(arguments,2);if(b(t)){var r=function(){return t.apply(e,n?n.concat(x.call(arguments)):arguments)};return r._zid=f(t),r}if(E(e))return n?(n.unshift(t[e],t),l.proxy.apply(null,n)):l.proxy(t[e],t);throw new TypeError("expected function")},l.fn.bind=function(t,e,n){return this.on(t,e,n)},l.fn.unbind=function(t,e){return this.off(t,e)},l.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var s=function(){return!0},w=function(){return!1},i=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,t={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};l.fn.delegate=function(t,e,n){return this.on(e,t,n)},l.fn.undelegate=function(t,e,n){return this.off(e,t,n)},l.fn.live=function(t,e){return l(document.body).delegate(this.selector,t,e),this},l.fn.die=function(t,e){return l(document.body).undelegate(this.selector,t,e),this},l.fn.on=function(e,i,n,o,a){var s,u,r=this;return e&&!E(e)?(l.each(e,function(t,e){r.on(t,i,n,e,a)}),r):(E(i)||b(o)||!1===o||(o=n,n=i,i=g),(o===g||!1===n)&&(o=n,n=g),!1===o&&(o=w),r.each(function(t,r){a&&(s=function(t){return m(r,t.type,o),o.apply(this,arguments)}),i&&(u=function(t){var e,n=l(t.target).closest(i,r).get(0);return n&&n!==r?(e=l.extend(y(t),{currentTarget:n,liveFired:r}),(s||o).apply(n,[e].concat(x.call(arguments,1)))):void 0}),c(r,e,o,n,i,u||s)}))},l.fn.off=function(t,n,e){var r=this;return t&&!E(t)?(l.each(t,function(t,e){r.off(t,n,e)}),r):(E(n)||b(e)||!1===e||(e=n,n=g),!1===e&&(e=w),r.each(function(){m(this,t,e,n)}))},l.fn.trigger=function(t,e){return(t=E(t)||l.isPlainObject(t)?l.Event(t):v(t))._args=e,this.each(function(){t.type in r&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):l(this).triggerHandler(t,e)})},l.fn.triggerHandler=function(n,r){var i,o;return this.each(function(t,e){(i=y(E(n)?l.Event(n):n))._args=r,i.target=e,l.each(a(e,n.type||n),function(t,e){return o=e.proxy(i),!i.isImmediatePropagationStopped()&&void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){l.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),l.Event=function(t,e){E(t)||(t=(e=t).type);var n=document.createEvent(o[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),v(n)}}(t),function(y){function g(t,e,n,r){return t.global?(i=e||S,o=n,a=r,s=y.Event(o),y(i).trigger(s,a),!s.isDefaultPrevented()):void 0;var i,o,a,s}function x(t,e){var n=e.context;return!1!==e.beforeSend.call(n,t,e)&&!1!==g(e,n,"ajaxBeforeSend",[t,e])&&void g(e,n,"ajaxSend",[t,e])}function b(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),g(n,i,"ajaxSuccess",[e,n,t]),a(o,e,n)}function E(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),g(r,o,"ajaxError",[n,r,t||e]),a(e,n,r)}function a(t,e,n){var r,i=n.context;n.complete.call(i,e,t),g(n,i,"ajaxComplete",[e,n]),(r=n).global&&!--y.active&&g(r,null,"ajaxStop")}function j(){}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function u(t,e,n,r){return y.isFunction(e)&&(r=n,n=e,e=void 0),y.isFunction(n)||(r=n,n=void 0),{url:t,data:e,success:n,dataType:r}}var w,C,l=+new Date,S=J.document,c=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,N=/^(?:text|application)\/javascript/i,O=/^(?:text|application)\/xml/i,P="application/json",A="text/html",L=/^\s*$/,D=S.createElement("a");D.href=J.location.href,y.active=0,y.ajaxJSONP=function(n,r){if(!("type"in n))return y.ajax(n);var i,o,t=n.jsonpCallback,a=(y.isFunction(t)?t():t)||"Zepto"+l++,s=S.createElement("script"),u=J[a],e=function(t){y(s).triggerHandler("error",t||"abort")},c={abort:e};return r&&r.promise(c),y(s).on("load error",function(t,e){clearTimeout(o),y(s).off().remove(),"error"!=t.type&&i?b(i[0],c,n,r):E(null,e||"error",c,n,r),J[a]=u,i&&y.isFunction(u)&&u(i[0]),u=i=void 0}),!1===x(c,n)?e("abort"):(J[a]=function(){i=arguments},s.src=n.url.replace(/\?(.+)=\?/,"?$1="+a),S.head.appendChild(s),0<n.timeout&&(o=setTimeout(function(){e("timeout")},n.timeout))),c},y.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new J.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:P,xml:"application/xml, text/xml",html:A,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},y.ajax=function(t){var e,n,r,i,o=y.extend({},t||{}),a=y.Deferred&&y.Deferred();for(w in y.ajaxSettings)void 0===o[w]&&(o[w]=y.ajaxSettings[w]);(i=o).global&&0==y.active++&&g(i,null,"ajaxStart"),o.crossDomain||((e=S.createElement("a")).href=o.url,e.href=e.href,o.crossDomain=D.protocol+"//"+D.host!=e.protocol+"//"+e.host),o.url||(o.url=J.location.toString()),-1<(n=o.url.indexOf("#"))&&(o.url=o.url.slice(0,n)),(r=o).processData&&r.data&&"string"!=y.type(r.data)&&(r.data=y.param(r.data,r.traditional)),!r.data||r.type&&"GET"!=r.type.toUpperCase()&&"jsonp"!=r.dataType||(r.url=T(r.url,r.data),r.data=void 0);var s=o.dataType,u=/\?.+=\?/.test(o.url);if(u&&(s="jsonp"),!1!==o.cache&&(t&&!0===t.cache||"script"!=s&&"jsonp"!=s)||(o.url=T(o.url,"_="+Date.now())),"jsonp"==s)return u||(o.url=T(o.url,o.jsonp?o.jsonp+"=?":!1===o.jsonp?"":"callback=?")),y.ajaxJSONP(o,a);var c,l=o.accepts[s],f={},h=function(t,e){f[t.toLowerCase()]=[t,e]},p=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:J.location.protocol,d=o.xhr(),m=d.setRequestHeader;if(a&&a.promise(d),o.crossDomain||h("X-Requested-With","XMLHttpRequest"),h("Accept",l||"*/*"),(l=o.mimeType||l)&&(-1<l.indexOf(",")&&(l=l.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(l)),(o.contentType||!1!==o.contentType&&o.data&&"GET"!=o.type.toUpperCase())&&h("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(C in o.headers)h(C,o.headers[C]);if(d.setRequestHeader=h,!(d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=j,clearTimeout(c);var t,e=!1;if(200<=d.status&&d.status<300||304==d.status||0==d.status&&"file:"==p){if(s=s||((n=o.mimeType||d.getResponseHeader("content-type"))&&(n=n.split(";",2)[0]),n&&(n==A?"html":n==P?"json":N.test(n)?"script":O.test(n)&&"xml")||"text"),"arraybuffer"==d.responseType||"blob"==d.responseType)t=d.response;else{t=d.responseText;try{t=function(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}(t,s,o),"script"==s?(0,eval)(t):"xml"==s?t=d.responseXML:"json"==s&&(t=L.test(t)?null:y.parseJSON(t))}catch(t){e=t}if(e)return E(e,"parsererror",d,o,a)}b(t,d,o,a)}else E(d.statusText||null,d.status?"error":"abort",d,o,a)}var n})===x(d,o))return d.abort(),E(null,"abort",d,o,a),d;var v=!("async"in o)||o.async;if(d.open(o.type,o.url,v,o.username,o.password),o.xhrFields)for(C in o.xhrFields)d[C]=o.xhrFields[C];for(C in f)m.apply(d,f[C]);return 0<o.timeout&&(c=setTimeout(function(){d.onreadystatechange=j,d.abort(),E(null,"timeout",d,o,a)},o.timeout)),d.send(o.data?o.data:null),d},y.get=function(){return y.ajax(u.apply(null,arguments))},y.post=function(){var t=u.apply(null,arguments);return t.type="POST",y.ajax(t)},y.getJSON=function(){var t=u.apply(null,arguments);return t.dataType="json",y.ajax(t)},y.fn.load=function(t,e,n){if(!this.length)return this;var r,i=this,o=t.split(/\s/),a=u(t,e,n),s=a.success;return 1<o.length&&(a.url=o[0],r=o[1]),a.success=function(t){i.html(r?y("<div>").html(t.replace(c,"")).find(r):t),s&&s.apply(i,arguments)},y.ajax(a),this};var r=encodeURIComponent;y.param=function(t,e){var n=[];return n.add=function(t,e){y.isFunction(e)&&(e=e()),null==e&&(e=""),this.push(r(t)+"="+r(e))},function n(r,t,i,o){var a,s=y.isArray(t),u=y.isPlainObject(t);y.each(t,function(t,e){a=y.type(e),o&&(t=i?o:o+"["+(u||"object"==a||"array"==a?t:"")+"]"),!o&&s?r.add(e.name,e.value):"array"==a||!i&&"object"==a?n(r,e,i,t):r.add(t,e)})}(n,t,e),n.join("&").replace(/%20/g,"+")}}(t),(o=t).fn.serializeArray=function(){var n,r,e=[],i=function(t){return t.forEach?t.forEach(i):void e.push({name:n,value:t})};return this[0]&&o.each(this[0].elements,function(t,e){r=e.type,(n=e.name)&&"fieldset"!=e.nodeName.toLowerCase()&&!e.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&"file"!=r&&("radio"!=r&&"checkbox"!=r||e.checked)&&i(o(e).val())}),e},o.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},o.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var e=o.Event("submit");this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()}return this},function(){try{getComputedStyle(void 0)}catch(t){var n=getComputedStyle;J.getComputedStyle=function(t,e){try{return n(t,e)}catch(t){return null}}}}(),t}),function(p,d){var n,m,v,y,g,x,b,E,j,T,r="",i=document.createElement("div"),w=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,C={};function t(t){return n?n+t:t.toLowerCase()}i.style.transform===d&&p.each({Webkit:"webkit",Moz:"",O:"o"},function(t,e){if(i.style[t+"TransitionProperty"]!==d)return r="-"+t.toLowerCase()+"-",n=e,!1}),m=r+"transform",C[v=r+"transition-property"]=C[y=r+"transition-duration"]=C[x=r+"transition-delay"]=C[g=r+"transition-timing-function"]=C[b=r+"animation-name"]=C[E=r+"animation-duration"]=C[T=r+"animation-delay"]=C[j=r+"animation-timing-function"]="",p.fx={off:n===d&&i.style.transitionProperty===d,speeds:{_default:400,fast:200,slow:600},cssPrefix:r,transitionEnd:t("TransitionEnd"),animationEnd:t("AnimationEnd")},p.fn.animate=function(t,e,n,r,i){return p.isFunction(e)&&(r=e,e=n=d),p.isFunction(n)&&(r=n,n=d),p.isPlainObject(e)&&(n=e.easing,r=e.complete,i=e.delay,e=e.duration),e&&(e=("number"==typeof e?e:p.fx.speeds[e]||p.fx.speeds._default)/1e3),i&&(i=parseFloat(i)/1e3),this.anim(t,e,n,r,i)},p.fn.anim=function(t,e,n,r,i){var o,a,s,u={},c="",l=this,f=p.fx.transitionEnd,h=!1;if(e===d&&(e=p.fx.speeds._default/1e3),i===d&&(i=0),p.fx.off&&(e=0),"string"==typeof t)u[b]=t,u[E]=e+"s",u[T]=i+"s",u[j]=n||"linear",f=p.fx.animationEnd;else{for(o in a=[],t)w.test(o)?c+=o+"("+t[o]+") ":(u[o]=t[o],a.push(o.replace(/([A-Z])/g,"-$1").toLowerCase()));c&&(u[m]=c,a.push(m)),0<e&&"object"==typeof t&&(u[v]=a.join(", "),u[y]=e+"s",u[x]=i+"s",u[g]=n||"linear")}return s=function(t){if(void 0!==t){if(t.target!==t.currentTarget)return;p(t.target).unbind(f,s)}else p(this).unbind(f,s);h=!0,p(this).css(C),r&&r.call(this)},0<e&&(this.bind(f,s),setTimeout(function(){h||s.call(l)},1e3*(e+i)+25)),this.size()&&this.get(0).clientLeft,this.css(u),e<=0&&setTimeout(function(){l.each(function(){s.call(this)})},0),this},i=null}(Zepto);