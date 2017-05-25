'use strict';

const fs = require('fs');
const path = require('path');

var cache = {};

exports.getByName = function(name) {
  if (!cache[name]) {
    try {
      var file = path.resolve(__dirname, '..', 'atoms', `${name}.js`);
      cache[name] = fs.readFileSync(file, 'utf8');
    } catch (e) {
      throw `selenium atoms file ${name}.js not found.`;
    }
  }
  return cache[name];
};
