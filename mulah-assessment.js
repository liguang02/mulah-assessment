let express = require('express');
let fs = require("fs");
const {parse} = require("csv-parse");

let app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

db = [];
fs.createReadStream("Table_Input.csv")
    .pipe(parse({delimiter: ",", from_line: 2}))
    .on("data", (row) => {db.push(row);})
    .on("error", (err) => {console.log(err.message);})
    .on("end", () => {console.log("done");});
app.get("/", function(req, res, next) {
//   res.send(db[1][0]);
  res.render('app.html', {data: db});
  
}).listen(8080);