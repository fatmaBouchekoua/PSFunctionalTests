var Product = require('./product');
var data = require('./../datas/product-data');

class VirtualProduct extends Product {

    selectVirtualType() {
        return this.client
            .waitForExist(selector.BO.AddProductPage.product_type, 90000)
            .selectByValue(selector.BO.AddProductPage.product_type, 2)
    }

}

module.exports = VirtualProduct;