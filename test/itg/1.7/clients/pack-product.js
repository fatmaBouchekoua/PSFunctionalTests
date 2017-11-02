var Product = require('./product');
var data = require('./../datas/product-data');

class PackProduct extends Product {

    selectPackType() {
        return this.client
            .waitForExist(selector.BO.AddProductPage.product_type, 90000)
            .selectByValue(selector.BO.AddProductPage.product_type, 1)
    }

    searchProductItems(data) {
        return this.client
            .waitForExist(selector.BO.AddProductPage.search_product_pack, 60000)
            .click(selector.BO.AddProductPage.search_product_pack)
            .pause(2000)
            .setValue(selector.BO.AddProductPage.search_product_pack, data)
            .pause(2000)
            .waitForExist(selector.BO.AddProductPage.product_item_pack, 60000)
            .click(selector.BO.AddProductPage.product_item_pack)
    }

    addQuantityForItem(data) {
        return this.client
            .waitForExist(selector.BO.AddProductPage.product_pack_item_quantity, 60000)
            .click(selector.BO.AddProductPage.product_pack_item_quantity)
            .pause(2000)
            .setValue(selector.BO.AddProductPage.product_pack_item_quantity, data)
    }

    addItem() {
        return this.client
            .waitForExist(selector.BO.AddProductPage.product_pack_add_button, 60000)
            .click(selector.BO.AddProductPage.product_pack_add_button)
    }


}

module.exports = PackProduct;