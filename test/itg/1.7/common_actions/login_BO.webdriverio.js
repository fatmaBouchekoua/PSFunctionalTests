var should = require('should');
var common = require('../common.webdriverio');
var globals = require('../globals.webdriverio.js');

describe('Log in in Back Office', function (done) {    
    it('should log in successfully in BO', function (done) {
        global.fctname = this.test.title;
        this.client
            .signinBO()
            .waitForExist(this.selector.BO.AddProductPage.menu, 90000)
            .call(done);
    });
});