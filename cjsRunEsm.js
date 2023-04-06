const path = require("path");
process.env.NODE_PATH =
  path.resolve(process.cwd(), "package") + process.env.NODE_PATH
    ? ":" + process.env.NODE_PATH
    : "";
// process.env.NODE_PATH = path.resolve(process.cwd(), "package");
require("module").Module._initPaths();

const env = process.env;
// env.NODE_PATH = path.resolve(__dirname, '../xxx');

const child_process = require("child_process");
const proc = child_process.spawn(
  `node`,
  [`${path.resolve(__dirname, "./dynimic.mjs")}`],
  { env: env }
);

proc.stderr.on("data", (err) => {
  console.log("[err]",err.toString());
});

proc.stdout.on("data", (io) => {
  console.log("[io data]",io.toString());
});
