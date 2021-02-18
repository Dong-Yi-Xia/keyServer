var express = require('express');
const bodyParser = require('body-parser')
var keysRouter = express.Router();
const keys = require('../config')

keysRouter.use(bodyParser.json())

/* GET users listing. */
keysRouter.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json')
    res.json(keys);
    console.log(keys)
});

module.exports = keysRouter;
