# egg-aws-sdk

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-aws-sdk.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-aws-sdk
[travis-image]: https://api.travis-ci.com/egg-aws/egg-aws-sdk.svg
[travis-url]: https://travis-ci.com/egg-aws/egg-aws-sdk
[codecov-image]: https://img.shields.io/codecov/c/github/egg-aws/egg-aws-sdk.svg?style=flat-square
[codecov-url]: https://codecov.io/github/egg-aws/egg-aws-sdk?branch=master
[david-image]: https://img.shields.io/david/egg-aws/egg-aws-sdk.svg?style=flat-square
[david-url]: https://david-dm.org/egg-aws/egg-aws-sdk
[snyk-image]: https://snyk.io/test/npm/egg-aws-sdk/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-aws-sdk
[download-image]: https://img.shields.io/npm/dm/egg-aws-sdk.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-aws-sdk

AWS sdk plugin for eggjs.

## Install

```bash
$ npm i egg-aws-sdk --save
```

## Usage

### config

```js
// {app_root}/config/plugin.js
exports.awsSdk = {
  enable: true,
  package: 'egg-aws-sdk',
};
```

### mockService

- app.mockAwsService(serviceName, version, methodName, replyBody) mock the service method with the mock replyBody.
- app.restoreAwsServie(serviceName, version, methodName) restore the mocked mehtod.

## Example

- Get S3

```js
const DynamoDB = app.AWS.DynamoDB;
const S3 = app.AWS.S3;
```

- Mock DynamoDB

```js
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

const dynamodb = new app.AWS.DynamoDB({});
const res = await dynamodb.describeLimits().promise();
```

## Questions & Suggestions

Please open an issue [here](https://github.com/egg-aws/egg-aws-sdk/issues).

## License

[MIT](LICENSE)
