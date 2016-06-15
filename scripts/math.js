'use strict';

let mathAPI = {
  sum(numbers){
    return numbers.split('').map(Number).reduce((tot, n) => tot + n);
  },
  square(number){
    return Math.pow(number, 2);
  },
  cube(number){
    return Math.pow(number, 3);
  },
  sqrt(number){
    return Math.sqrt(number);
  }
};

module.exports = mathAPI;
