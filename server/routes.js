import mongoose from 'mongoose';
import bluebird from 'bluebird';
import config from './config';
import api from './api';

mongoose.Promise = bluebird;

mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

const routes = {
  api,
};

export default routes;
