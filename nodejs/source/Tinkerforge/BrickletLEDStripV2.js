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

BrickletLEDStripV2.DEVICE_IDENTIFIER = 2103;
BrickletLEDStripV2.DEVICE_DISPLAY_NAME = 'LED Strip Bricklet 2.0';
BrickletLEDStripV2.CALLBACK_FRAME_STARTED = 6;
BrickletLEDStripV2.FUNCTION_SET_LED_VALUES_LOW_LEVEL = 1;
BrickletLEDStripV2.FUNCTION_GET_LED_VALUES_LOW_LEVEL = 2;
BrickletLEDStripV2.FUNCTION_SET_FRAME_DURATION = 3;
BrickletLEDStripV2.FUNCTION_GET_FRAME_DURATION = 4;
BrickletLEDStripV2.FUNCTION_GET_SUPPLY_VOLTAGE = 5;
BrickletLEDStripV2.FUNCTION_SET_CLOCK_FREQUENCY = 7;
BrickletLEDStripV2.FUNCTION_GET_CLOCK_FREQUENCY = 8;
BrickletLEDStripV2.FUNCTION_SET_CHIP_TYPE = 9;
BrickletLEDStripV2.FUNCTION_GET_CHIP_TYPE = 10;
BrickletLEDStripV2.FUNCTION_SET_CHANNEL_MAPPING = 11;
BrickletLEDStripV2.FUNCTION_GET_CHANNEL_MAPPING = 12;
BrickletLEDStripV2.FUNCTION_SET_FRAME_STARTED_CALLBACK_CONFIGURATION = 13;
BrickletLEDStripV2.FUNCTION_GET_FRAME_STARTED_CALLBACK_CONFIGURATION = 14;
BrickletLEDStripV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletLEDStripV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletLEDStripV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletLEDStripV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletLEDStripV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletLEDStripV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletLEDStripV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletLEDStripV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletLEDStripV2.FUNCTION_RESET = 243;
BrickletLEDStripV2.FUNCTION_WRITE_UID = 248;
BrickletLEDStripV2.FUNCTION_READ_UID = 249;
BrickletLEDStripV2.FUNCTION_GET_IDENTITY = 255;
BrickletLEDStripV2.CHIP_TYPE_WS2801 = 2801;
BrickletLEDStripV2.CHIP_TYPE_WS2811 = 2811;
BrickletLEDStripV2.CHIP_TYPE_WS2812 = 2812;
BrickletLEDStripV2.CHIP_TYPE_LPD8806 = 8806;
BrickletLEDStripV2.CHIP_TYPE_APA102 = 102;
BrickletLEDStripV2.CHANNEL_MAPPING_RGB = 6;
BrickletLEDStripV2.CHANNEL_MAPPING_RBG = 9;
BrickletLEDStripV2.CHANNEL_MAPPING_BRG = 33;
BrickletLEDStripV2.CHANNEL_MAPPING_BGR = 36;
BrickletLEDStripV2.CHANNEL_MAPPING_GRB = 18;
BrickletLEDStripV2.CHANNEL_MAPPING_GBR = 24;
BrickletLEDStripV2.CHANNEL_MAPPING_RGBW = 27;
BrickletLEDStripV2.CHANNEL_MAPPING_RGWB = 30;
BrickletLEDStripV2.CHANNEL_MAPPING_RBGW = 39;
BrickletLEDStripV2.CHANNEL_MAPPING_RBWG = 45;
BrickletLEDStripV2.CHANNEL_MAPPING_RWGB = 54;
BrickletLEDStripV2.CHANNEL_MAPPING_RWBG = 57;
BrickletLEDStripV2.CHANNEL_MAPPING_GRWB = 78;
BrickletLEDStripV2.CHANNEL_MAPPING_GRBW = 75;
BrickletLEDStripV2.CHANNEL_MAPPING_GBWR = 108;
BrickletLEDStripV2.CHANNEL_MAPPING_GBRW = 99;
BrickletLEDStripV2.CHANNEL_MAPPING_GWBR = 120;
BrickletLEDStripV2.CHANNEL_MAPPING_GWRB = 114;
BrickletLEDStripV2.CHANNEL_MAPPING_BRGW = 135;
BrickletLEDStripV2.CHANNEL_MAPPING_BRWG = 141;
BrickletLEDStripV2.CHANNEL_MAPPING_BGRW = 147;
BrickletLEDStripV2.CHANNEL_MAPPING_BGWR = 156;
BrickletLEDStripV2.CHANNEL_MAPPING_BWRG = 177;
BrickletLEDStripV2.CHANNEL_MAPPING_BWGR = 180;
BrickletLEDStripV2.CHANNEL_MAPPING_WRBG = 201;
BrickletLEDStripV2.CHANNEL_MAPPING_WRGB = 198;
BrickletLEDStripV2.CHANNEL_MAPPING_WGBR = 216;
BrickletLEDStripV2.CHANNEL_MAPPING_WGRB = 210;
BrickletLEDStripV2.CHANNEL_MAPPING_WBGR = 228;
BrickletLEDStripV2.CHANNEL_MAPPING_WBRG = 225;
BrickletLEDStripV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletLEDStripV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletLEDStripV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletLEDStripV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletLEDStripV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletLEDStripV2.BOOTLOADER_STATUS_OK = 0;
BrickletLEDStripV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletLEDStripV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletLEDStripV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletLEDStripV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletLEDStripV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletLEDStripV2.STATUS_LED_CONFIG_OFF = 0;
BrickletLEDStripV2.STATUS_LED_CONFIG_ON = 1;
BrickletLEDStripV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletLEDStripV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletLEDStripV2(uid, ipcon) {
	//Controls up to 2048 RGB(W) LEDs

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletLEDStripV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletLEDStripV2.FUNCTION_SET_LED_VALUES_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_GET_LED_VALUES_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_SET_FRAME_DURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_GET_FRAME_DURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_GET_SUPPLY_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_SET_CLOCK_FREQUENCY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_GET_CLOCK_FREQUENCY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_SET_CHIP_TYPE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_GET_CHIP_TYPE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_SET_CHANNEL_MAPPING] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_GET_CHANNEL_MAPPING] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_SET_FRAME_STARTED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_GET_FRAME_STARTED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStripV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletLEDStripV2.CALLBACK_FRAME_STARTED] = 'H';


	this.streamStateObjects[BrickletLEDStripV2.FUNCTION_SET_LED_VALUES_LOW_LEVEL] = {
		'dataMapping': [],
		'dataMappingStreamIn': [null, 'streamLength', 'streamChunkOffset', 'streamChunkData'],
		'streamProperties': {
			'fixedLength': null,
			'singleChunk': false,
			'shortWrite': false
		},
		'responseProperties': {
			'running': false,
			'runningSubcall': false,
			'runningSubcallOOS': false,
			'waitingFirstChunk': true,
			'timeout': null,
			'data': [],
			'streamInChunkOffset': 0,
			'streamInChunkLength': 0,
			'streamInResponseEmpty': true,
			'streamInWritten': 0,
			'streamInLLParams': null,
			'responseHandler': null,
			'packFormatString': 'H H H B58',
			'unpackFormatString': '',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletLEDStripV2.FUNCTION_GET_LED_VALUES_LOW_LEVEL] = {
		'dataMapping': ['streamLength', 'streamChunkOffset', 'streamChunkData'],
		'dataMappingStreamIn': [],
		'streamProperties': {
			'fixedLength': null,
			'singleChunk': false,
			'shortWrite': false
		},
		'responseProperties': {
			'running': false,
			'runningSubcall': false,
			'runningSubcallOOS': false,
			'waitingFirstChunk': true,
			'timeout': null,
			'data': [],
			'streamInChunkOffset': 0,
			'streamInChunkLength': 0,
			'streamInResponseEmpty': true,
			'streamInWritten': 0,
			'streamInLLParams': null,
			'responseHandler': null,
			'packFormatString': 'H H',
			'unpackFormatString': 'H H B60',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.setLEDValuesLowLevel = function(index, valueLength, valueChunkOffset, valueChunkData, returnCallback, errorCallback) {
		/*
		Sets the RGB(W) values for the LEDs starting from *index*.
		You can set at most 2048 RGB values or 1536 RGBW values.
		
		To make the colors show correctly you need to configure the chip type
		(see :func:`Set Chip Type`) and a channel mapping (see :func:`Set Channel Mapping`)
		according to the connected LEDs.
		
		If the channel mapping has 3 colors, you need to give the data in the sequence
		RGBRGBRGB... if the channel mapping has 4 colors you need to give data in the
		sequence RGBWRGBWRGBW...
		
		The data is double buffered and the colors will be transfered to the
		LEDs when the next frame duration ends (see :func:`Set Frame Duration`).
		
		Generic approach:
		
		* Set the frame duration to a value that represents the number of frames per
		  second you want to achieve.
		* Set all of the LED colors for one frame.
		* Wait for the :cb:`Frame Started` callback.
		* Set all of the LED colors for next frame.
		* Wait for the :cb:`Frame Started` callback.
		* And so on.
		
		This approach ensures that you can change the LED colors with a fixed frame rate.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_SET_LED_VALUES_LOW_LEVEL, [index, valueLength, valueChunkOffset, valueChunkData], 'H H H B58', '', returnCallback, errorCallback, false);
	};
	this.getLEDValuesLowLevel = function(index, length, returnCallback, errorCallback) {
		/*
		Returns the RGB(W) values as set by :func:`Set LED Values`.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_GET_LED_VALUES_LOW_LEVEL, [index, length], 'H H', 'H H B60', returnCallback, errorCallback, false);
	};
	this.setFrameDuration = function(duration, returnCallback, errorCallback) {
		/*
		Sets the frame duration in ms.
		
		Example: If you want to achieve 20 frames per second, you should
		set the frame duration to 50ms (50ms * 20 = 1 second).
		
		For an explanation of the general approach see :func:`Set LED Values`.
		
		Default value: 100ms (10 frames per second).
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_SET_FRAME_DURATION, [duration], 'H', '', returnCallback, errorCallback, false);
	};
	this.getFrameDuration = function(returnCallback, errorCallback) {
		/*
		Returns the frame duration in ms as set by :func:`Set Frame Duration`.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_GET_FRAME_DURATION, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.getSupplyVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the current supply voltage of the LEDs. The voltage is given in mV.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_GET_SUPPLY_VOLTAGE, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setClockFrequency = function(frequency, returnCallback, errorCallback) {
		/*
		Sets the frequency of the clock in Hz. The range is 10000Hz (10kHz) up to
		2000000Hz (2MHz).
		
		The Bricklet will choose the nearest achievable frequency, which may
		be off by a few Hz. You can get the exact frequency that is used by
		calling :func:`Get Clock Frequency`.
		
		If you have problems with flickering LEDs, they may be bits flipping. You
		can fix this by either making the connection between the LEDs and the
		Bricklet shorter or by reducing the frequency.
		
		With a decreasing frequency your maximum frames per second will decrease
		too.
		
		The default value is 1.66MHz.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_SET_CLOCK_FREQUENCY, [frequency], 'I', '', returnCallback, errorCallback, false);
	};
	this.getClockFrequency = function(returnCallback, errorCallback) {
		/*
		Returns the currently used clock frequency as set by :func:`Set Clock Frequency`.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_GET_CLOCK_FREQUENCY, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setChipType = function(chip, returnCallback, errorCallback) {
		/*
		Sets the type of the LED driver chip. We currently support the chips
		
		* WS2801,
		* WS2811,
		* WS2812 / SK6812 / NeoPixel RGB,
		* SK6812RGBW / NeoPixel RGBW (Chip Type = WS2812),
		* LPD8806 and
		* APA102 / DotStar.
		
		The default value is WS2801 (2801).
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_SET_CHIP_TYPE, [chip], 'H', '', returnCallback, errorCallback, false);
	};
	this.getChipType = function(returnCallback, errorCallback) {
		/*
		Returns the currently used chip type as set by :func:`Set Chip Type`.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_GET_CHIP_TYPE, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setChannelMapping = function(mapping, returnCallback, errorCallback) {
		/*
		Sets the channel mapping for the connected LEDs.
		
		If the mapping has 4 colors, the function :func:`Set LED Values` expects 4
		values per pixel and if the mapping has 3 colors it expects 3 values per pixel.
		
		The function always expects the order RGB(W). The connected LED driver chips
		might have their 3 or 4 channels in a different order. For example, the WS2801
		chips typically use BGR order, then WS2812 chips typically use GRB order and
		the APA102 chips typically use WBGR order.
		
		The APA102 chips are special. They have three 8-bit channels for RGB
		and an additional 5-bit channel for the overall brightness of the RGB LED
		making them 4-channel chips. Internally the brightness channel is the first
		channel, therefore one of the Wxyz channel mappings should be used. Then
		the W channel controls the brightness.
		
		The default value is BGR (36).
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_SET_CHANNEL_MAPPING, [mapping], 'B', '', returnCallback, errorCallback, false);
	};
	this.getChannelMapping = function(returnCallback, errorCallback) {
		/*
		Returns the currently used channel mapping as set by :func:`Set Channel Mapping`.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_GET_CHANNEL_MAPPING, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setFrameStartedCallbackConfiguration = function(enable, returnCallback, errorCallback) {
		/*
		Enables/disables the :cb:`Frame Started` callback.
		
		By default the callback is enabled.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_SET_FRAME_STARTED_CALLBACK_CONFIGURATION, [enable], '?', '', returnCallback, errorCallback, false);
	};
	this.getFrameStartedCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by
		:func:`Set Frame Started Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_GET_FRAME_STARTED_CALLBACK_CONFIGURATION, [], '', '?', returnCallback, errorCallback, false);
	};
	this.getSPITFPErrorCount = function(returnCallback, errorCallback) {
		/*
		Returns the error count for the communication between Brick and Bricklet.
		
		The errors are divided into
		
		* ACK checksum errors,
		* message checksum errors,
		* framing errors and
		* overflow errors.
		
		The errors counts are for errors that occur on the Bricklet side. All
		Bricks have a similar function that returns the errors on the Brick side.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 'I I I I', returnCallback, errorCallback, false);
	};
	this.setBootloaderMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the bootloader mode and returns the status after the requested
		mode change was instigated.
		
		You can change from bootloader mode to firmware mode and vice versa. A change
		from bootloader mode to firmware mode will only take place if the entry function,
		device identifier and CRC are present and correct.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 'B', returnCallback, errorCallback, false);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', '', returnCallback, errorCallback, false);
	};
	this.writeFirmware = function(data, returnCallback, errorCallback) {
		/*
		Writes 64 Bytes of firmware at the position as written by
		:func:`Set Write Firmware Pointer` before. The firmware is written
		to flash every 4 chunks.
		
		You can only write firmware in bootloader mode.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 'B', returnCallback, errorCallback, false);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', '', returnCallback, errorCallback, false);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_RESET, [], '', '', returnCallback, errorCallback, false);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_WRITE_UID, [uid], 'I', '', returnCallback, errorCallback, false);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_READ_UID, [], '', 'I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletLEDStripV2.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
	this.setLEDValues = function(index, value, returnCallback, errorCallback) {
		/*
		Sets the RGB(W) values for the LEDs starting from *index*.
		You can set at most 2048 RGB values or 1536 RGBW values.
		
		To make the colors show correctly you need to configure the chip type
		(see :func:`Set Chip Type`) and a channel mapping (see :func:`Set Channel Mapping`)
		according to the connected LEDs.
		
		If the channel mapping has 3 colors, you need to give the data in the sequence
		RGBRGBRGB... if the channel mapping has 4 colors you need to give data in the
		sequence RGBWRGBWRGBW...
		
		The data is double buffered and the colors will be transfered to the
		LEDs when the next frame duration ends (see :func:`Set Frame Duration`).
		
		Generic approach:
		
		* Set the frame duration to a value that represents the number of frames per
		  second you want to achieve.
		* Set all of the LED colors for one frame.
		* Wait for the :cb:`Frame Started` callback.
		* Set all of the LED colors for next frame.
		* Wait for the :cb:`Frame Started` callback.
		* And so on.
		
		This approach ensures that you can change the LED colors with a fixed frame rate.
		*/

		var valueLength = 0;
		var valueChunkData = [];
		var valueChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[1];

		if (value.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			this.resetStreamStateObject(streamStateObject);

			if (streamStateObject['responseProperties']['callQueue'].length > 0) {
				streamStateObject['responseProperties']['callQueue'].shift()(device);
			}

			return;
		}

		if (!this.getResponseExpected(1)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				valueLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				valueLength = value.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				valueChunkData =
					this.ipcon.createChunkData(value, 0, 58, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletLEDStripV2.FUNCTION_SET_LED_VALUES_LOW_LEVEL,
				                       [index, valueLength, valueChunkOffset, valueChunkData],
				                       'H H H B58',
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false);
			}
			else {
				while (valueChunkOffset < value.length) {
					valueChunkData =
						this.ipcon.createChunkData(value, valueChunkOffset, 58, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletLEDStripV2.FUNCTION_SET_LED_VALUES_LOW_LEVEL,
					                       [index, valueLength, valueChunkOffset, valueChunkData],
					                       'H H H B58',
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false);

					valueChunkOffset += 58;
				}
			}

			if (returnCallback) {
				returnCallback();
			}
		}
		else {
			var responseHandler = null;
			var functionToQueue = null;

			if (streamStateObject['responseProperties']['responseHandler'] === null) {
				responseHandler = function (device, fid, packetResponse) {
					var result = [];
					var payload = null;
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var shortWriteWritten = -1;
					var streamStateObject = device.streamStateObjects[fid];
					var responseEmpty = streamStateObject['responseProperties']['streamInResponseEmpty'];
					var valueLength = 0;
					var valueChunkData = [];
					var valueChunkOffset = 0;

					function doNextLLCall() {
						valueLength = streamStateObject['responseProperties']['data'].length;
						valueChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						valueChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = valueLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = valueChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = valueChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletLEDStripV2.FUNCTION_SET_LED_VALUES_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'H H H B58',
						                         '',
						                         returnCallback,
						                         errorCallback,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 58;
					}

					function handleStreamInDone() {
						if (streamStateObject['responseProperties']['returnCB']) {
							if (streamStateObject['streamProperties']['shortWrite']) {
								for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
									if (streamStateObject['dataMapping'][i].endsWith('Written')) {
										result[i] = streamStateObject['responseProperties']['streamInWritten'];
										break;
									}
								}
							}

							if (!responseEmpty) {
								streamStateObject['responseProperties']['returnCB'].apply(device, result);
							}
							else {
								streamStateObject['responseProperties']['returnCB'].apply(device);
							}
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}
					}

					if (!streamStateObject) {
						return;
					}

					packetErrorFlag = device.ipcon.getEFromPacket(packetResponse);

					if (packetErrorFlag !== 0) {
						if (streamStateObject['responseProperties']['errorCB'] !== undefined) {
							if (packetErrorFlag === 1) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_INVALID_PARAMETER);
							}
							else if (packetErrorFlag === 2) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_FUNCTION_NOT_SUPPORTED);
							}
							else {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_UNKNOWN_ERROR);
							}
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					if (responseEmpty) {
						if (streamStateObject['streamProperties']['singleChunk']) {
							handleStreamInDone();

							return;
						}

						if (streamStateObject['responseProperties']['streamInChunkOffset'] < streamStateObject['responseProperties']['data'].length) {
							doNextLLCall();
						}
						else {
							handleStreamInDone();
						}
					}
					else {
						payload = device.ipcon.getPayloadFromPacket(packetResponse);
						llvalues = device.ipcon.unpack(payload,
						                               streamStateObject['responseProperties']['unpackFormatString']);

						if (!payload || !llvalues) {
							device.resetStreamStateObject(streamStateObject);

							if (streamStateObject['responseProperties']['callQueue'].length > 0) {
								streamStateObject['responseProperties']['callQueue'].shift()(device);
							}

							return;
						}

						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							result.push(llvalues[i]);
						}

						if (streamStateObject['streamProperties']['singleChunk']) {
							if (streamStateObject['responseProperties']['returnCB']) {
								streamStateObject['responseProperties']['returnCB'].apply(device, result);
							}

							device.resetStreamStateObject(streamStateObject);

							if (streamStateObject['responseProperties']['callQueue'].length > 0) {
								streamStateObject['responseProperties']['callQueue'].shift()(device);
							}

							return;
						}

						if (streamStateObject['streamProperties']['shortWrite']) {
							for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
								if (streamStateObject['dataMapping'][i].endsWith('Written')) {
									shortWriteWritten = llvalues[i];
									streamStateObject['responseProperties']['streamInWritten'] += shortWriteWritten;
									break;
								}
							}
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 58)) {
								// Either last chunk or short write
								handleStreamInDone();
								return;
							}
						}

						if (streamStateObject['responseProperties']['streamInChunkOffset'] < streamStateObject['responseProperties']['data'].length) {
							doNextLLCall();
						}
						else {
							handleStreamInDone();
						}
					}
				};

				streamStateObject['responseProperties']['responseHandler'] = responseHandler;
			}

			if (!streamStateObject['responseProperties']['running']) {
				streamStateObject['responseProperties']['running'] = true;
				streamStateObject['responseProperties']['returnCB'] = returnCallback;
				streamStateObject['responseProperties']['errorCB'] = errorCallback;
				streamStateObject['responseProperties']['data'].length = 0;
				streamStateObject['responseProperties']['data'].push.apply(streamStateObject['responseProperties']['data'],
				                                                           value);

				if (streamStateObject['streamProperties']['fixedLength']) {
					valueLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					valueLength = value.length;
				}

				valueChunkOffset = 0;
				valueChunkData =
					this.ipcon.createChunkData(value, 0, 58, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 58;
				streamStateObject['responseProperties']['streamInChunkLength'] = 58;
				streamStateObject['responseProperties']['streamInLLParams'] = [index, valueLength, valueChunkOffset, valueChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletLEDStripV2.FUNCTION_SET_LED_VALUES_LOW_LEVEL,
				                       [index, valueLength, valueChunkOffset, valueChunkData],
				                       'H H H B58',
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.setLEDValues.call(device, index, value, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};

	this.getLEDValues = function(index, length, returnCallback, errorCallback) {
		/*
		Returns the RGB(W) values as set by :func:`Set LED Values`.
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[2];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var valueLength = null;
					var valueChunkData = null;
					var valueOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var valueChunkOffset = null;
					var payload = device.ipcon.getPayloadFromPacket(packetResponse);

					packetErrorFlag = device.ipcon.getEFromPacket(packetResponse);

					if (packetErrorFlag !== 0) {
						if (streamStateObject['responseProperties']['errorCB'] !== undefined) {
							if (packetErrorFlag === 1) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_INVALID_PARAMETER);
							}
							else if (packetErrorFlag === 2) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_FUNCTION_NOT_SUPPORTED);
							}
							else {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_UNKNOWN_ERROR);
							}
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					if (payload.length === 0) {
						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					llvalues = device.ipcon.unpack(payload,
					                               streamStateObject['responseProperties']['unpackFormatString']);

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamChunkData') {
							valueChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							valueChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							valueLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((valueChunkOffset + 60) < valueLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletLEDStripV2.FUNCTION_GET_LED_VALUES_LOW_LEVEL, [index, length], 'H H', 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

							return;
						}

						if (streamStateObject['responseProperties']['errorCB']) {
							streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_STREAM_OUT_OF_SYNC);
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}
					}

					if (streamStateObject['responseProperties']['waitingFirstChunk']) {
						streamStateObject['responseProperties']['waitingFirstChunk'] = false;
						valueOutOfSync = (valueChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = valueChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!valueOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < valueLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletLEDStripV2.FUNCTION_GET_LED_VALUES_LOW_LEVEL, [index, length], 'H H', 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

							        return;
							}
						}
						else {
							valueOutOfSync =
								(valueChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!valueOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < valueLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(valueChunkData);

									if (streamStateObject['responseProperties']['data'].length >= valueLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, valueLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletLEDStripV2.FUNCTION_GET_LED_VALUES_LOW_LEVEL, [index, length], 'H H', 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (valueOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, valueLength));
							}
							else if (rolesMappedData[i]['role'] === null) {
								result.push(rolesMappedData[i]['llvalue']);
							}
						}

						streamStateObject['responseProperties']['returnCB'].apply(device, result);
					}

					device.resetStreamStateObject(streamStateObject);

					if (streamStateObject['responseProperties']['callQueue'].length > 0) {
						streamStateObject['responseProperties']['callQueue'].shift()(device);
					}
					
				};

			streamStateObject['responseProperties']['responseHandler'] = responseHandler;
		}
		if (!streamStateObject['responseProperties']['running']) {
			streamStateObject['responseProperties']['running'] = true;
			streamStateObject['responseProperties']['returnCB'] = returnCallback;
			streamStateObject['responseProperties']['errorCB'] = errorCallback;
			this.ipcon.sendRequest(this,
			                       BrickletLEDStripV2.FUNCTION_GET_LED_VALUES_LOW_LEVEL,
			                       [index, length],
			                       'H H',
			                       'H H B60',
			                       returnCallback,
			                       errorCallback,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.getLEDValues.call(device, index, length, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};
}

module.exports = BrickletLEDStripV2;
