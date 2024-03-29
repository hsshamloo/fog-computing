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

BrickletThermalImaging.DEVICE_IDENTIFIER = 278;
BrickletThermalImaging.DEVICE_DISPLAY_NAME = 'Thermal Imaging Bricklet';
BrickletThermalImaging.CALLBACK_HIGH_CONTRAST_IMAGE_LOW_LEVEL = 12;
BrickletThermalImaging.CALLBACK_TEMPERATURE_IMAGE_LOW_LEVEL = 13;
BrickletThermalImaging.CALLBACK_HIGH_CONTRAST_IMAGE = -12;
BrickletThermalImaging.CALLBACK_TEMPERATURE_IMAGE = -13;
BrickletThermalImaging.FUNCTION_GET_HIGH_CONTRAST_IMAGE_LOW_LEVEL = 1;
BrickletThermalImaging.FUNCTION_GET_TEMPERATURE_IMAGE_LOW_LEVEL = 2;
BrickletThermalImaging.FUNCTION_GET_STATISTICS = 3;
BrickletThermalImaging.FUNCTION_SET_RESOLUTION = 4;
BrickletThermalImaging.FUNCTION_GET_RESOLUTION = 5;
BrickletThermalImaging.FUNCTION_SET_SPOTMETER_CONFIG = 6;
BrickletThermalImaging.FUNCTION_GET_SPOTMETER_CONFIG = 7;
BrickletThermalImaging.FUNCTION_SET_HIGH_CONTRAST_CONFIG = 8;
BrickletThermalImaging.FUNCTION_GET_HIGH_CONTRAST_CONFIG = 9;
BrickletThermalImaging.FUNCTION_SET_IMAGE_TRANSFER_CONFIG = 10;
BrickletThermalImaging.FUNCTION_GET_IMAGE_TRANSFER_CONFIG = 11;
BrickletThermalImaging.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletThermalImaging.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletThermalImaging.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletThermalImaging.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletThermalImaging.FUNCTION_WRITE_FIRMWARE = 238;
BrickletThermalImaging.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletThermalImaging.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletThermalImaging.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletThermalImaging.FUNCTION_RESET = 243;
BrickletThermalImaging.FUNCTION_WRITE_UID = 248;
BrickletThermalImaging.FUNCTION_READ_UID = 249;
BrickletThermalImaging.FUNCTION_GET_IDENTITY = 255;
BrickletThermalImaging.RESOLUTION_0_TO_6553_KELVIN = 0;
BrickletThermalImaging.RESOLUTION_0_TO_655_KELVIN = 1;
BrickletThermalImaging.FFC_STATUS_NEVER_COMMANDED = 0;
BrickletThermalImaging.FFC_STATUS_IMMINENT = 1;
BrickletThermalImaging.FFC_STATUS_IN_PROGRESS = 2;
BrickletThermalImaging.FFC_STATUS_COMPLETE = 3;
BrickletThermalImaging.IMAGE_TRANSFER_MANUAL_HIGH_CONTRAST_IMAGE = 0;
BrickletThermalImaging.IMAGE_TRANSFER_MANUAL_TEMPERATURE_IMAGE = 1;
BrickletThermalImaging.IMAGE_TRANSFER_CALLBACK_HIGH_CONTRAST_IMAGE = 2;
BrickletThermalImaging.IMAGE_TRANSFER_CALLBACK_TEMPERATURE_IMAGE = 3;
BrickletThermalImaging.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletThermalImaging.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletThermalImaging.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletThermalImaging.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletThermalImaging.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletThermalImaging.BOOTLOADER_STATUS_OK = 0;
BrickletThermalImaging.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletThermalImaging.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletThermalImaging.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletThermalImaging.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletThermalImaging.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletThermalImaging.STATUS_LED_CONFIG_OFF = 0;
BrickletThermalImaging.STATUS_LED_CONFIG_ON = 1;
BrickletThermalImaging.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletThermalImaging.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletThermalImaging(uid, ipcon) {
	//80x60 pixel thermal imaging camera

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletThermalImaging.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletThermalImaging.FUNCTION_GET_HIGH_CONTRAST_IMAGE_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_GET_TEMPERATURE_IMAGE_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_GET_STATISTICS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_SET_RESOLUTION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_GET_RESOLUTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_SET_SPOTMETER_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_GET_SPOTMETER_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_SET_HIGH_CONTRAST_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_GET_HIGH_CONTRAST_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_SET_IMAGE_TRANSFER_CONFIG] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_GET_IMAGE_TRANSFER_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermalImaging.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletThermalImaging.CALLBACK_HIGH_CONTRAST_IMAGE_LOW_LEVEL] = 'H B62';
	this.callbackFormats[BrickletThermalImaging.CALLBACK_TEMPERATURE_IMAGE_LOW_LEVEL] = 'H H31';

	this.highLevelCallbacks[BrickletThermalImaging.CALLBACK_HIGH_CONTRAST_IMAGE] = [['streamChunkOffset', 'streamChunkData'], {'fixedLength': 4800, 'singleChunk': false}, null];
	this.highLevelCallbacks[BrickletThermalImaging.CALLBACK_TEMPERATURE_IMAGE] = [['streamChunkOffset', 'streamChunkData'], {'fixedLength': 4800, 'singleChunk': false}, null];

	this.streamStateObjects[BrickletThermalImaging.FUNCTION_GET_HIGH_CONTRAST_IMAGE_LOW_LEVEL] = {
		'dataMapping': ['streamChunkOffset', 'streamChunkData'],
		'dataMappingStreamIn': [],
		'streamProperties': {
			'fixedLength': 4800,
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
			'packFormatString': '',
			'unpackFormatString': 'H B62',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletThermalImaging.FUNCTION_GET_TEMPERATURE_IMAGE_LOW_LEVEL] = {
		'dataMapping': ['streamChunkOffset', 'streamChunkData'],
		'dataMappingStreamIn': [],
		'streamProperties': {
			'fixedLength': 4800,
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
			'packFormatString': '',
			'unpackFormatString': 'H H31',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.getHighContrastImageLowLevel = function(returnCallback, errorCallback) {
		/*
		Returns the current high contrast image. See `here <https://www.tinkerforge.com/en/doc/Hardware/Bricklets/Thermal_Imaging.html#high-contrast-image-vs-temperature-image>`__
		for the difference between
		High Contrast and Temperature Image. If you don't know what to use
		the High Contrast Image is probably right for you.
		
		The data is organized as a 8-bit value 80x60 pixel matrix linearized in
		a one-dimensional array. The data is arranged line by line from top left to
		bottom right.
		
		Each 8-bit value represents one gray-scale image pixel that can directly be
		shown to a user on a display.
		
		Before you can use this function you have to enable it with
		:func:`Set Image Transfer Config`.
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_GET_HIGH_CONTRAST_IMAGE_LOW_LEVEL, [], '', 'H B62', returnCallback, errorCallback, false);
	};
	this.getTemperatureImageLowLevel = function(returnCallback, errorCallback) {
		/*
		Returns the current temperature image. See `here <https://www.tinkerforge.com/en/doc/Hardware/Bricklets/Thermal_Imaging.html#high-contrast-image-vs-temperature-image>`__
		for the difference between High Contrast and Temperature Image.
		If you don't know what to use the High Contrast Image is probably right for you.
		
		The data is organized as a 16-bit value 80x60 pixel matrix linearized in
		a one-dimensional array. The data is arranged line by line from top left to
		bottom right.
		
		Each 16-bit value represents one temperature measurement in either
		Kelvin/10 or Kelvin/100 (depending on the resolution set with :func:`Set Resolution`).
		
		Before you can use this function you have to enable it with
		:func:`Set Image Transfer Config`.
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_GET_TEMPERATURE_IMAGE_LOW_LEVEL, [], '', 'H H31', returnCallback, errorCallback, false);
	};
	this.getStatistics = function(returnCallback, errorCallback) {
		/*
		Returns the spotmeter statistics, various temperatures, current resolution and status bits.
		
		The spotmeter statistics are:
		
		* Index 0: Mean Temperature.
		* Index 1: Maximum Temperature.
		* Index 2: Minimum Temperature.
		* Index 3: Pixel Count of spotmeter region of interest.
		
		The temperatures are:
		
		* Index 0: Focal Plain Array temperature.
		* Index 1: Focal Plain Array temperature at last FFC (Flat Field Correction).
		* Index 2: Housing temperature.
		* Index 3: Housing temperature at last FFC.
		
		The resolution is either `0 to 6553 Kelvin` or `0 to 655 Kelvin`. If the resolution is the former,
		the temperatures are in Kelvin/10, if it is the latter the temperatures are in Kelvin/100.
		
		FFC (Flat Field Correction) Status:
		
		* FFC Never Commanded: Only seen on startup before first FFC.
		* FFC Imminent: This state is entered 2 seconds prior to initiating FFC.
		* FFC In Progress: Flat field correction is started (shutter moves in front of lens and back). Takes about 1 second.
		* FFC Complete: Shutter is in waiting position again, FFC done.
		
		Temperature warning bits:
		
		* Index 0: Shutter lockout (if true shutter is locked out because temperature is outside -10°C to +65°C)
		* Index 1: Overtemperature shut down imminent (goes true 10 seconds before shutdown)
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_GET_STATISTICS, [], '', 'H4 H4 B B ?2', returnCallback, errorCallback, false);
	};
	this.setResolution = function(resolution, returnCallback, errorCallback) {
		/*
		Sets the resolution. The Thermal Imaging Bricklet can either measure
		
		* from 0 to 6553 Kelvin (-273.15°C to +6279.85°C) with 0.1°C resolution or
		* from 0 to 655 Kelvin (-273.15°C to +381.85°C) with 0.01°C resolution.
		
		The accuracy is specified for -10°C to 450°C in the
		first range and -10°C and 140°C in the second range.
		
		The default value is 0 to 655 Kelvin.
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_SET_RESOLUTION, [resolution], 'B', '', returnCallback, errorCallback, false);
	};
	this.getResolution = function(returnCallback, errorCallback) {
		/*
		Returns the resolution as set by :func:`Set Resolution`.
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_GET_RESOLUTION, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setSpotmeterConfig = function(regionOfInterest, returnCallback, errorCallback) {
		/*
		Sets the spotmeter region of interest. The 4 values are
		
		* Index 0: Column start (has to be smaller then Column end).
		* Index 1: Row start (has to be smaller then Row end).
		* Index 2: Column end (has to be smaller then 80).
		* Index 3: Row end (has to be smaller then 60).
		
		The spotmeter statistics can be read out with :func:`Get Statistics`.
		
		The default region of interest is (39, 29, 40, 30).
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_SET_SPOTMETER_CONFIG, [regionOfInterest], 'B4', '', returnCallback, errorCallback, false);
	};
	this.getSpotmeterConfig = function(returnCallback, errorCallback) {
		/*
		Returns the spotmeter config as set by :func:`Set Spotmeter Config`.
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_GET_SPOTMETER_CONFIG, [], '', 'B4', returnCallback, errorCallback, false);
	};
	this.setHighContrastConfig = function(regionOfInterest, dampeningFactor, clipLimit, emptyCounts, returnCallback, errorCallback) {
		/*
		Sets the high contrast region of interest, dampening factor, clip limit and empty counts.
		This config is only used in high contrast mode (see :func:`Set Image Transfer Config`).
		
		The high contrast region of interest consists of four values:
		
		* Index 0: Column start (has to be smaller or equal then Column end).
		* Index 1: Row start (has to be smaller then Row end).
		* Index 2: Column end (has to be smaller then 80).
		* Index 3: Row end (has to be smaller then 60).
		
		The algorithm to generate the high contrast image is applied to this region.
		
		Dampening Factor: This parameter is the amount of temporal dampening applied to the HEQ
		(history equalization) transformation function. An IIR filter of the form::
		
		 (N / 256) * previous + ((256 - N) / 256) * current
		
		is applied, and the HEQ dampening factor
		represents the value N in the equation, i.e., a value that applies to the amount of
		influence the previous HEQ transformation function has on the current function. The
		lower the value of N the higher the influence of the current video frame whereas
		the higher the value of N the more influence the previous damped transfer function has.
		
		Clip Limit Index 0 (AGC HEQ Clip Limit Low): This parameter defines an artificial population that is added to
		every non-empty histogram bin. In other words, if the Clip Limit Low is set to L, a bin
		with an actual population of X will have an effective population of L + X. Any empty bin
		that is nearby a populated bin will be given an artificial population of L. The effect of
		higher values is to provide a more linear transfer function; lower values provide a more
		non-linear (equalized) transfer function.
		
		Clip Limit Index 1 (AGC HEQ Clip Limit High): This parameter defines the maximum number of pixels allowed
		to accumulate in any given histogram bin. Any additional pixels in a given bin are clipped.
		The effect of this parameter is to limit the influence of highly-populated bins on the
		resulting HEQ transformation function.
		
		Empty Counts: This parameter specifies the maximum number of pixels in a bin that will be
		interpreted as an empty bin. Histogram bins with this number of pixels or less will be
		processed as an empty bin.
		
		The default values are
		
		* Region Of Interest = (0, 0, 79, 59),
		* Dampening Factor = 64,
		* Clip Limit = (4800, 512) and
		* Empty Counts = 2.
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_SET_HIGH_CONTRAST_CONFIG, [regionOfInterest, dampeningFactor, clipLimit, emptyCounts], 'B4 H H2 H', '', returnCallback, errorCallback, false);
	};
	this.getHighContrastConfig = function(returnCallback, errorCallback) {
		/*
		Returns the high contrast config as set by :func:`Set High Contrast Config`.
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_GET_HIGH_CONTRAST_CONFIG, [], '', 'B4 H H2 H', returnCallback, errorCallback, false);
	};
	this.setImageTransferConfig = function(config, returnCallback, errorCallback) {
		/*
		The necessary bandwidth of this Bricklet is too high to use getter/callback or
		high contrast/temperature image at the same time. You have to configure the one
		you want to use, the Bricklet will optimize the internal configuration accordingly.
		
		Corresponding functions:
		
		* Manual High Contrast Image: :func:`Get High Contrast Image`.
		* Manual Temperature Image: :func:`Get Temperature Image`.
		* Callback High Contrast Image: :cb:`High Contrast Image` callback.
		* Callback Temperature Image: :cb:`Temperature Image` callback.
		
		The default is Manual High Contrast Image (0).
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_SET_IMAGE_TRANSFER_CONFIG, [config], 'B', '', returnCallback, errorCallback, false);
	};
	this.getImageTransferConfig = function(returnCallback, errorCallback) {
		/*
		Returns the image transfer config, as set by :func:`Set Image Transfer Config`.
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_GET_IMAGE_TRANSFER_CONFIG, [], '', 'B', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 'I I I I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 'B', returnCallback, errorCallback, false);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_GET_BOOTLOADER_MODE, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', '', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 'B', returnCallback, errorCallback, false);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', '', returnCallback, errorCallback, false);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_RESET, [], '', '', returnCallback, errorCallback, false);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_WRITE_UID, [uid], 'I', '', returnCallback, errorCallback, false);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_READ_UID, [], '', 'I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletThermalImaging.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};

	this.getHighContrastImage = function(returnCallback, errorCallback) {
		/*
		Returns the current high contrast image. See `here <https://www.tinkerforge.com/en/doc/Hardware/Bricklets/Thermal_Imaging.html#high-contrast-image-vs-temperature-image>`__
		for the difference between
		High Contrast and Temperature Image. If you don't know what to use
		the High Contrast Image is probably right for you.
		
		The data is organized as a 8-bit value 80x60 pixel matrix linearized in
		a one-dimensional array. The data is arranged line by line from top left to
		bottom right.
		
		Each 8-bit value represents one gray-scale image pixel that can directly be
		shown to a user on a display.
		
		Before you can use this function you have to enable it with
		:func:`Set Image Transfer Config`.
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[1];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var imageLength = null;
					var imageChunkData = null;
					var imageOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var imageChunkOffset = null;
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
							imageChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							imageChunkOffset = llvalues[i];
						}
					}

					imageLength = streamStateObject['streamProperties']['fixedLength'];

					function handleOOS() {
						if ((imageChunkOffset + 62) < imageLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletThermalImaging.FUNCTION_GET_HIGH_CONTRAST_IMAGE_LOW_LEVEL, [], '', 'H B62', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

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

						if (imageChunkOffset === ((1 << 16) - 1)) { // maximum chunk offset -> stream has no data
							imageLength = 0;
							imageOutOfSync = false;
							streamStateObject['responseProperties']['data'].length = 0;
						}
						else {
								imageOutOfSync = (imageChunkOffset !== 0);
								streamStateObject['responseProperties']['data'] = imageChunkData;
						}
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!imageOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < imageLength)) {
									streamStateObject['responseProperties']['runningSubcall'] = true;
									device.ipcon.sendRequest(device, BrickletThermalImaging.FUNCTION_GET_HIGH_CONTRAST_IMAGE_LOW_LEVEL, [], '', 'H B62', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

									return;
							}
						}
						else {
							imageOutOfSync =
								(imageChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!imageOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < imageLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(imageChunkData);
									if (streamStateObject['responseProperties']['data'].length >= imageLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, imageLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletThermalImaging.FUNCTION_GET_HIGH_CONTRAST_IMAGE_LOW_LEVEL, [], '', 'H B62', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

										return;
									}
							}
						}
					}
					else {
						handleOOS();

						return;
					}

					if (imageOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, imageLength));
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
			                       BrickletThermalImaging.FUNCTION_GET_HIGH_CONTRAST_IMAGE_LOW_LEVEL,
			                       [],
			                       '',
			                       'H B62',
			                       returnCallback,
			                       errorCallback,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.getHighContrastImage.call(device, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};

	this.getTemperatureImage = function(returnCallback, errorCallback) {
		/*
		Returns the current temperature image. See `here <https://www.tinkerforge.com/en/doc/Hardware/Bricklets/Thermal_Imaging.html#high-contrast-image-vs-temperature-image>`__
		for the difference between High Contrast and Temperature Image.
		If you don't know what to use the High Contrast Image is probably right for you.
		
		The data is organized as a 16-bit value 80x60 pixel matrix linearized in
		a one-dimensional array. The data is arranged line by line from top left to
		bottom right.
		
		Each 16-bit value represents one temperature measurement in either
		Kelvin/10 or Kelvin/100 (depending on the resolution set with :func:`Set Resolution`).
		
		Before you can use this function you have to enable it with
		:func:`Set Image Transfer Config`.
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
					var imageLength = null;
					var imageChunkData = null;
					var imageOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var imageChunkOffset = null;
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
							imageChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							imageChunkOffset = llvalues[i];
						}
					}

					imageLength = streamStateObject['streamProperties']['fixedLength'];

					function handleOOS() {
						if ((imageChunkOffset + 31) < imageLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletThermalImaging.FUNCTION_GET_TEMPERATURE_IMAGE_LOW_LEVEL, [], '', 'H H31', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

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

						if (imageChunkOffset === ((1 << 16) - 1)) { // maximum chunk offset -> stream has no data
							imageLength = 0;
							imageOutOfSync = false;
							streamStateObject['responseProperties']['data'].length = 0;
						}
						else {
								imageOutOfSync = (imageChunkOffset !== 0);
								streamStateObject['responseProperties']['data'] = imageChunkData;
						}
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!imageOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < imageLength)) {
									streamStateObject['responseProperties']['runningSubcall'] = true;
									device.ipcon.sendRequest(device, BrickletThermalImaging.FUNCTION_GET_TEMPERATURE_IMAGE_LOW_LEVEL, [], '', 'H H31', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

									return;
							}
						}
						else {
							imageOutOfSync =
								(imageChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!imageOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < imageLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(imageChunkData);
									if (streamStateObject['responseProperties']['data'].length >= imageLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, imageLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletThermalImaging.FUNCTION_GET_TEMPERATURE_IMAGE_LOW_LEVEL, [], '', 'H H31', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

										return;
									}
							}
						}
					}
					else {
						handleOOS();

						return;
					}

					if (imageOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, imageLength));
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
			                       BrickletThermalImaging.FUNCTION_GET_TEMPERATURE_IMAGE_LOW_LEVEL,
			                       [],
			                       '',
			                       'H H31',
			                       returnCallback,
			                       errorCallback,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.getTemperatureImage.call(device, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};
}

module.exports = BrickletThermalImaging;
