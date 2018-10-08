const AWS = require('aws-sdk');
const Clarifai = require('clarifai');

const apiKey = process.env.CLARIFAI_API_KEY || require('../config/config').apiKey;

const app = new Clarifai.App({
  'apiKey': apiKey
});

const imageUpload = (data, name = 'attempt' + Date.now(), bucket = 'attempts') => {
  const base64data = Buffer.from(data, 'base64');
  const s3 = new AWS.S3();
  return new Promise((resolve, reject) => {
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
};

const imageCheck = (url, questionID) => {
  return app.models.predict({
    id: questionID
  }, url);
};

const addConcept = (imageUrls, questionID) => {
  const imagesWithConcepts = imageUrls.map(url => {
    return {
      url,
      concepts: [
        {
          id: questionID,
          value: true
        }
      ]
    };
  });
  return app.inputs.create(imagesWithConcepts);
};

const createAndTrainModel = (questionID) => {
  return app.models.create(questionID, [questionID])
    .then(model => {
      return app.models.train(model.id);
    })
    .catch(err => console.log(err));
};

const referenceImageUpload = (base64Images, questionID) => {
  const s3 = new AWS.S3();
  s3.createBucket({
    Bucket: questionID,
    CreateBucketConfiguration: {
      LocationConstraint: 'EU'
    }
  }, (err, data) => {
    if (err) console.log(err);
    else {
      base64Images.forEach((image, index) => {
        imageUpload(image, questionID + index, questionID);
      });
    }
  });
};

module.exports = { imageUpload, imageCheck, addConcept, createAndTrainModel, referenceImageUpload };
