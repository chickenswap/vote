(function(e){function t(t){for(var r,o,c=t[0],s=t[1],i=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={index:0},a={index:0},u=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2e05f3ac":"3f25c266"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-2e05f3ac":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2e05f3ac":"63a32edc"}[e]+".css",a=s.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){i=f[c],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.jsdelivr.net/gh/chickenswap/vote/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2acf":function(e,t,n){},"33e7":function(e,t){e.exports="data:image/png;base64,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"},"56d7":function(e,t,n){"use strict";n.r(t);n("0fb7"),n("450d");var r=n("f529"),o=n.n(r),a=(n("eca7"),n("3787")),u=n.n(a),c=(n("425f"),n("4105")),s=n.n(c),i=(n("a7cc"),n("df33")),l=n.n(i),f=(n("672e"),n("101e")),p=n.n(f),d=(n("1951"),n("eedf")),h=n.n(d),m=(n("be4f"),n("896a")),v=n.n(m),b=(n("5466"),n("ecdf")),V=n.n(b),x=(n("38a0"),n("ad41")),q=n.n(x),g=(n("10cb"),n("f3ad")),y=n.n(g),A=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Nav"),n("router-view")],1)},k=[],E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nav-container"},[r("header",[r("div",{staticClass:"left",on:{click:e.goEx}},[r("img",{attrs:{src:n("33e7"),alt:""}}),r("img",{attrs:{src:n("eb77"),alt:""}})]),e._m(0)])])},K=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"right"},[n("a",{staticClass:"text",attrs:{href:"https://chickenswap.org/#/farms",target:"_blank"}},[e._v("Farms")])])}],T=(n("c975"),{name:"Nav",data:function(){return{poolRouter:"Home"}},mounted:function(){var e=this;this.$router.onReady((function(){e.$router.history.current.path.indexOf("home")<0?e.poolRouter="Home":e.poolRouter="Mining Pool"}))},methods:{goToPool:function(){this.poolRouter="Home",this.$router.push({path:"/pool"})},goHome:function(){this.poolRouter="Mining Pool",this.$router.push({path:"/home"})},goToSnapshot:function(){this.$router.push({path:"/snapshot"})},goEx:function(){window.location.href="https://chickenswap.org"}}}),W=T,S=(n("ab4c"),n("2877")),P=Object(S["a"])(W,E,K,!1,null,"530512c6",null),R=P.exports,z={name:"App",components:{Nav:R}},B=z,L=(n("5c0b"),Object(S["a"])(B,w,k,!1,null,null,null)),U=L.exports,Y=(n("d3b7"),n("8c4f"));A["default"].use(Y["a"]);var J=[{path:"/",component:function(){return n.e("chunk-2e05f3ac").then(n.bind(null,"0822"))}},{path:"*",component:function(){return n.e("chunk-2e05f3ac").then(n.bind(null,"0822"))}}],N=new Y["a"]({mode:"hash",routes:J});n("77ed"),n("b20f");A["default"].config.productionTip=!1,A["default"].use(y.a),A["default"].use(q.a),A["default"].use(V.a),A["default"].use(v.a),A["default"].use(h.a),A["default"].use(p.a),A["default"].use(l.a),A["default"].use(s.a),A["default"].use(u.a),A["default"].prototype.$message=o.a,new A["default"]({router:N,render:function(e){return e(U)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},ab4c:function(e,t,n){"use strict";var r=n("2acf"),o=n.n(r);o.a},b20f:function(e,t,n){},eb77:function(e,t,n){e.exports=n.p+"img/cf_logo_txt.f6dc4a87.png"}});