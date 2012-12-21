var exec =  require("child_process").exec;

function start() {
  console.log("request handler 'start was called.'");

  var content = "empty";

  exec("pwd ", function(error, stdout, stderr) {
    content = stdout; 
    console.log("oyeah" + content);
  });

  return content;
}

function upload() {
  console.log("Request handler 'upload' was called.")
  return "Hello Upload"
}

exports.start = start;
exports.upload = upload;
