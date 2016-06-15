'use strict';

const PORT = 8000;

let fs = require('fs');
let path = require('path');
let http = require('http');
let Crud = require('./scripts/crud.js');


console.log(Crud);
// let server = http.createServer((req, res)=> {
//   console.log(req.url);
//
//
// });
// server.listen(PORT, err=> {
//   console.log(err || `Server listening on PORT ${PORT}`);
// });
var dirs = process.argv.slice(2);  // node server.js 'bob the builder' => [ 'bob the builder' ]
console.log(dirs);                 // node server.js bob the builder => [ 'bob', 'the', 'builder' ]

var [command, ...data] = process.argv.slice(2);

console.log('data arg: ', data);

Crud[command]((err, dbData)=> {
  err ? console.log(err) : console.log(dbData);
});
