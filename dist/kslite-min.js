!function(a,b,c){function d(){if(navigator.userAgent.indexOf("MSIE")<0)return null;for(var a,b=m[l]("script"),c=0,d=b.length;d>c;c++)if(a=b[c],"interactive"===a.readyState)return a;return null}var e={lt_pkgs:{},lt_v:"0.0.1",lt_t:"20130710055319"};if(e.lt_pkgs.packages="http://a.alimama.cn/kslite/",a[b]!==c)return KSLITE.Config.lt_pkgs=KSLITE.mix(e.lt_pkgs,KSLITE.Config.lt_pkgs),void 0;b=a[b]={};var f=a.KSLITEonLoad,g=a.KSLITEpkgPaths,h=a.document,i=Object.prototype.toString,j=function(a){return function(b){return i.call(b)==="[object "+a+"]"}},k=function(a,b,d,e){if(!b||!a)return a;d===c&&(d=!0);var f,g,h;if(e&&(h=e.length))for(f=0;h>f;f++)g=e[f],g in b&&(!d&&g in a||(a[g]=b[g]));else for(g in b)!d&&g in a||(a[g]=b[g]);return a},l="getElementsByTagName",m=h[l]("head")[0]||h.documentElement,n=0,o=2,p=4,q=/\.css(?:\?|$)/i,r=function(a,b){var c=/^(?:loaded|complete|undefined)$/;a.onreadystatechange=a.onload=a.onerror=function(){c.test(a.readyState)&&(a.onload=a.onerror=a.onreadystatechange=null,b())}};k(b,{version:e.lt_v,_init:function(){function c(a){var b=a.split("@");e.lt_pkgs[b[0]]=b[1]}var d,i,j=h[l]("script");if(!a.KSLITEcurrentScript)for(d=0;d<j.length;d++)if(j[d].kslite){a.KSLITEcurrentScript=j[d];break}i=a.KSLITEcurrentScript||j[j.length-1],a.KSLITEcurrentScript=i;var k=i.src.split("/").slice(0,-1).join("/")+"/";b.Env={mods:{},fns:{},_loadQueue:{},_relies:{rq:{},sp:{}}},b.Config={debug:!1,base:k,timeout:10,charset:"gbk",kslite:e},b.mix(b.Config,e),b.declare("kslite",[],function(a,c){c=b.mix(c,b,!0,["path","log","getScript","substitute","clone","mix","multiAsync","extend","iA","iF","iPO","iS"])}),b.provide(["kslite"],function(){b.require("kslite").log("kslite inited")}),/demo|debug|test/.test(location.href)&&(b.Config.debug=!0),b.Config.debug&&(e.lt_t+=(new Date).getTime()+".js");var m;if(a.KSLITEpkgPaths={push:function(a){c(a)}},g&&b.iA(g))for(m=0;m<g.length;m++)c(g[m]);if(e.lt_t=a.KSLITEtimestamp||e.lt_t,a.KSLITEonLoad={push:function(a){a&&b.iF(a)&&a(b)}},f&&b.iA(f))for(m=0;m<f.length;m++)b.iF(f[m])&&f[m](b)},mix:k,log:function(c,d){return b.Config.debug&&a.console&&console.log&&console[d&&console[d]?d:"log"](c),b},clone:function(a){var c,d,e=a;if(a&&((c=b.iA(a))||b.iPO(a))){e=c?[]:{};for(d in a)a.hasOwnProperty(d)&&(e[d]=b.clone(a[d]))}return e},extend:function(a,b,c,d){if(!b||!a)return a;var e=Object.prototype,f=function(a){function b(){}return b.prototype=a,new b},g=b.prototype,h=f(g);return a.prototype=h,h.constructor=a,a.superclass=g,b!==Object&&g.constructor===e.constructor&&(g.constructor=b),c&&k(h,c),d&&k(a,d),a},substitute:function(a,d,e,f){return b.iS(a)&&b.iPO(d)?a.replace(e||/\\?\{([^{}]+)\}/g,function(a,b){return"\\"===a.charAt(0)?a.slice(1):d[b]!==c?d[b]:f?a:""}):a},getScript:function(a,d,e,f){var g,i,j,k,l=q.test(a),n=h.createElement(l?"link":"script"),o=d;if(b.iPO(o)&&(d=o.success,g=o.error,i=o.timeout,e=o.charset,f||(f=o.expando)),e&&(n.charset=e),f)for(k in f)n.setAttribute(k,f[k]);return b.iF(d)&&(l?d.call(n):r(n,function(){j&&(clearTimeout(j),j=c),d.call(n)})),b.iF(g)&&(j=setTimeout(function(){j=c,g()},1e3*(i||b.Config.timeout))),l?(n.rel="stylesheet",n.href=a):(n.async=!0,n.src=a),m.insertBefore(n,m.firstChild),n},iF:j("Function"),iA:j("Array"),iS:j("String"),iO:j("Object"),iPO:function(a){return a&&b.iO(a)&&!a.nodeType&&!a.setInterval},add:function(a,c,d){var e,f=b.Env.mods;if(!(f[a]&&f[a].status>n))return e={name:a,fn:c||null,status:o},b.iA(d)&&(d={requires:d}),k(e,d),f[a]=e,b},use:function(a,c){a=a.split(","),b.Env.mods,b._aMs(a,function(){c&&c(b)})},_aMs:function(a,c){var d,e={};for(d=0;d<a.length;d++)e[a[d]]={f:b._aM,a:a[d]};b.multiAsync(e,c)},_aM:function(a,c){function d(a){a.status!=p&&(a.fn?(b.log("attach "+a.name),a.fn(b,b.require(a.name),b._ns(a.name))):b.log("attach "+a.name+" without expected attach fn!","warn"),a.status=p),c()}function e(a){function b(a){return i[a]=i[a]||{},j[a]=j[a]||{},a}var c,d,e,f;for(d=b(a.name),c=0;c<a.requires.length;c++){e=b(a.requires[c]),i[d][e]=1,j[e][d]=1;for(f in j[d])i[f][e]=1,j[e][f]=1}}var f,g,h=b.Env.mods,i=b.Env._relies.rq,j=b.Env._relies.sp;if(f=h[a],f&&f.status!==n)if(g=f.requires,b.iA(g)&&g.length>0){if(e(f),i[a][a])throw new Error("Fatal Error,Loop Reqs:"+f.name);b.log(f.name+" to req: "+g),b._aMs(g,function(){d(f)})}else d(f);else f={name:a},b._lM(f,function(){b._aM(a,function(){d(h[a])})})},_lM:function(a,d){var e,f=b.Env._loadQueue,g=a.name,h=b.Env.mods;f[g]?(e=f[g],e.c?(b.log(g+" is already loaded","warn"),d()):(b.log(g+" is loading,listen to callback"),e.fns.push(d))):b._gPath(a,function(){f[g]={fns:[d],c:!1},h[g]||(h[g]={name:g,status:n}),b.getScript(a.fullpath,function(){var a,d,e=f[g];for(b.__m__&&(d=b.__m__,b.add(g,d.fn,d.deps),b.__m__=null),h[g].status===n&&(h[g].status=o),a=0;a<e.fns.length;a++)e.fns[a]();e.c=!0,e.fns=c},null,{mod_name:g})})},path:function(a,c){var d=a.split("-"),e=d[0],f=b.Config.lt_pkgs;b.iS(f[e])&&c(f[e]+d.join("/"))},_gPath:function(a,c){b.path(a.name,function(d){a.fullpath=d+".js?_t="+e.lt_t+".js",b.log("path "+a.name+": "+a.fullpath),c()})},multiAsync:function(a,c){function d(){var b,d={};for(b in a){if(!a[b].c)return;d[b]=a[b].r}c(d)}var e,f=!1;for(e in a)f=!0;f||c({});for(e in a)!function(){var c=a[e];c.f.call(c.c||b,c.a,function(a){c.r=a,c.c=!0,d()})}()},_ns:function(a){var c,d=a.split("-"),e=b.Env.fns;for(c=0;c<d.length;c++)e[d[c]]=e[d[c]]||{},e=e[d[c]];return e},require:function(a){var c=b._ns(a);return c.exports=c.exports||{},c.exports},declare:function(){var a,c,e,f,g,h;for(c=0;c<arguments.length;c++)e=arguments[c],b.iS(e)?f=e:b.iA(e)?g=e:b.iF(e)&&(h=e);f||(a=d(),a&&(f=a.getAttribute("mod_name")||!1)),f?b.add(f,function(a,b,c){h(a.require,b,c)},g):b.__m__={deps:g,fn:function(a,b,c){h(a.require,b,c)}}},provide:function(a,c){b.use(a.join(","),function(a){c(a.require)})}}),b._init()}(window,"KSLITE");