const AWS = require('aws-sdk');
const Clarifai = require('clarifai');
const { apiKey } = require('../config/config');

const imageUpload = (data) => {
  const base64data = Buffer.from(data, 'base64');
  const s3 = new AWS.S3();
  return new Promise((resolve, reject) => {
    const name = 'upload-test' + Date.now() + '.jpg';
    const bucket = 'relic-hunter-test'
    s3.putObject({
      Bucket: bucket,
      Key: name,
      Body: base64data,
      ACL: 'public-read',
      ContentType: 'image/jpeg',
      ContentEncoding: 'base64'
    }, (err, uploadData) => {
      if (err) reject('Upload failed');
      else {
        const url = `https://s3.eu-west-2.amazonaws.com/${bucket}/${name}`;
        resolve({ uploadData, url });
      }
    });
  });
}

const imageCheck = (url, questionID) => {
  const app = new Clarifai.App({
    'apiKey': apiKey
  });
  return app.models.predict({
    id: questionID
  }, url);
};

module.exports = { imageUpload, imageCheck };