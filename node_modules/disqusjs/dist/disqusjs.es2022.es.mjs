var n,l$1,u$1,t$1,o$2,r$1,f$1={},e$2=[],c$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s$1(n,l){for(var u in l)n[u]=l[u];return n}function a$1(n){var l=n.parentNode;l&&l.removeChild(n);}function h$1(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return v$1(l,f,t,o,null)}function v$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function y$1(){return {current:null}}function p$1(n){return n.children}function d$1(n,l){this.props=n,this.context=l;}function _$1(n,l){if(null==l)return n.__?_$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_$1(n):null}function k$2(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k$2(n)}}function b$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g$2.__r++||o$2!==l$1.debounceRendering)&&((o$2=l$1.debounceRendering)||setTimeout)(g$2);}function g$2(){for(var n;g$2.__r=t$1.length;)n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=s$1({},t)).__v=t.__v+1,j$2(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?_$1(t):o,t.__h),z$2(u,t),t.__e!=o&&k$2(t)));});}function w$2(n,l,u,i,t,o,r,c,s,a){var h,y,d,k,b,g,w,x=i&&i.__k||e$2,C=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v$1(null,k,null,null,k):Array.isArray(k)?v$1(p$1,{children:k},null,null,null):k.__b>0?v$1(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(d=x[h])||d&&k.key==d.key&&k.type===d.type)x[h]=void 0;else for(y=0;y<C;y++){if((d=x[y])&&k.key==d.key&&k.type===d.type){x[y]=void 0;break}d=null;}j$2(n,k,d=d||f$1,t,o,r,c,s,a),b=k.__e,(y=k.ref)&&d.ref!=y&&(w||(w=[]),d.ref&&w.push(d.ref,null,k),w.push(y,k.__c||b,k)),null!=b?(null==g&&(g=b),"function"==typeof k.type&&k.__k===d.__k?k.__d=s=m$1(k,s,n):s=A$2(n,k,d,x,b,s),"function"==typeof u.type&&(u.__d=s)):s&&d.__e==s&&s.parentNode!=n&&(s=_$1(d));}for(u.__e=g,h=C;h--;)null!=x[h]&&("function"==typeof u.type&&null!=x[h].__e&&x[h].__e==u.__d&&(u.__d=_$1(i,h+1)),N$1(x[h],x[h]));if(w)for(h=0;h<w.length;h++)M$1(w[h],w[++h],w[++h]);}function m$1(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?m$1(i,l,u):A$2(u,i,i,t,i.__e,l));return l}function x$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){x$2(n,l);}):l.push(n)),l}function A$2(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H$1(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H$1(n,o,l[o],u[o],i);}function $$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c$1.test(l)?u:u+"px";}function H$1(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T$2:I$1,o):n.removeEventListener(l,o?T$2:I$1,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I$1(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T$2(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$2(n,u,i,t,o,r,f,e,c){var a,h,v,y,_,k,b,g,m,x,A,C,$,H=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=l$1.__b)&&a(u);try{n:if("function"==typeof H){if(g=u.props,m=(a=H.contextType)&&t[a.__c],x=a?m?m.props.value:a.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in H&&H.prototype.render?u.__c=h=new H(g,x):(u.__c=h=new d$1(g,x),h.constructor=H,h.render=O$1),m&&m.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=H.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s$1({},h.__s)),s$1(h.__s,H.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==H.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==H.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,k);});}if(h.context=x,h.props=g,h.__v=u,h.__P=n,A=l$1.__r,C=0,"prototype"in H&&H.prototype.render)h.state=h.__s,h.__d=!1,A&&A(u),a=h.render(h.props,h.state,h.context);else do{h.__d=!1,A&&A(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++C<25);h.state=h.__s,null!=h.getChildContext&&(t=s$1(s$1({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,_)),$=null!=a&&a.type===p$1&&null==a.key?a.props.children:a,w$2(n,Array.isArray($)?$:[$],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,o,r,f,c);(a=l$1.diffed)&&a(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function z$2(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L$1(l,u,i,t,o,r,e,c){var s,h,v,y=i.props,p=u.props,d=u.type,k=0;if("svg"===d&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),h=(y=i.props||f$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,o,c),v)u.__k=[];else if(k=u.props.children,w$2(l,Array.isArray(k)?k:[k],u,i,t,o&&"foreignObject"!==d,r,e,r?r[0]:i.__k&&_$1(i,0),c),null!=r)for(k=r.length;k--;)null!=r[k]&&a$1(r[k]);c||("value"in p&&void 0!==(k=p.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==y.value)&&H$1(l,"value",k,y.value,!1),"checked"in p&&void 0!==(k=p.checked)&&k!==l.checked&&H$1(l,"checked",k,y.checked,!1));}return l}function M$1(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N$1(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M$1(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N$1(t[o],u,"function"!=typeof n.type);i||null==n.__e||a$1(n.__e),n.__e=n.__d=void 0;}function O$1(n,l,u){return this.constructor(n,u)}function P$1(u,i,t){var o,r,e;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,e=[],j$2(i,u=(!o&&t||i).__k=h$1(p$1,null,[u]),r||f$1,f$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,e,!o&&t?t:r?r.__e:i.firstChild,o),z$2(e,u);}function S$1(n,l){P$1(n,l,S$1);}function q$2(l,u,i){var t,o,r,f=s$1({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),v$1(l.type,f,t||l.key,o||l.ref,null)}function B$1(n,l){var u={__c:l="__cC"+r$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(b$1);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=e$2.slice,l$1={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l;}throw n}},u$1=0,d$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s$1({},this.state),"function"==typeof n&&(n=n(s$1({},u),this.props)),n&&s$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),b$1(this));},d$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),b$1(this));},d$1.prototype.render=p$1,t$1=[],g$2.__r=0,r$1=0;

var t,r,u,i,o$1=0,c=[],f=[],e$1=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function d(t,u){l$1.__h&&l$1.__h(r,t,o$1||u),o$1=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:f}),i.__[t]}function p(n){return o$1=1,y(z$1,n)}function y(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):z$1(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){r.u=!0;var c=r.shouldComponentUpdate;r.shouldComponentUpdate=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!!i&&(!c||c.call(this,n,t,r))};}return o.__N||o.__}function h(u,i){var o=d(t++,3);!l$1.__s&&w$1(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o));}function s(u,i){var o=d(t++,4);!l$1.__s&&w$1(o.__H,i)&&(o.__=u,o.i=i,r.__h.push(o));}function _(n){return o$1=5,F$1(function(){return {current:n}},[])}function A$1(n,t,r){o$1=6,s(function(){return "function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n));}function F$1(n,r){var u=d(t++,7);return w$1(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function T$1(n,t){return o$1=8,F$1(function(){return n},t)}function q$1(n){var u=r.context[n.__c],i=d(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function x$1(t,r){l$1.useDebugValue&&l$1.useDebugValue(r?r(t):t);}function V$1(n){var u=d(t++,10),i=p();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n){u.__&&u.__(n),i[1](n);}),[i[0],function(){i[1](void 0);}]}function b(){for(var t;t=c.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(j$1),t.__H.__h.forEach(k$1),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){r=null,e$1&&e$1(n);},l$1.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=f,n.__N=n.i=void 0;})):(i.__h.forEach(j$1),i.__h.forEach(k$1),i.__h=[])),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==c.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||function(n){var t,r=function(){clearTimeout(u),g$1&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g$1&&(t=requestAnimationFrame(r));})(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==f&&(n.__=n.__V),n.i=void 0,n.__V=f;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(j$1),t.__h=t.__h.filter(function(n){return !n.__||k$1(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{j$1(n);}catch(n){r=n;}}),r&&l$1.__e(r,u.__v));};var g$1="function"==typeof requestAnimationFrame;function j$1(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function k$1(n){var t=r;n.__c=n.__(),r=t;}function w$1(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function z$1(n,t){return "function"==typeof t?t(n):t}

function S(n,t){for(var e in t)n[e]=t[e];return n}function g(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function C(n){this.props=n;}function E(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return !r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:g(this.props,n)}function r(t){return this.shouldComponentUpdate=e,h$1(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(C.prototype=new d$1).isPureReactComponent=!0,C.prototype.shouldComponentUpdate=function(n,t){return g(this.props,n)||g(this.state,t)};var w=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var x="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function R(n){function t(t){var e=S({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=x,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:x$2(x$2(n).map(t))},k={map:N,forEach:N,count:function(n){return n?x$2(n).length:0},only:function(n){var t=x$2(n);if(1!==t.length)throw "Children.only";return t[0]},toArray:x$2},A=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);A(n,t,e,r);};var O=l$1.unmount;function T(){this.__u=0,this.t=null,this.__b=null;}function L(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function U(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n;},function(n){r=n;}),r)throw r;if(!e)throw t;return h$1(e,u)}return u.displayName="Lazy",u.__f=!0,u}function D(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(T.prototype=new d$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=L(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},T.prototype.componentWillUnmount=function(){this.t=[];},T.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__a&&h$1(p$1,null,n.fallback);return u&&(u.__h=null),[h$1(p$1,null,t.__a?null:n.children),u]};var F=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function I(n){return this.getChildContext=function(){return n.context},n.children}function M(n){var t=this,e=n.i;t.componentWillUnmount=function(){P$1(null,t.l),t.l=null,t.i=null;},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n);},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n);}}),P$1(h$1(I,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount();}function V(n,t){var e=h$1(M,{__v:n,i:t});return e.containerInfo=t,e}(D.prototype=new d$1).__a=function(n){var t=this,e=L(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),F(t,n,r)):u();};e?e(o):o();}},D.prototype.render=function(n){this.u=null,this.o=new Map;var t=x$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},D.prototype.componentDidUpdate=D.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){F(n,e,t);});};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,$="undefined"!=typeof document,j=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function z(n,t,e){return null==t.__k&&(t.textContent=""),P$1(n,t),"function"==typeof e&&e(),n?n.__c:null}function B(n,t,e){return S$1(n,t),"function"==typeof e&&e(),n?n.__c:null}d$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(d$1.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var H=l$1.event;function Z(){}function Y(){return this.cancelBubble}function q(){return this.defaultPrevented}l$1.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=q,n.nativeEvent=n};var G,J={configurable:!0,get:function(){return this.class}},K=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){var u=-1===t.indexOf("-");for(var o in r={},e){var i=e[o];$&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in e&&null==i||("defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!j(e.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():u&&P.test(o)?o=o.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===i&&(i=void 0),/^oninput$/i.test(o)&&(o=o.toLowerCase(),r[o]&&(o="oninputCapture")),r[o]=i);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=x$2(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=x$2(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r,e.class!=e.className&&(J.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",J));}n.$$typeof=W,K&&K(n);};var Q=l$1.__r;l$1.__r=function(n){Q&&Q(n),G=n.__c;};var X={ReactCurrentDispatcher:{current:{readContext:function(n){return G.__n[n.__c].props.value}}}},nn="17.0.2";function tn(n){return h$1.bind(null,n)}function en(n){return !!n&&n.$$typeof===W}function rn(n){return en(n)?q$2.apply(null,arguments):n}function un(n){return !!n.__k&&(P$1(null,n),!0)}function on(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)},cn=function(n,t){return n(t)},fn=p$1;function an(n){n();}function sn(n){return n}function hn(){return [!1,an]}var vn=s;function dn(t,u){var o=u(),i=p({s:{__:o,h:u}}),l=i[0].s,c=i[1];return s(function(){l.__=o,l.h=u,l.__!==u()&&c({s:l});},[t,o,u]),h(function(){return l.__!==l.h()&&c({s:l}),t(function(){l.__!==l.h()&&c({s:l});})},[t]),o}var compat = {useState:p,useReducer:y,useEffect:h,useLayoutEffect:s,useInsertionEffect:s,useTransition:hn,useDeferredValue:sn,useSyncExternalStore:dn,startTransition:an,useRef:_,useImperativeHandle:A$1,useMemo:F$1,useCallback:T$1,useContext:q$1,useDebugValue:x$1,version:"17.0.2",Children:k,render:z,hydrate:B,unmountComponentAtNode:un,createPortal:V,createElement:h$1,createContext:B$1,createFactory:tn,cloneElement:rn,createRef:y$1,Fragment:p$1,isValidElement:en,findDOMNode:on,Component:d$1,PureComponent:C,memo:E,forwardRef:R,flushSync:cn,unstable_batchedUpdates:ln,StrictMode:p$1,Suspense:T,SuspenseList:D,lazy:U,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:X};

var compat$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': compat,
  startTransition: an,
  useDeferredValue: sn,
  useTransition: hn,
  useInsertionEffect: vn,
  useSyncExternalStore: dn,
  version: nn,
  Children: k,
  render: z,
  hydrate: B,
  unmountComponentAtNode: un,
  createPortal: V,
  createFactory: tn,
  cloneElement: rn,
  isValidElement: en,
  findDOMNode: on,
  PureComponent: C,
  memo: E,
  forwardRef: R,
  flushSync: cn,
  unstable_batchedUpdates: ln,
  StrictMode: fn,
  Suspense: T,
  SuspenseList: D,
  lazy: U,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X,
  createElement: h$1,
  createContext: B$1,
  createRef: y$1,
  Fragment: p$1,
  Component: d$1,
  useState: p,
  useReducer: y,
  useEffect: h,
  useLayoutEffect: s,
  useRef: _,
  useImperativeHandle: A$1,
  useMemo: F$1,
  useCallback: T$1,
  useContext: q$1,
  useDebugValue: x$1,
  useErrorBoundary: V$1
});

var o=0;function e(_,e,n,t,f){var l,s,u={};for(s in e)"ref"==s?l=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o,__source:f,__self:t};if("function"==typeof _&&(l=_.defaultProps))for(s in l)void 0===u[s]&&(u[s]=l[s]);return l$1.vnode&&l$1.vnode(a),a}

function randomInt(min, max) {
    // eslint-disable-next-line no-bitwise
    return Math.random() * (max - min + 1) + min | 0;
}
const isBrowser = typeof window !== 'undefined';
const disqusJsApiFetcher = (apiKey, url)=>{
    const Url = new URL(url);
    Url.searchParams.set('api_key', apiKey);
    return fetch(Url.toString()).then((res)=>res.json());
};
const getTimeStampFromString = (dateString)=>new Date(dateString).getTime();
const replaceDisquscdn = (str)=>str.replace(/a\.disquscdn\.com/g, 'c.disquscdn.com');
let domParser = null;
const processCommentMessage = (str)=>{
    const rawHtml = replaceDisquscdn(str).replace(/https?:\/\/disq.us\/url\?url=(.+)%3A[\w-]+&amp;cuid=\d+/gm, (_, $1)=>decodeURIComponent($1));
    domParser ||= new DOMParser();
    const doc = domParser.parseFromString(rawHtml, 'text/html');
    // Very basic, but it will do.
    // Any attempt to bypass XSS limitation will be blocked by Disqus' WAF.
    doc.querySelectorAll('script').forEach((script)=>script.remove());
    doc.querySelectorAll('a').forEach((a)=>{
        a.target = '_blank';
        a.rel = 'external noopener nofollow noreferrer';
    });
    return doc.body.innerHTML;
};
const timezoneOffset = new Date().getTimezoneOffset();
const numberPadstart = (num)=>String(num).padStart(2, '0');
const formatDate = (str)=>{
    const utcTimestamp = getTimeStampFromString(str);
    const date = new Date(utcTimestamp - timezoneOffset * 60 * 1000);
    return `${date.getFullYear()}-${numberPadstart(date.getMonth() + 1)}-${numberPadstart(date.getDate())} ${numberPadstart(date.getHours())}:${numberPadstart(date.getMinutes())}`;
};
const checkDomainAccessiblity = (domain)=>{
    return new Promise((resolve, reject)=>{
        const img = new Image();
        const clear = ()=>{
            img.onload = null;
            img.onerror = null;
            img.remove();
        };
        const timeout = setTimeout(()=>{
            clear();
            reject();
        }, 3000);
        img.onerror = ()=>{
            clearTimeout(timeout);
            clear();
            reject();
        };
        img.onload = ()=>{
            clearTimeout(timeout);
            clear();
            resolve();
        };
        img.src = `https://${domain}/favicon.ico?${+new Date()}=${+new Date()}`;
    });
};

const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (nextState !== state) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => listeners.clear();
  const api = { setState, getState, subscribe, destroy };
  state = createState(
    setState,
    getState,
    api
  );
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  var f = n.default;
	if (typeof f == "function") {
		var a = function () {
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var withSelector = {exports: {}};

var withSelector_production_min = {};

var require$$0 = /*@__PURE__*/getAugmentedNamespace(compat$1);

var shim = {exports: {}};

var useSyncExternalStoreShim_production_min = {};

/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_production_min;

function requireUseSyncExternalStoreShim_production_min () {
	if (hasRequiredUseSyncExternalStoreShim_production_min) return useSyncExternalStoreShim_production_min;
	hasRequiredUseSyncExternalStoreShim_production_min = 1;
var e=require$$0;function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c});},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c});})},[a]);p(d);return d}
	function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return !k(a,d)}catch(f){return !0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;useSyncExternalStoreShim_production_min.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;
	return useSyncExternalStoreShim_production_min;
}

