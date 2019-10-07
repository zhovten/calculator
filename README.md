https://nodejs.org/ru/
https://www.git-scm.com/

npm install -g

git init
git add *
git remote add origin git@github.com:peter/first_app.git
git push origin master

npm init

npm install webpack webpack-cli webpack-dev-server --save-dev
npm install babel-core babel-loader babel-preset-env --save-dev
npm install node-sass sass-loader css-loader --save-dev


css-mqpacker?





const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app/main.ts',
  resolve: {
    extensions: [ '.js', '.ts' ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loaders: ['html-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      }
    ],
    exprContextCritical: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}