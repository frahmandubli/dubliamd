const dataProvider = require('./dataaccess/dataProvider');
const express = require('express');
const config = require('./config.json')
var app = express();

app.get('/country/list', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    dataProvider.getCountries(function (data) {
        res.send(data);
    });
});

app.get('/country/get/:countryId', function (req, res) {
    dataProvider.getCountry(req.params.countryId,function (data) {
        res.send(data);
    });
});

var server = app.listen(config.app.port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(config.app.name + " app listening at http://%s:%s", host, port);
});