var should = require('should');
var common = require('../common.webdriverio');
var globals = require('../globals.webdriverio.js');

describe('Module "Welcome"', function (done) {
    it("should close the onboarding if displayed", function (done) {
        global.fctname = this.test.title;
        if (this.client.isVisible(this.selector.BO.Onboarding.popup)) {
            this.client
                .click(this.selector.BO.Onboarding.popup_close_button)
                .pause(1000)
                .click(this.selector.BO.Onboarding.stop_button);
        };
        this.client.call(done);
    });
});