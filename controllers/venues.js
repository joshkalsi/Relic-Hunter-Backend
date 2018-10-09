'use strict';

const Venue = require('../models/Venue');

exports.getVenues = async (req, res, next) => {
  try {
    const venues = await Venue.query()
      .skipUndefined();
    res.status(200).send({ venues });
  } catch (err) {
    next(err);
  }
};
