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

BrickletMoisture.DEVICE_IDENTIFIER = 232;
BrickletMoisture.DEVICE_DISPLAY_NAME = 'Moisture Bricklet';
BrickletMoisture.CALLBACK_MOISTURE = 8;
BrickletMoisture.CALLBACK_MOISTURE_REACHED = 9;
BrickletMoisture.FUNCTION_GET_MOISTURE_VALUE = 1;
BrickletMoisture.FUNCTION_SET_MOISTURE_CALLBACK_PERIOD = 2;
BrickletMoisture.FUNCTION_GET_MOISTURE_CALLBACK_PERIOD = 3;
BrickletMoisture.FUNCTION_SET_MOISTURE_CALLBACK_THRESHOLD = 4;
BrickletMoisture.FUNCTION_GET_MOISTURE_CALLBACK_THRESHOLD = 5;
BrickletMoisture.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletMoisture.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletMoisture.FUNCTION_SET_MOVING_AVERAGE = 10;
BrickletMoisture.FUNCTION_GET_MOVING_AVERAGE = 11;
BrickletMoisture.FUNCTION_GET_IDENTITY = 255;
BrickletMoisture.THRESHOLD_OPTION_OFF = 'x';
BrickletMoisture.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletMoisture.THRESHOLD_OPTION_INSIDE = 'i';
BrickletMoisture.THRESHOLD_OPTION_SMALLER = '<';
BrickletMoisture.THRESHOLD_OPTION_GREATER = '>';

function BrickletMoisture(uid, ipcon) {
	//Measures soil moisture

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletMoisture.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletMoisture.FUNCTION_GET_MOISTURE_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMoisture.FUNCTION_SET_MOISTURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletMoisture.FUNCTION_GET_MOISTURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMoisture.FUNCTION_SET_MOISTURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletMoisture.FUNCTION_GET_MOISTURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMoisture.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletMoisture.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMoisture.FUNCTION_SET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMoisture.FUNCTION_GET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMoisture.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletMoisture.CALLBACK_MOISTURE] = 'H';
	this.callbackFormats[BrickletMoisture.CALLBACK_MOISTURE_REACHED] = 'H';



	this.getMoistureValue = function(returnCallback, errorCallback) {
		/*
		Returns the current moisture value. The value has a range of
		0 to 4095. A small value corresponds to little moisture, a big
		value corresponds to much moisture.
		
		If you want to get the moisture value periodically, it is recommended
		to use the :cb:`Moisture` callback and set the period with
		:func:`Set Moisture Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_GET_MOISTURE_VALUE, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setMoistureCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Moisture` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Moisture` callback is only triggered if the moisture value has changed
		since the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_SET_MOISTURE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getMoistureCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Moisture Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_GET_MOISTURE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setMoistureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Moisture Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the moisture value is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the moisture value is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the moisture value is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the moisture value is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_SET_MOISTURE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback, false);
	};
	this.getMoistureCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Moisture Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_GET_MOISTURE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback, false);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callback
		
		* :cb:`Moisture Reached`
		
		is triggered, if the threshold
		
		* :func:`Set Moisture Callback Threshold`
		
		keeps being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback, false);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setMovingAverage = function(average, returnCallback, errorCallback) {
		/*
		Sets the length of a `moving averaging <https://en.wikipedia.org/wiki/Moving_average>`__
		for the moisture value.
		
		Setting the length to 0 will turn the averaging completely off. With less
		averaging, there is more noise on the data.
		
		The range for the averaging is 0-100.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_SET_MOVING_AVERAGE, [average], 'B', '', returnCallback, errorCallback, false);
	};
	this.getMovingAverage = function(returnCallback, errorCallback) {
		/*
		Returns the length moving average as set by :func:`Set Moving Average`.
		*/
		this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_GET_MOVING_AVERAGE, [], '', 'B', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletMoisture.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletMoisture;
