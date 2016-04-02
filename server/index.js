var express = require('express');

var app = express();
var path = require('path');


app.use(express.static('client'));

app.use('/*', function(req, res) {
	res.sendFile(path.join(__dirname__, './views/index.html'));
})



