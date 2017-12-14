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
        test('should set the "Name" input', () => client.waitAndSetValue(ProductPage.product_name_input, product_name));
        test('should set the "Quantity" input', () => client.setQuantity(ProductPage.quantity_shortcut_input));
        test('should set the "Price" input', () => client.setPrice(ProductPage.priceTE_shortcut));
        test('should upload the product picture', () => client.uploadPicture('Dress.jpg', ProductPage.picture));
        test('should switch the product online', () => client.waitForExistAndClick(ProductPage.product_online_toggle));
        test('should click on "Save" button', () => client.waitForExistAndClick(ProductPage.save_product_button));
        test('should verify the appearance of the green validation', () => client.checkTextValue(ProductPage.validation_msg, 'Settings updated.'));
    }, '1.7/create_product');
    scenario('Check that the product was well created', client => {
        test('should go to "Product Settings" page', () => client.waitForExistAndClick(ProductPage.products_subtab));
        test('should search for product by name', () => client.searchProductByName('StandardProduct' + date_time));
        test('should check the existence of product name', () => client.checkTextValue(ProductPage.catalog_product_name, 'StandardProduct' + date_time));
        test('should check the existence of product category', () => client.checkTextValue(ProductPage.catalog_product_category, 'Home'));
        test('should check the existence of product price TE', () => client.checkProductPriceTE());
        test('should check the existence of product quantity', () => client.checkTextValue(ProductPage.catalog_product_quantity, '10'));
        test('should check the existence of product status', () => client.checkTextValue(ProductPage.catalog_product_online, 'check'));
        test('should reset filter', () => client.waitForExistAndClick(ProductPage.catalog_reset_filter));
    }, '1.7/create_product');
    scenario('Logout from the Back Office', client => {
        test('should logout successfully from the Back Office', () => client.signOutBO());
    }, '1.7/create_product');
}, '1.7/create_product', true);