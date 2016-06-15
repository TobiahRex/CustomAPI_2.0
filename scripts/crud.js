'use strict';

let fs = require('fs');
let path = require('path');
let dataPath = path.join(__dirname, '../data', 'data.json');

var Crud = {
  get(cb){
    console.log('get: ', dataPath);
    fs.readFile(dataPath, (err, dbData)=> {
      if(err) return cb(err);
      try {
        var arr = JSON.parse(dbData);
      } catch(e) {
        var arr = [];
      };
      cb(arr);
    });
  },
  add(newData, cb){
    console.log('add: ', newData);
    // fs.writeFile(dataPath, )
  },
  remove(key, cb){
    console.log('remove: ', key);
  },
  edit(key, cb){
    console.log('edit: ', key);
  },
  delete(key, cb){
    console.log('delete: ', key);
  }
};

module.exports = Crud;
