/**
 * Created by parikhv on 2/6/16.
 */
var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../config/webpack.config.js');

module.exports = function () {
    var bundleStart = null;
    var compiler = Webpack(webpackConfig);

    compiler.plugin('compile', function() {
        console.log("Bundling...");
        bundleStart = Date.now();
    });

    compiler.plugin('done', function() {
        console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
    });

    var bundler = new WebpackDevServer(compiler, {
        watch: true,
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        quiet: false,
        noInfo: true,
        stats: {
            colors: true
        }
    });

    bundler.listen(8080, 'localhost', function() {
        console.log("Bundling project, please wait...");
    });
};
