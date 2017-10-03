var should = require('should');
var common = require('../common.webdriverio');
var globals = require('../globals.webdriverio.js');

describe('Log out in Back Office', function (done) {
    it('should log out successfully in BO', function (done) {
        global.fctname = this.test.title;
        this.client
            .signoutBO2()
            .call(done);
    });
});