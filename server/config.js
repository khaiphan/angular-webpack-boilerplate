import path from 'path';

const config = {
  root: path.normalize(`${__dirname}/..`),
  mongo: {
    uri: 'mongodb://ds021915.mlab.com:21915/8bit-rockstars',
    options: {
      user: 'khaiphan',
      pass: 'nahpiahk',
    },
  },
};

export default config;
