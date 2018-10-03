const AWS = require('aws-sdk');

const imageUpload = (data) => {
  const base64data = Buffer.from(data, 'base64');
  const s3 = new AWS.S3();
  s3.putObject({
    Bucket: 'relic-hunter-test',
    Key: 'upload-test' + Date.now() + '.jpg',
    Body: base64data,
    ACL: 'public-read',
    ContentType: 'image/jpeg',
    ContentEncoding: 'base64'
  }, (err, data) => {
    if (err) next(err);
    else console.log('Upload successful \n' + data);
  })
}

module.exports = { imageUpload };