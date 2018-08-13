import webpack from 'webpack';
import path from 'path';
import ExtraTextPluggin from 'extract-text-webpack-plugin';

const GLOBALS ={
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry:  path.resolve(__dirname, 'src/index'),
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),// optimzes order of files tht are bundled for optimal minification.
    new webpack.DefinePlugin(GLOBALS), //The DefinePlugin allows you to create global constants which can be configured at compile time. This can be useful for allowing different behavior between development builds and release builds. If you perform logging in your development build but not in the release build you might use a global constant to determine whether logging takes place. That's where DefinePlugin shines, set it and forget it rules for development and release builds
    new ExtraTextPluggin('styles.css'), //etracts seperate file fo css
    new webpack.optimize.DedupePlugin(), //eliminates duplicate imports
    new webpack.optimize.UglifyJsPlugin()// minifies javascript
    
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loader: ExtraTextPluggin.extract("css?sourceMap")},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
