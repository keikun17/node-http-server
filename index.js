var server = require("./server");
var router = require("./router");

console.log("someting");
server.start(router.route);
