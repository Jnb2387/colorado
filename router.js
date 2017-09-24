var express = require('express');
var router = express.Router();//require the Router mini-app module


//Routes
router.get("/", function(req, res, next) {
    res.send("Use /map");
});

router.get("/map", function(req, res, next) {
    res.sendFile('./public/index.html',{root: __dirname });
});

module.exports = router