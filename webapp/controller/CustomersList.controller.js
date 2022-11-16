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
                // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                // oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this)
            },
            onDetailsPress: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomerDetails", {
                    CustomerID: oEvent.getSource().getBindingContext().getObject().CustomerID
                });
            },
            onAddNewPress: function (){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("NewCustomer");
            },
            onEmpListPress: function (){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("EmployeeList");
            }
        });
    }
)