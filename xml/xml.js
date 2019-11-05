const request = require('request');

request.post(
    {url:'http://26410_xmlexport:26410@api2.gifts.ru/export/v2'},
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
        else {
            console.log(response.statusCode + " " +error)
        }
    }
);