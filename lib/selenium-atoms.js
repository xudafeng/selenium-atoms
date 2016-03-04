/* ================================================================
 * selenium-atoms by xdf(xudafeng[at]126.com)
 *
 * first created at : Wed Mar 02 2016 16:54:42 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

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
