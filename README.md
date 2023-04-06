# 缘由
发现python可以直接修改环境变量则可以动态改变引入第三方包名或者本地包名的路径，就在想node可不可以实现同样的效果。
# 办法
使用process.env.NODE_PATH来修改commonjs的寻包根目录，但是这个前提是在node_modules中找不到这个包才行，否则会以node_modules为准！
```js
const path = require("path");
process.env.NODE_PATH =
  path.resolve(process.cwd(), "package") + process.env.NODE_PATH
  ? ":" + process.env.NODE_PATH
  : "";
require("module").Module._initPaths();

require("aa");
```

package/aa/index.js
```js

console.log('out a')
```

另：这种方法仅仅对commonjs有效，对esmodule无效，没有找到什么办法可以修改esmodule的引入包名的根目录，问new bing也不知道。

https://www.yuque.com/liulinboyi/ou8lhz/rmn5pfe6oevqq1tn?singleDoc# 《动态修改node包引入（与NewBing讨论实录）》

