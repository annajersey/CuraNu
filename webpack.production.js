const merge = require("webpack-merge");
const webpack = require("webpack");

const baseConfig = require("./webpack.common.js");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const basePath = "/dist/";
module.exports = merge(baseConfig, {
    output: {
        publicPath: ""
    },
    optimization: {
        minimizer: [
            new MinifyPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ]
    }, plugins: [
        new webpack.DefinePlugin({
            basePath: JSON.stringify(basePath),
            baseUrl: JSON.stringify("http://localhost:8080"),
            salt: "abc"
        }),
    ]
});

