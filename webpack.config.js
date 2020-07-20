module.exports = {
  entry: {
    main: './main.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ["@babel/transform-react-jsx", {
                // "pragma": "dom" // default pragma is React.createElement
                "pragma": "ToyReact.createElement" // default pragma is React.createElement
              }]
            ]
          }
        }
      }
    ]
  },
  optimization: {
    minimize: false
  }
}
