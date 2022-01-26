'use strict'
let month = ['Jan', 'Feb', 'Mar', 'Apr'];

const MODULES_BECAME_STANDARD_YEAR = 2015;

class User {
    constructor(name) {
      this.name = name;
    }
  }

module.exports = {month, User};
  //module.exports = {MODULES_BECAME_STANDARD_YEAR};