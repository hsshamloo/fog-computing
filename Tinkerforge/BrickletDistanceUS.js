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

BrickletDistanceUS.DEVICE_IDENTIFIER = 229;
BrickletDistanceUS.DEVICE_DISPLAY_NAME = 'Distance US Bricklet';
BrickletDistanceUS.CALLBACK_DISTANCE = 8;
BrickletDistanceUS.CALLBACK_DISTANCE_REACHED = 9;
BrickletDistanceUS.FUNCTION_GET_DISTANCE_VALUE = 1;
BrickletDistanceUS.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD = 2;
BrickletDistanceUS.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD = 3;
BrickletDistanceUS.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD = 4;
BrickletDistanceUS.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD = 5;
BrickletDistanceUS.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletDistanceUS.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletDistanceUS.FUNCTION_SET_MOVING_AVERAGE = 10;
BrickletDistanceUS.FUNCTION_GET_MOVING_AVERAGE = 11;
BrickletDistanceUS.FUNCTION_GET_IDENTITY = 255;
BrickletDistanceUS.THRESHOLD_OPTION_OFF = 'x';
BrickletDistanceUS.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletDistanceUS.THRESHOLD_OPTION_INSIDE = 'i';
BrickletDistanceUS.THRESHOLD_OPTION_SMALLER = '<';
BrickletDistanceUS.THRESHOLD_OPTION_GREATER = '>';

function BrickletDistanceUS(uid, ipcon) {
	//Measures distance between 2cm and 400cm with ultrasound

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletDistanceUS.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletDistanceUS.FUNCTION_GET_DISTANCE_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDistanceUS.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDistanceUS.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDistanceUS.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDistanceUS.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDistanceUS.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDistanceUS.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDistanceUS.FUNCTION_SET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDistanceUS.FUNCTION_GET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDistanceUS.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletDistanceUS.CALLBACK_DISTANCE] = 'H';
	this.callbackFormats[BrickletDistanceUS.CALLBACK_DISTANCE_REACHED] = 'H';



	this.getDistanceValue = function(returnCallback, errorCallback) {
		/*
		Returns the current distance value measured by the sensor. The value has a
		range of 0 to 4095. A small value corresponds to a small distance, a big
		value corresponds to a big distance. The relation between the measured distance
		value and the actual distance is affected by the 5V supply voltage (deviations
		in the supply voltage result in deviations in the distance values) and is
		non-linear (resolution is bigger at close range).
		
		If you want to get the distance value periodically, it is recommended to
		use the :cb:`Distance` callback and set the period with
		:func:`Set Distance Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_GET_DISTANCE_VALUE, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setDistanceCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Distance` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		Der :cb:`Distance` callback is only triggered if the distance value has changed
		since the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getDistanceCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Distance Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setDistanceCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Distance Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the distance value is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the distance value is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the distance value is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the distance value is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback, false);
	};
	this.getDistanceCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Distance Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback, false);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :cb:`Distance Reached`,
		
		are triggered, if the thresholds
		
		* :func:`Set Distance Callback Threshold`,
		
		keep being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback, false);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setMovingAverage = function(average, returnCallback, errorCallback) {
		/*
		Sets the length of a `moving averaging <https://en.wikipedia.org/wiki/Moving_average>`__
		for the distance value.
		
		Setting the length to 0 will turn the averaging completely off. With less
		averaging, there is more noise on the data.
		
		The range for the averaging is 0-100.
		
		The default value is 20.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_SET_MOVING_AVERAGE, [average], 'B', '', returnCallback, errorCallback, false);
	};
	this.getMovingAverage = function(returnCallback, errorCallback) {
		/*
		Returns the length moving average as set by :func:`Set Moving Average`.
		*/
		this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_GET_MOVING_AVERAGE, [], '', 'B', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletDistanceUS.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletDistanceUS;
