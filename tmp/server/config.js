'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  root: _path2.default.normalize(__dirname + '/..'),
  mongo: {
    uri: 'mongodb://ds021915.mlab.com:21915/8bit-rockstars',
    options: {
      user: 'khaiphan',
      pass: 'nahpiahk'
    }
  }
};

exports.default = config;