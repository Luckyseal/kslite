﻿# kslite
kslite是一个短小精悍的模块管理程序。

## 包和模块管理：
模块名由包名，路径，文件名。三部分构成
如 `{packagename}-{path_0}-...-{path_n}-{filename}`
包类似 *.jar，每个包对应一个 codebase 即 classesroot。在 `S.config.lt_pkgs` 中配置
是一个 http 地址，如果没有则以为 kslite 所在地址为 base。
比如：

```js
S.Config.lt_pkgs={
    inf:"http://a.alimama.cn/kslite/",
    test:"http://demo.taobao.com/tbad/kslite"
}
```

模块 `inf-a` 对应地址 http：//a.alimama.cn/kslite/inf/a.js
模块 `test-t-1` 对应地址 http：//demo.taobao.com/tbad/kslite/test/t/1.js

这样根据模块名称即可定位模块地址，所以不需要 add 预先注册模块即可直接 use。
add 不执行 attach。只有第一次 use 的时候才执行 attach。
add 同样支持 require。可以在载入 js 后根据 require 串行加载更多模块。已处理循环引用问题，办法很土。
暂时不支持 use 外部 JS 文件，如 `use("jquery.js")`;

## 一些说明
文件使用utf-8编码, 在合并到别的工程的时候手工编码转换

## 使用方法
```js
// 文件及路径, test包下的math模块, 以下类似
//test/math.js 
KSLITE.declare([], function(require, exports){
    exports.add = function(a, b){
        return a + b;
    };
});

//  test/increment.js
KSLITE.declare(['test-math'], function(require, exports){
    //注意这里需要调用一下require方法
    var add = require('test-math').add;
    exports.increment = function(a){
        return add(a,1);
    };
});

//  test/program.js
KSLITE.declare(["test-increment"], function(require, exports){
    var inc = require("test-increment").increment;
   exports.result = inc(1);
});

//  调用
KSLITE.provide(["test-program"], function(require){
    alert(require("test-program").result);
});
```

##开放接口
所有方法绑定在全局变量KSLITE上

###declare([module][,depenArry,] factory) 
定义一个模块

###provide(module, callback) 
使用模块

###path(module, callback) 

###log( msg [,cat] )
msg : String
将要显示的信息
cat : String 
信息的类别，默认是log

###getScript( url[,success][,charset][, expando] )
获取一个脚本

url : String
脚本路径

success : Function
成功的回调函数

charset : String
字符集, 如果不设，默认与config里的一致

expando : Object
额外添加的属性的键值对

###getScript( url[,attrs])  return Node
url : String
脚本路径

attrs : Object
{
  charset: String,
  success: Function,
  error: Function,
  timeout: Number,
  expando: Object
}
各属性同上

###substitute(str,o[, regexp][, multiSubstitute]) return String
简易模板函数
str : String
模板字符串

o   : Object
数据源

regexp : String 
用于替换的正则, 默认为/\\?\{([^{}]+)\}/g

multiSubstitute : Boolean
是否多次替换，默认为true

```
//示例
var tmpl = "iam {a}, heis{b}";
var tmpl1 = "iam {{a}}, heis{{b}}";
var data = {
    a: 123,
    b: 234
};

KSLITE.log( KSLITE.substitute(tmpl, data) )  //return "iam 123, heis234"
KSLITE.log( KSLITE.substitute(tmpl1, data, /\{\{([^}])\}\}/g)) //return "iam 123, heis234"
```

###clone(obj)  return Object
obj : Object
被克隆的源

###mix(r, s[,ov][, wl]) return Object
复制源对象上的键值到目标对象上

r : Object
目标对象

s : Object
源对象

ov : Boolean
是否强制覆盖

wl :  Array
如果存在白名单,只覆盖白名单内的对象.
###multiAsync

###extend

###iA(obj)  return Boolean
判断是不是数组

###iF(obj) return Boolean
判断是不是函数

###iPO(obj) return Boolean
判断是不是一个纯对象，节点和window排除

###iS(obj) return Boolean
判断是不是一个字符串

## 配置项：
kslite 相关配置项，在局部变量 kslite_config 中，之后 mix 入 S.Config

 - lt_b：kslite 的 base，推荐每个产出写死一个 kslite 的 base 地址，而不是通过 currentScript 获得。因为kslite不一定作为 `<script>`节点静态引入
 - lt_pkgs：包路径信息，如上。
 - lt_t：时间戳比如 20101129.js
 - lt_v：版本 如 1.1.5 
