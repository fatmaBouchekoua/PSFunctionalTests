'use strict';
var client;
var webdriverio = require('webdriverio');
var globals = require('./globals.webdriverio');

var options = {
    logLevel: 'silent',
    waitForTimeout: 30000,
    desiredCapabilities: {
        browserName: 'chrome',
    },
    port: 4444
};
if (typeof global.selenium_url !== 'undefined') {
    options.host = global.selenium_url;
}

var options2 = {
    logLevel: 'silent',
    waitForTimeout: 30000,
    desiredCapabilities: {
        browserName: 'chrome',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        username: process.env.SAUCE_USERNAME,
        access_key: process.env.SAUCE_ACCESS_KEY,
        screenResolution: "1680x1050",
        platform: "Windows 7",
    },
    port: 4445
};

function initCommands(client) {

    client.addCommand('localhost', function (cb) {
        this.selector = globals.selector;
        client
            .url('http://' + URL + '/install-dev')
            .call(cb);
    });

    client.addCommand('signInBO', function (selector) {
        this.selector = globals.selector;
        return client
            .url('http://' + URL + '/admin-dev')
            .waitAndSetValue(selector.login_input, 'demo@prestashop.com')
            .waitAndSetValue(selector.password_inputBO, 'prestashop_demo')
            .waitForExistAndClick(selector.login_buttonBO)
            .waitForExist(selector.menuBO, 90000)
    });

    client.addCommand('signInFO', function (selector) {
        return client
            .url('http://' + URL)
            .waitForExistAndClick(selector.sign_in_button)
            .waitAndSetValue(selector.login_input, 'pub@prestashop.com')
            .waitAndSetValue(selector.password_inputFO, '123456789')
            .waitForExistAndClick(selector.login_button)
            .waitForExistAndClick(selector.logo_home_page)
    });

    client.addCommand('signOutBO', function () {
        return client
            .deleteCookie();
    });

    client.addCommand('signOutFO', function (selector) {
        return client
            .waitForExistAndClick(selector.sign_out_button)
            .waitForExist(selector.sign_in_button, 90000)
            .deleteCookie();
    });


    client.addCommand('waitForExistAndClick', function (selector) {
        return client
            .waitForExist(selector , 90000)
            .click(selector)
    });

    client.addCommand('waitForVisibleAndClick', function (selector, timeout = 90000) {
        return client
            .waitForVisible(selector , timeout)
            .click(selector)
    });

    client.addCommand('waitAndSetValue', function (selector, value) {
        return client
            .waitForExist(selector , 90000)
            .setValue(selector, value)
    });

    client.addCommand('waitForVisibleAndSetValue', function (selector, value) {
        return client
            .waitForVisible(selector , 90000)
            .setValue(selector, value)
    });

    client.addCommand('switchWindow', function (id) {
        return client
                .getTabIds()
                .then(ids => client.switchTab(ids[id]))
    });

    client.addCommand('closeWindow', function (id) {
        return client
                .getTabIds()
                .then(ids => client.close(ids[id]))
    });

}
module.exports = {
    getClient: function () {
        if (client) {
            return client;
        } else {
            if (typeof saucelabs !== 'undefined' && saucelabs != "None") {
                client = webdriverio
                    .remote(options2)
                    .init()
                .windowHandleSize({width: 1280, height: 1024});
            } else {
                client = webdriverio
                    .remote(options)
                .windowHandleSize({width: 1280, height: 1024});
            }
            initCommands(client);

            return client;
        }
    },
    browser: function () {
        return options.desiredCapabilities.browserName
    }
};
