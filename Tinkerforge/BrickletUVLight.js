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

BrickletUVLight.DEVICE_IDENTIFIER = 265;
BrickletUVLight.DEVICE_DISPLAY_NAME = 'UV Light Bricklet';
BrickletUVLight.CALLBACK_UV_LIGHT = 8;
BrickletUVLight.CALLBACK_UV_LIGHT_REACHED = 9;
BrickletUVLight.FUNCTION_GET_UV_LIGHT = 1;
BrickletUVLight.FUNCTION_SET_UV_LIGHT_CALLBACK_PERIOD = 2;
BrickletUVLight.FUNCTION_GET_UV_LIGHT_CALLBACK_PERIOD = 3;
BrickletUVLight.FUNCTION_SET_UV_LIGHT_CALLBACK_THRESHOLD = 4;
BrickletUVLight.FUNCTION_GET_UV_LIGHT_CALLBACK_THRESHOLD = 5;
BrickletUVLight.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletUVLight.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletUVLight.FUNCTION_GET_IDENTITY = 255;
BrickletUVLight.THRESHOLD_OPTION_OFF = 'x';
BrickletUVLight.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletUVLight.THRESHOLD_OPTION_INSIDE = 'i';
BrickletUVLight.THRESHOLD_OPTION_SMALLER = '<';
BrickletUVLight.THRESHOLD_OPTION_GREATER = '>';

function BrickletUVLight(uid, ipcon) {
	//Measures UV light

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletUVLight.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletUVLight.FUNCTION_GET_UV_LIGHT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLight.FUNCTION_SET_UV_LIGHT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletUVLight.FUNCTION_GET_UV_LIGHT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLight.FUNCTION_SET_UV_LIGHT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletUVLight.FUNCTION_GET_UV_LIGHT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLight.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletUVLight.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLight.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletUVLight.CALLBACK_UV_LIGHT] = 'I';
	this.callbackFormats[BrickletUVLight.CALLBACK_UV_LIGHT_REACHED] = 'I';



	this.getUVLight = function(returnCallback, errorCallback) {
		/*
		Returns the UV light intensity of the sensor, the intensity is given
		in 1/10 mW/m². The sensor has already weighted the intensity with the erythemal
		action spectrum to get the skin-affecting irradiation.
		
		To get UV index you just have to divide the value by 250. For example, a UV
		light intensity of 500 is equivalent to an UV index of 2.
		
		If you want to get the intensity periodically, it is recommended to use the
		:cb:`UV Light` callback and set the period with
		:func:`Set UV Light Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletUVLight.FUNCTION_GET_UV_LIGHT, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setUVLightCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`UV Light` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`UV Light` callback is only triggered if the intensity has changed since
		the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletUVLight.FUNCTION_SET_UV_LIGHT_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getUVLightCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set UV Light Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletUVLight.FUNCTION_GET_UV_LIGHT_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setUVLightCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`UV Light Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the intensity is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the intensity is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the intensity is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the intensity is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletUVLight.FUNCTION_SET_UV_LIGHT_CALLBACK_THRESHOLD, [option, min, max], 'c I I', '', returnCallback, errorCallback, false);
	};
	this.getUVLightCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set UV Light Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletUVLight.FUNCTION_GET_UV_LIGHT_CALLBACK_THRESHOLD, [], '', 'c I I', returnCallback, errorCallback, false);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :cb:`UV Light Reached`,
		
		are triggered, if the thresholds
		
		* :func:`Set UV Light Callback Threshold`,
		
		keep being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletUVLight.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback, false);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletUVLight.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletUVLight.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletUVLight;
