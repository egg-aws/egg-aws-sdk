'use strict';

const mock = require('egg-mock');
const assert = require('assert');
const AWS = require('aws-sdk');

describe('test/aws-sdk.test.js', () => {
  const app = mock.app();

  after(() => app.close());
  afterEach(mock.restore);

  it('aws sdk should exist', () => {
    assert.deepEqual(app.AWS, AWS);
  });
});
