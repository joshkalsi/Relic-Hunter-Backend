/* eslint-env mocha */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const { imageUpload, imageCheck } = require('../../api/api');
const base64data = require('../images/testImage1').testImage1;

describe('imageUpload', () => {
  it('uploads base64 image data to S3 bucket', () => {
    return expect(imageUpload(base64data)).to.eventually.have.property('uploadData');
  });
});

describe('imageCheck', () => {
  it('checks an image against a Clarifai model', () => {
    return expect(imageCheck('https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104527.jpg', 'testquestion')).to.eventually.have.property('outputs');
  });
});
