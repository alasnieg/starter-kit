sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.CustomersList", {
            onInit: function () {
            },

            onCreatePress: function(oEvent){  
                var sId = oEvent.getSource().getParent().getParent().getParent().byId("CustomerID"); 
                var sName = oEvent.getSource().getParent().getParent().getParent().byId("CustomerName"); 
                this.getView().getModel().create("/Customers", {
                    CustomerID: sId.getValue(),
                    ComapnyName: sName.getValue()
                })
                //oEvent.getSource().getParent().getParent().getParent().byId("CustomerID").setValue("");
                sId.setValue("");
                sName.setValue("");
            },
            handleNavButtonPress: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomersList");
            }
            
        });
    }
)