var should = require('should');

module.exports = {
    checkProduct: function (type, data) {
        var productName = 'standard';
        var categoryName;
        switch (type) {
            case 'virtual':
                productName = data.virtual.name + product_id;
                categoryName = data.virtual.new_category_name + product_id;
                break;
            case 'pack':
                productName = data.pack.name + product_id;
                categoryName = data.pack.new_category_name + product_id;
                break;
            case 'combination':
                productName = data.standard.name + 'Combination' + product_id;
                categoryName = data.standard.new_category_name + 'Combination' + product_id;
                break;
            default:
                productName = data.standard.name + product_id;
                categoryName = data.standard.new_category_name + product_id;
        }

        describe('Check the product in the catalog', function (done) {
            it('should go to the catalog', function (done) {
                global.fctname = this.test.title;
                this.client
                    .pause(5000)
                    .waitForExist(this.selector.BO.AddProductPage.more_option_button, 90000)
                    .click(this.selector.BO.AddProductPage.more_option_button)
                    .waitForExist(this.selector.BO.AddProductPage.go_to_catalog_button, 90000)
                    .click(this.selector.BO.AddProductPage.go_to_catalog_button)
                    .call(done);
            });

            it('should search the product by name', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.catalogue_filter_by_name_input, 90000)
                    .click(this.selector.BO.AddProductPage.catalogue_filter_by_name_input)
                    .pause(4000)
                    .setValue(this.selector.BO.AddProductPage.catalogue_filter_by_name_input, productName)
                    .pause(2000)
                    .click(this.selector.BO.AddProductPage.click_outside)
                    .waitForExist(this.selector.BO.AddProductPage.catalogue_submit_filter_button, 60000)
                    .click(this.selector.BO.AddProductPage.catalogue_submit_filter_button)
                    .pause(2000)
                    .call(done);
            });

            it('should check the product name', function (done) {
                global.fctname = this.test.title;
                this.client
                    .pause(3000)
                    .waitForExist(this.selector.BO.AddProductPage.catalog_product_name, 60000)
                    .getText(this.selector.BO.AddProductPage.catalog_product_name).then(function (name) {
                        should(name).be.equal(productName)
                    })
                    .call(done);
            });

            it('should check the product reference', function (done) {
                global.fctname = this.test.title;
                this.client
                    .pause(3000)
                    .waitForExist(this.selector.BO.AddProductPage.catalog_product_reference, 60000)
                    .getText(this.selector.BO.AddProductPage.catalog_product_reference).then(function (reference) {
                        should(reference).be.equal(data.common.product_reference)
                    })
                    .call(done);
            });

            it('should check the product category', function (done) {
                global.fctname = this.test.title;
                this.client
                    .pause(3000)
                    .waitForExist(this.selector.BO.AddProductPage.catalog_product_category, 60000)
                    .getText(this.selector.BO.AddProductPage.catalog_product_category).then(function (category) {
                        should(category).be.equal(categoryName)
                    })
                    .call(done);
            });

            it('should check the product price TE', function (done) {
                global.fctname = this.test.title;
                this.client
                    .pause(3000)
                    .waitForExist(this.selector.BO.AddProductPage.catalog_product_price, 60000)
                    .getText(this.selector.BO.AddProductPage.catalog_product_price).then(function (price) {
                        price = price.replace('€', '');
                        should(price).be.equal(data.common.priceTE + '.00')
                    })
                    .call(done);
            });

            it('should check the product quantity', function (done) {
                global.fctname = this.test.title;
                this.client
                    .pause(3000)
                    .waitForExist(this.selector.BO.AddProductPage.catalog_product_quantity, 60000)
                    .getText(this.selector.BO.AddProductPage.catalog_product_quantity).then(function (quantity) {
                        if (type === 'combination') {
                            should(parseInt(quantity)).be.equal(parseInt(data.standard.variations.variation1.quantity) + parseInt(data.standard.variations.variation2.quantity))
                        } else {
                            should(quantity).be.equal(data.common.quantity)
                        }
                    })
                    .call(done);
            });

            it('should check the product status', function (done) {
                global.fctname = this.test.title;
                this.client
                    .pause(3000)
                    .waitForExist(this.selector.BO.AddProductPage.catalog_product_online, 60000)
                    .getText(this.selector.BO.AddProductPage.catalog_product_online).then(function (status) {
                        should(status).be.equal('check')
                    })
                    .call(done);
            });

            it('should reset filter', function (done) {
                global.fctname = this.test.title;
                this.client
                    .pause(3000)
                    .waitForExist(this.selector.BO.AddProductPage.catalog_reset_filter, 60000)
                    .click(this.selector.BO.AddProductPage.catalog_reset_filter)
                    .call(done);
            });
        });
    }
};