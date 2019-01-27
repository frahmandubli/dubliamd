const config = require('../config.json')

function getData(sqlQuery, onDataReceived) {
    var sql = require('mssql');
    try {
        sql.connect(config.db, function (err) {

            if (err) console.log(err);

            // create Request object
            var request = new sql.Request();
            // query to the database and get the records
            request.query(sqlQuery, function (err, data) {

                if (err) console.log(err);
                else {
                    sql.close();
                    onDataReceived(data.recordset);
                }

            });
        });
    }
    catch (err) {
        console.log(err);
    }
}

function getCountries(onDataReceived) {
    try {
        var sqlQuery = 'select * from Country';
        getData(sqlQuery, function (data) {
            onDataReceived(data);
        });
    }
    catch (err) {
        console.log(err);
    }
}

function getCountry(id, onDataReceived) {
    try {
        var sqlQuery = 'select * from Country where countryId=' + id;
        getData(sqlQuery, function (data) {
            onDataReceived(data);
        });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getData : getData,
    getCountries: getCountries,
    getCountry: getCountry
}