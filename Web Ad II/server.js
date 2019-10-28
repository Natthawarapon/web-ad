var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});