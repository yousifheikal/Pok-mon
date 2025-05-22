/*global QUnit*/

sap.ui.define([
	"pokemon/controller/Pokemon.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Pokemon Controller");

	QUnit.test("I should test the Pokemon controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
