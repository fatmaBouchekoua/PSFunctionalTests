var CommonClient = require('./common_client');
const {ProductPage} = require('./../../selectors/BO/product_page');

class CreateProduct extends CommonClient {

    setQuantity(selector) {
        return this.client
            .waitForExist(selector, 90000)
            .clearElement(selector)
            .addValue(selector, "10")
    }

    setPrice(selector) {
        return this.client
            .waitForExist(selector, 90000)
            .execute(function (selector) {
                document.querySelector(selector).value = "";
            }, selector)
            .setValue(selector, "5")
    }

    searchProductByName(productName) {
        return this.client
            .waitForExistAndClick(ProductPage.catalogue_filter_by_name_input)
            .waitAndSetValue(ProductPage.catalogue_filter_by_name_input, productName)
            .waitForExistAndClick(ProductPage.click_outside)
            .waitForExistAndClick(ProductPage.catalogue_submit_filter_button)
    }

    checkProductPriceTE() {
        return this.client
            .waitForExist(ProductPage.catalog_product_price, 60000)
            .then(() => this.client.getText(ProductPage.catalog_product_price))
            .then((price) => price = price.replace('€', ''))
            .then((price) => expect(price).to.be.equal(5 + '.00'));
    }

}

module.exports = CreateProduct;