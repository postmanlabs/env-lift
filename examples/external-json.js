// load config from environment with default provided as an object
var config = require('../index').load('envlift-app', require('./external-json.json'));

// export the config for testability
module.exports = config;
