/* eslint-env mocha */
process.env.NODE_ENV = 'test';
const AWS = require('aws-sdk');
AWS.config.update({ region: 'eu-west-2' });
const Clarifai = require('clarifai');

let apiKey;

const ec2 = new AWS.EC2();
ec2.describeTags({}, (err, data) => {
  if (err) console.log(err + 'err');
  apiKey = data.Tags.filter(tag => tag.Key === 'apiKey')[0].Value;
});

if (typeof apiKey !== 'string') apiKey = require('../../config/config').apiKey;

const app = new Clarifai.App({
  'apiKey': apiKey
});
// const addConcept = (imageUrls, questionID) => {
//   const imagesWithConcepts = imageUrls.map(url => {
//     return {
//       url,
//       concepts: [
//         { id: questionID }
//       ]
//     };
//   });
//   return app.inputs.create(imagesWithConcepts)
//     .then(data => console.log(data, 'success'))
//     .catch(err => console.log(err));
// };
// const urls = [
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104527.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104528.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104530.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104533.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104539.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104543.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104545.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104547.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104549.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104551.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104554.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104556.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104559.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104602.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104604.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104607.jpg',
//   'https://s3.eu-west-2.amazonaws.com/testquestion/20181001_104609.jpg'
// ];
// addConcept(urls, 'testquestion');

const createAndTrainModel = (questionID) => {
  app.models.create(questionID, [questionID])
    .then((model) => {
      app.models.train(model.id);
    })
    .catch(err => console.log(err.statusText));
};

createAndTrainModel('testquestion');
