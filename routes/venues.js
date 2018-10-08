'use strict';

const
  venuesRouter = require('express').Router(),
  {
    getVenues
  } = require('../controllers/venues');

venuesRouter.route('/')
  .get(getVenues);

module.exports = venuesRouter;