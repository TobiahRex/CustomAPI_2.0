'use strict';

const PORT = 3000;
let http = require('http');
let mathAPI = require('./scripts/math.js');
let dateAPI = require('./scripts/date.js');

let server = http.createServer((req, res)=> {
    console.log('Address: ', req.url);
    // res.end('hi');

    let params = req.url.split('/');
    // params.forEach((param, i) => res.write(`\n${i} : ${param}`));

    switch(params[1]){
      case 'square' : res.write(`Square      = ${mathAPI.square(params[2])}`); break;
      case 'cube'   : res.write(`Cube        = ${mathAPI.cube(params[2])}`); break;
      case 'root'   : res.write(`Square Root = ${mathAPI.sqrt(params[2])}`); break;
      case 'sum'    : res.write(`Sum         = ${mathAPI.sum(params[2])}`); break;
      case 'date'   : res.write(`Date        = ${dateAPI.sum(params[2])}`); break;
      default : res.write(`${params}`);
    };

    // params[1] === 'square' ? res.write(`Square = ${Math.pow(params[2], 2)}`) : res.write(`${params}`);
    // params[1] === 'root'    ? res.write(`Square Root    = ${Math.sqrt(params[2])}`) : res.write(`${params}`);

    res.end();
});
server.listen(PORT, err=> {
  console.log(err || `Server on ${PORT}`);
});
