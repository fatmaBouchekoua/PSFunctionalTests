module.exports = {
    editBasicSettings: function (type, data, toUpload) {
        describe('Edit Basic settings', function (done) {
            it('should enter the name of product', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.product_name_input, 90000);
                if (type === 'virtual') {
                    this.client.setValue(this.selector.BO.AddProductPage.product_name_input, data.virtual.name + product_id);
                } else if (type === 'pack') {
                    this.client.setValue(this.selector.BO.AddProductPage.product_name_input, data.pack.name + product_id);
                } else if (type === 'combination') {
                    this.client.setValue(this.selector.BO.AddProductPage.product_name_input, data.standard.name + 'Combination' + product_id);
                } else {
                    this.client.setValue(this.selector.BO.AddProductPage.product_name_input, data.standard.name + product_id);
                }
                this.client
                    .call(done);
            });

            if (type === 'virtual') {
                it('should select virtual product type', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.product_type, 90000)
                        .selectByValue(this.selector.BO.AddProductPage.product_type, 2)
                        .call(done);
                });
            } else if (type === 'pack') {
                it('should select pack product type', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.product_type, 90000)
                        .selectByValue(this.selector.BO.AddProductPage.product_type, 1)
                        .call(done);
                });
            } else if (type === 'combination') {
                it('should select the product combinations', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.product_combinations, 90000)
                        .click(this.selector.BO.AddProductPage.product_combinations)
                        .pause(3000)
                        .call(done);
                });
            }

            if (type === 'pack') {
                it('should search product item for pack ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.search_product_pack, 60000)
                        .click(this.selector.BO.AddProductPage.search_product_pack)
                        .pause(2000)
                        .setValue(this.selector.BO.AddProductPage.search_product_pack, data.pack.pack.pack1.search)
                        .pause(2000)
                        .waitForExist(this.selector.BO.AddProductPage.product_item_pack, 60000)
                        .click(this.selector.BO.AddProductPage.product_item_pack)
                        .pause(2000)
                        .call(done);
                });

                it('should enter the product quantity for pack ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.product_pack_item_quantity, 60000)
                        .click(this.selector.BO.AddProductPage.product_pack_item_quantity)
                        .pause(2000)
                        .setValue(this.selector.BO.AddProductPage.product_pack_item_quantity, data.pack.pack.pack1.quantity)
                        .call(done);
                });

                it('should click on add the product item for pack ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.product_pack_add_button, 60000)
                        .click(this.selector.BO.AddProductPage.product_pack_add_button)
                        .pause(2000)
                        .call(done);
                });

                it('should search product item for pack ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.search_product_pack, 60000)
                        .click(this.selector.BO.AddProductPage.search_product_pack)
                        .pause(2000)
                        .setValue(this.selector.BO.AddProductPage.search_product_pack, data.pack.pack.pack2.search)
                        .pause(2000)
                        .waitForExist(this.selector.BO.AddProductPage.product_item_pack, 60000)
                        .click(this.selector.BO.AddProductPage.product_item_pack)
                        .pause(2000)
                        .call(done);
                });

                it('should enter the product quantity for pack ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.product_pack_item_quantity, 60000)
                        .click(this.selector.BO.AddProductPage.product_pack_item_quantity)
                        .pause(2000)
                        .setValue(this.selector.BO.AddProductPage.product_pack_item_quantity, data.pack.pack.pack2.quantity)
                        .call(done);
                });

                it('should click on add the product item for pack ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.product_pack_add_button, 60000)
                        .click(this.selector.BO.AddProductPage.product_pack_add_button)
                        .pause(2000)
                        .call(done);
                });

            }

            if (type !== 'combination') {
                it('should enter the quantity of product', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.quantity_shortcut_input, 90000)
                        .clearElement(this.selector.BO.AddProductPage.quantity_shortcut_input)
                        .addValue(this.selector.BO.AddProductPage.quantity_shortcut_input, "10")
                        .call(done);
                });
            }

            it('should enter the price of product', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.price_te_shortcut_input, 90000)
                    .execute(function () {
                        document.querySelector('#form_step1_price_shortcut').value = "";
                    })
                    .setValue(this.selector.BO.AddProductPage.price_te_shortcut_input, "5")
                    .call(done);
            });

            it('should upload the picture of product', function (done) {
                global.fctname = this.test.title;
                this.client
                    .execute(function () {
                        document.getElementsByClassName("dz-hidden-input").style = "";
                    })
                    .chooseFile(this.selector.BO.AddProductPage.picture, toUpload)
                    .waitForExist(this.selector.BO.AddProductPage.picture_cover, 90000)
                    .getAttribute('.dz-preview.dz-image-preview.ui-sortable-handle.dz-complete', "data-id").then(function (text) {
                        global.image_data_id = text;
                    })
                    .pause(2000)
                    .call(done);
            });

            it('should enter the summary of product', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist('textarea#form_step1_description_short_1', 90000)
                    .execute(function () {
                        document.querySelector('textarea#form_step1_description_short_1').style = "";
                    })
                    .setValue('textarea#form_step1_description_short_1', "this the summary")
                    .call(done);
            });

            it('should enter the description of product', function (done) {
                global.fctname = this.test.title;
                this.client
                    .click(this.selector.BO.AddProductPage.description_tab)
                    .waitForExist('textarea#form_step1_description_1', 90000)
                    .execute(function () {
                        document.querySelector('textarea#form_step1_description_1').style = "";
                    })
                    .setValue('textarea#form_step1_description_1', "this the description")
                    .call(done);
            });

            it('should click on create category button', function (done) {
                global.fctname = this.test.title;
                this.client
                    .scroll(0, 600)
                    .waitForExist(this.selector.BO.AddProductPage.product_create_category_btn, 90000)
                    .click(this.selector.BO.AddProductPage.product_create_category_btn)
                    .pause(2000)
                    .call(done);
            });

            it('should enter the category name', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.product_category_name_input, 90000);
                if (type === 'virtual') {
                    this.client.setValue(this.selector.BO.AddProductPage.product_category_name_input, data.virtual.new_category_name + product_id)
                } else if (type === 'pack') {
                    this.client.setValue(this.selector.BO.AddProductPage.product_category_name_input, data.pack.new_category_name + product_id)
                } else if (type === 'combination') {
                    this.client.setValue(this.selector.BO.AddProductPage.product_category_name_input, data.standard.new_category_name + 'Combination' + product_id)
                } else {
                    this.client.setValue(this.selector.BO.AddProductPage.product_category_name_input, data.standard.new_category_name + product_id)
                }

                this.client
                    .pause(2000)
                    .call(done);
            });

            it('should click on category create button', function (done) {
                global.fctname = this.test.title;
                this.client
                    .scroll(0, 1000)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.category_create_btn, 90000)
                    .click(this.selector.BO.AddProductPage.category_create_btn)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.category_home, 90000)
                    .click(this.selector.BO.AddProductPage.category_home)
                    .pause(2000)
                    .call(done);
            });

            it('should remove home category', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.category_home, 90000)
                    .click(this.selector.BO.AddProductPage.category_home)
                    .pause(2000)
                    .call(done);
            });

            it('should click on add brand button', function (done) {
                global.fctname = this.test.title;
                if (type === 'pack') {
                    this.client.scroll(0, 1000);
                }
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.product_add_brand_btn, 90000)
                    .click(this.selector.BO.AddProductPage.product_add_brand_btn)
                    .pause(2000)
                    .call(done);
            });

            it('should select a brand', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.product_brand_select, 90000)
                    .click(this.selector.BO.AddProductPage.product_brand_select)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.product_brand_select_option, 90000)
                    .click(this.selector.BO.AddProductPage.product_brand_select_option)
                    .pause(2000)
                    .call(done);
            });

            it('should click on add a related product button', function (done) {
                global.fctname = this.test.title;
                if (type === 'pack') {
                    this.client.scroll(0, 1000);
                }
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.add_related_product_btn, 90000)
                    .click(this.selector.BO.AddProductPage.add_related_product_btn)
                    .pause(2000)
                    .call(done);
            });

            it('should search and add a related product', function (done) {
                global.fctname = this.test.title;
                var search_products = data.common.search_related_products.split('//');
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.search_add_related_product_input, 90000)
                    .setValue(this.selector.BO.AddProductPage.search_add_related_product_input, search_products[0])
                    .waitForExist(this.selector.BO.AddProductPage.related_product_item, 90000)
                    .click(this.selector.BO.AddProductPage.related_product_item)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.search_add_related_product_input, search_products[1])
                    .waitForExist(this.selector.BO.AddProductPage.related_product_item, 90000)
                    .click(this.selector.BO.AddProductPage.related_product_item)
                    .pause(2000)
                    .call(done);
            });

            it('should add feature height', function (done) {
                global.fctname = this.test.title;
                if (type === 'pack') {
                    this.client.scroll(0, 1000);
                }
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.product_add_feature_btn, 90000)
                    .click(this.selector.BO.AddProductPage.product_add_feature_btn)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.feature_select, 90000)
                    .click(this.selector.BO.AddProductPage.feature_select)
                    .waitForExist(this.selector.BO.AddProductPage.feature_select_option_height, 90000)
                    .click(this.selector.BO.AddProductPage.feature_select_option_height)
                    .waitForExist(this.selector.BO.AddProductPage.feature_custom_value_height, 90000)
                    .setValue(this.selector.BO.AddProductPage.feature_custom_value_height, data.standard.features.feature1.custom_value)
                    .pause(2000)
                    .call(done);
            });

            it('should enter the product price tax excluded', function (done) {
                global.fctname = this.test.title;
                this.client
                    .scroll(800, 0)
                    .waitForExist(this.selector.BO.AddProductPage.priceTE_shortcut, 60000)
                    .clearElement(this.selector.BO.AddProductPage.priceTE_shortcut)
                    .setValue(this.selector.BO.AddProductPage.priceTE_shortcut, data.common.priceTE)
                    .call(done);
            });

            it('should enter the product reference', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.product_reference, 60000)
                    .click(this.selector.BO.AddProductPage.product_reference)
                    .setValue(this.selector.BO.AddProductPage.product_reference, data.common.product_reference)
                    .call(done);
            });

            it('should switch the product online', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.product_online_toggle, 60000)
                    .click(this.selector.BO.AddProductPage.product_online_toggle)
                    .pause(2000)
                    .call(done);
            });

        });
    },
    editQuantities: function (type, data, toUpload) {
        if (type !== 'combination') {
            describe('Edit product quantities', function (done) {
                it('should go to the product quantities form', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .scroll(0, 0)
                        .waitForExist(this.selector.BO.AddProductPage.product_quantities_tab, 60000)
                        .click(this.selector.BO.AddProductPage.product_quantities_tab)
                        .call(done);
                });

                it('should enter the product quantity ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.product_quantity_input, 60000)
                        .click(this.selector.BO.AddProductPage.product_quantity_input)
                        .setValue(this.selector.BO.AddProductPage.product_quantity_input, data.common.quantity)
                        .call(done);
                });

                it('should enter the minimum quantity for sale ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.minimum_quantity_sale, 60000)
                        .click(this.selector.BO.AddProductPage.minimum_quantity_sale)
                        .setValue(this.selector.BO.AddProductPage.minimum_quantity_sale, data.common.qty_min)
                        .call(done);
                });

                if (type === 'pack') {
                    it('should select the pack quantities ', function (done) {
                        global.fctname = this.test.title;
                        this.client
                            .waitForExist(this.selector.BO.AddProductPage.pack_stock_type, 60000)
                            .click(this.selector.BO.AddProductPage.pack_stock_type)
                            .pause(2000)
                            .waitForExist(this.selector.BO.AddProductPage.pack_stock_type_option, 60000)
                            .click(this.selector.BO.AddProductPage.pack_stock_type_option)
                            .pause(2000)
                            .call(done);
                    });
                } else if (type === 'virtual') {
                    it('should indicate that the product have an associated file', function (done) {
                        global.fctname = this.test.title;
                        this.client
                            .waitForExist(this.selector.BO.AddProductPage.virtual_associated_file, 60000)
                            .click(this.selector.BO.AddProductPage.virtual_associated_file)
                            .pause(2000)
                            .call(done);
                    });

                    it('should add a file ', function (done) {
                        global.fctname = this.test.title;
                        this.client
                            .scroll(0, 1200)
                            .waitForExist(this.selector.BO.AddProductPage.virtual_select_file, 90000)
                            .chooseFile(this.selector.BO.AddProductPage.virtual_select_file, toUpload)
                            .pause(2000)
                            .waitForExist(this.selector.BO.AddProductPage.virtual_file_name, 90000)
                            .click(this.selector.BO.AddProductPage.virtual_file_name)
                            .pause(2000)
                            .setValue(this.selector.BO.AddProductPage.virtual_file_name, data.virtual.attached_file_name)
                            .pause(2000)
                            .waitForExist(this.selector.BO.AddProductPage.virtual_file_number_download, 90000)
                            .click(this.selector.BO.AddProductPage.virtual_file_number_download)
                            .pause(2000)
                            .setValue(this.selector.BO.AddProductPage.virtual_file_number_download, data.virtual.allowed_number_to_download)
                            .waitForExist(this.selector.BO.AddProductPage.virtual_expiration_file_date, 90000)
                            .click(this.selector.BO.AddProductPage.virtual_expiration_file_date)
                            .pause(2000)
                            .setValue(this.selector.BO.AddProductPage.virtual_expiration_file_date, data.virtual.expiration_date)
                            .waitForExist(this.selector.BO.AddProductPage.virtual_number_days, 90000)
                            .click(this.selector.BO.AddProductPage.virtual_number_days)
                            .pause(2000)
                            .setValue(this.selector.BO.AddProductPage.virtual_number_days, data.virtual.number_of_days)
                            .pause(2000)
                            .waitForExist(this.selector.BO.AddProductPage.virtual_save_attached_file, 90000)
                            .click(this.selector.BO.AddProductPage.virtual_save_attached_file)
                            .call(done);
                    });
                }

                it('should select the availability preferences ', function (done) {
                    global.fctname = this.test.title;
                    if (type === 'virtual') {
                        this.client.scroll(0, 1000);
                    }
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.pack_availability_preferences, 60000)
                        .click(this.selector.BO.AddProductPage.pack_availability_preferences)
                        .pause(2000)
                        .call(done);
                });

                it('should enter the available label in stock ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.pack_label_in_stock, 90000)
                        .click(this.selector.BO.AddProductPage.pack_label_in_stock)
                        .pause(2000)
                        .setValue(this.selector.BO.AddProductPage.pack_label_in_stock, data.common.qty_msg_stock)
                        .pause(2000)
                        .call(done);
                });

                it('should enter the available label out of stock ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.pack_label_out_stock, 90000)
                        .click(this.selector.BO.AddProductPage.pack_label_out_stock)
                        .pause(2000)
                        .setValue(this.selector.BO.AddProductPage.pack_label_out_stock, data.common.qty_msg_unstock)
                        .pause(2000)
                        .call(done);
                });

                it('should enter the availability date ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.pack_availability_date, 90000)
                        .click(this.selector.BO.AddProductPage.pack_availability_date)
                        .pause(2000)
                        .setValue(this.selector.BO.AddProductPage.pack_availability_date, data.common.qty_date)
                        .pause(2000)
                        .call(done);
                });

            });

        }
    },
    editShipping: function (type, data) {
        if (type === 'standard' || type === 'pack' || type === 'combination') {
            describe('Edit product shipping', function (done) {
                it('should go to the product shipping form ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .scroll(500, 0)
                        .waitForExist(this.selector.BO.AddProductPage.product_shipping_tab, 90000)
                        .click(this.selector.BO.AddProductPage.product_shipping_tab)
                        .call(done);
                });

                it('should enter the shipping width ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.shipping_width, 90000)
                        .click(this.selector.BO.AddProductPage.shipping_width)
                        .pause(2000)
                        .setValue(this.selector.BO.AddProductPage.shipping_width, data.common.cwidth)
                        .call(done);
                });

                it('should enter the shipping height ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.shipping_height, 90000)
                        .click(this.selector.BO.AddProductPage.shipping_height)
                        .pause(2000)
                        .setValue(this.selector.BO.AddProductPage.shipping_height, data.common.cheight)
                        .call(done);
                });

                it('should enter the shipping depth ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.shipping_depth, 90000)
                        .click(this.selector.BO.AddProductPage.shipping_depth)
                        .pause(2000)
                        .setValue(this.selector.BO.AddProductPage.shipping_depth, data.common.cdepth)
                        .call(done);
                });

                it('should enter the shipping weight ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.shipping_weight, 90000)
                        .click(this.selector.BO.AddProductPage.shipping_weight)
                        .pause(2000)
                        .setValue(this.selector.BO.AddProductPage.shipping_weight, data.common.cweight)
                        .call(done);
                });

                it('should enter the additional shipping costs ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.shipping_fees, 90000)
                        .click(this.selector.BO.AddProductPage.shipping_fees)
                        .pause(2000)
                        .setValue(this.selector.BO.AddProductPage.shipping_fees, data.common.cadd_ship_coast)
                        .call(done);
                });

                it('should select the available carrier ', function (done) {
                    global.fctname = this.test.title;
                    this.client
                        .waitForExist(this.selector.BO.AddProductPage.shipping_available_carriers, 90000)
                        .click(this.selector.BO.AddProductPage.shipping_available_carriers)
                        .pause(2000)
                        .call(done);
                });

            });

        }

    },
    createCombinations: function (data) {
        describe('Create product combinations ', function (done) {
            it('should go to the product combinations form', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.product_combinations_tab, 60000)
                    .click(this.selector.BO.AddProductPage.product_combinations_tab)
                    .call(done);
            });

            it('should create first combination', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.combination_size_s, 60000)
                    .click(this.selector.BO.AddProductPage.combination_size_s)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.combination_color_gray, 60000)
                    .click(this.selector.BO.AddProductPage.combination_color_gray)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.combination_generate_button, 60000)
                    .click(this.selector.BO.AddProductPage.combination_generate_button)
                    .pause(2000)
                    .call(done);
            });

            it('should create second combination', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.combination_size_m, 60000)
                    .click(this.selector.BO.AddProductPage.combination_size_m)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.combination_color_beige, 60000)
                    .click(this.selector.BO.AddProductPage.combination_color_beige)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.combination_generate_button, 60000)
                    .click(this.selector.BO.AddProductPage.combination_generate_button)
                    .pause(2000)
                    .call(done);
            });

            it('should click on edit the first combination ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.combination_edit_first_variation, 60000)
                    .click(this.selector.BO.AddProductPage.combination_edit_first_variation)
                    .pause(2000)
                    .call(done);
            });

            it('should edit the first combination', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.combination_first_details_qty, 60000)
                    .click(this.selector.BO.AddProductPage.combination_first_details_qty)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_first_details_qty, data.standard.variations.variation1.quantity)
                    .waitForExist(this.selector.BO.AddProductPage.combination_first_details_ref, 60000)
                    .click(this.selector.BO.AddProductPage.combination_first_details_ref)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_first_details_ref, data.standard.variations.variation1.ref)
                    .waitForExist(this.selector.BO.AddProductPage.combination_first_details_minimal_quantity, 60000)
                    .click(this.selector.BO.AddProductPage.combination_first_details_minimal_quantity)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_first_details_minimal_quantity, data.standard.variations.variation1.minimal_quantity)
                    .waitForExist(this.selector.BO.AddProductPage.combination_first_details_available_date, 60000)
                    .click(this.selector.BO.AddProductPage.combination_first_details_available_date)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_first_details_available_date, data.standard.variations.variation1.available_date)
                    .waitForExist(this.selector.BO.AddProductPage.combination_first_details_wholesale, 60000)
                    .click(this.selector.BO.AddProductPage.combination_first_details_wholesale)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_first_details_wholesale, data.standard.variations.variation1.wholesale)
                    .waitForExist(this.selector.BO.AddProductPage.combination_first_details_priceTI, 60000)
                    .click(this.selector.BO.AddProductPage.combination_first_details_priceTI)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_first_details_priceTI, data.standard.variations.variation1.priceTI)
                    .waitForExist(this.selector.BO.AddProductPage.combination_first_details_unity, 60000)
                    .click(this.selector.BO.AddProductPage.combination_first_details_unity)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_first_details_unity, data.standard.variations.variation1.unity)
                    .waitForExist(this.selector.BO.AddProductPage.combination_first_details_weight, 60000)
                    .click(this.selector.BO.AddProductPage.combination_first_details_weight)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_first_details_weight, data.standard.variations.variation1.weight)
                    .waitForExist(this.selector.BO.AddProductPage.combination_first_details_ISBN_code, 60000)
                    .click(this.selector.BO.AddProductPage.combination_first_details_ISBN_code)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_first_details_ISBN_code, data.standard.variations.variation1.isbn)
                    .waitForExist(this.selector.BO.AddProductPage.combination_first_details_EAN13, 60000)
                    .click(this.selector.BO.AddProductPage.combination_first_details_EAN13)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_first_details_EAN13, data.standard.variations.variation1.ean13)
                    .waitForExist(this.selector.BO.AddProductPage.combination_first_details_UPC, 60000)
                    .click(this.selector.BO.AddProductPage.combination_first_details_UPC)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_first_details_UPC, data.standard.variations.variation1.upc)
                    .call(done);
            });

            it('should click on back to product button', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.combination_first_details_back_to_product_btn, 60000)
                    .click(this.selector.BO.AddProductPage.combination_first_details_back_to_product_btn)
                    .pause(3000)
                    .call(done);
            });

            it('should click on edit the second combination ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.combination_edit_second_variation, 60000)
                    .click(this.selector.BO.AddProductPage.combination_edit_second_variation)
                    .pause(2000)
                    .call(done);
            });

            it('should edit the second combination', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.combination_second_details_qty, 60000)
                    .click(this.selector.BO.AddProductPage.combination_second_details_qty)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_second_details_qty, data.standard.variations.variation2.quantity)
                    .waitForExist(this.selector.BO.AddProductPage.combination_second_details_ref, 60000)
                    .click(this.selector.BO.AddProductPage.combination_second_details_ref)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_second_details_ref, data.standard.variations.variation2.ref)
                    .waitForExist(this.selector.BO.AddProductPage.combination_second_details_minimal_quantity, 60000)
                    .click(this.selector.BO.AddProductPage.combination_second_details_minimal_quantity)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_second_details_minimal_quantity, data.standard.variations.variation2.minimal_quantity)
                    .waitForExist(this.selector.BO.AddProductPage.combination_second_details_available_date, 60000)
                    .click(this.selector.BO.AddProductPage.combination_second_details_available_date)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_second_details_available_date, data.standard.variations.variation2.available_date)
                    .waitForExist(this.selector.BO.AddProductPage.combination_second_details_wholesale, 60000)
                    .click(this.selector.BO.AddProductPage.combination_second_details_wholesale)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_second_details_wholesale, data.standard.variations.variation2.wholesale)
                    .waitForExist(this.selector.BO.AddProductPage.combination_second_details_priceTI, 60000)
                    .click(this.selector.BO.AddProductPage.combination_second_details_priceTI)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_second_details_priceTI, data.standard.variations.variation2.priceTI)
                    .waitForExist(this.selector.BO.AddProductPage.combination_second_details_unity, 60000)
                    .click(this.selector.BO.AddProductPage.combination_second_details_unity)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_second_details_unity, data.standard.variations.variation2.unity)
                    .waitForExist(this.selector.BO.AddProductPage.combination_second_details_weight, 60000)
                    .click(this.selector.BO.AddProductPage.combination_second_details_weight)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_second_details_weight, data.standard.variations.variation2.weight)
                    .waitForExist(this.selector.BO.AddProductPage.combination_second_details_ISBN_code, 60000)
                    .click(this.selector.BO.AddProductPage.combination_second_details_ISBN_code)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_second_details_ISBN_code, data.standard.variations.variation2.isbn)
                    .waitForExist(this.selector.BO.AddProductPage.combination_second_details_EAN13, 60000)
                    .click(this.selector.BO.AddProductPage.combination_second_details_EAN13)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_second_details_EAN13, data.standard.variations.variation2.ean13)
                    .waitForExist(this.selector.BO.AddProductPage.combination_second_details_UPC, 60000)
                    .click(this.selector.BO.AddProductPage.combination_second_details_UPC)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_second_details_UPC, data.standard.variations.variation2.upc)
                    .call(done);
            });

            it('should click on back to product button', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.combination_second_details_back_to_product_btn, 60000)
                    .click(this.selector.BO.AddProductPage.combination_second_details_back_to_product_btn)
                    .pause(3000)
                    .call(done);
            });

            it('should select the availability preferences ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .scroll(0, 600)
                    .waitForExist(this.selector.BO.AddProductPage.combination_availability_preferences, 90000)
                    .click(this.selector.BO.AddProductPage.combination_availability_preferences)
                    .pause(2000)
                    .call(done);
            });

            it('should enter the available label in stock ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.combination_label_in_stock, 90000)
                    .click(this.selector.BO.AddProductPage.combination_label_in_stock)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_label_in_stock, data.common.qty_msg_stock)
                    .pause(2000)
                    .call(done);
            });

            it('should enter the available label out of stock ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.combination_label_out_stock, 90000)
                    .click(this.selector.BO.AddProductPage.combination_label_out_stock)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.combination_label_out_stock, data.common.qty_msg_unstock)
                    .pause(2000)
                    .call(done);
            });
        });

    },
    editPricing: function (data) {
        describe('Edit product pricing', function (done) {
            it('should go to the product pricing tab ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .scroll(0, 0)
                    .waitForExist(this.selector.BO.AddProductPage.product_pricing_tab, 90000)
                    .click(this.selector.BO.AddProductPage.product_pricing_tab)
                    .call(done);
            });

            it('should enter the pricing unity', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.unit_price, 60000)
                    .clearElement(this.selector.BO.AddProductPage.unit_price)
                    .setValue(this.selector.BO.AddProductPage.unit_price, data.common.unitPrice)
                    .setValue(this.selector.BO.AddProductPage.unity, data.common.unity)
                    .call(done);
            });

            /*                it('should enter the pricing tax rule', function (done) {
             global.fctname = this.test.title;
             this.client
             .waitForExist(this.selector.BO.AddProductPage.pricing_tax_rule_select, 60000)
             .click(this.selector.BO.AddProductPage.pricing_tax_rule_select)
             .pause(2000)
             .waitForExist(this.selector.BO.AddProductPage.pricing_tax_rule_option, 60000)
             .click(this.selector.BO.AddProductPage.pricing_tax_rule_option)
             .pause(2000)
             .call(done);
             });*/

            it('should enter the pricing wholesale', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.pricing_wholesale, 60000)
                    .clearElement(this.selector.BO.AddProductPage.pricing_wholesale)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.pricing_wholesale, data.common.wholesale)
                    .call(done);
            });

            it('should select the pricing priorities', function (done) {
                global.fctname = this.test.title;
                this.client
                    .scroll(0, 250)
                    .waitForExist(this.selector.BO.AddProductPage.pricing_first_priorities_select, 60000)
                    .click(this.selector.BO.AddProductPage.pricing_first_priorities_select)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.pricing_first_priorities_option, 60000)
                    .click(this.selector.BO.AddProductPage.pricing_first_priorities_option)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.pricing_second_priorities_select, 60000)
                    .click(this.selector.BO.AddProductPage.pricing_second_priorities_select)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.pricing_second_priorities_option, 60000)
                    .click(this.selector.BO.AddProductPage.pricing_second_priorities_option)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.pricing_third_priorities_select, 60000)
                    .click(this.selector.BO.AddProductPage.pricing_third_priorities_select)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.pricing_third_priorities_option, 60000)
                    .click(this.selector.BO.AddProductPage.pricing_third_priorities_option)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.pricing_foreth_priorities_select, 60000)
                    .click(this.selector.BO.AddProductPage.pricing_foreth_priorities_select)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.pricing_foreth_priorities_option, 60000)
                    .click(this.selector.BO.AddProductPage.pricing_foreth_priorities_option)
                    .pause(2000)
                    .call(done);
            });

        });

    },
    editSEO: function (data) {
        describe('Edit SEO information', function (done) {
            it('should go to the product SEO form ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .scroll(800, 0)
                    .waitForExist(this.selector.BO.AddProductPage.product_SEO_tab, 90000)
                    .click(this.selector.BO.AddProductPage.product_SEO_tab)
                    .call(done);
            });

            it('should enter the meta title ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.SEO_meta_title, 90000)
                    .click(this.selector.BO.AddProductPage.SEO_meta_title)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.SEO_meta_title, data.common.metatitle)
                    .call(done);
            });

            it('should enter the meta description ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.SEO_meta_description, 90000)
                    .click(this.selector.BO.AddProductPage.SEO_meta_description)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.SEO_meta_description, data.common.metadesc)
                    .call(done);
            });

            it('should enter the friendly url ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.SEO_friendly_url, 90000)
                    .click(this.selector.BO.AddProductPage.SEO_friendly_url)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.SEO_friendly_url, data.common.shortlink)
                    .call(done);
            });
        });

    },
    editOptions: function (data, toUpload) {
        describe('Edit product options', function (done) {
            it('should go to the product options form ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.product_options_tab, 90000)
                    .click(this.selector.BO.AddProductPage.product_options_tab)
                    .call(done);
            });

            it('should select the visibility ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.options_visibility, 90000)
                    .click(this.selector.BO.AddProductPage.options_visibility)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.options_visibility_option, 90000)
                    .click(this.selector.BO.AddProductPage.options_visibility_option)
                    .pause(2000)
                    .call(done);
            });

            it('should enable the web only visibility ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.options_online_only, 90000)
                    .click(this.selector.BO.AddProductPage.options_online_only)
                    .call(done);
            });

            it('should select the condition ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .scroll(0, 500)
                    .waitForExist(this.selector.BO.AddProductPage.options_condition_select, 90000)
                    .click(this.selector.BO.AddProductPage.options_condition_select)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.options_condition_option, 90000)
                    .click(this.selector.BO.AddProductPage.options_condition_option)
                    .call(done);
            });

            it('should enter the ISBN ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.options_isbn, 90000)
                    .click(this.selector.BO.AddProductPage.options_isbn)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.options_isbn, data.common.isbn)
                    .call(done);
            });

            it('should enter the EAN-13 ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.options_ean13, 90000)
                    .click(this.selector.BO.AddProductPage.options_ean13)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.options_ean13, data.common.ean13)
                    .call(done);
            });

            it('should enter the UPC ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .scroll(0.600)
                    .pause(5000)
                    .waitForExist(this.selector.BO.AddProductPage.options_upc, 90000)
                    .setValue(this.selector.BO.AddProductPage.options_upc, data.common.upc)
                    .call(done);
            });

            it('should click on customization button ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .scroll(0, 800)
                    .waitForExist(this.selector.BO.AddProductPage.options_add_customization_field_button, 90000)
                    .click(this.selector.BO.AddProductPage.options_add_customization_field_button)
                    .pause(2000)
                    .call(done);
            });

            it('should create new custom field ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.options_first_custom_field_label, 90000)
                    .click(this.selector.BO.AddProductPage.options_first_custom_field_label)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.options_first_custom_field_label, data.common.personalization.perso_text.name)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.options_first_custom_field_type, 90000)
                    .click(this.selector.BO.AddProductPage.options_first_custom_field_type)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.options_first_custom_field_require, 90000)
                    .click(this.selector.BO.AddProductPage.options_first_custom_field_require)
                    .call(done);
            });

            it('should click on add a customization field button ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .scroll(0, 800)
                    .waitForExist(this.selector.BO.AddProductPage.options_add_customization_field_button, 90000)
                    .click(this.selector.BO.AddProductPage.options_add_customization_field_button)
                    .pause(2000)
                    .call(done);
            });

            it('should create new custom field ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .waitForExist(this.selector.BO.AddProductPage.options_second_custom_field_label, 90000)
                    .click(this.selector.BO.AddProductPage.options_second_custom_field_label)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.options_second_custom_field_label, data.common.personalization.perso_file.name)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.options_second_custom_field_type, 90000)
                    .selectByValue(this.selector.BO.AddProductPage.options_second_custom_field_type, 0)
                    .call(done);
            });

            it('should click on attach a new file button ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .scroll(0, 1200)
                    .waitForExist(this.selector.BO.AddProductPage.options_add_new_file_button, 90000)
                    .click(this.selector.BO.AddProductPage.options_add_new_file_button)
                    .pause(2000)
                    .call(done);
            });

            it('should add a file ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .scroll(0, 1200)
                    .waitForExist(this.selector.BO.AddProductPage.options_select_file, 90000)
                    .chooseFile(this.selector.BO.AddProductPage.options_select_file, toUpload)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.options_file_name, 90000)
                    .click(this.selector.BO.AddProductPage.options_file_name)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.options_file_name, data.common.document_attach.name)
                    .pause(2000)
                    .waitForExist(this.selector.BO.AddProductPage.options_file_description, 90000)
                    .click(this.selector.BO.AddProductPage.options_file_description)
                    .pause(2000)
                    .setValue(this.selector.BO.AddProductPage.options_file_description, data.common.document_attach.desc)
                    .pause(2000)
                    .call(done);
            });

            it('should select the previous added file ', function (done) {
                global.fctname = this.test.title;
                this.client
                    .scroll(0, 1200)
                    .waitForExist(this.selector.BO.AddProductPage.options_file_add_button, 90000)
                    .pause(2000)
                    .scroll(0, 1200)
                    .click(this.selector.BO.AddProductPage.options_file_add_button)
                    .pause(2000)
                    .call(done);
            });

        });
    }
};