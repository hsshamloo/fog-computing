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

BrickletAmbientLightV2.DEVICE_IDENTIFIER = 259;
BrickletAmbientLightV2.DEVICE_DISPLAY_NAME = 'Ambient Light Bricklet 2.0';
BrickletAmbientLightV2.CALLBACK_ILLUMINANCE = 10;
BrickletAmbientLightV2.CALLBACK_ILLUMINANCE_REACHED = 11;
BrickletAmbientLightV2.FUNCTION_GET_ILLUMINANCE = 1;
BrickletAmbientLightV2.FUNCTION_SET_ILLUMINANCE_CALLBACK_PERIOD = 2;
BrickletAmbientLightV2.FUNCTION_GET_ILLUMINANCE_CALLBACK_PERIOD = 3;
BrickletAmbientLightV2.FUNCTION_SET_ILLUMINANCE_CALLBACK_THRESHOLD = 4;
BrickletAmbientLightV2.FUNCTION_GET_ILLUMINANCE_CALLBACK_THRESHOLD = 5;
BrickletAmbientLightV2.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletAmbientLightV2.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletAmbientLightV2.FUNCTION_SET_CONFIGURATION = 8;
BrickletAmbientLightV2.FUNCTION_GET_CONFIGURATION = 9;
BrickletAmbientLightV2.FUNCTION_GET_IDENTITY = 255;
BrickletAmbientLightV2.THRESHOLD_OPTION_OFF = 'x';
BrickletAmbientLightV2.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletAmbientLightV2.THRESHOLD_OPTION_INSIDE = 'i';
BrickletAmbientLightV2.THRESHOLD_OPTION_SMALLER = '<';
BrickletAmbientLightV2.THRESHOLD_OPTION_GREATER = '>';
BrickletAmbientLightV2.ILLUMINANCE_RANGE_UNLIMITED = 6;
BrickletAmbientLightV2.ILLUMINANCE_RANGE_64000LUX = 0;
BrickletAmbientLightV2.ILLUMINANCE_RANGE_32000LUX = 1;
BrickletAmbientLightV2.ILLUMINANCE_RANGE_16000LUX = 2;
BrickletAmbientLightV2.ILLUMINANCE_RANGE_8000LUX = 3;
BrickletAmbientLightV2.ILLUMINANCE_RANGE_1300LUX = 4;
BrickletAmbientLightV2.ILLUMINANCE_RANGE_600LUX = 5;
BrickletAmbientLightV2.INTEGRATION_TIME_50MS = 0;
BrickletAmbientLightV2.INTEGRATION_TIME_100MS = 1;
BrickletAmbientLightV2.INTEGRATION_TIME_150MS = 2;
BrickletAmbientLightV2.INTEGRATION_TIME_200MS = 3;
BrickletAmbientLightV2.INTEGRATION_TIME_250MS = 4;
BrickletAmbientLightV2.INTEGRATION_TIME_300MS = 5;
BrickletAmbientLightV2.INTEGRATION_TIME_350MS = 6;
BrickletAmbientLightV2.INTEGRATION_TIME_400MS = 7;

function BrickletAmbientLightV2(uid, ipcon) {
	//Measures ambient light up to 64000lux

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletAmbientLightV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletAmbientLightV2.FUNCTION_GET_ILLUMINANCE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAmbientLightV2.FUNCTION_SET_ILLUMINANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAmbientLightV2.FUNCTION_GET_ILLUMINANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAmbientLightV2.FUNCTION_SET_ILLUMINANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAmbientLightV2.FUNCTION_GET_ILLUMINANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAmbientLightV2.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAmbientLightV2.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAmbientLightV2.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAmbientLightV2.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAmbientLightV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletAmbientLightV2.CALLBACK_ILLUMINANCE] = 'I';
	this.callbackFormats[BrickletAmbientLightV2.CALLBACK_ILLUMINANCE_REACHED] = 'I';



	this.getIlluminance = function(returnCallback, errorCallback) {
		/*
		Returns the illuminance of the ambient light sensor. The measurement range goes
		up to about 100000lux, but above 64000lux the precision starts to drop.
		The illuminance is given in lux/100, i.e. a value of 450000 means that an
		illuminance of 4500lux is measured.
		
		.. versionchanged:: 2.0.2$nbsp;(Plugin)
		  An illuminance of 0lux indicates that the sensor is saturated and the
		  configuration should be modified, see :func:`Set Configuration`.
		
		If you want to get the illuminance periodically, it is recommended to use the
		:cb:`Illuminance` callback and set the period with
		:func:`Set Illuminance Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletAmbientLightV2.FUNCTION_GET_ILLUMINANCE, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setIlluminanceCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Illuminance` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Illuminance` callback is only triggered if the illuminance has changed
		since the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletAmbientLightV2.FUNCTION_SET_ILLUMINANCE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getIlluminanceCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Illuminance Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletAmbientLightV2.FUNCTION_GET_ILLUMINANCE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setIlluminanceCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Illuminance Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the illuminance is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the illuminance is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the illuminance is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the illuminance is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletAmbientLightV2.FUNCTION_SET_ILLUMINANCE_CALLBACK_THRESHOLD, [option, min, max], 'c I I', '', returnCallback, errorCallback, false);
	};
	this.getIlluminanceCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Illuminance Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletAmbientLightV2.FUNCTION_GET_ILLUMINANCE_CALLBACK_THRESHOLD, [], '', 'c I I', returnCallback, errorCallback, false);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :cb:`Illuminance Reached`,
		
		are triggered, if the thresholds
		
		* :func:`Set Illuminance Callback Threshold`,
		
		keep being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletAmbientLightV2.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback, false);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletAmbientLightV2.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setConfiguration = function(illuminanceRange, integrationTime, returnCallback, errorCallback) {
		/*
		Sets the configuration. It is possible to configure an illuminance range
		between 0-600lux and 0-64000lux and an integration time between 50ms and 400ms.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		  The unlimited illuminance range allows to measure up to about 100000lux, but
		  above 64000lux the precision starts to drop.
		
		A smaller illuminance range increases the resolution of the data. A longer
		integration time will result in less noise on the data.
		
		.. versionchanged:: 2.0.2$nbsp;(Plugin)
		  If the actual measure illuminance is out-of-range then the current illuminance
		  range maximum +0.01lux is reported by :func:`Get Illuminance` and the
		  :cb:`Illuminance` callback. For example, 800001 for the 0-8000lux range.
		
		.. versionchanged:: 2.0.2$nbsp;(Plugin)
		  With a long integration time the sensor might be saturated before the measured
		  value reaches the maximum of the selected illuminance range. In this case 0lux
		  is reported by :func:`Get Illuminance` and the :cb:`Illuminance` callback.
		
		If the measurement is out-of-range or the sensor is saturated then you should
		configure the next higher illuminance range. If the highest range is already
		in use, then start to reduce the integration time.
		
		The default values are 0-8000lux illuminance range and 200ms integration time.
		*/
		this.ipcon.sendRequest(this, BrickletAmbientLightV2.FUNCTION_SET_CONFIGURATION, [illuminanceRange, integrationTime], 'B B', '', returnCallback, errorCallback, false);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAmbientLightV2.FUNCTION_GET_CONFIGURATION, [], '', 'B B', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletAmbientLightV2.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletAmbientLightV2;
