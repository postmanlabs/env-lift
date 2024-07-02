/**
 * @fileOverview This test specs runs tests on examples
 */
var expect = require('expect.js');

process.env.ENVLIFT_APP_PORT = '8081';
process.env.ENVLIFT_APP_ENVIRONMENT = 'production';
process.env.ENVLIFT_APP_DB_USER = 'toor';
process.env.ENVLIFT_APP_PM2 = 'false';
process.env.ENVLIFT_APP_HOSTNAMES_0_HOST = 'localhost';
process.env.ENVLIFT_APP_HOSTNAMES_0_PORT = '9191';
process.env.ENVLIFT_APP_HOSTNAMES_1_HOST = 'newhost';
process.env.ENVLIFT_APP_HOSTNAMES_1_PORT = '2222';


process.env.ENVLIFT_APP_MYSQL_HOST='postman'
process.env.ENVLIFT_APP_MYSQL_PASSWORD='securepwd'
process.env.ENVLIFT_APP_MYSQL_PORT=4321

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

    it('simple-array', function () {
        expect(require('../../examples/simple-array.js').hostnames).to.eql([{
            host: 'localhost',
            port: 9191
        }, {
            host: 'newhost',
            port: 2222
        }]);
    });

    it('same name sub-property as parent property', function () {
        expect(require('../../examples/sails-local.js').mySQL.host).to.be('postman');
        expect(require('../../examples/sails-local.js').mySQL.port).to.be(4321);
    });

});
