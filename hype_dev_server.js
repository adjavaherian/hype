//hypeServer.js
//Test strings
//var b64 = btoa('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
//aHR0cDovL3VzZXI6cGFzc0Bob3N0LmNvbTo4MDgwL3AvYS90L2g/cXVlcnk9c3RyaW5nI2hhc2g=

'use strict';

var http = require('http'),
	connect = require('connect'),
    sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('hypeDB.sqlite3');

var port = 3000;

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS hypeTable (url TEXT UNIQUE NOT NULL, hype INT NOT NULL)");
});

console.log('starting hype server on port '+ port);

function setHype(url, callback){

    db.serialize(function() {

        db.run("INSERT OR IGNORE INTO hypeTable (url, hype) VALUES ($url, $hype)", {
            $url: url,
            $hype: 0
        });

        db.run("UPDATE hypeTable SET hype = hype + 1 WHERE url = $url", {
            $url: url
        });

        db.get("SELECT rowid AS id, url, hype FROM hypeTable WHERE url = $url", { $url:url }, function(err, row) {
            if(err) throw err;
            console.log('hypeDB.hypeTable: ', row.id + ': ' + row.url + ' hype: '+row.hype);
            callback(row);
        });
    });
}


function checkReq(req, res, next){

    if(req.query.set){
        console.log('checking req', req.query);
        if(req.query.set.substring(0, 8) === 'aHR0cDov'){
            setHype(req.query.set, function(row){
                var jsonpRes = req.query.callback+'('+JSON.stringify(row)+')';
                console.log('jsonp response: ', jsonpRes);
                res.write(jsonpRes);
                res.end();
            });
        }else{
            next()
        }
    }else{
        next()
    }
}


var app = connect()
    .use(connect.logger('dev'))
    .use(connect.static('public'))
    .use(connect.query())
    .use(checkReq)
    .use(function(req, res){
        res.end('get hype...\n');
    });

http.createServer(app).listen(port);

