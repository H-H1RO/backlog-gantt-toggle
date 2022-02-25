import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

const config = () => {
  return {
    entry: {
      index: path.join(__dirname, 'src', 'index.ts'),
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /.ts$/,
          use: 'ts-loader',
          exclude: '/node_modules/',
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        })
      ]
    }
  }
}

export default config;
