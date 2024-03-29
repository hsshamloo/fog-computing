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

BrickletGPSV2.DEVICE_IDENTIFIER = 276;
BrickletGPSV2.DEVICE_DISPLAY_NAME = 'GPS Bricklet 2.0';
BrickletGPSV2.CALLBACK_PULSE_PER_SECOND = 21;
BrickletGPSV2.CALLBACK_COORDINATES = 22;
BrickletGPSV2.CALLBACK_STATUS = 23;
BrickletGPSV2.CALLBACK_ALTITUDE = 24;
BrickletGPSV2.CALLBACK_MOTION = 25;
BrickletGPSV2.CALLBACK_DATE_TIME = 26;
BrickletGPSV2.FUNCTION_GET_COORDINATES = 1;
BrickletGPSV2.FUNCTION_GET_STATUS = 2;
BrickletGPSV2.FUNCTION_GET_ALTITUDE = 3;
BrickletGPSV2.FUNCTION_GET_MOTION = 4;
BrickletGPSV2.FUNCTION_GET_DATE_TIME = 5;
BrickletGPSV2.FUNCTION_RESTART = 6;
BrickletGPSV2.FUNCTION_GET_SATELLITE_SYSTEM_STATUS_LOW_LEVEL = 7;
BrickletGPSV2.FUNCTION_GET_SATELLITE_STATUS = 8;
BrickletGPSV2.FUNCTION_SET_FIX_LED_CONFIG = 9;
BrickletGPSV2.FUNCTION_GET_FIX_LED_CONFIG = 10;
BrickletGPSV2.FUNCTION_SET_COORDINATES_CALLBACK_PERIOD = 11;
BrickletGPSV2.FUNCTION_GET_COORDINATES_CALLBACK_PERIOD = 12;
BrickletGPSV2.FUNCTION_SET_STATUS_CALLBACK_PERIOD = 13;
BrickletGPSV2.FUNCTION_GET_STATUS_CALLBACK_PERIOD = 14;
BrickletGPSV2.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD = 15;
BrickletGPSV2.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD = 16;
BrickletGPSV2.FUNCTION_SET_MOTION_CALLBACK_PERIOD = 17;
BrickletGPSV2.FUNCTION_GET_MOTION_CALLBACK_PERIOD = 18;
BrickletGPSV2.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD = 19;
BrickletGPSV2.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD = 20;
BrickletGPSV2.FUNCTION_SET_SBAS_CONFIG = 27;
BrickletGPSV2.FUNCTION_GET_SBAS_CONFIG = 28;
BrickletGPSV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletGPSV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletGPSV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletGPSV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletGPSV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletGPSV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletGPSV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletGPSV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletGPSV2.FUNCTION_RESET = 243;
BrickletGPSV2.FUNCTION_WRITE_UID = 248;
BrickletGPSV2.FUNCTION_READ_UID = 249;
BrickletGPSV2.FUNCTION_GET_IDENTITY = 255;
BrickletGPSV2.RESTART_TYPE_HOT_START = 0;
BrickletGPSV2.RESTART_TYPE_WARM_START = 1;
BrickletGPSV2.RESTART_TYPE_COLD_START = 2;
BrickletGPSV2.RESTART_TYPE_FACTORY_RESET = 3;
BrickletGPSV2.SATELLITE_SYSTEM_GPS = 0;
BrickletGPSV2.SATELLITE_SYSTEM_GLONASS = 1;
BrickletGPSV2.SATELLITE_SYSTEM_GALILEO = 2;
BrickletGPSV2.FIX_NO_FIX = 1;
BrickletGPSV2.FIX_2D_FIX = 2;
BrickletGPSV2.FIX_3D_FIX = 3;
BrickletGPSV2.FIX_LED_CONFIG_OFF = 0;
BrickletGPSV2.FIX_LED_CONFIG_ON = 1;
BrickletGPSV2.FIX_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletGPSV2.FIX_LED_CONFIG_SHOW_FIX = 3;
BrickletGPSV2.FIX_LED_CONFIG_SHOW_PPS = 4;
BrickletGPSV2.SBAS_ENABLED = 0;
BrickletGPSV2.SBAS_DISABLED = 1;
BrickletGPSV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletGPSV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletGPSV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletGPSV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletGPSV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletGPSV2.BOOTLOADER_STATUS_OK = 0;
BrickletGPSV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletGPSV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletGPSV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletGPSV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletGPSV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletGPSV2.STATUS_LED_CONFIG_OFF = 0;
BrickletGPSV2.STATUS_LED_CONFIG_ON = 1;
BrickletGPSV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletGPSV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletGPSV2(uid, ipcon) {
	//Determine position, velocity and altitude using GPS

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletGPSV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_COORDINATES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_ALTITUDE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_MOTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_DATE_TIME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_RESTART] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_SATELLITE_SYSTEM_STATUS_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_SATELLITE_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_SET_FIX_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_FIX_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_SET_COORDINATES_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_COORDINATES_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_SET_STATUS_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_STATUS_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_SET_MOTION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_MOTION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_SET_SBAS_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_SBAS_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletGPSV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletGPSV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletGPSV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletGPSV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletGPSV2.CALLBACK_PULSE_PER_SECOND] = '';
	this.callbackFormats[BrickletGPSV2.CALLBACK_COORDINATES] = 'I c I c';
	this.callbackFormats[BrickletGPSV2.CALLBACK_STATUS] = '? B';
	this.callbackFormats[BrickletGPSV2.CALLBACK_ALTITUDE] = 'i i';
	this.callbackFormats[BrickletGPSV2.CALLBACK_MOTION] = 'I I';
	this.callbackFormats[BrickletGPSV2.CALLBACK_DATE_TIME] = 'I I';


	this.streamStateObjects[BrickletGPSV2.FUNCTION_GET_SATELLITE_SYSTEM_STATUS_LOW_LEVEL] = {
		'dataMapping': ['streamLength', 'streamChunkData', null, null, null, null],
		'dataMappingStreamIn': [],
		'streamProperties': {
			'fixedLength': null,
			'singleChunk': true,
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
			'packFormatString': 'B',
			'unpackFormatString': 'B B12 B H H H',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.getCoordinates = function(returnCallback, errorCallback) {
		/*
		Returns the GPS coordinates. Latitude and longitude are given in the
		``DD.dddddd°`` format, the value 57123468 means 57.123468°.
		The parameter ``ns`` and ``ew`` are the cardinal directions for
		latitude and longitude. Possible values for ``ns`` and ``ew`` are 'N', 'S', 'E'
		and 'W' (north, south, east and west).
		
		This data is only valid if there is currently a fix as indicated by
		:func:`Get Status`.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_COORDINATES, [], '', 'I c I c', returnCallback, errorCallback, false);
	};
	this.getStatus = function(returnCallback, errorCallback) {
		/*
		Returns if a fix is currently available as well as the, the number of
		satellites that are in view.
		
		There is also a :ref:`green LED <gps_v2_bricklet_fix_led>` on the Bricklet that
		indicates the fix status.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_STATUS, [], '', '? B', returnCallback, errorCallback, false);
	};
	this.getAltitude = function(returnCallback, errorCallback) {
		/*
		Returns the current altitude and corresponding geoidal separation.
		
		Both values are given in cm.
		
		This data is only valid if there is currently a fix as indicated by
		:func:`Get Status`.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_ALTITUDE, [], '', 'i i', returnCallback, errorCallback, false);
	};
	this.getMotion = function(returnCallback, errorCallback) {
		/*
		Returns the current course and speed. Course is given in hundredths degree
		and speed is given in hundredths km/h. A course of 0° means the Bricklet is
		traveling north bound and 90° means it is traveling east bound.
		
		Please note that this only returns useful values if an actual movement
		is present.
		
		This data is only valid if there is currently a fix as indicated by
		:func:`Get Status`.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_MOTION, [], '', 'I I', returnCallback, errorCallback, false);
	};
	this.getDateTime = function(returnCallback, errorCallback) {
		/*
		Returns the current date and time. The date is
		given in the format ``ddmmyy`` and the time is given
		in the format ``hhmmss.sss``. For example, 140713 means
		14.05.13 as date and 195923568 means 19:59:23.568 as time.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_DATE_TIME, [], '', 'I I', returnCallback, errorCallback, false);
	};
	this.restart = function(restartType, returnCallback, errorCallback) {
		/*
		Restarts the GPS Bricklet, the following restart types are available:
		
		.. csv-table::
		 :header: "Value", "Description"
		 :widths: 10, 100
		
		 "0", "Hot start (use all available data in the NV store)"
		 "1", "Warm start (don't use ephemeris at restart)"
		 "2", "Cold start (don't use time, position, almanacs and ephemeris at restart)"
		 "3", "Factory reset (clear all system/user configurations at restart)"
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_RESTART, [restartType], 'B', '', returnCallback, errorCallback, false);
	};
	this.getSatelliteSystemStatusLowLevel = function(satelliteSystem, returnCallback, errorCallback) {
		/*
		Returns the
		
		* satellite numbers list (up to 12 items)
		* fix value,
		* PDOP value,
		* HDOP value and
		* VDOP value
		
		for a given satellite system. Currently GPS and GLONASS are supported, Galileo
		is not yet supported.
		
		The GPS and GLONASS satellites have unique numbers and the satellite list gives
		the numbers of the satellites that are currently utilized. The number 0 is not
		a valid satellite number and can be ignored in the list.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_SATELLITE_SYSTEM_STATUS_LOW_LEVEL, [satelliteSystem], 'B', 'B B12 B H H H', returnCallback, errorCallback, false);
	};
	this.getSatelliteStatus = function(satelliteSystem, satelliteNumber, returnCallback, errorCallback) {
		/*
		Returns the current
		
		* elevation (0° - 90°),
		* azimuth (0° - 359°) and
		* SNR (0dB - 99dB)
		
		for a given satellite and satellite system.
		
		The satellite number here always goes from 1 to 32. For GLONASS it corresponds to
		the satellites 65-96.
		
		Galileo is not yet supported.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_SATELLITE_STATUS, [satelliteSystem, satelliteNumber], 'B B', 'h h h', returnCallback, errorCallback, false);
	};
	this.setFixLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the fix LED configuration. By default the LED shows if
		the Bricklet got a GPS fix yet. If a fix is established the LED turns on.
		If there is no fix then the LED is turned off.
		
		You can also turn the LED permanently on/off, show a heartbeat or let it blink
		in sync with the PPS (pulse per second) output of the GPS module.
		
		If the Bricklet is in bootloader mode, the LED is off.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_SET_FIX_LED_CONFIG, [config], 'B', '', returnCallback, errorCallback, false);
	};
	this.getFixLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Fix LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_FIX_LED_CONFIG, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setCoordinatesCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Coordinates` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Coordinates` callback is only triggered if the coordinates changed
		since the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_SET_COORDINATES_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getCoordinatesCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Coordinates Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_COORDINATES_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setStatusCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Status` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Status` callback is only triggered if the status changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_SET_STATUS_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getStatusCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Status Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_STATUS_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setAltitudeCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Altitude` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Altitude` callback is only triggered if the altitude changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_SET_ALTITUDE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getAltitudeCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Altitude Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_ALTITUDE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setMotionCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Motion` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Motion` callback is only triggered if the motion changed since the
		last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_SET_MOTION_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getMotionCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Motion Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_MOTION_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setDateTimeCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Date Time` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Date Time` callback is only triggered if the date or time changed
		since the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_SET_DATE_TIME_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getDateTimeCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Date Time Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_DATE_TIME_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setSBASConfig = function(sbasConfig, returnCallback, errorCallback) {
		/*
		If `SBAS <https://en.wikipedia.org/wiki/GNSS_augmentation#Satellite-based_augmentation_system>`__ is enabled,
		the position accuracy increases (if SBAS satellites are in view),
		but the update rate is limited to 5Hz. With SBAS disabled the update rate is increased to 10Hz.
		
		By default SBAS is enabled and the update rate is 5Hz.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_SET_SBAS_CONFIG, [sbasConfig], 'B', '', returnCallback, errorCallback, false);
	};
	this.getSBASConfig = function(returnCallback, errorCallback) {
		/*
		Returns the SBAS configuration as set by :func:`Set SBAS Config`
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_SBAS_CONFIG, [], '', 'B', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 'I I I I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 'B', returnCallback, errorCallback, false);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', '', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 'B', returnCallback, errorCallback, false);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', '', returnCallback, errorCallback, false);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_RESET, [], '', '', returnCallback, errorCallback, false);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_WRITE_UID, [uid], 'I', '', returnCallback, errorCallback, false);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_READ_UID, [], '', 'I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletGPSV2.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};

	this.getSatelliteSystemStatus = function(satelliteSystem, returnCallback, errorCallback) {
		/*
		Returns the
		
		* satellite numbers list (up to 12 items)
		* fix value,
		* PDOP value,
		* HDOP value and
		* VDOP value
		
		for a given satellite system. Currently GPS and GLONASS are supported, Galileo
		is not yet supported.
		
		The GPS and GLONASS satellites have unique numbers and the satellite list gives
		the numbers of the satellites that are currently utilized. The number 0 is not
		a valid satellite number and can be ignored in the list.
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[7];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var satelliteNumbersLength = null;
					var satelliteNumbersChunkData = null;
					var satelliteNumbersOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var satelliteNumbersChunkOffset = null;
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
							satelliteNumbersChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							satelliteNumbersChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							satelliteNumbersLength = llvalues[i];
							break;
						}
					}

					satelliteNumbersChunkOffset = 0;

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(satelliteNumbersChunkData.splice(0, satelliteNumbersLength));
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
			                       BrickletGPSV2.FUNCTION_GET_SATELLITE_SYSTEM_STATUS_LOW_LEVEL,
			                       [satelliteSystem],
			                       'B',
			                       'B B12 B H H H',
			                       returnCallback,
			                       errorCallback,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.getSatelliteSystemStatus.call(device, satelliteSystem, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};
}

module.exports = BrickletGPSV2;
