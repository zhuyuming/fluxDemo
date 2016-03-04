var path = require('path');

module.exports = {
  entry: {
    index:'./index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '../dist/',
    filename: '[name].entry.js'
  },
   
  module: { 
        
        loaders: [
         { 
            test: /\.js$/, 
            exclude:/node_modules/,
            include:__dirname,
            loader: 'jsx-loader' 
         }
        ] 
    }
    /*plugins: [
        new HtmlwebpackPlugin({
            title: 'HLZK-Debug',
            // filename: './build/index.html'
        }),
        // Open Browser Webpack Plugin
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })

    ]*/

  
};

