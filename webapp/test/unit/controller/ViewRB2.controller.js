/*global QUnit*/

sap.ui.define([
	"namespacerb2/projectrb2/controller/ViewRB2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewRB2 Controller");

	QUnit.test("I should test the ViewRB2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
