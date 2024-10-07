module.exports = {
    devServer: {
      port: 3002 // Change the port to your desired value

    },
    entry: './src/index.js',
    output: { path: __dirname + '/dist', filename: 'bundle.js' },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    setupMiddlewares: (middlewares) => {

        // Add a new middleware at the end
        middlewares.push((req, res, next) => {
            console.log('This is the last middleware');
            next();
        });
    
        // Add a new middleware at the beginning
        middlewares.unshift((req, res, next) => {
            console.log('This is the first middleware');
            next();
        });
    
        return middlewares;
        }


  };
