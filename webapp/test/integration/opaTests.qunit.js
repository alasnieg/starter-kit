/* global QUnit */


//sap.ui.getCore().attachInit(function () {
//	"use strict";

	sap.ui.require(["stk/starterkit/test/integration/AllJourneys"
	], function () {
		QUnit.config.autostart = false;
		QUnit.start();
	});
//});
