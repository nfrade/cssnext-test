module.exports = {
  entry: './lib/index.js',
  output: {
    path: __dirname,
    filename: './build.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' }
    ]
  },
  postcss: function (webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-cssnext')({
        features: {
          customProperties: {
            variables: require('./lib/global.js')
          }
        }
      }),

      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  }
}
