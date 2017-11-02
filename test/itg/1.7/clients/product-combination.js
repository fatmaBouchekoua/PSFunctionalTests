var Product = require('./product');
var data = require('./../datas/product-data');

class ProductCombination extends Product {

    selectProductCombinationType() {
        return this.client
            .waitForExist(selector.BO.AddProductPage.product_combinations, 90000)
            .click(selector.BO.AddProductPage.product_combinations)
    }

}

module.exports = ProductCombination;