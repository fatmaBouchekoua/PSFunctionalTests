var {selector} = require('../../globals.webdriverio.js');

scenario('Login in Front office', client => {
    test('should login in Front office', () => client.signInFO(selector));
}, '1.7/create_order');
scenario('Create new order', client => {
    test('should search "StandardProduct' + date_time + '"product', () => client.searchProduct('StandardProduct' + date_time));
    test('should go to the product page', () => client.waitForExistAndClick(selector.FO.HomePage.first_product_home_page_after_search));
    test('should click on "Add to cart" button', () => client.waitForExistAndClick(selector.FO.ProductPage.add_to_cart_button));
    test('should click on "Proceed to checkout" button in "Product" page', () => client.waitForVisibleAndClick(selector.FO.ProductPage.proceed_to_checkout_button));
    test('should click on "Proceed to checkout" button in "cart" page', () => client.waitForExistAndClick(selector.FO.ProductPage.proceed_to_checkout_button));
    test('should click on "Continue" button in "Addresses" form', () => client.waitForExistAndClick(selector.FO.CheckoutPage.AddressesSection.continue_addresses_button));
    test('should fill the shipping form', () => client.waitForExistAndClick(selector.FO.CheckoutPage.DeliverySection.continue_shipping_button));
    test('should fill the payment form', () => client.fillPaymentForm(id_radio_button));
}, '1.7/create_order');

scenario('Check the order creation', client => {
    test('should validate the payment and get the order id', () => client.getId("id_order"));
    test('should get the order reference', () => client.getOrderReference());
    test('should log out from the Front Office', () => client.waitForExistAndClick(selector.FO.Common.logout));
    test('should back to the Back Office', () => client.switchTab(tab_id));
    test('should go to "Order Settings" page', () => client.waitForExistAndClick(selector.BO.Common.orders_settings_button));
    test('should check the existence of the order filter ID input ', () => client.testElementVisibility(selector.BO.OrdersPage.id_input));
    test('should search the order by ID', () => client.searchById(global.id));
    test('should click on "View" button', () => client.clickOnViewButton());
    test('should check the order reference', () => client.checkTextValue(selector.BO.OrderPage.order_reference_label, order_reference));
}, '1.7/create_order');


