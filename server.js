var express = require("express");
var bodyParser = require("body-parser");
// var pg = require("pg");
var logger = require("morgan");
// var https = require("https"); // not sure if needed
// var http = require("http"); // not sure if needed
var fs = require("fs");
var app = express();
var path = require("path");


//My files
// var db = require("./db"); //Datbase connection file
var router = require("./router")

//middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(logger("dev"));
// app.set("views", path.join(__dirname, "views"));
app.use('/', router)
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, function () {
    console.log('Listening 3000!')
  })
