'use strict';

const AWS = require('aws-sdk');

module.exports = app => {
  app.AWS = AWS;

  if (app.config.awsSdk) {
    app.AWS.config.update(app.config.awsSdk);
  }
};
