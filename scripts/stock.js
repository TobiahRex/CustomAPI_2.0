'use strict';

const NPMrequest = require('request');

let Stock = {
  get(stock, cb){
    console.log('stock:', stock);
    NPMrequest(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=${stock}`, (err, res, body)=> {

      console.log('body:', body);
      if(err || res.statusCode !== 200) return cb(err);
      return cb(null, res.statusCode, body);
    });
  }
};

module.exports = Stock;
