'use strict';
var should = require('should');
var common = require('./../common.webdriverio');


describe('Execute high compaign', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.client = common.getClient();
        this.client.call(done);
    });

    after(function (done) {
        this.client
            .end()
            .call(done);
    });

    require('./../scenario/BO/product/create_standard_product.webdriverio');
    require('./../scenario/BO/product/create_product_with_combination.webdriverio');
    require('./../scenario/BO/product/create_virtual_product.webdriverio');
    require('./../scenario/BO/product/create_pack.webdriverio');

});