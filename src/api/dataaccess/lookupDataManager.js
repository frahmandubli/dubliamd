const dataProvider = require('./dataProvider');
function getAllCountries(onDataReceived) {
    try {
        var sqlQuery = 'select * from Country';
        dataProvider.getData(sqlQuery, function (data) {
            onDataReceived(data);
        });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports.getAllGenders = getAllCountries;