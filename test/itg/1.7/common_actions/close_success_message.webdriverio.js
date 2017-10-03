var should = require('should');
var common = require('../common.webdriverio');
var globals = require('../globals.webdriverio.js');

describe('Close green validation', function (done) {
    it('should click on close ', function (done) {
        global.fctname = this.test.title;
        this.client
            .waitForExist(this.selector.BO.AddProductPage.close_validation_button, 90000)
            .click(this.selector.BO.AddProductPage.close_validation_button)
            .call(done);
    });
});