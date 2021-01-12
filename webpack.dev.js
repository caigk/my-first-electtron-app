const main = require('./webpack.main.js');
const renderer = require('./webpack.renderer.js');
const mainlib = require('./webpack.main-lib.js');


module.exports = [main,mainlib,renderer];