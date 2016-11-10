var express = require("express");
var server = express();
var todoRouter = require("/server/routers/todo.router.js");
var mongoose = require("mongoose");
var mongoURI = process.env.MONGOURI || require("/config.js").mongoURI;


mongoose.connect(mongoURI);

var port = process.env.PORT || 8080;

// server.use(express.static, (__dirname + '/public'));
// server.get('/', function(req, res){
//   sendFile('/public/index.html', {root:__dirname});
// });

server.use(todoRouter);

server.listen(port, function(){
  console.log("Now listening on..", port);
});
