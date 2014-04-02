'use strict';

var anyDB = require('any-db-postgres');
var begin = require('any-db-transaction');

var conn = anyDB.createConnection('driver://4m1r@localhost/hypedb', function(err){
    if (err) throw err;
});

//create db
var sql = 'CREATE TABLE IF NOT EXISTS hypetable (url TEXT UNIQUE NOT NULL, hype BIGINT NOT NULL)';

conn.query(sql, function (err, result) {
    if(err) throw err;
    console.log(result);
});

//main transaction
var transaction = begin(conn);
transaction.on('error', console.error);

transaction.query('INSERT INTO hypetable ( url, hype ) SELECT $1, 0 WHERE NOT EXISTS (SELECT 1 FROM hypetable WHERE url = $1)', ['hype^'], function(err, data){
    console.log('data', data);
});

transaction.query('UPDATE hypetable SET hype = hype + 1 WHERE url = $1', ['hype^'], function(err, data){
    console.log('data', data);
});

transaction.query('SELECT url, hype FROM hypeTable WHERE url = $1', ['hype^'], function(err, data){
    console.log(data.rows[0].url);
    console.log('hypeDB.hypeTable: ', data.rows[0].url + ' hype: '+data.rows[0].hype);
});

transaction.commit(function(){
    conn.end();
});



