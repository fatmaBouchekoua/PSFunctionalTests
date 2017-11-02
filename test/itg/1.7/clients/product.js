var common = require('../common.webdriverio');
const {selector} = require('../globals.webdriverio.js');
var data = require('./../datas/product-data');
var path = require('path');

class Product {
    constructor() {
        this.client = common.getClient();
    }

    logIn() {
        return this.client
            .signinBO()
            .waitForExist(selector.BO.AddProductPage.menu, 90000)
    }

    goToCatalog() {
        return this.client
            .pause(5000)
            .waitForExist(selector.BO.AddProductPage.menu, 90000)
            .click(selector.BO.AddProductPage.products_subtab)
    }

    addNewProduct() {
        return this.client
            .waitForExist(selector.BO.AddProductPage.new_product_button, 90000)
            .click(selector.BO.AddProductPage.new_product_button)
            .waitForExist('#notifications-total', 90000)
    }

    setProductName() {
        return this.client
            .waitForExist(selector.BO.AddProductPage.product_name_input, 90000);
        if (this.constructor.name === 'VirtualProduct') {
            return this.client.setValue(selector.BO.AddProductPage.product_name_input, data.virtual.name + product_id);
        } else if (this.constructor.name === 'pack') {
            return this.client.setValue(selector.BO.AddProductPage.product_name_input, data.pack.name + product_id);
        } else if (this.constructor.name === 'combination') {
            return this.client.setValue(selector.BO.AddProductPage.product_name_input, data.standard.name + 'Combination' + product_id);
        } else {
            return this.client.setValue(selector.BO.AddProductPage.product_name_input, data.standard.name + product_id);
        }
    }

    setQuantity() {
        return this.client
            .waitForExist(selector.BO.AddProductPage.quantity_shortcut_input, 90000)
            .clearElement(selector.BO.AddProductPage.quantity_shortcut_input)
            .addValue(selector.BO.AddProductPage.quantity_shortcut_input, "10")
    }

    setPrice() {
        return this.client
            .waitForExist(selector.BO.AddProductPage.price_te_shortcut_input, 90000)
            .execute(function () {
                document.querySelector('#form_step1_price_shortcut').value = "";
            })
            .setValue(selector.BO.AddProductPage.price_te_shortcut_input, "5")
    }

    getPicture(fileName) {
        return path.join(__dirname, '..', 'datas', fileName);
    }

    uploadPicture(fileName) {
        return this.client
            .execute(function () {
                document.getElementsByClassName("dz-hidden-input").style = "";
            })
            .chooseFile(selector.BO.AddProductPage.picture, this.getPicture(fileName))
        /*            .getAttribute('.dz-preview.dz-image-preview.ui-sortable-handle.dz-complete', "data-id").then(function (text) {
         global.image_data_id = text;
         })*/
    }

    /*    setSummary() {
     return this.client
     .frame(selector.summary, function (err, result) {
     if (err) console.log(err);
     })
     .waitForExist("#tinymce", 90000)
     .setValue("#tinymce", data.common.summary)
     .frameParent()
     }

     setDescription() {
     return this.client
     .waitForExist(selector.description_button, 90000)
     .click(selector.description_button)
     .frame(selector.description, function (err, result) {
     if (err) console.log(err);
     })
     .setValue("#tinymce", data.common.description)
     }*/

    addCategory() {
        return this.client
            .scroll(0, 600)
            .waitForExist(selector.BO.AddProductPage.product_create_category_btn, 90000)
            .click(selector.BO.AddProductPage.product_create_category_btn)
    }

    setCategoryName() {
        this.client
            .waitForExist(selector.BO.AddProductPage.product_category_name_input, 90000);
        if (this.constructor.name === 'VirtualProduct') {
            return this.client.setValue(selector.BO.AddProductPage.product_category_name_input, data.virtual.name + product_id);
        } else if (this.constructor.name === 'PackProduct') {
            return this.client.setValue(selector.BO.AddProductPage.product_category_name_input, data.pack.name + product_id);
        } else if (this.constructor.name === 'ProductCombination') {
            return this.client.setValue(selector.BO.AddProductPage.product_category_name_input, data.standard.name + 'Combination' + product_id);
        } else {
            return this.client.setValue(selector.BO.AddProductPage.product_category_name_input, data.standard.name + product_id);
        }
    }

    createCategory() {
        return this.client
            .scroll(0, 1000)
            .pause(2000)
            .waitForExist(selector.BO.AddProductPage.category_create_btn, 90000)
            .click(selector.BO.AddProductPage.category_create_btn)
            .pause(2000)
            .waitForExist(selector.BO.AddProductPage.category_home, 90000)
            .click(selector.BO.AddProductPage.category_home)
    }

    removeHomeCategory() {
        return this.client
            .waitForExist(selector.BO.AddProductPage.category_home, 90000)
            .click(selector.BO.AddProductPage.category_home)
            .pause(2000)
    }

    addBrand() {
        if (this.constructor.name === 'PackProduct') {
            this.client.scroll(0, 1000);
        }
        return this.client
            .waitForExist(selector.BO.AddProductPage.product_add_brand_btn, 90000)
            .click(selector.BO.AddProductPage.product_add_brand_btn)
            .pause(2000)
    }

    selectBrand() {
        return this.client
            .waitForExist(selector.BO.AddProductPage.product_brand_select, 90000)
            .click(selector.BO.AddProductPage.product_brand_select)
            .pause(2000)
            .waitForExist(selector.BO.AddProductPage.product_brand_select_option, 90000)
            .click(selector.BO.AddProductPage.product_brand_select_option)
            .pause(2000)
    }




    logOut() {
        return this.client
            .signoutBO()
    }

    clickOnModalButton(selector) {
        return this.client.click(selector);
    }

    takeScreenshot() {
        return this.client.saveScreenshot(`../screenshots/${this.client.desiredCapabilities.browserName}_exception_${global.date_time}.png`);
    }

    open() {
        return this.client.init().windowHandleSize({width: 1280, height: 1024});
    }

    waitForExist(selector, timeout = 3000) {
        return this.client.waitForExist(selector, timeout);
    }

    close() {
        return this.client.end();
    };
}

module.exports = Product;