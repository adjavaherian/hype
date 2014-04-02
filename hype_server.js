//hypeServer.js
//Test strings
//var b64 = btoa('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
//aHR0cDovL3VzZXI6cGFzc0Bob3N0LmNvbTo4MDgwL3AvYS90L2g/cXVlcnk9c3RyaW5nI2hhc2g=

'use strict';

var http = require('http'),
    connect = require('connect'),
    anyDB = require('any-db-postgres'),
    begin = require('any-db-transaction');

var conn = anyDB.createConnection('driver://mgkrcxixayxmai:ndAPeWjmuCZWFF7rwSPwm5Rram@ec2-54-225-255-208.compute-1.amazonaws.com/d6ulepu88fh4i5', function(err){
    if (err) throw err;
});

var port = 80;

//create db
var sql = 'CREATE TABLE IF NOT EXISTS hypetable (url TEXT UNIQUE NOT NULL, hype BIGINT NOT NULL)';

conn.query(sql, function (err, result) {
    if(err) throw err;
    console.log(result);
});


console.log('starting hype server on port '+port);

function setHype(url, callback){

    var transaction = begin(conn);
    transaction.on('error', console.error);
    transaction.query('INSERT INTO hypetable ( url, hype ) SELECT $1, 0 WHERE NOT EXISTS (SELECT 1 FROM hypetable WHERE url = $1)', [url]);
    transaction.query('UPDATE hypetable SET hype = hype + 1 WHERE url = $1', [url]);
    transaction.query('SELECT url, hype FROM hypeTable WHERE url = $1', [url], function(err, data){
        callback(data.rows[0]);
        console.log('hypeDB.hypeTable: ', data.rows[0].url + ' hype: '+data.rows[0].hype);
    });
    transaction.commit();
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
        res.end('get hype...https://github.com/adjavaherian/hype\n');
    });

http.createServer(app).listen(port);

