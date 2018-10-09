'use strict';

const
  { transaction } = require('objection'),
  Venue = require('../models/Venue');

exports.getVenues = async (req, res, next) => {
  const venues = await Venue.query()
    .skipUndefined();
  // need to look up how to handle errors here
  res.status(200).send({ venues });
};
