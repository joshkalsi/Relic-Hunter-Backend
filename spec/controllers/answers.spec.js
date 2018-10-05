/* eslint-env mocha */
process.env.NODE_ENV = 'test';

const app = require('../../app');
const { expect } = require('chai');
const request = require('supertest')(app);
const base64data = require('../images/testImage1').testImage1;

describe('/api/answers/:question_id', () => {
  describe('POST /api/answers/:question_id', () => {
    it('POST request returns JSON object with status of Clarifai call', () => {
      return request
        .post('/api/answers/testquestion')
        .send({ answer: { image: base64data } })
        .expect(200)
        .then(({ body }) => {
          expect(body).to.have.all.keys('answer');
          expect(body.answer).to.have.all.keys('answer_id');
          expect(body.answer.answer_id.isCorrect).to.equal(true);
        });
    });
  });
});
