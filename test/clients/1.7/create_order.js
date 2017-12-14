var CommonClient = require('../common_client');
var {selector} = require('../../globals.webdriverio.js');

class OrderClient extends CommonClient {

    fillPaymentForm(id) {
        return this.client
            .waitForExistAndClick(selector.FO.CheckoutPage.PaymentSection.pay_by_radio_button.replace("%ID", id))
            .waitForExistAndClick(selector.FO.CheckoutPage.PaymentSection.terms_of_service_checkbox)
            .scroll(selector.FO.CheckoutPage.PaymentSection.order_with_an_obligation_to_pay_button)
            .waitForExistAndClick(selector.FO.CheckoutPage.PaymentSection.order_with_an_obligation_to_pay_button)
    }

    getOrderReference() {
        return this.client
            .waitForExist(selector.FO.OrderConfirmationPage.order_reference_label, 90000)
            .getText(selector.FO.OrderConfirmationPage.order_reference_label).then(function (text) {
                var my_ref = text.split(': ')
                global.order_reference = my_ref[1];
            })
    }

    searchById(order_id) {
        if (test === true) {
            return this.client
                .waitAndSetValue(selector.BO.OrdersPage.id_input, order_id)
                .waitForExistAndClick(selector.BO.OrdersPage.search_button)
        } else {
            return this.client
                .getText(selector.BO.OrdersPage.first_order_id).then(function (text) {
                    expect(text).to.be.equal(order_id);
                })
        }
    }

    clickOnViewButton() {
        if (test === true) {
            return this.client.waitForExistAndClick(selector.BO.OrdersPage.view_button.replace('%ID', '12'))
        } else
            return this.client.waitForExistAndClick(selector.BO.OrdersPage.view_button.replace('%ID', '11'))
    }
}
module.exports = OrderClient;
