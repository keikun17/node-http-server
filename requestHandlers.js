var exec =  require("child_process").exec;

function start(response) {
  console.log("request handler 'start was called.'");

  // exec("ls -lah", function(error, stdout, stderr) {
  //   response.writeHead(200, {"Content-Type": "text/plain"});
  //   response.write(stdout);
  //   response.end();
  // });
  //

  exec("find /",
       { timeout: 1000, maxBuffer: 20000*1024 },
       function(error, stdout, stderr){
         response.writeHead(200, {"Content-Type": "text/plain"});
         response.write(stdout);
         response.end();
       });
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Uploadin Yo Files");
  response.end();
}

exports.start = start;
exports.upload = upload;
