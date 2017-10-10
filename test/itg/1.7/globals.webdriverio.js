'use strict';
var common = require('./common.webdriverio');
var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.URL = argv.URL;
global.module_tech_name = argv.MODULE;
global.saucelabs = argv.SAUCELABS;
global.selenium_url = argv.SELENIUM;
global._projectdir = path.join(__dirname, '..', '..');
global.product_id = new Date().getTime();
global.new_customer_email = 'pub' + date_time + '@prestashop.com';

module.exports = {
    selector: {
        //Installation selector
        InstallationWizardPage : {
            language_select: '//*[@id="langList"]',
            next_step_button: '//*[@id="btNext"]',
            agree_checkbox: '//*[@id="set_license"]',
            test_result_compatibility_green_block: '//*[@id="sheet_"]/h3',
            shop_name_input: '//*[@id="infosShop"]',
            country_select: '//*[@id="infosCountry_chosen"]',
            country_france_option: '//*[@id="infosCountry_chosen"]/div/ul/li[2]',
            first_name_input: '//*[@id="infosFirstname"]',
            last_name_input: '//*[@id="infosName"]',
            email_address_input: '//*[@id="infosEmail"]',
            shop_password_input: '//*[@id="infosPassword"]',
            retype_password_input: '//*[@id="infosPasswordRepeat"]',
            database_address_input: '//*[@id="dbServer"]',
            database_name_input: '//*[@id="dbName"]',
            database_login_input: '//*[@id="dbLogin"]',
            database_password_input: '//*[@id="dbPassword"]',
            test_conection_button: '#btTestDB',
            dbResultCheck_green_block: '//*[@id="dbResultCheck"]',
            create_file_parameter_step: '//li[@id="process_step_generateSettingsFile" and @class="process_step success"]',
            create_database_step: '//li[@id="process_step_installDatabase" and @class="process_step success"]',
            create_default_shop_step: '//li[@id="process_step_installDefaultData" and @class="process_step success"]',
            create_database_table_step: '//li[@id="process_step_populateDatabase" and @class="process_step success"]',
            create_shop_informations_step: '//li[@id="process_step_configureShop" and @class="process_step success"]',
            create_demonstration_data_step: '//li[@id="process_step_installFixtures" and @class="process_step success"]',
            install_module_step: '//li[@id="process_step_installModules" and @class="process_step success"]',
            install_addons_modules_step: '//li[@id="process_step_installModulesAddons" and @class="process_step success"]',
            install_theme_step: '//li[@id="process_step_installTheme" and @class="process_step success"]',
            finish_step: '//*[@id="install_process_success"]/div[1]/h2'
        },

        BO:{
            // Back office login page selector
            AccessPage:{
                login_input: '#email',
                password_input: '#passwd',
                login_button: '[name="submitLogin"]'
            },
            //Product selector
            AddProductPage:{
                //common
                exit_welcome_button: '[class="btn btn-tertiary-outline btn-lg onboarding-button-shut-down"]',
                click_outside: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[3]',
                logout: '#header_logout',
                products_subtab: '#subtab-AdminCatalog',
                go_to_catalog_button: '#form > div.product-footer > div.text-lg-right > div > div.dropdown-menu > a.dropdown-item.go-catalog.js-btn-save',
                more_option_button: '.btn.btn-primary.dropdown-toggle',
                new_product_button: '#page-header-desc-configuration-add',
                menu: '#nav-sidebar',
                product_name_input: '#form_step1_name_1',
                save_product_button: '//*[@id="form"]/div[4]/div[2]/div/button[1]',
                green_validation_notice: '[class="growl growl-notice growl-medium"]',
                close_validation_button: '.growl-close',
                validation_msg: '//*[@id="growls"]/div/div[3]',
                red_validation_notice: '[class="growl growl-error growl-medium"]',
                description_tab: '[href="#description"]',
                price_te_shortcut_input: '#form_step1_price_shortcut',
                quantity_shortcut_input: '#form_step1_qty_0_shortcut',
                picture: '[class="dz-hidden-input"]',
                picture_cover: '.iscover',
                product_online_toggle: '.switch-input ',
                catalogue_filter_by_name_input: '//input[@name="filter_column_name"]',
                catalogue_submit_filter_button: '//button[@name="products_filter_submit"]',
                product_type: '#form_step1_type_product',
                product_create_category_btn: '//*[@id="add-category-button"]',
                product_category_name_input: '//*[@id="form_step1_new_category_name"]',
                category_create_btn: '//*[@id="form_step1_new_category_save"]',
                category_home: '//*[@id="ps_categoryTags"]/span[1]/a',
                product_add_brand_btn: '//*[@id="add_brand_button"]',
                product_brand_select: '//*[@id="manufacturer-content"]/div/div[1]/fieldset/span',
                product_brand_select_option: '//*[@id="select2-form_step1_id_manufacturer-results"]/li[2]',
                add_related_product_btn: '//*[@id="add-related-product-button"]',
                search_add_related_product_input: '//*[@id="form_step1_related_products"]',
                related_product_item: '//*[@id="related-content"]/div[2]/fieldset/div/span/div/div/div[1]',
                priceTE_shortcut: '#form_step1_price_shortcut',
                product_reference: '//*[@id="form_step6_reference"]',
                product_pricing_tab: '//*[@id="tab_step2"]/a',
                unit_price:'#form_step2_unit_price',
                unity:'#form_step2_unity',
                pricing_tax_rule_select: '//*[@id="step2"]/div/div/div/div/div[3]/div/div[1]/span',
                pricing_wholesale: '//*[@id="form_step2_wholesale_price"]',
                pricing_first_priorities_select: '//*[@id="step2"]/div/div/div/div/div[6]/div/div[2]/fieldset/span',
                pricing_first_priorities_option: '//*[@id="select2-form_step2_specificPricePriority_0-results"]/li[1]',
                pricing_second_priorities_select: '//*[@id="step2"]/div/div/div/div/div[6]/div/div[3]/fieldset/span',
                pricing_second_priorities_option: '//*[@id="select2-form_step2_specificPricePriority_1-results"]/li[3]',
                pricing_third_priorities_select: '//*[@id="step2"]/div/div/div/div/div[6]/div/div[4]/fieldset/span',
                pricing_third_priorities_option: '//*[@id="select2-form_step2_specificPricePriority_2-results"]/li[4]',
                pricing_foreth_priorities_select: '//*[@id="step2"]/div/div/div/div/div[6]/div/div[5]/fieldset/span',
                pricing_foreth_priorities_option: '//*[@id="select2-form_step2_specificPricePriority_3-results"]/li[2]',
                product_SEO_tab: '//*[@id="tab_step5"]/a',
                SEO_meta_title: '//*[@id="form_step5_meta_title_1"]',
                SEO_meta_description: '//*[@id="form_step5_meta_description_1"]',
                SEO_friendly_url: '//*[@id="form_step5_link_rewrite_1"]',
                product_options_tab: '//*[@id="tab_step6"]/a',
                options_visibility: '//*[@id="step6"]/div/div/div/div/div/div[2]/div/span',
                options_visibility_option: '//*[@id="select2-form_step6_visibility-results"]/li[3]',
                options_online_only: '//*[@id="form_step6_display_options_online_only"]',
                options_condition_select: '//*[@id="step6"]/div/div/div/div/div/div[6]/fieldset[1]/span',
                options_condition_option: '//*[@id="select2-form_step6_condition-results"]/li[3]',
                options_isbn: '//*[@id="form_step6_isbn"]',
                options_ean13: '//*[@id="form_step6_ean13"]',
                options_upc: '//*[@id="form_step6_upc"]',
                options_add_customization_field_button: '//*[@id="custom_fields"]/a',
                options_first_custom_field_label: '//*[@id="form_step6_custom_fields_0_label_1"]',
                options_first_custom_field_type: '//*[@id="form_step6_custom_fields_0_type"]/option[1]',
                options_first_custom_field_require: '//*[@id="form_step6_custom_fields_0_require"]',
                options_second_custom_field_label: '//*[@id="form_step6_custom_fields_1_label_1"]',
                options_second_custom_field_type: '//*[@id="form_step6_custom_fields_1_type"]',
                options_add_new_file_button: '//*[@id="step6"]/div/div/div/div/div/div[11]/div/a',
                options_select_file: '//*[@id="form_step6_attachment_product_file"]',
                options_file_name: '//*[@id="form_step6_attachment_product_name"]',
                options_file_description: '//*[@id="form_step6_attachment_product_description"]',
                options_file_add_button: '//*[@id="form_step6_attachment_product_add"]',
                options_file_checkbox: '//*[@id="form_step6_attachments_0"]',
                options_choose_supplier: '//*[@id="form_step6_suppliers_0"]',
                save_product_btn: '//*[@id="submit"]',
                product_add_feature_btn: '//*[@id="add_feature_button"]',
                feature_select: '//*[@id="features-content"]/div/div/div[1]/fieldset/span/span[1]/span',
                feature_select2: '//*[@id="features-content"]/div/div[2]/div[1]/fieldset/span/span[1]/span',
                feature_select3: '//*[@id="features-content"]/div/div[3]/div[1]/fieldset/span/span[1]/span',
                feature_select4: '//*[@id="features-content"]/div/div[4]/div[1]/fieldset/span/span[1]/span',
                feature_select5: '//*[@id="features-content"]/div/div[5]/div[1]/fieldset/span/span[1]/span',
                feature_select6: '//*[@id="features-content"]/div/div[6]/div[1]/fieldset/span/span[1]/span',
                feature_select7: '//*[@id="features-content"]/div/div[7]/div[1]/fieldset/span/span[1]/span',
                feature_select_option_height: '//*[@id="select2-form_step1_features_0_feature-results"]/li[2]',
                feature_custom_value_height: '//*[@id="form_step1_features_0_custom_value_1"]',
                product_shipping_tab: '//*[@id="tab_step4"]/a',
                shipping_width: '//*[@id="form_step4_width"]',
                shipping_height: '//*[@id="form_step4_height"]',
                shipping_depth: '//*[@id="form_step4_depth"]',
                shipping_weight: '//*[@id="form_step4_weight"]',
                shipping_fees: '//*[@id="form_step4_additional_shipping_cost"]',
                shipping_available_carriers: '//*[@id="form_step4_selectedCarriers_1"]',
                product_combinations_tab: '//*[@id="tab_step3"]/a',
                product_combinations: '//*[@id="show_variations_selector"]/div[2]/label/input',
                combination_size_s: '//*[@id="attribute-group-1"]/div/div[1]/label',
                combination_size_m: '//*[@id="attribute-group-1"]/div/div[2]/label',
                combination_color_gray: '//*[@id="attribute-group-3"]/div/div[1]/label',
                combination_color_beige: '//*[@id="attribute-group-3"]/div/div[3]/label',
                combination_generate_button: '//*[@id="create-combinations"]',
                combination_edit_first_variation: '//*[@id="accordion_combinations"]/tr[1]/td[7]/div[1]/a',
                combination_edit_second_variation: '//*[@id="accordion_combinations"]/tr[2]/td[7]/div[1]/a',
                combination_first_details_qty: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[3]/div[1]/fieldset/input',//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[3]/div[1]/fieldset/input
                combination_first_details_ref: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[3]/div[4]/fieldset/input',
                combination_first_details_minimal_quantity: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[3]/div[3]/fieldset/input',
                combination_first_details_available_date: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[3]/div[2]/fieldset/div/input',
                combination_first_details_wholesale: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[4]/div[1]/fieldset/div/input',
                combination_first_details_priceTI: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[4]/div[3]/fieldset/div/input',
                combination_first_details_unity: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[5]/div[2]/fieldset/div/input',
                combination_first_details_weight: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[5]/div[3]/fieldset/div/input',
                combination_first_details_ISBN_code: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[6]/div[1]/fieldset/input',
                combination_first_details_EAN13: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[6]/div[2]/fieldset/input',
                combination_first_details_UPC: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[6]/div[3]/fieldset/input',
                combination_first_details_back_to_product_btn: '//*[@id="form-loading"]/div[1]/div[2]/div[2]/div[1]/button',
                combination_second_details_qty: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[3]/div[1]/fieldset/input',//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[3]/div[1]/fieldset/input
                combination_second_details_ref: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[3]/div[4]/fieldset/input',
                combination_second_details_minimal_quantity: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[3]/div[3]/fieldset/input',
                combination_second_details_available_date: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[3]/div[2]/fieldset/div/input',
                combination_second_details_wholesale: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[4]/div[1]/fieldset/div/input',
                combination_second_details_priceTI: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[4]/div[3]/fieldset/div/input',
                combination_second_details_unity: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[5]/div[2]/fieldset/div/input',
                combination_second_details_weight: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[5]/div[3]/fieldset/div/input',
                combination_second_details_ISBN_code: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[6]/div[1]/fieldset/input',
                combination_second_details_EAN13: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[6]/div[2]/fieldset/input',
                combination_second_details_UPC: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[6]/div[3]/fieldset/input',
                combination_second_details_back_to_product_btn: '//*[@id="form-loading"]/div[1]/div[3]/div[2]/div[1]/button',
                combination_availability_preferences: '//*[@id="form_step3_out_of_stock_0"]',
                combination_label_in_stock: '//*[@id="form_step3_available_now_1"]',
                combination_label_out_stock: '//*[@id="form_step3_available_later_1"]',
                product_pack_type: '//*[@id="select2-form_step1_type_product-results"]/li[2]',
                search_product_pack: '//*[@id="form_step1_inputPackItems"]',
                product_item_pack: '//*[@id="js_form_step1_inputPackItems"]/div/div[1]/span/div/div/div[1]/table/tbody/tr[1]',
                product_pack_item_quantity: '//*[@id="form_step1_inputPackItems-curPackItemQty"]',
                product_pack_add_button: '//*[@id="form_step1_inputPackItems-curPackItemAdd"]',
                product_quantities_tab: '//*[@id="tab_step3"]/a',
                product_quantity_input: '//*[@id="form_step3_qty_0"]',
                minimum_quantity_sale: '//*[@id="form_step3_minimal_quantity"]',
                pack_stock_type: '//*[@id="select2-form_step3_pack_stock_type-container"]',
                pack_stock_type_option: '//*[@id="select2-form_step3_pack_stock_type-results"]/li[3]',
                pack_availability_preferences: '//*[@id="form_step3_out_of_stock_0"]',
                pack_label_in_stock: '//*[@id="form_step3_available_now_1"]',
                pack_label_out_stock: '//*[@id="form_step3_available_later_1"]',
                pack_availability_date: '//*[@id="form_step3_available_date"]',
                pack_unit_price: '//*[@id="form_step2_unit_price"]',
                options_default_supplier: '//*[@id="form_step6_default_supplier_0"]',
                options_supplier_reference: '//*[@id="form_step6_supplier_combination_1_0_supplier_reference"]',
                options_supplier_price: '//*[@id="form_step6_supplier_combination_1_0_product_price"]',
                virtual_associated_file: '#form_step3_virtual_product_is_virtual_file_0',
                virtual_select_file : '#form_step3_virtual_product_file',
                virtual_file_name: '#form_step3_virtual_product_name',
                virtual_file_number_download: '#form_step3_virtual_product_nb_downloadable',
                virtual_expiration_file_date: '#form_step3_virtual_product_expiration_date',
                virtual_number_days: '#form_step3_virtual_product_nb_days',
                virtual_save_attached_file: '#form_step3_virtual_product_save',
                catalog_product_name: '//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[3]/a',
                catalog_product_reference: '//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[4]',
                catalog_product_category: '//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[5]',
                catalog_product_price: '//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[6]',
                catalog_product_quantity: '//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[7]',
                catalog_product_online: '//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[8]/a/i',
                catalog_reset_filter: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[2]/th[9]/button[2]'
            },
            //Order selector
            OrderPage:{
                orders_subtab: '#subtab-AdminParentOrders',
                form: '#form-order',
                order_product_name_span: '.productName',
                order_product_quantity_span: '.product_quantity_show',
                order_product_total: '#total_order > td.amount.text-right.nowrap',
                order_reference_span: '((//div[@class="panel-heading"])[1]/span)[1]'
            },
            //Module selector
            ModulePage:{
                modules_subtab: '#subtab-AdminParentModulesSf',
                search_input: 'div.pstaggerAddTagWrapper > input',
                search_button: '.btn.btn-primary.pull-right.search-button',
                page_loaded: '.module-search-result-wording',
                installed_modules_tabs: '(//div[@class="page-head-tabs"]/a)[2]',
                module_number_span: '[class="module-sorting-search-wording"]',

                module_tech_name: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]',
                install_module_btn: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@data-confirm_modal="module-modal-confirm-' + module_tech_name + '-install"]',
                uninstall_module_list: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="btn btn-primary-outline  dropdown-toggle"]',
                uninstall_module_btn: '//div[@data-tech-name="' + module_tech_name + '" and not(@style)]//button[@class="dropdown-item module_action_menu_uninstall"]',
                modal_confirm_uninstall:  '//*[@id="module-modal-confirm-' + module_tech_name + '-uninstall" and @class="modal modal-vcenter fade in"]//a[@class="btn btn-primary uppercase module_action_modal_uninstall"]'
            },
            // Popup - boutique Onboarding selector
            Onboarding:{
                popup: '.onboarding-popup',
                popup_close_button: '.onboarding-button-shut-down',
                stop_button: '.onboarding-button-stop'
            }
        },


        //FO
        FO:{
            //Access page selector
            AccessPage:{
                sign_in_button: 'div.user-info > a',
                login_input: '//*[@id="login-form"]/section/div[1]/div[1]/input',
                password_input: '//*[@id="login-form"]/section/div[2]/div[1]/div/input',
                login_button: '//*[@id="login-form"]/footer/button',
                sign_out_button: '.logout',
                logo_home_page: '.logo.img-responsive'
            },
            //Account page selector
            AddAccountPage: {
                create_button: '[data-link-action="display-register-form"]',
                firstname_input: '[name="firstname"]',
                lastname_input: '[name="lastname"]',
                email_input: '[name="email"]',
                password_input: '[name="password"]',
                save_account_button: '[data-link-action="save-customer"]'
            },
            //Order Pages selector
            BuyOrderPage: {
                first_product_home_page: '.thumbnail.product-thumbnail',
                add_to_cart_button: '.btn.btn-primary.add-to-cart',
                first_product_home_page_name: '[itemprop="name"]',
                product_image: '#content',
                product_name_details: '[itemprop="name"]',
                product_price_details: '[itemprop="price"]',
                product_quantity_details: '#quantity_wanted',
                product_name: '(//div[@class="product-line-info"])[1]/a',
                product_price: '//span[@class="price"]',
                proceed_to_checkout_button: '//*[@id="main"]/div/div[2]/div[1]/div[2]/div/a',
                checkout_step2_continue_button: '//*[@id="checkout-addresses-step"]/div/div/form/div[2]/button',
                checkout_step3_continue_button: '//*[@id="js-delivery"]/button',
                checkout_step4_payment_radio: '//*[@id="payment-option-2"]',
                checkout_step4_cgv_checkbox: '//input[@id="conditions_to_approve[terms-and-conditions]"]',
                checkout_step4_order_button: '#payment-confirmation >div > button',
                checkout_total: '//div[@class="cart-summary-line cart-total"]/span[2]',
                order_confirmation_name: '#order-items > div > div > div.col-sm-4.col-xs-9.details > span',
                order_confirmation_price1: '#order-items > div > table > tbody > tr:nth-child(1) > td:nth-child(2)',
                order_confirmation_price2: '#content-hook_payment_return > div > div > div > dl > dd:nth-child(2)',
                order_confirmation_ref: '(//div[@id="order-details"]/ul/li)[1]'
            },
            //cart Pages selector
            LayerCartPage: {
                layer_cart: '//div[@id="blockcart-modal" and @style="display: block;"]',
                name_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/h6',
                price_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[1]',
                quantity_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[2]',
                command_button: '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a'
            },
            //Search selector
            SearchProductPage:{
                product_search_input: '.ui-autocomplete-input',
                product_search_button: '.material-icons.search',
                product_result_name: '.h3.product-title > a',
                product_result_price: '[itemprop="price"]',
            }
        },


    },
    shouldExist: function (err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};
