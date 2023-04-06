// const path = require('path')
// process.env.NODE_PATH = path.resolve(process.cwd(), 'node_modules') + ':' + process.env.NODE_PATH
// require('module').Module._initPaths()

const path = require("path");
process.env.NODE_PATH =
  path.resolve(process.cwd(), "package") + process.env.NODE_PATH
    ? ":" + process.env.NODE_PATH
    : "";
// process.env.NODE_PATH = path.resolve(process.cwd(), "package");
require("module").Module._initPaths();

require("aa");
