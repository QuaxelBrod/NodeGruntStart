// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

console.log(path.dirname());

// serve the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set server port
app.listen(3000);
console.log('server is running');
