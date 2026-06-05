const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/index.js', // ваш путь к точке входа
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // очищает dist при каждой сборке
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Классы, наследование',
      template: './index.html', // опционально: свой шаблон
    }),
  ],
  devServer: {
    static: './dist',
    port: 8080,
    open: true, // автоматически открывает браузер
  },
};
