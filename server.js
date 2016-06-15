'use strict';

const PORT      = 3000;
const path      = require('path');
const fs        = require('fs');
const mathAPI   = require('./scripts/math.js');
const dateAPI   = require('./scripts/date.js');
const stockAPI  = require('./scripts/stock.js');

const http    = require('http');
const server = http.createServer((req, res)=> {
    let instructions = fs.readFileSync(path.join(__dirname, 'scripts/APIinstructions.txt'), 'utf8');
    res.write(path.join(`${instructions}`));
    console.log('Address: ', req.url);

    let params = req.url.split('/');

    switch(params[1]){
      case 'square' : res.write(`\n\nSquare      = ${mathAPI.square(params[2])}`); res.end(); break;
      case 'cube'   : res.write(`\n\nCube        = ${mathAPI.cube(params[2])}`); res.end(); break;
      case 'root'   : res.write(`\n\nSquare Root = ${mathAPI.sqrt(params[2])}`); res.end(); break;
      case 'sum'    : res.write(`\n\nSum         = ${mathAPI.sum(params[2])}`); res.end(); break;
      case 'now'    : res.write(`\n\nDate        = ${dateAPI.time_Now()}`); res.end(); break;
      case 'quote'  : stockAPI.get(params[2], (err, status, body) => {
        console.log('err:', err);
        if(err || status !== 200) {
          return res.end(`\n\nStock Not Found. Try again. ${JSON.stringify(err)}`);
        }
        console.log('\ndata: ', body);
        res.write(`\n\nStock Info: \n${body}`);
        res.end();
      }); break;
      default :
        res.write(`\n\n${params}`);
        res.end();
    };

    // params[1] === 'square' ? res.write(`Square = ${Math.pow(params[2], 2)}`) : res.write(`${params}`);
    // params[1] === 'root'    ? res.write(`Square Root    = ${Math.sqrt(params[2])}`) : res.write(`${params}`);

});
server.listen(PORT, err=> {
  console.log(err || `Server on ${PORT}`);
});
