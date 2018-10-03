'use strict';

const { uploadImage } = require('../models/answers');

exports.createAnswer = (req, res, next) => {
  const data = req.body.answer.image;
  uploadImage(data);
  res.status(501).send({ message: 'Not Implemented' });
};