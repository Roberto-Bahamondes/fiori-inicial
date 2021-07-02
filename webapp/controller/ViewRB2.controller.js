sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("namespacerb2.projectrb2.controller.ViewRB2", {
			onInit: function () {
                //Vamos a crear una instancia del Modelo
                const oJSONModel = new sap.ui.model.json.JSONModel();
                //Vamos a obtener la instancia de la vista
                const oView = this.getView();
                //Vamos a cargar los datos que estan en la ruta al Modelo
                oJSONModel.loadData("./model/SelectionScreenMenu.json");
                //Vamos crear un modelo llamado selectionScreen 
                oView.setModel(oJSONModel, "selectionScreen");

			}
		});
	});
