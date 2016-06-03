var fs = require('fs');

var babelServerConfig = fs.readFileSync( __dirname + '/.babelrc');
var config;

try {
    config = JSON.parse(babelServerConfig);
} catch (err) {
    console.error('==>     ERROR: Error parsing your .babelrc.');
    console.error(err);
}

require('babel-register')(config);