// load config from environment with default provided as an object
var config = require('../index').load('envlift-app', {
    port: 80,
        environment: 'development',
        db: {
        host: 'localhost',
            user: 'root',
            password: ''
    }
});

// export the config for testability
module.exports = config;
