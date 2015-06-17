// load config from environment with default provided as an object
var config = require('../index').load('envlift-app', {
    port: 80,
    environment: 'development',
    db: {
        host: 'localhost',
        user: 'root',
        password: ''
    },
    hostnames: [ // Reference array that should be overridden by env-variables.
        {host: 'somehost', port: '8080'},
        {host: 'someotherhost', port: '8080'}
    ]
});

// export the config for testability
module.exports = config;
