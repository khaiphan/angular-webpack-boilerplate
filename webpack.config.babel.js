import precss from 'precss';
import autoprefixer from 'autoprefixer';

const config = {
  entry: ['babel-polyfill', './client/app.js'],
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html',
      },
    ],
  },
  postcss: [autoprefixer, precss],
  htmlLoader: {
    ignoreCustomFragments: [/\{\{.*?}}/],
  },
  plugins: [
  ],
};

export default config;
