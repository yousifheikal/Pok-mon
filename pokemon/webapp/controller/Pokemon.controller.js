sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("pokemon.controller.Pokemon", {
        onInit() {
        },
        onPost:function () {
          var oModel = new JSONModel();
          var pokemonName = this.byId("pokeName").getValue();   
          this.byId("pokesayHelllo").setText(`Hello i'm ${pokemonName}`);
          
          oModel.loadData(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
          this.getView().setModel(oModel);            
        },
        displaypokemons:function () {
            this.byId("pokesayHelllo").setText(``);
            var oModel = new JSONModel();   
            oModel.loadData("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0");
            this.getView().setModel(oModel);
        },
    });
});