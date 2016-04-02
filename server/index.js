var express = require('express');

var app = express();
var path = require('path');


app.use(express.static('client'));
app.use(express.static('node_modules'));

app.use('/*', function(req, res) {
	res.sendFile(path.join(__dirname, './views/index.html'));
})

app.listen(3000, function() {
	console.log('Server listening on port 3000');
})

