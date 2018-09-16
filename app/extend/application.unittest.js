'use strict';

const mock = require('aws-sdk-mock-mate');

module.exports = {
  /**
   * @param  { String } serviceName a valid AWS service name.
   * @param  { String } version a valid AWS service version string.
   * @param  { String } methodName a valid service method name.
   * @param  { Object } replyBody mocked reply.
   *                      - { Number } statusCode status code. 200 for normal, 400 for exception.
   *                      - { Object } body response body.
   */
  mockAwsService(serviceName, version, methodName, replyBody) {
    mock(this.AWS, serviceName, version, methodName, replyBody);
  },

  /**
   * @param  { String } serviceName a valid AWS service name.
   * @param  { String } version a valid AWS service version string.
   * @param  { String } methodName a valid service method name.
   */
  restoreAwsServie(serviceName, version, methodName) {
    mock.restore(this.AWS, serviceName, version, methodName);
  },
};
