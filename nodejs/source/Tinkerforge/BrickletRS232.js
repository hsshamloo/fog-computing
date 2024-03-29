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

BrickletRS232.DEVICE_IDENTIFIER = 254;
BrickletRS232.DEVICE_DISPLAY_NAME = 'RS232 Bricklet';
BrickletRS232.CALLBACK_READ = 8;
BrickletRS232.CALLBACK_ERROR = 9;
BrickletRS232.CALLBACK_READ_CALLBACK = 8; // for backward compatibility
BrickletRS232.CALLBACK_ERROR_CALLBACK = 9; // for backward compatibility
BrickletRS232.FUNCTION_WRITE = 1;
BrickletRS232.FUNCTION_READ = 2;
BrickletRS232.FUNCTION_ENABLE_READ_CALLBACK = 3;
BrickletRS232.FUNCTION_DISABLE_READ_CALLBACK = 4;
BrickletRS232.FUNCTION_IS_READ_CALLBACK_ENABLED = 5;
BrickletRS232.FUNCTION_SET_CONFIGURATION = 6;
BrickletRS232.FUNCTION_GET_CONFIGURATION = 7;
BrickletRS232.FUNCTION_SET_BREAK_CONDITION = 10;
BrickletRS232.FUNCTION_GET_IDENTITY = 255;
BrickletRS232.BAUDRATE_300 = 0;
BrickletRS232.BAUDRATE_600 = 1;
BrickletRS232.BAUDRATE_1200 = 2;
BrickletRS232.BAUDRATE_2400 = 3;
BrickletRS232.BAUDRATE_4800 = 4;
BrickletRS232.BAUDRATE_9600 = 5;
BrickletRS232.BAUDRATE_14400 = 6;
BrickletRS232.BAUDRATE_19200 = 7;
BrickletRS232.BAUDRATE_28800 = 8;
BrickletRS232.BAUDRATE_38400 = 9;
BrickletRS232.BAUDRATE_57600 = 10;
BrickletRS232.BAUDRATE_115200 = 11;
BrickletRS232.BAUDRATE_230400 = 12;
BrickletRS232.PARITY_NONE = 0;
BrickletRS232.PARITY_ODD = 1;
BrickletRS232.PARITY_EVEN = 2;
BrickletRS232.PARITY_FORCED_PARITY_1 = 3;
BrickletRS232.PARITY_FORCED_PARITY_0 = 4;
BrickletRS232.STOPBITS_1 = 1;
BrickletRS232.STOPBITS_2 = 2;
BrickletRS232.WORDLENGTH_5 = 5;
BrickletRS232.WORDLENGTH_6 = 6;
BrickletRS232.WORDLENGTH_7 = 7;
BrickletRS232.WORDLENGTH_8 = 8;
BrickletRS232.HARDWARE_FLOWCONTROL_OFF = 0;
BrickletRS232.HARDWARE_FLOWCONTROL_ON = 1;
BrickletRS232.SOFTWARE_FLOWCONTROL_OFF = 0;
BrickletRS232.SOFTWARE_FLOWCONTROL_ON = 1;
BrickletRS232.ERROR_OVERRUN = 1;
BrickletRS232.ERROR_PARITY = 2;
BrickletRS232.ERROR_FRAMING = 4;

function BrickletRS232(uid, ipcon) {
	//Communicates with RS232 devices

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletRS232.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 2];
	this.responseExpected[BrickletRS232.FUNCTION_WRITE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_READ] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_ENABLE_READ_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_DISABLE_READ_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_IS_READ_CALLBACK_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS232.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232.FUNCTION_SET_BREAK_CONDITION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS232.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletRS232.CALLBACK_READ] = 'c60 B';
	this.callbackFormats[BrickletRS232.CALLBACK_ERROR] = 'B';



	this.write = function(message, length, returnCallback, errorCallback) {
		/*
		Writes a string of up to 60 characters to the RS232 interface. The string
		can be binary data, ASCII or similar is not necessary.
		
		The length of the string has to be given as an additional parameter.
		
		The return value is the number of bytes that could be written.
		
		See :func:`Set Configuration` for configuration possibilities
		regarding baudrate, parity and so on.
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_WRITE, [message, length], 'c60 B', 'B', returnCallback, errorCallback, false);
	};
	this.read = function(returnCallback, errorCallback) {
		/*
		Returns the currently buffered message. The maximum length
		of message is 60. If the length is given as 0, there was no
		new data available.
		
		Instead of polling with this function, you can also use
		callbacks. See :func:`Enable Read Callback` and :cb:`Read` callback.
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_READ, [], '', 'c60 B', returnCallback, errorCallback, false);
	};
	this.enableReadCallback = function(returnCallback, errorCallback) {
		/*
		Enables the :cb:`Read` callback.
		
		By default the callback is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_ENABLE_READ_CALLBACK, [], '', '', returnCallback, errorCallback, false);
	};
	this.disableReadCallback = function(returnCallback, errorCallback) {
		/*
		Disables the :cb:`Read` callback.
		
		By default the callback is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_DISABLE_READ_CALLBACK, [], '', '', returnCallback, errorCallback, false);
	};
	this.isReadCallbackEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the :cb:`Read` callback is enabled,
		*false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_IS_READ_CALLBACK_ENABLED, [], '', '?', returnCallback, errorCallback, false);
	};
	this.setConfiguration = function(baudrate, parity, stopbits, wordlength, hardwareFlowcontrol, softwareFlowcontrol, returnCallback, errorCallback) {
		/*
		Sets the configuration for the RS232 communication. Available options:
		
		* Baudrate between 300 and 230400 baud.
		* Parity of none, odd, even or forced parity.
		* Stopbits can be 1 or 2.
		* Word length of 5 to 8.
		* Hard-/Software flow control can either be on or off but not both simultaneously on.
		
		The default is: 115200 baud, parity none, 1 stop bit, word length 8, hard-/software flow control off.
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_SET_CONFIGURATION, [baudrate, parity, stopbits, wordlength, hardwareFlowcontrol, softwareFlowcontrol], 'B B B B B B', '', returnCallback, errorCallback, false);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_GET_CONFIGURATION, [], '', 'B B B B B B', returnCallback, errorCallback, false);
	};
	this.setBreakCondition = function(breakTime, returnCallback, errorCallback) {
		/*
		Sets a break condition (the TX output is forced to a logic 0 state).
		The parameter sets the hold-time of the break condition (in ms).
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_SET_BREAK_CONDITION, [breakTime], 'H', '', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletRS232.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletRS232;
