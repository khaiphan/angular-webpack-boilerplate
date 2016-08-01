'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var router = new _express.Router();

router.use(function (req, res, next) {
  next();
});

exports.default = router;