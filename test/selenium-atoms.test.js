'use strict';

const Atoms = require('..');
const assert = require('assert');

describe('test', function() {
  it('should be ok', function() {
    assert.ok(Atoms.getByName('click'));
  });
});
