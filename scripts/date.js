'use strict';

const moment = require('moment');

let dateAPI = {
  time_Now(){
    return moment().format('LTS');
  }
};

module.exports = dateAPI;
