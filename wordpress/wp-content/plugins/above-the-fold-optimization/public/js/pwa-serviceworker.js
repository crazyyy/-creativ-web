!function(q,t){function O(a,c,h){return caches.open(r).then(function(b){var f={};return c.headers.forEach(function(a,b){f[b]=a}),f["x-abtf-sw"]=n(),h&&h.max_age&&(f["x-abtf-sw-expire"]=h.max_age),c.blob().then(function(d){d=new Response(d,{status:c.status,statusText:c.statusText,headers:f});return b.put(a,d)})})}function G(a){if(a)return"string"==typeof a&&(a=new Request(a,{mode:"no-cors"})),w(a).then(function(c){return c?c:(a.url,u(a,{conditions:null},!1,!0))})}function w(a){var c=m.start(1E3);return caches.open(r).then(function(h){return h.match(a).then(function(a){if(a){var b=
a.headers.get("x-abtf-sw-expire");if(b)var d=a.headers.get("x-abtf-sw");var g=a.headers.get("expire");g&&(g=A(g));b&&d<n()-b?a=!1:g&&g<n()&&(a=!1)}return m.complete(c),a})})}function H(a,c){return a=new Request(a),w(a).then(function(a){return a?a.blob().then(function(c){return new Response(c,{status:503,statusText:"Offline",headers:a.headers})}):t(c)["catch"](function(a){setTimeout(function(){throw a;})})})}function P(a,c,h,b){var f=h.headers.get("etag"),d=A(h.headers.get("last-modified"));if(f||
d){var g=m.start(1E3);h=new Request(a.url,{method:"HEAD",headers:a.headers,mode:"no-cors"});t(h).then(function(e){var k=!1,x=e.headers.get("etag");e=A(e.headers.get("last-modified"));return(x&&x!==f?k=!0:e&&e!==d&&(k=!0),k)?(k=u(a,c),k=k.then(function(a){return m.complete(g),a}),b&&(k=k.then(b)),k):(m.complete(g),null)})["catch"](function(){var e=u(a,c);return e=e.then(function(a){return m.complete(g),a}),b&&(e=e.then(b)),e})}else h=u(a,c),b&&(h=h.then(b))}function u(a,c,h,b){var f=m.start(1E3);return Q(a.headers.get("accept")).then(function(d){function g(a){a in
l&&(l[a]&&l[a][2]&&clearTimeout(l[a][2]),l[a]=!1,delete l[a])}var e=new Request(a);e.headers.set("x-pagespeed-sw",1);d&&e.headers.set("cache-digest",d);var k=e.url;if(!b&&l&&k in l&&l[k]&&l[k][0]>n()-5)return l[k][1];d=t(e).then(function(a){g(k);var b=!1;if(a.ok&&400>a.status){var d=a.headers.get("link");d&&(d instanceof Array||(d=[d]),m.f(function(){caches.open(r+":push").then(function(a){d.forEach(function(b){b.split(",").forEach(function(b){if(/rel=preload/.test(b)){var e=b.match(/<([^>]+)>/);
e&&e[1]&&a.match(e[1]).then(function(b){b||a.put(e[1],new Response(null,{status:204}))})}})})})},1E3));c&&(b=!0,c.conditions&&c.conditions.forEach(function(c){if(b)switch(c.type){case "url":c.regex?(d=B(c.pattern))?(f=d.test(e.url),c.not?f&&(b=!1):f||(b=!1)):b=!1:(f=-1!==e.url.indexOf(c.pattern),c.not?f&&(b=!1):f||(b=!1));break;case "header":var g=a.headers.get(c.name);if(g)if(c.regex){var d=B(c.pattern);d?(f=d.test(g),c.not?f&&(b=!1):f||(b=!1)):b=!1}else if("object"==typeof c.pattern)if(c.pattern.operator)if(g=
parseFloat(g),d=parseFloat(c.pattern.value),isNaN(g)||isNaN(d))b=!1;else{switch(c.pattern.operator){case "<":f=g<d;break;case ">":f=g>d;break;case "=":var f=g===d;break;default:b=!1}b&&(c.not?f&&(b=!1):f||(b=!1))}else b=!1;else-1===g.indexOf(c.pattern)&&(b=!1);else b=!1}}),b&&O(e,a.clone(),c).then(function(){m.complete(f)}))}return b||m.complete(f),a})["catch"](function(a){return g(k),m.complete(f),h?h(e,null,a):null});return b&&(l[k]=[n(),d],l[k][2]=setTimeout(function(){l[k]=!1;delete l[k]},5E3)),
d})}function L(){I||(!J||J<n()-10)&&(I=!0,J=n(),caches.keys().then(function(a){return a&&0!==a.length?Promise.all(a.map(function(a){if(0!==a.indexOf(r))return caches["delete"](a);caches.open(a).then(function(a){a.keys().then(function(b){if(!(b.length<C)){var c=[],d=[],g=[];return b.forEach(function(b){d.push(b);g.push(a.match(b))}),Promise.all(g).then(function(b){var e=n();b.forEach(function(b,g){if(b&&b.headers){var f=b.headers.get("x-abtf-sw");if(f){var k=b.headers.get("x-abtf-sw-expire");if(k&&
f&&f<n()-k)return void a["delete"](d[g])}else f=e;!1!==c&&c.push({t:f,r:d[g]})}});c&&c.length>C&&(c.sort(function(a,b){return a.t>b.t?-1:a.t<b.t?1:0}),c.slice(C).forEach(function(b){a["delete"](b.r)}))})}})})})).then(function(){I=!1}):Promise.resolve()}))}function B(a){if(a=a.match(R)){try{var c=new RegExp(a[1],a[2])}catch(h){}return c||!1}}function A(a){if(a)return isNaN(parseInt(a))?(a=Date.parse(a),isNaN(a)?void 0:Math.round(a/1E3)):a}function n(){return Math.round(Date.now()/1E3)}function D(){return v?
Promise.resolve():(M(),v=!0,t(E+"?"+Math.round(Date.now()/1E3),{mode:"no-cors"}).then(function(a){if(v=!1,a&&a.ok&&400>a.status)return a.json().then(function(a){if(a){a instanceof Array&&(a={policy:a});r="abtf";a.cache_version&&(r=r+":"+a.cache_version);a.policy&&(p=a.policy,z=n());var c=[],b=[];return a.start_url&&b.push(G(a.start_url)),a.policy&&a.policy.forEach(function(a){a.offline&&-1===c.indexOf(a.offline)&&c.push(a.offline)}),a.preload&&a.preload.forEach(function(a){-1===c.indexOf(a)&&c.push(a)}),
preloadPromises=[],c.forEach(function(a){preloadPromises.push(G(a))}),a.i&&(b=b.concat(preloadPromises)),Promise.all(b)}});throw p=!1,Error("service worker config not found: "+E);})["catch"](function(a){p=v=!1;setTimeout(function(){throw a;})}))}function N(a){(new Promise(function(c){if(!p||!z||a&&a>z){var h=!p;D().then(function(){h&&c(p?p:!1)})["catch"](function(){h&&c(!1)})}else if(!v&&z<n()-300){M();v=!0;var b=new Request(E+"?"+Math.round(Date.now()/1E3),{method:"HEAD",mode:"no-cors"});t(b).then(function(a){v=
!1;var b=!0;a&&a.ok&&(a=A(a.headers.get("last-modified")))&&a<=z&&(b=!1);b&&D()})["catch"](function(){v=!1;D()})}else c(p)}))["catch"](function(a){setTimeout(function(){throw a;})})}function Q(a){return a&&a.includes("text/html")?new Promise(function(a){caches.open(r+":push").then(function(c){c.keys().then(function(b){if(0===b.length)return a(null);var c=[];b.forEach(function(a){c.push(w(a))});Promise.all(c).then(function(c){var g=[];b.forEach(function(a,b){"undefined"!==c[b]&&c[b]&&g.push(a.url)});
0===g.length?a(null):S(g,Math.pow(2,7)).then(function(b){a(b)})})})})}):Promise.resolve(null)}function M(){var a=new URL(location);(K=a.searchParams.get("path"))||(K="/");(a=a.searchParams.get("config"))||(a="abtf-pwa-config.json");E=K+a}var K,E,r,p=!1,z=!1,C=1E3,l={};q.addEventListener("install",function(a){a.waitUntil(D().then(function(){q.skipWaiting()})["catch"](function(){q.skipWaiting()}))});q.addEventListener("activate",function(){q.clients.claim()});CacheStorage.prototype.match||(CacheStorage.prototype.match=
function(a,c){var h=this;return this.keys().then(function(b){var f;return b.reduce(function(b,g){return b.then(function(){return f||h.open(g).then(function(b){return b.match(a,c)}).then(function(a){return f=a})})},Promise.resolve())})});var v,S=function(){function a(){this.value=[];this.a=0}function c(a,b){return a-b}function h(a,c,k){return new Promise(function(e){var g=b(a);crypto.subtle.digest("SHA-256",d.encode(g)).then(function(a){a=(new DataView(a)).getUint32(0);var b=Math.log2(c*k);if(31<b)throw Error("This implementation only supports up to 31 bit hash values");
e(a>>32-b&(1<<b)-1)})})}function b(a){return a.replace(/[!'()*]/g,function(a){return"%"+a.charCodeAt(0).toString(16)})}function b(a){return a.replace(/[!'()*]/g,function(a){return"%"+a.charCodeAt(0).toString(16)})}function f(b,e){if(e>=Math.pow(2,32))throw Error('Invalid probability: "${p}" must be smaller than 2**32');if(!(0<e&&(e&1+~e)===e))throw Error('Invalid probability: "${p}" must be a power of 2');var g,d=Math.min(Math.pow(2,Math.round(Math.log2(b.length))),Math.pow(2,31)),f=[];return new Promise(function(k){Promise.all(b.map(function(a){return h(a,
d,e)})).then(function(){f=f.concat().sort(c);g=Uint8Array.from((new a).c(Math.log2(d),5).c(Math.log2(e),5).g(f,Math.log2(e)).value);var b;b="";for(var h=g.byteLength,x=0;x<h;x++)b+=String.fromCharCode(g[x]);b=btoa(b).replace(/=+$/,"");k(b)})})}a.prototype.b=function(a){0==this.a&&(this.value.push(0),this.a=8);--this.a;a&&(this.value[this.value.length-1]|=1<<this.a)};a.prototype.c=function(a,b){if(0!=b){do--b,this.b(a&1<<b);while(0!=b)}return this};a.prototype.g=function(a,b){for(var c=-1,d=0;d!=a.length;++d)if(c!=
a[d]){for(var c=a[d]-c-1,e=c>>b;0!=e;--e)this.b(0);this.b(1);this.c(c,b);c=a[d]}return this};var d=new TextEncoder("utf-8");return function(a,b){return f(a,b)}}(),m=function(){function a(f,d,g){var e=!1,k=Object.keys(c);if(0<k.length){var h=Date.now();k.forEach(function(a){if(!e)if(c[a][0]<h-c[a][1])try{delete c[a]}catch(U){}else e=!0})}if(e){if(0!==d){var y;if(g){var l=!1;b.forEach(function(a,b){l||a[2]==g&&(l=b)});l&&(b[l][1]&&clearTimeout(b[l][1]),y=l)}y||(y=b.push([])-1);b[y]=[f,setTimeout(function(c,
d){delete b[c];d();0<b.length&&a(null,0)},d,y,f),g]}}else if(f&&b.push([f]),0<b.length)for(f=b.shift();f;){if(f instanceof Array){f[1]&&clearTimeout(f[1]);try{f[0]()}catch(T){}}f=b.shift()}}var c={},h=0,b=[];return{start:function(a){var b=++h;return c[b]=[Date.now(),a],b},complete:function(f){try{delete c[f]}catch(d){}0<b.length&&a(null,0)},f:a}}(),R=/^\/(.*)\/([gimuy]+)?$/,J=!1,I=!1,F=!1;q.addEventListener("fetch",function(a){if("GET"===a.request.method){var c=!1;if(["wp-admin/","wp-login.php"].forEach(function(b){c||
(b=new RegExp("^([^/]+)?//"+q.location.host+"(:[0-9]+)?/"+b),(b.test(a.request.url)||a.request.referrer&&b.test(a.request.referrer))&&(c=!0))}),!(c||a.request.url.match(/\&preview=true/)||a.request.url.match(/\&preview_nonce=/))&&(N(),p&&r)){var h=function(a,c){if(!c||0===c.length)return!1;var b=!1;if(c.forEach(function(c){if(!b&&c.match&&0!==c.match.length){var e=!0;c.match.forEach(function(b){if(e)switch(b.type){case "url":if(b.regex)(f=B(b.pattern))?(d=f.test(a.request.url),b.not?d&&(e=!1):d||
(e=!1)):e=!1;else if(b.pattern instanceof Array){var c=!1;b.pattern.forEach(function(b){c||-1!==a.request.url.indexOf(b)&&(c=!0)});b.not?c&&(e=!1):c||(e=!1)}else d=-1!==a.request.url.indexOf(b.pattern),b.not?d&&(e=!1):d||(e=!1);break;case "header":switch(b.name.toLowerCase()){case "referer":case "referrer":g=a.request.referrer;break;default:var g=a.request.headers.get(b.name)}if(g)if(b.regex){var f=B(b.pattern);f?(d=f.test(g),b.not?d&&(e=!1):d||(e=!1)):e=!1}else{var d=-1!==g.indexOf(b.pattern);b.not?
d&&(e=!1):d||(e=!1)}else b.not||(e=!1)}});e&&(b=c)}}),!b)return!1;switch(F&&clearTimeout(F),F=setTimeout(function(){m.f(L,1E4,"clean-cache");F=!1},100),b.strategy){case "never":return!1;case "cache":return w(a.request).then(function(c){if(c){var e=!0,d=b.cache.update_interval?!isNaN(parseInt(b.cache.update_interval))&&parseInt(b.cache.update_interval):!1;if(d){var f=c.headers.get("x-abtf-sw");f&&parseInt(f)>n()-d&&(e=!1)}return e&&function(a,c){setTimeout(function(){var d;if(b.cache.h&&(d=function(){clients.matchAll().then(function(b){b.forEach(function(b){b.postMessage([2,
a.url])})})}),b.cache.head_update)P(a,b.cache,c,d);else{var e=u(a,b.cache);d&&e.then(d)}},10)}(a.request.clone(),c.clone()),c}return u(a.request,b.cache,function(c,d){return b.offline?H(b.offline,c.clone()):d||t(a.request.clone())["catch"](function(a){setTimeout(function(){throw a;})})})});case "event":return w(a.request).then(function(c){return c||u(a.request,null,function(c,d){return b.offline?H(b.offline,c.clone()):d||t(a.request)["catch"](function(a){setTimeout(function(){throw a;})})})});default:return u(a.request,
b.cache,function(c,d){return w(c).then(function(e){return e||(b.offline?H(b.offline,c.clone()):d||t(a.request)["catch"](function(a){setTimeout(function(){throw a;})}))})})}}(a,p);if(!1!==h)return a.respondWith(h)}}});q.addEventListener("message",function(a){if(a&&a.data&&a.data instanceof Array){if(1===a.data[0]&&(a.data[1]&&!isNaN(parseInt(a.data[1]))&&N(parseInt(a.data[1])),a.data[3]&&!isNaN(parseInt(a.data[3]))&&(C=parseInt(a.data[3])),m.f(L,1E4,"clean-cache")),2===a.data[0]||3===a.data[0])var c=
a.ports[0]?function(b,c){a.ports[0].postMessage({error:b,status:c})}:!1;if(2===a.data[0])if(a.data[1]){var h;if("string"==typeof a.data[1]||a.data[1]instanceof Request?h=[a.data[1]]:a.data[1]instanceof Array&&(h=a.data[1]),h){var b=[];h.forEach(function(a){b.push(G(a))});c&&Promise.all(b).then(function(a){var b=[];a.forEach(function(a){var c={url:a.url,status:a.status,statusText:a.statusText};a=a.headers.get("content-length");c.size=isNaN(parseInt(a))?-1:parseInt(a);b.push(c)});c(null,b)})["catch"](function(){})}else c&&
c("invalid-data")}else c&&c("no-urls");3===a.data[0]&&(q.registration.showNotification(a.data[1],a.data[2]),c&&c(null,"sent"))}})}(self,self.fetch,Cache);