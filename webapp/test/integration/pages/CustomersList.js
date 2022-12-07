sap.ui.define([
    "sap/ui/test/Opa5"
], function (Opa5) {
    "use strict";
    var sViewName = "CustomersList";
    Opa5.createPageObjects({
        onTheCustomersList: {
            actions: {},
            assertions: {
                iShouldSeeTheCarousel: function () {
                    return this.waitFor({
                        id: "karuzelka",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The carousel is displayed");
                        },
                        errorMessage: "Did not find the carousel"
                    })
                }
            }
        }
    });
})