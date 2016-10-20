var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin') // 创建html文件
var currentTarget = process.env.npm_lifecycle_event // 当前 npm 运行

var debug // is debug
var devServer // is hrm mode
var minimize // is minimize

if (currentTarget == 'production') { // 线上模式
  debug = false, devServer = false, minimize = true
} else if (currentTarget == 'dev') { // 热更新模式
  debug = true, devServer = true, minimize = false
}

var proxyTarget = 'http://localhost:8888/' // 代理访问地址

var PATHS = {
  publicPath: path.resolve(process.cwd(), './dist'), // 发布目录
  srcPath: path.resolve(process.cwd(), './src'), // src 目录
  node_modulesPath: path.resolve('./node_modules')
}

module.exports = {
  entry: {
    main: './src/asset/main.js',
  // vendors: ['react']
  },
  watch: true,
  debug: true,
  output: {
    path: path.join(__dirname, 'dist'), // 输出目录
    publicPath: 'dist/',
    filename: 'build.js'
  },
  devtool: '#source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: 'localhost',
    port: '8080',

    /*
     *  代理访问
     *  1、可以绕过同源策略 和 webpack '热更新'结合使用
     */
    proxy: {
      '/devApi/*': {
        target: proxyTarget,
        secure: true,
        rewrite: function (req) { // rewrite 的方式扩展性更强，不限制服务的名称
          req.url = req.url.replace(/^\/devApi/, '')
        }
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {   test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=819200'
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      }
    ]
  },
  babel: {
    presets: ['es2015', 'stage-0', 'react'],
    plugins: ['transform-runtime', ['antd', { 'style': 'css' }]]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.rt'],
    alias: {
      common: path.resolve(__dirname, './src/asset/common'),
      pages: path.resolve(__dirname, './src/asset/pages')
    }
  },
  plugins: [
    // 全局标识
    new webpack.DefinePlugin({
      __DEV__: debug, // 开发标识
      __DEVAPI__: devServer ? '/devApi/' : "''" // 代理的标识
    }),

    // 创建html文件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/index.html',
      inject: 'true',
      // 需要依赖的模块
      chunks: ['common', 'main', 'webpackAssets'],
      // 根据依赖自动排序
      chunksSortMode: 'dependency'
    }),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
}
