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

var Atoms = require('..');

describe('test', function() {
  it('should be ok', function() {
    Atoms.getByName('click').should.be.String;
  });
});