var hasRequiredShim;

function requireShim () {
	if (hasRequiredShim) return shim.exports;
	hasRequiredShim = 1;
	(function (module) {

		{
		  module.exports = requireUseSyncExternalStoreShim_production_min();
		}
} (shim));
	return shim.exports;
}

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredWithSelector_production_min;

function requireWithSelector_production_min () {
	if (hasRequiredWithSelector_production_min) return withSelector_production_min;
	hasRequiredWithSelector_production_min = 1;
var h=require$$0,n=requireShim();function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;
	withSelector_production_min.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f;}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return [function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r(a,c[0],c[1]);
	u(function(){f.hasValue=!0;f.value=d;},[d]);w(d);return d};
	return withSelector_production_min;
}

(function (module) {

	{
	  module.exports = requireWithSelector_production_min();
	}
} (withSelector));

var useSyncExternalStoreExports = /*@__PURE__*/getDefaultExportFromCjs(withSelector.exports);

const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
function useStore$1(api, selector = api.getState, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  x$1(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore$1(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
var create$1 = create;

const getDisqusJsModeDefaultValue = ()=>{
    if (isBrowser) {
        const value = localStorage.getItem('dsqjs_mode');
        if (value === 'dsqjs' || value === 'disqus') {
            return value;
        }
    }
    return null;
};
const getDisqusJsSortTypeDefaultValue = ()=>{
    if (isBrowser) {
        const value = localStorage.getItem('dsqjs_sort');
        if (value === 'popular' || value === 'asc' || value === 'desc') {
            return value;
        }
    }
    return null;
};
const initialState = {
    mode: getDisqusJsModeDefaultValue(),
    sortType: getDisqusJsSortTypeDefaultValue(),
    error: false,
    msg: null,
    thread: null,
    posts: [],
    loadingPosts: false,
    morePostsError: false
};
const useStore = create$1((set, get)=>({
        ...initialState,
        setMode (mode) {
            set({
                mode
            });
            if (isBrowser && mode) {
                // Always wait for a macrotask before setting localStorage
                Promise.resolve().then(()=>{
                    if (mode === null) {
                        localStorage.removeItem('dsqjs_mode');
                    } else {
                        localStorage.setItem('dsqjs_mode', mode);
                    }
                });
            }
        },
        checkMode (shortname) {
            set({
                msg: '正在检查 Disqus 能否访问...'
            });
            Promise.all([
                'disqus.com',
                `${shortname}.disqus.com`
            ].map(checkDomainAccessiblity)).then(()=>{
                set({
                    mode: 'disqus'
                });
                localStorage.setItem('dsqjs_mode', 'disqus');
            }, ()=>{
                set({
                    mode: 'dsqjs'
                });
                localStorage.setItem('dsqjs_mode', 'dsqjs');
            });
        },
        setSortType (sortType) {
            set({
                sortType
            });
            if (isBrowser && sortType) {
                Promise.resolve().then(()=>{
                    localStorage.setItem('dsqjs_sort', sortType);
                });
            }
        },
        setError (error) {
            set({
                error
            });
        },
        setMsg (msg) {
            set({
                msg
            });
        },
        async fetchThread (shortname, identifier, apiKey, api = 'https://disqus.skk.moe/disqus/') {
            try {
                const thread = await disqusJsApiFetcher(apiKey, `${api}3.0/threads/list.json?forum=${encodeURIComponent(shortname)}&thread=${encodeURIComponent(`ident:${identifier}`)}`);
                if (thread.code === 0) {
                    set({
                        thread
                    });
                } else {
                    set({
                        error: true
                    });
                }
            } catch  {
                set({
                    error: true
                });
            }
        },
        async fetchMorePosts (shortname, id, apiKey, api = 'https://disqus.skk.moe/disqus/', reset = false) {
            if (!id) return;
            set({
                ...reset && {
                    posts: []
                },
                loadingPosts: true,
                morePostsError: false
            });
            const posts = reset ? [] : get().posts;
            const sortType = get().sortType;
            const lastPost = posts.at(-1);
            if (lastPost && !lastPost.cursor.hasNext) return;
            const url = `${api}3.0/threads/listPostsThreaded?forum=${shortname}&thread=${id}&order=${sortType ?? 'desc'}${posts.length !== 0 && lastPost?.cursor.next ? `&cursor=${encodeURIComponent(lastPost.cursor.next)}` : ''}`;
            const handleError = ()=>{
                if (posts.length === 0) {
                    set({
                        error: true,
                        loadingPosts: false
                    });
                } else {
                    set({
                        morePostsError: true,
                        loadingPosts: false
                    });
                }
            };
            try {
                const newPosts = await disqusJsApiFetcher(apiKey, url);
                if (newPosts.code === 0) {
                    set((state)=>({
                            posts: state.posts.concat(newPosts),
                            loadingPosts: false
                        }));
                } else {
                    handleError();
                }
            } catch  {
                handleError();
            }
        },
        reset () {
            set({
                ...initialState
            });
        }
    }));

const DisqusJSLoadMoreCommentsButton = /*#__PURE__*/ E((props)=>{
    const { isError , isLoading , ...restProps } = props;
    return /*#__PURE__*/ e("a", {
        ...restProps,
        id: "dsqjs-load-more",
        className: `dsqjs-load-more ${isError ? 'is-error' : ''}`,
        role: "button",
        children: // eslint-disable-next-line no-nested-ternary
        isError ? '加载失败，请重试' : isLoading ? '正在加载...' : '加载更多评论'
    });
});
const DisqusJSForceDisqusModeButton = /*#__PURE__*/ E((props)=>{
    const setDisqusJsMode = useStore((state)=>state.setMode);
    const onClickHandler = T$1(()=>setDisqusJsMode('disqus'), [
        setDisqusJsMode
    ]);
    return /*#__PURE__*/ e("a", {
        id: "dsqjs-force-disqus",
        className: "dsqjs-msg-btn",
        onClick: onClickHandler,
        children: props.children
    });
});
const DisqusJSReTestModeButton = /*#__PURE__*/ E((props)=>{
    const setDisqusJsMode = useStore((state)=>state.setMode);
    const onClickHandler = T$1(()=>setDisqusJsMode(null), [
        setDisqusJsMode
    ]);
    return /*#__PURE__*/ e("a", {
        id: "dsqjs-test-disqus",
        className: "dsqjs-msg-btn",
        onClick: onClickHandler,
        children: props.children
    });
});
const DisqusJSForceDisqusJsModeButton = /*#__PURE__*/ E((props)=>{
    const setDisqusJsMode = useStore((state)=>state.setMode);
    const onClickHandler = T$1(()=>setDisqusJsMode('dsqjs'), [
        setDisqusJsMode
    ]);
    return /*#__PURE__*/ e("a", {
        id: "dsqjs-force-dsqjs",
        className: "dsqjs-msg-btn",
        onClick: onClickHandler,
        children: props.children
    });
});
const DisqusJSRetryButton = /*#__PURE__*/ E((props)=>{
    const setDisqusJsHasError = useStore((state)=>state.setError);
    const handleClick = T$1(()=>{
        setDisqusJsHasError(false);
    }, [
        setDisqusJsHasError
    ]);
    return /*#__PURE__*/ e("a", {
        id: "dsqjs-reload-dsqjs",
        className: "dsqjs-msg-btn",
        onClick: handleClick,
        children: props.children
    });
});

const THREAD_ID = 'disqus_thread';
const EMBED_SCRIPT_ID = 'dsq-embed-scr';
const Disqus = /*#__PURE__*/ E((props)=>{
    const setDisqusJsMessage = useStore((state)=>state.setMsg);
    const [loaded, setLoaded] = p(false);
    h(()=>{
        setDisqusJsMessage(null);
        if (isBrowser) {
            const clearDisqusInstance = ()=>{
                if (isBrowser) {
                    window.disqus_config = undefined;
                    const scriptEl = document.getElementById(EMBED_SCRIPT_ID);
                    if (scriptEl) {
                        document.head.removeChild(scriptEl);
                        scriptEl.remove();
                    }
                    window.DISQUS?.reset({});
                    try {
                        delete window.DISQUS;
                    } catch  {
                        window.DISQUS = undefined;
                    }
                    const containerEl = document.getElementById(THREAD_ID);
                    if (containerEl) {
                        while(containerEl.hasChildNodes()){
                            containerEl.removeChild(containerEl.firstChild);
                        }
                    }
                    document.querySelectorAll('link[href*="disquscdn.com/next"], link[href*="disqus.com/next"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach((el)=>{
                        el.parentNode?.removeChild(el);
                        el.parentElement?.removeChild(el);
                        el.remove();
                    });
                }
            };
            if (window.disqus_shortname !== props.shortname) {
                clearDisqusInstance();
            }
            const getDisqusConfig = ()=>{
                return function() {
                    if (props.identifier) {
                        this.page.identifier = props.identifier;
                    }
                    if (props.url) {
                        this.page.url = props.url;
                    }
                    if (props.title) {
                        this.page.title = props.title;
                    }
                    this.callbacks.onReady = [
                        ()=>{
                            setLoaded(true);
                        }
                    ];
                };
            };
            if (window.DISQUS && document.getElementById(EMBED_SCRIPT_ID)) {
                window.DISQUS.reset({
                    reload: true,
                    config: getDisqusConfig()
                });
            } else {
                window.disqus_config = getDisqusConfig();
                window.disqus_shortname = props.shortname;
                const scriptEl = document.createElement('script');
                scriptEl.id = EMBED_SCRIPT_ID;
                scriptEl.src = `https://${props.shortname}.disqus.com/embed.js`;
                scriptEl.async = true;
                document.head.appendChild(scriptEl);
            }
            return clearDisqusInstance;
        }
    }, [
        props.shortname,
        props.identifier,
        props.url,
        props.title,
        setDisqusJsMessage
    ]);
    return /*#__PURE__*/ e(p$1, {
        children: [
            /*#__PURE__*/ e("div", {
                id: THREAD_ID,
                children: [
                    "评论完整模式加载中... 如果长时间无法加载，请针对 disq.us | disquscdn.com | disqus.com 启用代理，或切换至 ",
                    /*#__PURE__*/ e(DisqusJSForceDisqusJsModeButton, {
                        children: "评论基础模式"
                    })
                ]
            }),
            !loaded && /*#__PURE__*/ e("div", {
                id: "dsqjs-msg",
                children: [
                    "评论完整模式加载中... 如果长时间无法加载，请针对 disq.us | disquscdn.com | disqus.com 启用代理，或切换至 ",
                    /*#__PURE__*/ e(DisqusJSForceDisqusJsModeButton, {
                        children: "评论基础模式"
                    })
                ]
            })
        ]
    });
});

const DisqusJSError = /*#__PURE__*/ E(()=>{
    return /*#__PURE__*/ e("div", {
        id: "dsqjs-msg",
        children: [
            "评论基础模式加载失败，请",
            ' ',
            /*#__PURE__*/ e(DisqusJSRetryButton, {
                children: "重载"
            }),
            ' ',
            "或",
            ' ',
            /*#__PURE__*/ e(DisqusJSReTestModeButton, {
                children: "尝试完整 Disqus 模式"
            })
        ]
    });
});
const DisqusJSCreateThread = /*#__PURE__*/ E(()=>{
    return /*#__PURE__*/ e("div", {
        id: "dsqjs-msg",
        children: [
            "当前 Thread 尚未创建。是否切换至",
            ' ',
            /*#__PURE__*/ e(DisqusJSForceDisqusModeButton, {
                children: "完整 Disqus 模式"
            }),
            "？"
        ]
    });
});
const DisqusJSNoComment = /*#__PURE__*/ E((props)=>{
    return /*#__PURE__*/ e("p", {
        className: "dsqjs-no-comment",
        children: props.text
    });
});

function DisqusJSPostItem(props) {
    const profileUrl = props.comment.author.profileUrl;
    const avatarUrl = processCommentMessage(props.comment.author.avatar.cache);
    return /*#__PURE__*/ e("li", {
        id: `comment-${props.comment.id}`,
        children: [
            /*#__PURE__*/ e("div", {
                className: "dsqjs-post-item dsqjs-clearfix",
                children: [
                    /*#__PURE__*/ e("div", {
                        className: "dsqjs-post-avatar",
                        children: profileUrl ? /*#__PURE__*/ e("a", {
                            href: profileUrl,
                            target: "_blank",
                            rel: "noreferrer noopenner nofollow external",
                            children: /*#__PURE__*/ e("img", {
                                alt: props.comment.author.username,
                                src: avatarUrl
                            })
                        }) : /*#__PURE__*/ e("img", {
                            alt: props.comment.author.username,
                            src: avatarUrl
                        })
                    }),
                    /*#__PURE__*/ e("div", {
                        className: "dsqjs-post-body",
                        children: [
                            /*#__PURE__*/ e("div", {
                                className: "dsqjs-post-header",
                                children: [
                                    profileUrl ? /*#__PURE__*/ e("span", {
                                        className: "dsqjs-post-author",
                                        children: /*#__PURE__*/ e("a", {
                                            href: profileUrl,
                                            target: "_blank",
                                            rel: "noreferrer noopenner nofollow external",
                                            children: props.comment.author.name
                                        })
                                    }) : /*#__PURE__*/ e("span", {
                                        className: "dsqjs-post-author",
                                        children: props.comment.author.name
                                    }),
                                    // authorEl admin label
                                    props.admin === props.comment.author.username && /*#__PURE__*/ e("span", {
                                        className: "dsqjs-admin-badge",
                                        children: props.adminLabel
                                    }),
                                    ' ',
                                    /*#__PURE__*/ e("span", {
                                        className: "dsqjs-bullet"
                                    }),
                                    ' ',
                                    props.comment.createdAt && /*#__PURE__*/ e("span", {
                                        className: "dsqjs-meta",
                                        children: /*#__PURE__*/ e("time", {
                                            children: formatDate(props.comment.createdAt)
                                        })
                                    })
                                ]
                            }),
                            props.comment.isDeleted ? /*#__PURE__*/ e("div", {
                                className: "dsqjs-post-content",
                                children: /*#__PURE__*/ e("small", {
                                    children: "此评论已被删除"
                                })
                            }) : /*#__PURE__*/ e("div", {
                                className: "dsqjs-post-content",
                                dangerouslySetInnerHTML: {
                                    __html: processCommentMessage(props.comment.message)
                                }
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ e(DisqusJSChildrenPostItems, {
                ...props,
                currentNesting: props.nesting
            }),
            props.comment.hasMore && /*#__PURE__*/ e("p", {
                className: "dsqjs-has-more",
                children: [
                    "切换至 ",
                    /*#__PURE__*/ e(DisqusJSForceDisqusModeButton, {
                        children: "完整 Disqus 模式"
                    }),
                    " 显示更多回复"
                ]
            })
        ]
    });
}
function DisqusJSChildrenPostItems(props) {
    if (!props.children || props.children.length === 0) return null;
    return /*#__PURE__*/ e("ul", {
        className: `dsqjs-post-list ${(props.currentNesting ?? 1) < (props.nestingSetting ?? 4) ? 'dsqjs-children' : ''}`,
        children: props.children.map((comment)=>/*#__PURE__*/ h$1(DisqusJSPostItem, {
                ...comment,
                admin: props.admin,
                adminLabel: props.adminLabel,
                key: comment.comment.id
            }))
    });
}
function createDisqusJSCommentASTItem(comment, allChildrenComments, nesting) {
    const result = {
        comment,
        children: findChildrenFromComments(allChildrenComments, Number(comment.id), nesting + 1),
        nesting: nesting + 1
    };
    return result;
}
function findChildrenFromComments(allChildrenComments, parentId, nesting) {
    if (allChildrenComments.length === 0) return null;
    const list = [];
    allChildrenComments.forEach((comment)=>{
        if (comment.parent === parentId) {
            list.unshift(createDisqusJSCommentASTItem(comment, allChildrenComments, nesting));
        }
    });
    return list;
}
const DisqusJSCommentsList = (props)=>{
    const processedComments = F$1(()=>{
        const topLevelComments = [];
        const childComments = [];
        const rawComments = props.comments.slice();
        rawComments.map((comment, index)=>({
                i: index,
                p: comment.parent,
                d: getTimeStampFromString(comment.createdAt)
            })).sort((a, b)=>a.p && b.p ? a.d - b.d : 0).map(({ i  })=>rawComments[i]).forEach((comment)=>(comment.parent ? childComments : topLevelComments).push(comment));
        return topLevelComments.map((comment)=>createDisqusJSCommentASTItem(comment, childComments, 0));
    }, [
        props.comments
    ]);
    return /*#__PURE__*/ e("ul", {
        className: "dsqjs-post-list",
        id: "dsqjs-post-container",
        children: processedComments.map((comment)=>/*#__PURE__*/ h$1(DisqusJSPostItem, {
                ...comment,
                key: comment.comment.id,
                admin: props.admin,
                adminLabel: props.adminLabel
            }))
    });
};

// We will try to make the used api key as stable as possible
// And if React decides to forget some memoized values, it doesn't matter anyway
const useRandomApiKey = (apiKeys)=>F$1(()=>{
        if (Array.isArray(apiKeys)) {
            return apiKeys[randomInt(0, apiKeys.length - 1)];
        }
        return apiKeys;
    }, [
        apiKeys
    ]);

const DisqusJSSortTypeRadio = (props)=>{
    return /*#__PURE__*/ e(p$1, {
        children: [
            /*#__PURE__*/ e("input", {
                className: "dsqjs-order-radio",
                id: `dsqjs-order-${props.sortType}`,
                type: "radio",
                name: "comment-order",
                value: props.sortType,
                onChange: props.onChange,
                checked: props.checked
            }),
            /*#__PURE__*/ e("label", {
                className: "dsqjs-order-label",
                htmlFor: `dsqjs-order-${props.sortType}`,
                title: props.title,
                children: props.label
            })
        ]
    });
};
const DisqusJSSortTypeRadioGroup = /*#__PURE__*/ E(()=>{
    const sortType = useStore((state)=>state.sortType);
    const setSortType = useStore((state)=>state.setSortType);
    const onChangeHandler = T$1((value)=>()=>setSortType(value), [
        setSortType
    ]);
    return /*#__PURE__*/ e("div", {
        className: "dsqjs-order",
        children: [
            /*#__PURE__*/ e(DisqusJSSortTypeRadio, {
                checked: sortType === 'desc' || sortType === null,
                sortType: "desc",
                title: "按从新到旧",
                label: "最新",
                onChange: onChangeHandler('desc')
            }),
            /*#__PURE__*/ e(DisqusJSSortTypeRadio, {
                checked: sortType === 'asc',
                sortType: "asc",
                title: "按从旧到新",
                label: "最早",
                onChange: onChangeHandler('asc')
            }),
            /*#__PURE__*/ e(DisqusJSSortTypeRadio, {
                checked: sortType === 'popular',
                sortType: "popular",
                title: "按评分从高到低",
                label: "最佳",
                onChange: onChangeHandler('popular')
            })
        ]
    });
});
const DisqusJSHeader = /*#__PURE__*/ E((props)=>/*#__PURE__*/ e("header", {
        className: "dsqjs-header",
        id: "dsqjs-header",
        children: /*#__PURE__*/ e("nav", {
            className: "dsqjs-nav dsqjs-clearfix",
            children: [
                /*#__PURE__*/ e("ul", {
                    children: [
                        /*#__PURE__*/ e("li", {
                            className: "dsqjs-nav-tab dsqjs-tab-active",
                            children: /*#__PURE__*/ e("span", {
                                children: [
                                    props.totalComments,
                                    " Comments"
                                ]
                            })
                        }),
                        /*#__PURE__*/ e("li", {
                            className: "dsqjs-nav-tab",
                            children: props.siteName
                        })
                    ]
                }),
                /*#__PURE__*/ e(DisqusJSSortTypeRadioGroup, {})
            ]
        })
    }));
const DisqusJSPosts = (props)=>{
    const apiKey = _(useRandomApiKey(props.apikey));
    const posts = useStore((state)=>state.posts);
    const sortType = useStore((state)=>state.sortType);
    const prevSortType = _(sortType);
    const errorWhenLoadMorePosts = useStore((state)=>state.morePostsError);
    const isLoadingMorePosts = useStore((state)=>state.loadingPosts);
    const fetchMorePosts = useStore((state)=>state.fetchMorePosts);
    const fetchFirstPageRef = _(null);
    const resetAndFetchFirstPageOfPosts = T$1(()=>fetchMorePosts(props.shortname, props.id, apiKey.current, props.api, true), [
        fetchMorePosts,
        props.api,
        props.id,
        props.shortname
    ]);
    const fetchNextPageOfPosts = T$1(()=>fetchMorePosts(props.shortname, props.id, apiKey.current, props.api, false), [
        fetchMorePosts,
        props.api,
        props.id,
        props.shortname
    ]);
    h(()=>{
        // When there is no posts at all, load the first pagination of posts.
        if (fetchFirstPageRef.current !== props.id) {
            fetchFirstPageRef.current = props.id;
            resetAndFetchFirstPageOfPosts();
        } else if (prevSortType.current !== sortType) {
            prevSortType.current = sortType;
            fetchFirstPageRef.current = props.id;
            resetAndFetchFirstPageOfPosts();
        }
    }, [
        posts,
        resetAndFetchFirstPageOfPosts,
        props.id,
        isLoadingMorePosts,
        sortType
    ]);
    if (posts.length > 0) {
        return /*#__PURE__*/ e(p$1, {
            children: [
                /*#__PURE__*/ e(DisqusJSCommentsList, {
                    comments: posts.filter(Boolean).map((i)=>i.response).flat(),
                    admin: props.admin,
                    adminLabel: props.adminLabel
                }),
                posts.at(-1)?.cursor.hasNext && /*#__PURE__*/ e(DisqusJSLoadMoreCommentsButton, {
                    isLoading: isLoadingMorePosts,
                    isError: errorWhenLoadMorePosts,
                    onClick: isLoadingMorePosts ? undefined : fetchNextPageOfPosts
                })
            ]
        });
    }
    return null;
};
const DisqusJSThread = (props)=>{
    const apiKey = _(useRandomApiKey(props.apikey));
    const thread = useStore((state)=>state.thread);
    const fetchThread = useStore((state)=>state.fetchThread);
    const setDisqusJsMessage = useStore((state)=>state.setMsg);
    const fetchThreadRef = _(null);
    const identifier = props.identifier ?? document.location.origin + document.location.pathname + document.location.search;
    h(()=>{
        if (fetchThreadRef.current !== identifier) {
            setDisqusJsMessage(/*#__PURE__*/ e(p$1, {
                children: [
                    "评论基础模式加载中... 如需完整体验请针对 disq.us | disquscdn.com | disqus.com 启用代理并 ",
                    /*#__PURE__*/ e(DisqusJSReTestModeButton, {
                        children: "尝试完整 Disqus 模式"
                    }),
                    " | ",
                    /*#__PURE__*/ e(DisqusJSForceDisqusModeButton, {
                        children: "强制完整 Disqus 模式"
                    })
                ]
            }));
            fetchThreadRef.current = identifier;
            fetchThread(props.shortname, identifier, apiKey.current, props.api);
        } else {
            setDisqusJsMessage(/*#__PURE__*/ e(p$1, {
                children: [
                    "你可能无法访问 Disqus，已启用评论基础模式。如需完整体验请针对 disq.us | disquscdn.com | disqus.com 启用代理并 ",
                    /*#__PURE__*/ e(DisqusJSReTestModeButton, {
                        children: "尝试完整 Disqus 模式"
                    }),
                    " | ",
                    /*#__PURE__*/ e(DisqusJSForceDisqusModeButton, {
                        children: "强制完整 Disqus 模式"
                    })
                ]
            }));
        }
    }, [
        thread,
        fetchThread,
        identifier,
        setDisqusJsMessage,
        props.shortname,
        props.api
    ]);
    if (!thread) {
        return null;
    }
    if (thread.response.length === 1) {
        if (thread.response[0].posts === 0) {
            return /*#__PURE__*/ e(p$1, {
                children: [
                    /*#__PURE__*/ e(DisqusJSHeader, {
                        totalComments: 0,
                        siteName: props.siteName ?? ''
                    }),
                    /*#__PURE__*/ e(DisqusJSNoComment, {
                        text: props.nocomment ?? '这里空荡荡的，一个人都没有'
                    })
                ]
            });
        }
        return /*#__PURE__*/ e(p$1, {
            children: [
                /*#__PURE__*/ e(DisqusJSHeader, {
                    totalComments: thread.response[0].posts,
                    siteName: props.siteName ?? ''
                }),
                /*#__PURE__*/ e(DisqusJSPosts, {
                    ...props,
                    id: thread.response[0].id
                })
            ]
        });
    }
    return /*#__PURE__*/ e(DisqusJSCreateThread, {});
};

const DisqusJSFooter = /*#__PURE__*/ E(()=>/*#__PURE__*/ e("footer", {
        className: "dsqjs-footer-container",
        children: /*#__PURE__*/ e("p", {
            className: "dsqjs-footer",
            children: [
                'Powered by ',
                /*#__PURE__*/ e("a", {
                    className: "dsqjs-disqus-logo",
                    href: "https://disqus.com",
                    target: "_blank",
                    rel: "external nofollow noopener noreferrer"
                }),
                ' ',
                "&",
                ' ',
                /*#__PURE__*/ e("a", {
                    className: "dsqjs-dsqjs-logo",
                    href: "https://disqusjs.skk.moe",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "DisqusJS"
                })
            ]
        })
    }));

var styles = {"dsqjs":"__dsqjs_oc95o1"};

const DisqusJSEntry = (props)=>{
    const disqusJsMode = useStore((state)=>state.mode);
    const checkDisqusJsMode = useStore((state)=>state.checkMode);
    h(()=>{
        if (disqusJsMode !== 'disqus' && disqusJsMode !== 'dsqjs') {
            checkDisqusJsMode(props.shortname);
        }
    }, [
        checkDisqusJsMode,
        disqusJsMode,
        props.shortname
    ]);
    if (disqusJsMode === 'disqus') {
        return /*#__PURE__*/ e(Disqus, {
            shortname: props.shortname,
            identifier: props.identifier,
            url: props.url,
            title: props.title
        });
    }
    if (disqusJsMode === 'dsqjs') {
        return /*#__PURE__*/ e(DisqusJSThread, {
            ...props
        });
    }
    return null;
};
const DisqusJS$1 = /*#__PURE__*/ R((props, ref)=>{
    const msg = useStore((state)=>state.msg);
    const disqusJsHasError = useStore((state)=>state.error);
    const { shortname , siteName , identifier , url , title , api , apikey , nesting , nocomment , admin , adminLabel , className , ...rest } = props;
    const disqusJsConfig = {
        shortname,
        siteName,
        identifier,
        url,
        title,
        api,
        apikey,
        nesting,
        nocomment,
        admin,
        adminLabel
    };
    const [startClientSideRender, setStartClientSideRender] = p(false);
    h(()=>{
        setStartClientSideRender(true);
    }, []);
    if (startClientSideRender) {
        return /*#__PURE__*/ e("div", {
            ref: ref,
            ...rest,
            className: `${styles.dsqjs} ${className ?? ''}`,
            children: /*#__PURE__*/ e("section", {
                id: "dsqjs",
                children: [
                    disqusJsHasError ? /*#__PURE__*/ e(DisqusJSError, {}) : /*#__PURE__*/ e(p$1, {
                        children: [
                            msg && /*#__PURE__*/ e("div", {
                                id: "dsqjs-msg",
                                children: msg
                            }),
                            /*#__PURE__*/ e(DisqusJSEntry, {
                                ...disqusJsConfig
                            })
                        ]
                    }),
                    /*#__PURE__*/ e(DisqusJSFooter, {})
                ]
            })
        });
    }
    return null;
});

// eslint-disable-next-line no-nested-ternary
const getElementFromConfig = (el)=>el ? typeof el === 'string' ? document.querySelector(el) : el : document.getElementById('disqusjs');
class DisqusJS {
    constructor(config){
        this.config = config;
    }
    render(el) {
        const container = getElementFromConfig(el);
        if (container) {
            this.container = container;
            P$1(/*#__PURE__*/ e(DisqusJS$1, {
                ...this.config
            }), container);
        }
    }
    destroy() {
        if (this.container) {
            // https://github.com/preactjs/preact/blob/40f7c6592b4ed96fe9c6615e43e3d9815e566291/compat/src/index.js#L67-L78
            P$1(null, this.container);
        }
    }
}

export { DisqusJS as default };
