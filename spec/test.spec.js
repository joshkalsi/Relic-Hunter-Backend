'use strict';
/* eslint-env mocha */

// test db must be set-up and seeded before running this file
// DROP DATABASE IF EXISTS relic_hunter_test;
// CREATE DATABASE relic_hunter_test;
// npx knex migrate:latest --env test
// npx knex seed:run --env test

process.env.NODE_ENV = 'test';

/* const knexConfig = require('../knexfile').test;
const dbManagerConfig = require('../config/dbManager');

const config = {
  knex: knexConfig,
  dbManager: dbManagerConfig
};

const dbManager = require('knex-db-manager').databaseManagerFactory(config); */

const
  { expect } = require('chai'),
  app = require('../app'),
  request = require('supertest')(app);

describe('RELIC HUNTER API', () => {


  /*   beforeEach(() => {
      // seed test db
      console.log('seeding db')
      return dbManager.truncateDb()
        .then(truncate => {
          console.log(truncate, '<< truncate')
          return dbManager.populateDb(
            //path.join('../seeds', '*')
            '../seeds/*'
          )
            .then(populate => {
              console.log(populate, '< populate')
            });
        })
    });
   */

  // VENUES
  describe('/api/venues', () => {
    it('GET venues returns all venue objects, and those objects have the expected keys', () => {
      return request
        .get('/api/venues')
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys('venues');
          expect(res.body.venues.length).to.equal(2);
          expect(res.body.venues[0]).to.be.an('object');
          expect(res.body.venues[0]).to.have.all.keys(
            'id',
            'name',
            'icon_url'
          );
        });
    });
  }); // Describe Venues

  // QUESTS
  describe('/api/quests', () => {
    it('GET quests returns all quest objects, and those objects have the expected keys', () => {
      return request
        .get('/api/quests')
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys('quests');
          expect(res.body.quests.length).to.equal(2);
          expect(res.body.quests[0]).to.be.an('object');
          expect(res.body.quests[0]).to.have.all.keys(
            'id',
            'venue_id',
            'title',
            'intro_text',
            'full_text',
            'icon_url',
            'background_url',
            'suitability',
            'venue_area',
            'is_published'
          );
        });
    });
    it('GET quests by venue id returns all quests for venue, and those objects have the expected keys', () => {
      return request
        .get('/api/quests/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys('quests');
          expect(res.body.quests.length).to.equal(1);
          expect(res.body.quests[0]).to.be.an('object');
          expect(res.body.quests[0]).to.have.all.keys(
            'id',
            'venue_id',
            'title',
            'intro_text',
            'full_text',
            'icon_url',
            'background_url',
            'suitability',
            'venue_area',
            'is_published'
          );
        });
    });
  }); // Describe Quests

  // QUESTIONS
  describe('/api/quests/1/questions', () => {
    it('GET venues returns all venue objects, and those objects have the expected keys', () => {
      return request
        .get('/api/quests/1/questions')
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys('questions');
          expect(res.body.questions.length).to.equal(3);
          expect(res.body.questions[0]).to.be.an('object');
          expect(res.body.questions[0]).to.have.all.keys(
            'id',
            'quest_id',
            'model_name',
            'title',
            'text',
            'hint_text',
            'answer_text',
            'is_published'
          );
        });
    });
  }); // Describe Questions

}); // Decribe all 