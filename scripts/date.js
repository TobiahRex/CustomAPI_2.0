'use strict';

const moment = require('moment');

let dateAPI = {
  time_Now(){
    return moment().format('LTS');
  },
  today(){
    return moment().format('');
  }
};

module.exports = dateAPI;
