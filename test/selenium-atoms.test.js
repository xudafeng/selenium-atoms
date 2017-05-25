'use strict';

var Atoms = require('..');

describe('test', function() {
  it('should be ok', function() {
    Atoms.getByName('click').should.be.String();
  });
});
