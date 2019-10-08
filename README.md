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



Для тех, кто хочет build сборку открыть локально на компьютере по двойному нажатию на html файл продублирую свой ответ:
В build сборке указан путь как "/". Такой путь не подключает корректно файлы на локалке, только на серверах.
Чтобы можно было открыть html файл на локальном компьютере по двойному нажатию на html файл закомментируйте строку publicPath: '/' в файле webpack.base.conf.js и пересоберите проект. На работу dev сборки это не повлияет.
 output:{
        filename: `${PATHS.assets}js/[name].js`,
        path:  PATHS.dist,
         /*publicPath: '/' */
    },



Действительно, чтобы пути прописывались без "/" в HTML, необходимо убрать publicPath: "/".
Но у меня по прежнему сохранялась проблема с путями в background-image в sass. Для решения этой проблемы в css-loader -> options прописал url: false.





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