sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/CustomersList"
], function (opaTest) {
    "use strict";

    QUnit.module("Customers List Journey");

    opaTest("Should see the intial page of the app", function (Given, When, Then) {
        //Arrangements
        Given.iStartMyApp();
        console.log(Then);

        //Assertions
      //  Then.onTheCustomersList.iShouldSeeTheCarousel();

        //CleanUp
        Then.iTeardownMyApp();
    });
});