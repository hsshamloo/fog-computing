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

BrickletThermocouple.DEVICE_IDENTIFIER = 266;
BrickletThermocouple.DEVICE_DISPLAY_NAME = 'Thermocouple Bricklet';
BrickletThermocouple.CALLBACK_TEMPERATURE = 8;
BrickletThermocouple.CALLBACK_TEMPERATURE_REACHED = 9;
BrickletThermocouple.CALLBACK_ERROR_STATE = 13;
BrickletThermocouple.FUNCTION_GET_TEMPERATURE = 1;
BrickletThermocouple.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD = 2;
BrickletThermocouple.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD = 3;
BrickletThermocouple.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD = 4;
BrickletThermocouple.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD = 5;
BrickletThermocouple.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletThermocouple.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletThermocouple.FUNCTION_SET_CONFIGURATION = 10;
BrickletThermocouple.FUNCTION_GET_CONFIGURATION = 11;
BrickletThermocouple.FUNCTION_GET_ERROR_STATE = 12;
BrickletThermocouple.FUNCTION_GET_IDENTITY = 255;
BrickletThermocouple.THRESHOLD_OPTION_OFF = 'x';
BrickletThermocouple.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletThermocouple.THRESHOLD_OPTION_INSIDE = 'i';
BrickletThermocouple.THRESHOLD_OPTION_SMALLER = '<';
BrickletThermocouple.THRESHOLD_OPTION_GREATER = '>';
BrickletThermocouple.AVERAGING_1 = 1;
BrickletThermocouple.AVERAGING_2 = 2;
BrickletThermocouple.AVERAGING_4 = 4;
BrickletThermocouple.AVERAGING_8 = 8;
BrickletThermocouple.AVERAGING_16 = 16;
BrickletThermocouple.TYPE_B = 0;
BrickletThermocouple.TYPE_E = 1;
BrickletThermocouple.TYPE_J = 2;
BrickletThermocouple.TYPE_K = 3;
BrickletThermocouple.TYPE_N = 4;
BrickletThermocouple.TYPE_R = 5;
BrickletThermocouple.TYPE_S = 6;
BrickletThermocouple.TYPE_T = 7;
BrickletThermocouple.TYPE_G8 = 8;
BrickletThermocouple.TYPE_G32 = 9;
BrickletThermocouple.FILTER_OPTION_50HZ = 0;
BrickletThermocouple.FILTER_OPTION_60HZ = 1;

function BrickletThermocouple(uid, ipcon) {
	//Measures temperature with thermocouples

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletThermocouple.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletThermocouple.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocouple.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletThermocouple.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocouple.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletThermocouple.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocouple.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletThermocouple.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocouple.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletThermocouple.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocouple.FUNCTION_GET_ERROR_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocouple.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletThermocouple.CALLBACK_TEMPERATURE] = 'i';
	this.callbackFormats[BrickletThermocouple.CALLBACK_TEMPERATURE_REACHED] = 'i';
	this.callbackFormats[BrickletThermocouple.CALLBACK_ERROR_STATE] = '? ?';



	this.getTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature of the thermocouple. The value is given in °C/100,
		e.g. a value of 4223 means that a temperature of 42.23 °C is measured.
		
		If you want to get the temperature periodically, it is recommended
		to use the :cb:`Temperature` callback and set the period with
		:func:`Set Temperature Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletThermocouple.FUNCTION_GET_TEMPERATURE, [], '', 'i', returnCallback, errorCallback, false);
	};
	this.setTemperatureCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Temperature` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Temperature` callback is only triggered if the temperature has changed
		since the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletThermocouple.FUNCTION_SET_TEMPERATURE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getTemperatureCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Temperature Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletThermocouple.FUNCTION_GET_TEMPERATURE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setTemperatureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Temperature Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the temperature is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the temperature is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the temperature is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the temperature is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletThermocouple.FUNCTION_SET_TEMPERATURE_CALLBACK_THRESHOLD, [option, min, max], 'c i i', '', returnCallback, errorCallback, false);
	};
	this.getTemperatureCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Temperature Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletThermocouple.FUNCTION_GET_TEMPERATURE_CALLBACK_THRESHOLD, [], '', 'c i i', returnCallback, errorCallback, false);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callback
		
		* :cb:`Temperature Reached`
		
		is triggered, if the threshold
		
		* :func:`Set Temperature Callback Threshold`
		
		keeps being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletThermocouple.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback, false);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletThermocouple.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setConfiguration = function(averaging, thermocoupleType, filter, returnCallback, errorCallback) {
		/*
		You can configure averaging size, thermocouple type and frequency
		filtering.
		
		Available averaging sizes are 1, 2, 4, 8 and 16 samples.
		
		As thermocouple type you can use B, E, J, K, N, R, S and T. If you have a
		different thermocouple or a custom thermocouple you can also use
		G8 and G32. With these types the returned value will not be in °C/100,
		it will be calculated by the following formulas:
		
		* G8: ``value = 8 * 1.6 * 2^17 * Vin``
		* G32: ``value = 32 * 1.6 * 2^17 * Vin``
		
		where Vin is the thermocouple input voltage.
		
		The frequency filter can be either configured to 50Hz or to 60Hz. You should
		configure it according to your utility frequency.
		
		The conversion time depends on the averaging and filter configuration, it can
		be calculated as follows:
		
		* 60Hz: ``time = 82 + (samples - 1) * 16.67``
		* 50Hz: ``time = 98 + (samples - 1) * 20``
		
		The default configuration is 16 samples, K type and 50Hz.
		*/
		this.ipcon.sendRequest(this, BrickletThermocouple.FUNCTION_SET_CONFIGURATION, [averaging, thermocoupleType, filter], 'B B B', '', returnCallback, errorCallback, false);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletThermocouple.FUNCTION_GET_CONFIGURATION, [], '', 'B B B', returnCallback, errorCallback, false);
	};
	this.getErrorState = function(returnCallback, errorCallback) {
		/*
		Returns the current error state. There are two possible errors:
		
		* Over/Under Voltage and
		* Open Circuit.
		
		Over/Under Voltage happens for voltages below 0V or above 3.3V. In this case
		it is very likely that your thermocouple is defective. An Open Circuit error
		indicates that there is no thermocouple connected.
		
		You can use the :cb:`Error State` callback to automatically get triggered
		when the error state changes.
		*/
		this.ipcon.sendRequest(this, BrickletThermocouple.FUNCTION_GET_ERROR_STATE, [], '', '? ?', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletThermocouple.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletThermocouple;
