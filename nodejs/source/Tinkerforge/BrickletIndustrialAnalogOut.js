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

BrickletIndustrialAnalogOut.DEVICE_IDENTIFIER = 258;
BrickletIndustrialAnalogOut.DEVICE_DISPLAY_NAME = 'Industrial Analog Out Bricklet';
BrickletIndustrialAnalogOut.FUNCTION_ENABLE = 1;
BrickletIndustrialAnalogOut.FUNCTION_DISABLE = 2;
BrickletIndustrialAnalogOut.FUNCTION_IS_ENABLED = 3;
BrickletIndustrialAnalogOut.FUNCTION_SET_VOLTAGE = 4;
BrickletIndustrialAnalogOut.FUNCTION_GET_VOLTAGE = 5;
BrickletIndustrialAnalogOut.FUNCTION_SET_CURRENT = 6;
BrickletIndustrialAnalogOut.FUNCTION_GET_CURRENT = 7;
BrickletIndustrialAnalogOut.FUNCTION_SET_CONFIGURATION = 8;
BrickletIndustrialAnalogOut.FUNCTION_GET_CONFIGURATION = 9;
BrickletIndustrialAnalogOut.FUNCTION_GET_IDENTITY = 255;
BrickletIndustrialAnalogOut.VOLTAGE_RANGE_0_TO_5V = 0;
BrickletIndustrialAnalogOut.VOLTAGE_RANGE_0_TO_10V = 1;
BrickletIndustrialAnalogOut.CURRENT_RANGE_4_TO_20MA = 0;
BrickletIndustrialAnalogOut.CURRENT_RANGE_0_TO_20MA = 1;
BrickletIndustrialAnalogOut.CURRENT_RANGE_0_TO_24MA = 2;

function BrickletIndustrialAnalogOut(uid, ipcon) {
	//Generates configurable DC voltage and current, 0V to 10V and 4mA to 20mA

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletIndustrialAnalogOut.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_ENABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_DISABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_IS_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_SET_VOLTAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_GET_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_SET_CURRENT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_GET_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOut.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;



	this.enable = function(returnCallback, errorCallback) {
		/*
		Enables the output of voltage and current.
		
		The default is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_ENABLE, [], '', '', returnCallback, errorCallback, false);
	};
	this.disable = function(returnCallback, errorCallback) {
		/*
		Disables the output of voltage and current.
		
		The default is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_DISABLE, [], '', '', returnCallback, errorCallback, false);
	};
	this.isEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if output of voltage and current is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_IS_ENABLED, [], '', '?', returnCallback, errorCallback, false);
	};
	this.setVoltage = function(voltage, returnCallback, errorCallback) {
		/*
		Sets the output voltage in mV.
		
		The output voltage and output current are linked. Changing the output voltage
		also changes the output current.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_SET_VOLTAGE, [voltage], 'H', '', returnCallback, errorCallback, false);
	};
	this.getVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the voltage as set by :func:`Set Voltage`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_GET_VOLTAGE, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setCurrent = function(current, returnCallback, errorCallback) {
		/*
		Sets the output current in µA.
		
		The output current and output voltage are linked. Changing the output current
		also changes the output voltage.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_SET_CURRENT, [current], 'H', '', returnCallback, errorCallback, false);
	};
	this.getCurrent = function(returnCallback, errorCallback) {
		/*
		Returns the current as set by :func:`Set Current`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_GET_CURRENT, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setConfiguration = function(voltageRange, currentRange, returnCallback, errorCallback) {
		/*
		Configures the voltage and current range.
		
		Possible voltage ranges are:
		
		* 0V to 5V
		* 0V to 10V (default)
		
		Possible current ranges are:
		
		* 4mA to 20mA (default)
		* 0mA to 20mA
		* 0mA to 24mA
		
		The resolution will always be 12 bit. This means, that the
		precision is higher with a smaller range.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_SET_CONFIGURATION, [voltageRange, currentRange], 'B B', '', returnCallback, errorCallback, false);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_GET_CONFIGURATION, [], '', 'B B', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOut.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletIndustrialAnalogOut;
