var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
   entry : './app/index.tsx',
   resolve: {
      extensions: ['.ts', '.tsx', '.js']
   },
   output : {
      path : path.resolve(__dirname , 'dist'),
      filename: 'index_bundle.js'
   },
   module: {
      rules: [
         { 
            test: /\.tsx?$/, 
            loader: 'awesome-typescript-loader'
         },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },
      ]
   },
   plugins : [
      new HtmlWebpackPlugin ({
         template : 'app/index.html'
      })
   ],
  mode:'development'
}