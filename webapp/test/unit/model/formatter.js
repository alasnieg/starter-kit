sap.ui.define([
    "stk/starterkit/model/formatter"
], function (formatter) {
    "use strict";
  
    QUnit.module("Name formatting");

    function nameFormattingTest(oOptions) {
//Act
var sName = formatter.formatName(oOptions.firstName, oOptions.lastName);
//Assert
oOptions.assert.strictEqual(sName, oOptions.expected, "the name was correctly formatted: " + sName);
    }

    QUnit.test("Should format 'Grzegorz Malczewski' to 'G. Malczewski", function (assert){
        nameFormattingTest.call( this, {
            assert: assert,
            firstName: "Grzegorz",
            lastName: "Malczewski",
            expected: "G. Malczewski"
        });
    });

    QUnit.test("Should format 'Wojciech Pietrzak' to 'W. Pietrzak", function (assert){
        nameFormattingTest.call( this, {
            assert: assert,
            firstName: "Wojciech",
            lastName: "Pietrzak",
            expected: "W. Pietrzak"
        });
    });
})