//const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    output: {
        filename: 'wwwroot/[name].bundle.js',
    },
    optimization: {
     splitChunks: {
       chunks: 'all',
     }
   }
}
