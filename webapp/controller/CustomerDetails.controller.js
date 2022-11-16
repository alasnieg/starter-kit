sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter, Fragment) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.CustomerDetails", {
            formatter: Formatter,

            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);
            },
            _onPatternMatched: function (oEvent) {
                this.getView().bindElement({
                    path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')", parameters: { expand: 'Orders,Orders/Employee' }
                })
            },
            handleNavButtonPress: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomersList");

            },
            onCustomerPress2: function () {
                var oView = this.getView();
                //var that = this;
                if (!this.byId("contactDialog")) {
                    Fragment.load({
                        id: oView.getId(), //"contactDialog",
                        name: "stk.starterkit.view.ContactInfoDialog",
                        controller: this //"stk.starterkit.controller.CustomerDetails"
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    }.bind(this));
                } else {
                    this.byId("contactDialog").open();
                }
            },
            closeDialog: function () {
                this.byId("contactDialog").close();

            }
        });
    }
)