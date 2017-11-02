scenario('Create Standard Product', client => {
    test('should open browser', () => client.open());
    test('should log in successfully in BO', () => client.logIn());
    test('should go to catalog page', () => client.goToCatalog());
    test('should click on the add new product button', () => client.addNewProduct());
    scenario('Edit Basic settings', client => {
        test('should set the name of product', () => client.setProductName());
        test('should set the quantity of product', () => client.setQuantity());
        test('should set the price of product', () => client.setPrice());
        test('should upload the picture one of product', () => client.uploadPicture('1.png'));
        test('should upload the picture two of product', () => client.uploadPicture('2.jpg'));
        test('should upload the picture three of product', () => client.uploadPicture('3.jpg'));
/*        test('should set the product summary', () => client.setSummary());
        test('should set the product description', () => client.setDescription());*/
        test('should click on add category button', () => client.addCategory());
        test('should set the category name', () => client.setCategoryName());
        test('should click on create category button', () => client.createCategory());
        test('should remove home category tag', () => client.removeHomeCategory());
        test('should click on add brand button', () => client.addBrand());
        test('should select brand', () => client.selectBrand());
        test('should log out successfully in BO', () => client.logOut());
    }, 'product');
}, 'product', true);
