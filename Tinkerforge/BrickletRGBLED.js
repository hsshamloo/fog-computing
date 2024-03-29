/* ***********************************************************
 * This file was automatically generated on 2019-05-21.      *
 *                                                           *
 * JavaScript Bindings Version 2.1.23                        *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generators git repository on tinkerforge.com       *
 *************************************************************/

var Device = require('./Device');
var IPConnection = require('./IPConnection');

BrickletRGBLED.DEVICE_IDENTIFIER = 271;
BrickletRGBLED.DEVICE_DISPLAY_NAME = 'RGB LED Bricklet';
BrickletRGBLED.FUNCTION_SET_RGB_VALUE = 1;
BrickletRGBLED.FUNCTION_GET_RGB_VALUE = 2;
BrickletRGBLED.FUNCTION_GET_IDENTITY = 255;

function BrickletRGBLED(uid, ipcon) {
	//Controls one RGB LED

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletRGBLED.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletRGBLED.FUNCTION_SET_RGB_VALUE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRGBLED.FUNCTION_GET_RGB_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRGBLED.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;



	this.setRGBValue = function(r, g, b, returnCallback, errorCallback) {
		/*
		Sets the *r*, *g* and *b* values for the LED. Each value can be between 0 and 255.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLED.FUNCTION_SET_RGB_VALUE, [r, g, b], 'B B B', '', returnCallback, errorCallback, false);
	};
	this.getRGBValue = function(returnCallback, errorCallback) {
		/*
		Returns the *r*, *g* and *b* values of the LED as set by :func:`Set RGB Value`.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLED.FUNCTION_GET_RGB_VALUE, [], '', 'B B B', returnCallback, errorCallback, false);
	};
	this.getIdentity = function(returnCallback, errorCallback) {
		/*
		Returns the UID, the UID where the Bricklet is connected to,
		the position, the hardware and firmware version as well as the
		device identifier.
		
		The position can be 'a', 'b', 'c' or 'd'.
		
		The device identifier numbers can be found :ref:`here <device_identifier>`.
		|device_identifier_constant|
		*/
		this.ipcon.sendRequest(this, BrickletRGBLED.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletRGBLED;
