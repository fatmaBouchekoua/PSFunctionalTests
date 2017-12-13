const {AccessPageBO} = require('../../selectors/BO/access_page');
const {ProductPage} = require('../../selectors/BO/product_page');

scenario('Create "Product"', () => {
    scenario('Login in the Back Office', client => {
        test('should open the browser', () => client.open());
        test('should login successfully in the Back Office', () => client.signInBO(AccessPageBO));
    }, '1.7/create_product');
    scenario('Create a new product', client => {
        test('should go to "Product Settings" page', () => client.waitForExistAndClick(ProductPage.products_subtab));
        test('should click on "New Product" button', () => client.waitForExistAndClick(ProductPage.new_product_button));
        test('should set the "Name" input', () => client.waitAndSetValue(ProductPage.product_name_input, 'Feature'+' '+ date_time));
        test('should set the "Quantity" input', () => client.setQuantity(ProductPage.quantity_shortcut_input));
        test('should set the "Price" input', () => client.setPrice(ProductPage.priceTE_shortcut));
        test('should switch the product online', () => client.waitForExistAndClick(ProductPage.product_online_toggle));
        test('should click on "Save" button', () => client.waitForExistAndClick(ProductPage.save_product_button));
        test('should verify the appearance of the green validation', () => client.checkTextValue(ProductPage.validation_msg, 'Settings updated.'));
    }, '1.7/create_product');
    scenario('Logout from the Back Office', client => {
        test('should logout successfully from the Back Office', () => client.signOutBO());
    }, '1.7/create_product');
}, '1.7/create_product', true);