// var express = require("express");
// var path = require("path");
// var bodyParser = require("body-parser");
// var app = express();
//
//
// // set up static file server that point to client directory;
// // we will put all angualr files inside of client;
// app.use(express.static(path.join(__dirname, './client')));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//
// // require and runs the code from our routes.js
// // pass it app so we can attach our routing rules to our express application
// require('./server/config/mongoose.js');
// require('./server/config/routes.js')(app);
//
// app.listen(8000, function(){
//   console.log("Listening on port >> 8000");
// });

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
  console.log("Listening on port 8000");
});
