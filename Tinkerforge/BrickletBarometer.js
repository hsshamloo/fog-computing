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

BrickletBarometer.DEVICE_IDENTIFIER = 221;
BrickletBarometer.DEVICE_DISPLAY_NAME = 'Barometer Bricklet';
BrickletBarometer.CALLBACK_AIR_PRESSURE = 15;
BrickletBarometer.CALLBACK_ALTITUDE = 16;
BrickletBarometer.CALLBACK_AIR_PRESSURE_REACHED = 17;
BrickletBarometer.CALLBACK_ALTITUDE_REACHED = 18;
BrickletBarometer.FUNCTION_GET_AIR_PRESSURE = 1;
BrickletBarometer.FUNCTION_GET_ALTITUDE = 2;
BrickletBarometer.FUNCTION_SET_AIR_PRESSURE_CALLBACK_PERIOD = 3;
BrickletBarometer.FUNCTION_GET_AIR_PRESSURE_CALLBACK_PERIOD = 4;
BrickletBarometer.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD = 5;
BrickletBarometer.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD = 6;
BrickletBarometer.FUNCTION_SET_AIR_PRESSURE_CALLBACK_THRESHOLD = 7;
BrickletBarometer.FUNCTION_GET_AIR_PRESSURE_CALLBACK_THRESHOLD = 8;
BrickletBarometer.FUNCTION_SET_ALTITUDE_CALLBACK_THRESHOLD = 9;
BrickletBarometer.FUNCTION_GET_ALTITUDE_CALLBACK_THRESHOLD = 10;
BrickletBarometer.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletBarometer.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletBarometer.FUNCTION_SET_REFERENCE_AIR_PRESSURE = 13;
BrickletBarometer.FUNCTION_GET_CHIP_TEMPERATURE = 14;
BrickletBarometer.FUNCTION_GET_REFERENCE_AIR_PRESSURE = 19;
BrickletBarometer.FUNCTION_SET_AVERAGING = 20;
BrickletBarometer.FUNCTION_GET_AVERAGING = 21;
BrickletBarometer.FUNCTION_GET_IDENTITY = 255;
BrickletBarometer.THRESHOLD_OPTION_OFF = 'x';
BrickletBarometer.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletBarometer.THRESHOLD_OPTION_INSIDE = 'i';
BrickletBarometer.THRESHOLD_OPTION_SMALLER = '<';
BrickletBarometer.THRESHOLD_OPTION_GREATER = '>';

