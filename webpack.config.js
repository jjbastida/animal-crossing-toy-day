const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/main.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
                '@babel/preset-typescript'
              ],
              plugins: [
                '@emotion/babel-plugin',
                ...(isDevelopment ? ['react-refresh/babel'] : [])
              ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: {
                filter: (url) => {
                  if (url.startsWith('/')) {
                    return false;
                  }
                  return true;
                }
              }
            }
          }
        ]
      }
    ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      ...(isDevelopment ? [new ReactRefreshWebpackPlugin()] : [])
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src/app'),
        '@context': path.resolve(__dirname, 'src/app/context'),
        '@components': path.resolve(__dirname, 'src/app/components'),
        '@pages': path.resolve(__dirname, 'src/app/pages'),
        '@styles': path.resolve(__dirname, 'src/app/styles'),
        '@assets': path.resolve(__dirname, 'src/app/assets'),
        '@utils': path.resolve(__dirname, 'src/app/utils'),
        '@types': path.resolve(__dirname, 'src/app/types'),
        '@data': path.resolve(__dirname, 'src/data')
      }
    },
    devServer: {
      port: 3000,
      hot: true,
      liveReload: false,
      open: true,
      static: {
        directory: path.join(__dirname, 'public'),
        publicPath: '/'
      },
      historyApiFallback: true
    }
  };
};
