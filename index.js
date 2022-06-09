var express = require('express');
var app = express();
var path = require('path');
var public = _dirname + "/public";

app.get('/', (req, res) => {
    res.sendFile(path.join(public + "index.html"));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(public + "playnow.html"));
});

app.get('/login', (req, res) => {
    res.send('Hello Login');
});

app.use('/', express.static(public));

app.listen(8080);
console.log('Running at Port 8080');