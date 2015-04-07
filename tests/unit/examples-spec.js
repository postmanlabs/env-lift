/**
 * @fileOverview This test specs runs tests on examples
 */
var expect = require('expect.js');

/* global describe, it */
describe('examples', function () {
    it('sails-local', function () {
        process.env.SAILS_APP_PORT = '8080';

        expect(require('../../examples/sails-local.js')).to.eql({
            port: 8080,
            environment: 'development',
            connections: {
                mySQL: {
                    adapter: 'sails-mysql',
                    host: 'localhost',
                    user: 'root',
                    password: '',
                    database: 'test_database'
                }
            },
            models: {
                connection: 'mySQL',
                migrate: 'safe'
            },
            log: {
                level: 'info'
            }
        });
    });
});
