'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('The Employee Creation', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .signinBO()
                .waitForExist(this.selector.BO.AddEmployee.menu, 90000)
                .call(done);
        });
    });

    describe('Module "Welcome"', function (done) {
        it("should close the onboarding if displayed", function (done) {
            global.fctname = this.test.title;
            if (this.client.isVisible(this.selector.BO.Onboarding.popup)) {
                this.client
                    .click(this.selector.BO.Onboarding.popup_close_button)
                    .pause(1000)
                    .click(this.selector.BO.Onboarding.stop_button);
            };
            this.client.call(done);
        });
    });

    describe('Create new emplyee', function (done) {
        it('should go to Team page', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(5000)
                .waitForExist(this.selector.BO.AddEmployee.menu, 90000)
                .moveToObject(this.selector.BO.AddEmployee.advanced_parameters)
                .waitForExist(this.selector.BO.AddEmployee.employees_subtab, 90000)
                .click(this.selector.BO.AddEmployee.employees_subtab)
                .waitForExist(this.selector.BO.AddEmployee.new_employee_button, 90000)
                .call(done);
        });

        it('should click on the add new employee button', function (done) {
            global.fctname = this.test.title;
            this.client
                .click(this.selector.BO.AddEmployee.new_employee_button)
                .waitForExist('#employee_form', 90000)
                .call(done);
        });

        it('should enter the firstname of the employee', function (done) {
            global.fctname = this.test.title;
            this.client
                .setValue(this.selector.BO.AddEmployee.employee_firstname_input, 'firstname')
                .call(done);
        });

        it('should enter the lastname of the employee', function (done) {
            global.fctname = this.test.title;
            this.client
                .setValue(this.selector.BO.AddEmployee.employee_lastname_input, 'lastname')
                .call(done);
        });

        it('should enter the email address of the employee', function (done) {
            global.fctname = this.test.title;
            this.client
                .setValue(this.selector.BO.AddEmployee.employee_email_input, 'test@testauto.com')
                .call(done);
        });

        it('should enter the password of the employee', function (done) {
            global.fctname = this.test.title;
            this.client
                .setValue(this.selector.BO.AddEmployee.employee_password_input, '123456789')
                .call(done);
        });

        it('should select a profile for the employee', function (done) {
            global.fctname = this.test.title;
            this.client
                .selectByValue(this.selector.BO.AddEmployee.employee_profile_select, 1)
                .call(done);
        });

        it('should save employee', function (done) {
            global.fctname = this.test.title;
            this.client
                .click(this.selector.BO.AddEmployee.employee_submit_button)
                .call(done);
        });

        it('should check if the employee is created', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.BO.AddEmployee.employee_table)
                .setValue(this.selector.BO.AddEmployee.employee_email_filter, 'test@testauto.com')
                .click(this.selector.BO.AddEmployee.search_button)
                .waitForExist(this.selector.BO.AddEmployee.employee_in_table)
                .getText(this.selector.BO.AddEmployee.employee_in_table).then(function (email) {
                    should(email).be.equal('test@testauto.com');
                })
                .call(done);
        });
    });

    describe('Log out in Back Office', function (done) {
        it('should log out successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .signoutBO()
                .call(done);
        });
    });
});
