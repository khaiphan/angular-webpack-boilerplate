'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

app.set('appPath', _path2.default.join(_config2.default.root, 'client'));
app.use(_express2.default.static(app.get('appPath')));
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use((0, _morgan2.default)('dev'));

app.use('/api', _routes2.default.api);

app.route('/*').get(function (req, res) {
  var appPath = app.get('appPath');
  res.sendFile(_path2.default.resolve(appPath + '/app.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.error(err);
  }
  console.log('Server running on port ' + port);
});