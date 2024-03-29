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

BrickletAnalogOutV2.DEVICE_IDENTIFIER = 256;
BrickletAnalogOutV2.DEVICE_DISPLAY_NAME = 'Analog Out Bricklet 2.0';
BrickletAnalogOutV2.FUNCTION_SET_OUTPUT_VOLTAGE = 1;
BrickletAnalogOutV2.FUNCTION_GET_OUTPUT_VOLTAGE = 2;
BrickletAnalogOutV2.FUNCTION_GET_INPUT_VOLTAGE = 3;
BrickletAnalogOutV2.FUNCTION_GET_IDENTITY = 255;

function BrickletAnalogOutV2(uid, ipcon) {
	//Generates configurable DC voltage between 0V and 12V

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletAnalogOutV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletAnalogOutV2.FUNCTION_SET_OUTPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAnalogOutV2.FUNCTION_GET_OUTPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAnalogOutV2.FUNCTION_GET_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAnalogOutV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;



	this.setOutputVoltage = function(voltage, returnCallback, errorCallback) {
		/*
		Sets the voltage in mV. The possible range is 0V to 12V (0-12000).
		*/
		this.ipcon.sendRequest(this, BrickletAnalogOutV2.FUNCTION_SET_OUTPUT_VOLTAGE, [voltage], 'H', '', returnCallback, errorCallback, false);
	};
	this.getOutputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the voltage as set by :func:`Set Output Voltage`.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogOutV2.FUNCTION_GET_OUTPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.getInputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the input voltage in mV.
		*/
		this.ipcon.sendRequest(this, BrickletAnalogOutV2.FUNCTION_GET_INPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletAnalogOutV2.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletAnalogOutV2;
