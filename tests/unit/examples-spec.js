/**
 * @fileOverview This test specs runs tests on examples
 */
var expect = require('expect.js');

process.env.ENVLIFT_APP_PORT = '8081';
process.env.ENVLIFT_APP_ENVIRONMENT = 'production';
process.env.ENVLIFT_APP_DB_USER = 'toor';
process.env.ENVLIFT_APP_PM2 = 'false';

/* global describe, it */
describe('examples', function () {
    it('sails-local', function () {
        expect(require('../../examples/sails-local.js').port).to.be(8081);
    });

    it('simple-config', function () {
        expect(require('../../examples/simple.js').environment).to.be('production');
    });

    it('external-json', function () {
        expect(require('../../examples/external-json.js').db.user).to.be('toor');
        expect(require('../../examples/external-json.js').pm2).to.be(false);
    });
});