function BrickletBarometer(uid, ipcon) {
	//Measures air pressure and altitude changes

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletBarometer.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletBarometer.FUNCTION_GET_AIR_PRESSURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_GET_ALTITUDE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_SET_AIR_PRESSURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_GET_AIR_PRESSURE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_SET_AIR_PRESSURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_GET_AIR_PRESSURE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_SET_ALTITUDE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_GET_ALTITUDE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_SET_REFERENCE_AIR_PRESSURE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletBarometer.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_GET_REFERENCE_AIR_PRESSURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_SET_AVERAGING] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletBarometer.FUNCTION_GET_AVERAGING] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometer.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletBarometer.CALLBACK_AIR_PRESSURE] = 'i';
	this.callbackFormats[BrickletBarometer.CALLBACK_ALTITUDE] = 'i';
	this.callbackFormats[BrickletBarometer.CALLBACK_AIR_PRESSURE_REACHED] = 'i';
	this.callbackFormats[BrickletBarometer.CALLBACK_ALTITUDE_REACHED] = 'i';



	this.getAirPressure = function(returnCallback, errorCallback) {
		/*
		Returns the air pressure of the air pressure sensor. The value
		has a range of 10000 to 1200000 and is given in mbar/1000, i.e. a value
		of 1001092 means that an air pressure of 1001.092 mbar is measured.
		
		If you want to get the air pressure periodically, it is recommended to use the
		:cb:`Air Pressure` callback and set the period with
		:func:`Set Air Pressure Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_AIR_PRESSURE, [], '', 'i', returnCallback, errorCallback, false);
	};
	this.getAltitude = function(returnCallback, errorCallback) {
		/*
		Returns the relative altitude of the air pressure sensor. The value is given in
		cm and is calculated based on the difference between the current air pressure
		and the reference air pressure that can be set with :func:`Set Reference Air Pressure`.
		
		If you want to get the altitude periodically, it is recommended to use the
		:cb:`Altitude` callback and set the period with
		:func:`Set Altitude Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_ALTITUDE, [], '', 'i', returnCallback, errorCallback, false);
	};
	this.setAirPressureCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Air Pressure` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Air Pressure` callback is only triggered if the air pressure has
		changed since the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_SET_AIR_PRESSURE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getAirPressureCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Air Pressure Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_AIR_PRESSURE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setAltitudeCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Altitude` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Altitude` callback is only triggered if the altitude has changed since
		the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getAltitudeCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Altitude Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setAirPressureCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Air Pressure Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the air pressure is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the air pressure is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the air pressure is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the air pressure is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_SET_AIR_PRESSURE_CALLBACK_THRESHOLD, [option, min, max], 'c i i', '', returnCallback, errorCallback, false);
	};
	this.getAirPressureCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Air Pressure Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_AIR_PRESSURE_CALLBACK_THRESHOLD, [], '', 'c i i', returnCallback, errorCallback, false);
	};
	this.setAltitudeCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Altitude Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the altitude is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the altitude is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the altitude is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the altitude is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_SET_ALTITUDE_CALLBACK_THRESHOLD, [option, min, max], 'c i i', '', returnCallback, errorCallback, false);
	};
	this.getAltitudeCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Altitude Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_ALTITUDE_CALLBACK_THRESHOLD, [], '', 'c i i', returnCallback, errorCallback, false);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :cb:`Air Pressure Reached`,
		* :cb:`Altitude Reached`
		
		are triggered, if the thresholds
		
		* :func:`Set Air Pressure Callback Threshold`,
		* :func:`Set Altitude Callback Threshold`
		
		keep being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback, false);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setReferenceAirPressure = function(airPressure, returnCallback, errorCallback) {
		/*
		Sets the reference air pressure in mbar/1000 for the altitude calculation.
		Valid values are between 10000 and 1200000.
		Setting the reference to the current air pressure results in a calculated
		altitude of 0cm. Passing 0 is a shortcut for passing the current air pressure as
		reference.
		
		Well known reference values are the Q codes
		`QNH <https://en.wikipedia.org/wiki/QNH>`__ and
		`QFE <https://en.wikipedia.org/wiki/Mean_sea_level_pressure#Mean_sea_level_pressure>`__
		used in aviation.
		
		The default value is 1013.25mbar.
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_SET_REFERENCE_AIR_PRESSURE, [airPressure], 'i', '', returnCallback, errorCallback, false);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature of the air pressure sensor. The value
		has a range of -4000 to 8500 and is given in °C/100, i.e. a value
		of 2007 means that a temperature of 20.07 °C is measured.
		
		This temperature is used internally for temperature compensation of the air
		pressure measurement. It is not as accurate as the temperature measured by the
		:ref:`temperature_bricklet` or the :ref:`temperature_ir_bricklet`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.getReferenceAirPressure = function(returnCallback, errorCallback) {
		/*
		Returns the reference air pressure as set by :func:`Set Reference Air Pressure`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_REFERENCE_AIR_PRESSURE, [], '', 'i', returnCallback, errorCallback, false);
	};
	this.setAveraging = function(movingAveragePressure, averagePressure, averageTemperature, returnCallback, errorCallback) {
		/*
		Sets the different averaging parameters. It is possible to set
		the length of a normal averaging for the temperature and pressure,
		as well as an additional length of a
		`moving average <https://en.wikipedia.org/wiki/Moving_average>`__
		for the pressure. The moving average is calculated from the normal
		averages.  There is no moving average for the temperature.
		
		The maximum length for the pressure average is 10, for the
		temperature average is 255 and for the moving average is 25.
		
		Setting the all three parameters to 0 will turn the averaging
		completely off. If the averaging is off, there is lots of noise
		on the data, but the data is without delay. Thus we recommend
		to turn the averaging off if the Barometer Bricklet data is
		to be used for sensor fusion with other sensors.
		
		The default values are 10 for the normal averages and 25 for the
		moving average.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_SET_AVERAGING, [movingAveragePressure, averagePressure, averageTemperature], 'B B B', '', returnCallback, errorCallback, false);
	};
	this.getAveraging = function(returnCallback, errorCallback) {
		/*
		Returns the averaging configuration as set by :func:`Set Averaging`.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_AVERAGING, [], '', 'B B B', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletBarometer.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletBarometer;
