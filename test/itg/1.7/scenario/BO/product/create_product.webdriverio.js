'use strict';
var common = require('./../../../common.webdriverio');
var globals = require('./../../../globals.webdriverio.js');
var path = require('path');
var data = require('./../../../datas/product_data');
var fillTabs = require('./fill_tabs');
var toUpload = path.join(__dirname, '../../..', 'datas', 'image_test.jpg');
var check = require('./check_product.webdriverio');

module.exports = {
    createProduct: function (type) {

        var generalDescribe = 'Create ' + type + ' product';
        if (type === 'combination') {
            generalDescribe = 'Create product with combination';
        } else if (type === 'pack') {
            generalDescribe = 'Create a pack of products';
        }

        describe(generalDescribe, function () {
            common.initMocha.call(this);
            before(function (done) {
                this.selector = globals.selector;
                this.client.call(done);
            });
            process.on('uncaughtException', common.take_screenshot);
            process.on('ReferenceError', common.take_screenshot);
            after(common.after);

            common.logIn();
            common.closeOnboarding();

            describe('Create new product', function (done) {
                it('should go to catalog page', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .pause(5000)
                        .waitForExist(this.selector.BO.AddProductPage.menu, 90000)
                        .click(this.selector.BO.AddProductPage.products_subtab)
                        .call(done);
                });

                it('should click on the add new product button', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.new_product_button, 90000)
                        .click(this.selector.BO.AddProductPage.new_product_button)
                        .waitForExist('#notifications-total', 90000)
                        .call(done);
                });
            });

            fillTabs.editBasicSettings(type, data, toUpload);
            fillTabs.editQuantities(type, data, toUpload);
            fillTabs.editShipping(type, data);
            if (type === 'combination') {
                fillTabs.createCombinations(data)
            }
            fillTabs.editPricing(data);
            fillTabs.editSEO(data);
            fillTabs.editOptions(data, toUpload);

            describe('Save Product', function (done) {
                it('should save and stay in the product page', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.save_product_button, 90000)
                        .click(this.selector.BO.AddProductPage.save_product_button)
                        .pause(10000)
                        .call(done);
                });
            });

            check.checkProduct(type, data);
            common.logOut();
        });
    }
};
