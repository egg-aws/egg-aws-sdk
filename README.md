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

```js
// {app_root}/config/plugin.js
exports.awsSdk = {
  enable: true,
  package: 'egg-aws-sdk',
};
```

## Example

```js
const DynamoDB = app.AWS.DynamoDB;
const S3 = app.AWS.S3;
```

## Questions & Suggestions

Please open an issue [here](https://github.com/egg-aws/egg-aws-sdk/issues).

## License

[MIT](LICENSE)
