let express = require('express');
let app = express();
app.get("/", function(req, res, next) {
  res.send("Hello world");
}).listen(8080);