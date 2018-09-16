'use strict';

const mock = require('egg-mock');
const assert = require('assert');
const AWS = require('aws-sdk');

describe('test/aws-sdk.test.js', () => {
  const app = mock.app();

  before(() => app.ready());
  after(() => app.close());
  afterEach(mock.restore);

  it('aws sdk should exist', () => {
    assert.deepEqual(app.AWS, AWS);
  });

  it('aws mock sdk ok', async () => {
    const config = {
      apiVersion: '2012-08-10',
      endpoint: 'http://127.0.0.1:8000',
      region: 'localhost',
      accessKeyId: 'accessKeyId',
      secretAccessKey: 'secretAccessKey',
    };

    const mockBody = {
      AccountMaxReadCapacityUnits: 200,
      AccountMaxWriteCapacityUnits: 200,
      TableMaxReadCapacityUnits: 100,
      TableMaxWriteCapacityUnits: 100,
    };

    app.mockAwsService('dynamodb', '2012-08-10', 'describeLimits', {
      statusCode: 200,
      body: mockBody,
    });

    const dynamodb = new app.AWS.DynamoDB(config);
    const res = await dynamodb.describeLimits().promise();
    assert.deepEqual(res, mockBody);

    app.restoreAwsServie();
  });
});
