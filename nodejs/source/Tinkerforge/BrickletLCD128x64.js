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

BrickletLCD128x64.DEVICE_IDENTIFIER = 298;
BrickletLCD128x64.DEVICE_DISPLAY_NAME = 'LCD 128x64 Bricklet';
BrickletLCD128x64.CALLBACK_TOUCH_POSITION = 11;
BrickletLCD128x64.CALLBACK_TOUCH_GESTURE = 15;
BrickletLCD128x64.CALLBACK_GUI_BUTTON_PRESSED = 25;
BrickletLCD128x64.CALLBACK_GUI_SLIDER_VALUE = 32;
BrickletLCD128x64.CALLBACK_GUI_TAB_SELECTED = 44;
BrickletLCD128x64.FUNCTION_WRITE_PIXELS_LOW_LEVEL = 1;
BrickletLCD128x64.FUNCTION_READ_PIXELS_LOW_LEVEL = 2;
BrickletLCD128x64.FUNCTION_CLEAR_DISPLAY = 3;
BrickletLCD128x64.FUNCTION_SET_DISPLAY_CONFIGURATION = 4;
BrickletLCD128x64.FUNCTION_GET_DISPLAY_CONFIGURATION = 5;
BrickletLCD128x64.FUNCTION_WRITE_LINE = 6;
BrickletLCD128x64.FUNCTION_DRAW_BUFFERED_FRAME = 7;
BrickletLCD128x64.FUNCTION_GET_TOUCH_POSITION = 8;
BrickletLCD128x64.FUNCTION_SET_TOUCH_POSITION_CALLBACK_CONFIGURATION = 9;
BrickletLCD128x64.FUNCTION_GET_TOUCH_POSITION_CALLBACK_CONFIGURATION = 10;
BrickletLCD128x64.FUNCTION_GET_TOUCH_GESTURE = 12;
BrickletLCD128x64.FUNCTION_SET_TOUCH_GESTURE_CALLBACK_CONFIGURATION = 13;
BrickletLCD128x64.FUNCTION_GET_TOUCH_GESTURE_CALLBACK_CONFIGURATION = 14;
BrickletLCD128x64.FUNCTION_DRAW_LINE = 16;
BrickletLCD128x64.FUNCTION_DRAW_BOX = 17;
BrickletLCD128x64.FUNCTION_DRAW_TEXT = 18;
BrickletLCD128x64.FUNCTION_SET_GUI_BUTTON = 19;
BrickletLCD128x64.FUNCTION_GET_GUI_BUTTON = 20;
BrickletLCD128x64.FUNCTION_REMOVE_GUI_BUTTON = 21;
BrickletLCD128x64.FUNCTION_SET_GUI_BUTTON_PRESSED_CALLBACK_CONFIGURATION = 22;
BrickletLCD128x64.FUNCTION_GET_GUI_BUTTON_PRESSED_CALLBACK_CONFIGURATION = 23;
BrickletLCD128x64.FUNCTION_GET_GUI_BUTTON_PRESSED = 24;
BrickletLCD128x64.FUNCTION_SET_GUI_SLIDER = 26;
BrickletLCD128x64.FUNCTION_GET_GUI_SLIDER = 27;
BrickletLCD128x64.FUNCTION_REMOVE_GUI_SLIDER = 28;
BrickletLCD128x64.FUNCTION_SET_GUI_SLIDER_VALUE_CALLBACK_CONFIGURATION = 29;
BrickletLCD128x64.FUNCTION_GET_GUI_SLIDER_VALUE_CALLBACK_CONFIGURATION = 30;
BrickletLCD128x64.FUNCTION_GET_GUI_SLIDER_VALUE = 31;
BrickletLCD128x64.FUNCTION_SET_GUI_TAB_CONFIGURATION = 33;
BrickletLCD128x64.FUNCTION_GET_GUI_TAB_CONFIGURATION = 34;
BrickletLCD128x64.FUNCTION_SET_GUI_TAB_TEXT = 35;
BrickletLCD128x64.FUNCTION_GET_GUI_TAB_TEXT = 36;
BrickletLCD128x64.FUNCTION_SET_GUI_TAB_ICON = 37;
BrickletLCD128x64.FUNCTION_GET_GUI_TAB_ICON = 38;
BrickletLCD128x64.FUNCTION_REMOVE_GUI_TAB = 39;
BrickletLCD128x64.FUNCTION_SET_GUI_TAB_SELECTED = 40;
BrickletLCD128x64.FUNCTION_SET_GUI_TAB_SELECTED_CALLBACK_CONFIGURATION = 41;
BrickletLCD128x64.FUNCTION_GET_GUI_TAB_SELECTED_CALLBACK_CONFIGURATION = 42;
BrickletLCD128x64.FUNCTION_GET_GUI_TAB_SELECTED = 43;
BrickletLCD128x64.FUNCTION_SET_GUI_GRAPH_CONFIGURATION = 45;
BrickletLCD128x64.FUNCTION_GET_GUI_GRAPH_CONFIGURATION = 46;
BrickletLCD128x64.FUNCTION_SET_GUI_GRAPH_DATA_LOW_LEVEL = 47;
BrickletLCD128x64.FUNCTION_GET_GUI_GRAPH_DATA_LOW_LEVEL = 48;
BrickletLCD128x64.FUNCTION_REMOVE_GUI_GRAPH = 49;
BrickletLCD128x64.FUNCTION_REMOVE_ALL_GUI = 50;
BrickletLCD128x64.FUNCTION_SET_TOUCH_LED_CONFIG = 51;
BrickletLCD128x64.FUNCTION_GET_TOUCH_LED_CONFIG = 52;
BrickletLCD128x64.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletLCD128x64.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletLCD128x64.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletLCD128x64.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletLCD128x64.FUNCTION_WRITE_FIRMWARE = 238;
BrickletLCD128x64.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletLCD128x64.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletLCD128x64.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletLCD128x64.FUNCTION_RESET = 243;
BrickletLCD128x64.FUNCTION_WRITE_UID = 248;
BrickletLCD128x64.FUNCTION_READ_UID = 249;
BrickletLCD128x64.FUNCTION_GET_IDENTITY = 255;
BrickletLCD128x64.GESTURE_LEFT_TO_RIGHT = 0;
BrickletLCD128x64.GESTURE_RIGHT_TO_LEFT = 1;
BrickletLCD128x64.GESTURE_TOP_TO_BOTTOM = 2;
BrickletLCD128x64.GESTURE_BOTTOM_TO_TOP = 3;
BrickletLCD128x64.COLOR_WHITE = false;
BrickletLCD128x64.COLOR_BLACK = true;
BrickletLCD128x64.FONT_6X8 = 0;
BrickletLCD128x64.FONT_6X16 = 1;
BrickletLCD128x64.FONT_6X24 = 2;
BrickletLCD128x64.FONT_6X32 = 3;
BrickletLCD128x64.FONT_12X16 = 4;
BrickletLCD128x64.FONT_12X24 = 5;
BrickletLCD128x64.FONT_12X32 = 6;
BrickletLCD128x64.FONT_18X24 = 7;
BrickletLCD128x64.FONT_18X32 = 8;
BrickletLCD128x64.FONT_24X32 = 9;
BrickletLCD128x64.DIRECTION_HORIZONTAL = 0;
BrickletLCD128x64.DIRECTION_VERTICAL = 1;
BrickletLCD128x64.CHANGE_TAB_ON_CLICK = 1;
BrickletLCD128x64.CHANGE_TAB_ON_SWIPE = 2;
BrickletLCD128x64.CHANGE_TAB_ON_CLICK_AND_SWIPE = 3;
BrickletLCD128x64.GRAPH_TYPE_DOT = 0;
BrickletLCD128x64.GRAPH_TYPE_LINE = 1;
BrickletLCD128x64.GRAPH_TYPE_BAR = 2;
BrickletLCD128x64.TOUCH_LED_CONFIG_OFF = 0;
BrickletLCD128x64.TOUCH_LED_CONFIG_ON = 1;
BrickletLCD128x64.TOUCH_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletLCD128x64.TOUCH_LED_CONFIG_SHOW_TOUCH = 3;
BrickletLCD128x64.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletLCD128x64.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletLCD128x64.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletLCD128x64.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletLCD128x64.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletLCD128x64.BOOTLOADER_STATUS_OK = 0;
BrickletLCD128x64.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletLCD128x64.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletLCD128x64.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletLCD128x64.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletLCD128x64.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletLCD128x64.STATUS_LED_CONFIG_OFF = 0;
BrickletLCD128x64.STATUS_LED_CONFIG_ON = 1;
BrickletLCD128x64.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletLCD128x64.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletLCD128x64(uid, ipcon) {
	//7.1cm (2.8") display with 128x64 pixel and touch screen

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletLCD128x64.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletLCD128x64.FUNCTION_WRITE_PIXELS_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_READ_PIXELS_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_CLEAR_DISPLAY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_DISPLAY_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_DISPLAY_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_WRITE_LINE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_DRAW_BUFFERED_FRAME] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_TOUCH_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_TOUCH_POSITION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_TOUCH_POSITION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_TOUCH_GESTURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_TOUCH_GESTURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_TOUCH_GESTURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_DRAW_LINE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_DRAW_BOX] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_DRAW_TEXT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_GUI_BUTTON] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_GUI_BUTTON] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_REMOVE_GUI_BUTTON] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_GUI_BUTTON_PRESSED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_GUI_BUTTON_PRESSED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_GUI_BUTTON_PRESSED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_GUI_SLIDER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_GUI_SLIDER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_REMOVE_GUI_SLIDER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_GUI_SLIDER_VALUE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_GUI_SLIDER_VALUE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_GUI_SLIDER_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_GUI_TAB_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_GUI_TAB_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_GUI_TAB_TEXT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_GUI_TAB_TEXT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_GUI_TAB_ICON] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_GUI_TAB_ICON] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_REMOVE_GUI_TAB] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_GUI_TAB_SELECTED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_GUI_TAB_SELECTED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_GUI_TAB_SELECTED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_GUI_TAB_SELECTED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_GUI_GRAPH_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_GUI_GRAPH_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_GUI_GRAPH_DATA_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_GUI_GRAPH_DATA_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_REMOVE_GUI_GRAPH] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_REMOVE_ALL_GUI] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_TOUCH_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_TOUCH_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD128x64.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletLCD128x64.CALLBACK_TOUCH_POSITION] = 'H H H I';
	this.callbackFormats[BrickletLCD128x64.CALLBACK_TOUCH_GESTURE] = 'B I H H H H H I';
	this.callbackFormats[BrickletLCD128x64.CALLBACK_GUI_BUTTON_PRESSED] = 'B ?';
	this.callbackFormats[BrickletLCD128x64.CALLBACK_GUI_SLIDER_VALUE] = 'B B';
	this.callbackFormats[BrickletLCD128x64.CALLBACK_GUI_TAB_SELECTED] = 'b';


	this.streamStateObjects[BrickletLCD128x64.FUNCTION_WRITE_PIXELS_LOW_LEVEL] = {
		'dataMapping': [],
		'dataMappingStreamIn': [null, null, null, null, 'streamLength', 'streamChunkOffset', 'streamChunkData'],
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
			'packFormatString': 'B B B B H H ?448',
			'unpackFormatString': '',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletLCD128x64.FUNCTION_READ_PIXELS_LOW_LEVEL] = {
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
			'packFormatString': 'B B B B',
			'unpackFormatString': 'H H ?480',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletLCD128x64.FUNCTION_SET_GUI_GRAPH_DATA_LOW_LEVEL] = {
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
			'packFormatString': 'B H H B59',
			'unpackFormatString': '',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletLCD128x64.FUNCTION_GET_GUI_GRAPH_DATA_LOW_LEVEL] = {
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
			'packFormatString': 'B',
			'unpackFormatString': 'H H B59',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.writePixelsLowLevel = function(xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData, returnCallback, errorCallback) {
		/*
		Writes pixels to the specified window.
		
		The x-axis goes from 0 to 127 and the y-axis from 0 to 63. The pixels are written
		into the window line by line top to bottom and each line is written from left to
		right.
		
		If automatic draw is enabled (default) the pixels are directly written to
		the screen. Only pixels that have actually changed are updated on the screen,
		the rest stays the same.
		
		If automatic draw is disabled the pixels are written to an internal buffer and
		the buffer is transferred to the display only after :func:`Draw Buffered Frame`
		is called. This can be used to avoid flicker when drawing a complex frame in
		multiple steps.
		
		Automatic draw can be configured with the :func:`Set Display Configuration`
		function.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_WRITE_PIXELS_LOW_LEVEL, [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData], 'B B B B H H ?448', '', returnCallback, errorCallback, false);
	};
	this.readPixelsLowLevel = function(xStart, yStart, xEnd, yEnd, returnCallback, errorCallback) {
		/*
		Reads pixels from the specified window.
		
		The x-axis goes from 0 to 127 and the y-axis from 0 to 63. The pixels are read
		from the window line by line top to bottom and each line is read from left to
		right.
		
		If automatic draw is enabled (default) the pixels that are read are always the
		same that are shown on the display.
		
		If automatic draw is disabled the pixels are read from the internal buffer
		(see :func:`Draw Buffered Frame`).
		
		Automatic draw can be configured with the :func:`Set Display Configuration`
		function.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_READ_PIXELS_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'B B B B', 'H H ?480', returnCallback, errorCallback, false);
	};
	this.clearDisplay = function(returnCallback, errorCallback) {
		/*
		Clears the complete content of the display.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_CLEAR_DISPLAY, [], '', '', returnCallback, errorCallback, false);
	};
	this.setDisplayConfiguration = function(contrast, backlight, invert, automaticDraw, returnCallback, errorCallback) {
		/*
		Sets the configuration of the display.
		
		You can set a contrast value from 0 to 63, a backlight intensity value
		from 0 to 100 and you can invert the color (white/black) of the display.
		
		If automatic draw is set to *true*, the display is automatically updated with every
		call of :func:`Write Pixels` and :func:`Write Line`. If it is set to false, the
		changes are written into an internal buffer and only shown on the display after
		a call of :func:`Draw Buffered Frame`.
		
		The default values are contrast 14, backlight intensity 100, inverting off
		and automatic draw on.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_DISPLAY_CONFIGURATION, [contrast, backlight, invert, automaticDraw], 'B B ? ?', '', returnCallback, errorCallback, false);
	};
	this.getDisplayConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Display Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_DISPLAY_CONFIGURATION, [], '', 'B B ? ?', returnCallback, errorCallback, false);
	};
	this.writeLine = function(line, position, text, returnCallback, errorCallback) {
		/*
		Writes text to a specific line (0 to 7) with a specific position
		(0 to 21). The text can have a maximum of 22 characters.
		
		For example: (1, 10, "Hello") will write *Hello* in the middle of the
		second line of the display.
		
		The display uses a special 5x7 pixel charset. You can view the characters
		of the charset in Brick Viewer.
		
		This function is a 1:1 replacement for the function with the same name
		in the LCD 20x4 Bricklet. You can draw text at a specific pixel position
		and with different font sizes with the :func:`Draw Text` function.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_WRITE_LINE, [line, position, text], 'B B s22', '', returnCallback, errorCallback, false);
	};
	this.drawBufferedFrame = function(forceCompleteRedraw, returnCallback, errorCallback) {
		/*
		Draws the currently buffered frame. Normally each call of :func:`Write Pixels` and
		:func:`Write Line` draws directly onto the display. If you turn automatic draw off
		(:func:`Set Display Configuration`), the data is written in an internal buffer and
		only transferred to the display by calling this function. This can be used to
		avoid flicker when drawing a complex frame in multiple steps.
		
		Set the `force complete redraw` to *true* to redraw the whole display
		instead of only the changed parts. Normally it should not be necessary to set this to
		*true*. It may only become necessary in case of stuck pixels because of errors.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_DRAW_BUFFERED_FRAME, [forceCompleteRedraw], '?', '', returnCallback, errorCallback, false);
	};
	this.getTouchPosition = function(returnCallback, errorCallback) {
		/*
		Returns the last valid touch position:
		
		* Pressure: Amount of pressure applied by the user (0-300)
		* X: Touch position on x-axis (0-127)
		* Y: Touch position on y-axis (0-63)
		* Age: Age of touch press in ms (how long ago it was)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_TOUCH_POSITION, [], '', 'H H H I', returnCallback, errorCallback, false);
	};
	this.setTouchPositionCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period in ms is the period with which the :cb:`Touch Position` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		The default value is (0, false).
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_TOUCH_POSITION_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', '', returnCallback, errorCallback, false);
	};
	this.getTouchPositionCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set Touch Position Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_TOUCH_POSITION_CALLBACK_CONFIGURATION, [], '', 'I ?', returnCallback, errorCallback, false);
	};
	this.getTouchGesture = function(returnCallback, errorCallback) {
		/*
		Returns one of four touch gestures that can be automatically detected by the Bricklet.
		
		The gestures are swipes from left to right, right to left, top to bottom and bottom to top.
		
		Additionally to the gestures a vector with a start and end position of the gesture is
		provided. You can use this vector do determine a more exact location of the gesture (e.g.
		the swipe from top to bottom was on the left or right part of the screen).
		
		The age parameter corresponds to the age of gesture in ms (how long ago it was).
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_TOUCH_GESTURE, [], '', 'B I H H H H H I', returnCallback, errorCallback, false);
	};
	this.setTouchGestureCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period in ms is the period with which the :cb:`Touch Gesture` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		The default value is (0, false).
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_TOUCH_GESTURE_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', '', returnCallback, errorCallback, false);
	};
	this.getTouchGestureCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set Touch Gesture Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_TOUCH_GESTURE_CALLBACK_CONFIGURATION, [], '', 'I ?', returnCallback, errorCallback, false);
	};
	this.drawLine = function(positionXStart, positionYStart, positionXEnd, positionYEnd, color, returnCallback, errorCallback) {
		/*
		Draws a white or black line from (x, y)-start to (x, y)-end.
		The x values have to be within the range of 0 to 127 and the y
		values have t be within the range of 0 to 63.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_DRAW_LINE, [positionXStart, positionYStart, positionXEnd, positionYEnd, color], 'B B B B ?', '', returnCallback, errorCallback, false);
	};
	this.drawBox = function(positionXStart, positionYStart, positionXEnd, positionYEnd, fill, color, returnCallback, errorCallback) {
		/*
		Draws a white or black box from (x, y)-start to (x, y)-end.
		The x values have to be within the range of 0 to 127 and the y
		values have to be within the range of 0 to 63.
		
		If you set fill to true, the box will be filled with the
		color. Otherwise only the outline will be drawn.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_DRAW_BOX, [positionXStart, positionYStart, positionXEnd, positionYEnd, fill, color], 'B B B B ? ?', '', returnCallback, errorCallback, false);
	};
	this.drawText = function(positionX, positionY, font, color, text, returnCallback, errorCallback) {
		/*
		Draws a text with up to 22 characters at the pixel position (x, y).
		
		The x values have to be within the range of 0 to 127 and the y
		values have to be within the range of 0 to 63.
		
		You can use one of 9 different font sizes and draw the text in white or black.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_DRAW_TEXT, [positionX, positionY, font, color, text], 'B B B ? s22', '', returnCallback, errorCallback, false);
	};
	this.setGUIButton = function(index, positionX, positionY, width, height, text, returnCallback, errorCallback) {
		/*
		Draws a clickable button at position (x, y) with the given text
		of up to 16 characters.
		
		You can use up to 12 buttons (index 0-11).
		
		The x position + width has to be within the range of 1 to 128 and the y
		position + height has to be within the range of 1 to 64.
		
		The minimum useful width/height of a button is 3.
		
		You can enable a callback for a button press with
		:func:`Set GUI Button Pressed Callback Configuration`. The callback will
		be triggered for press and release-events.
		
		The button is drawn in a separate GUI buffer and the button-frame will
		always stay on top of the graphics drawn with :func:`Write Pixels`. To
		remove the button use :func:`Remove GUI Button`.
		
		If you want an icon instead of text, you can draw the icon inside of the
		button with :func:`Write Pixels`.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_GUI_BUTTON, [index, positionX, positionY, width, height, text], 'B B B B B s16', '', returnCallback, errorCallback, false);
	};
	this.getGUIButton = function(index, returnCallback, errorCallback) {
		/*
		Returns the button properties for a given `Index` as set by :func:`Set GUI Button`.
		
		Additionally the `Active` parameter shows if a button is currently active/visible
		or not.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_GUI_BUTTON, [index], 'B', '? B B B B s16', returnCallback, errorCallback, false);
	};
	this.removeGUIButton = function(index, returnCallback, errorCallback) {
		/*
		Removes the button with the given index.
		
		You can use index 255 to remove all buttons.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_REMOVE_GUI_BUTTON, [index], 'B', '', returnCallback, errorCallback, false);
	};
	this.setGUIButtonPressedCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period in ms is the period with which the :cb:`GUI Button Pressed` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		The default value is (0, false).
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_GUI_BUTTON_PRESSED_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', '', returnCallback, errorCallback, false);
	};
	this.getGUIButtonPressedCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set GUI Button Pressed Callback Configuration`.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_GUI_BUTTON_PRESSED_CALLBACK_CONFIGURATION, [], '', 'I ?', returnCallback, errorCallback, false);
	};
	this.getGUIButtonPressed = function(index, returnCallback, errorCallback) {
		/*
		Returns the state of the button for the given index.
		
		The state can either be pressed (true) or released (false).
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_GUI_BUTTON_PRESSED, [index], 'B', '?', returnCallback, errorCallback, false);
	};
	this.setGUISlider = function(index, positionX, positionY, length, direction, value, returnCallback, errorCallback) {
		/*
		Draws a slider at position (x, y) with the given length.
		
		You can use up to 6 sliders (index 0-5).
		
		If you use the horizontal direction, the x position + length has to be
		within the range of 1 to 128 and the y position has to be within
		the range of 0 to 46.
		
		If you use the vertical direction, the y position + length has to be
		within the range of 1 to 64 and the x position has to be within
		the range of 0 to 110.
		
		The minimum length of a slider is 8.
		
		The parameter value is the start-position of the slider, it can
		be between 0 and length-8.
		
		You can enable a callback for the slider value with
		:func:`Set GUI Slider Value Callback Configuration`.
		
		The slider is drawn in a separate GUI buffer and it will
		always stay on top of the graphics drawn with :func:`Write Pixels`. To
		remove the button use :func:`Remove GUI Slider`.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_GUI_SLIDER, [index, positionX, positionY, length, direction, value], 'B B B B B B', '', returnCallback, errorCallback, false);
	};
	this.getGUISlider = function(index, returnCallback, errorCallback) {
		/*
		Returns the slider properties for a given `Index` as set by :func:`Set GUI Slider`.
		
		Additionally the `Active` parameter shows if a button is currently active/visible
		or not.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_GUI_SLIDER, [index], 'B', '? B B B B B', returnCallback, errorCallback, false);
	};
	this.removeGUISlider = function(index, returnCallback, errorCallback) {
		/*
		Removes the slider with the given index.
		
		You can use index 255 to remove all slider.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_REMOVE_GUI_SLIDER, [index], 'B', '', returnCallback, errorCallback, false);
	};
	this.setGUISliderValueCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period in ms is the period with which the :cb:`GUI Slider Value` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		The default value is (0, false).
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_GUI_SLIDER_VALUE_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', '', returnCallback, errorCallback, false);
	};
	this.getGUISliderValueCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set GUI Slider Value Callback Configuration`.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_GUI_SLIDER_VALUE_CALLBACK_CONFIGURATION, [], '', 'I ?', returnCallback, errorCallback, false);
	};
	this.getGUISliderValue = function(index, returnCallback, errorCallback) {
		/*
		Returns the current slider value for the given index.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_GUI_SLIDER_VALUE, [index], 'B', 'B', returnCallback, errorCallback, false);
	};
	this.setGUITabConfiguration = function(changeTabConfig, clearGUI, returnCallback, errorCallback) {
		/*
		Sets the general configuration for tabs. You can configure the tabs to only
		accept clicks or only swipes (gesture left/right and right/left) or both.
		
		Additionally, if you set `Clear GUI` to true, all of the GUI elements (buttons,
		slider, graphs) will automatically be removed on every tab change.
		
		By default click and swipe as well as automatic GUI clear is enabled.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_GUI_TAB_CONFIGURATION, [changeTabConfig, clearGUI], 'B ?', '', returnCallback, errorCallback, false);
	};
	this.getGUITabConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the tab configuration as set by :func:`Set GUI Tab Configuration`.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_GUI_TAB_CONFIGURATION, [], '', 'B ?', returnCallback, errorCallback, false);
	};
	this.setGUITabText = function(index, text, returnCallback, errorCallback) {
		/*
		Adds a text-tab with the given index. The text can have a length of up to 5 characters.
		
		You can use up to 10 tabs (index 0-9).
		
		A text-tab with the same index as a icon-tab will overwrite the icon-tab.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_GUI_TAB_TEXT, [index, text], 'B s5', '', returnCallback, errorCallback, false);
	};
	this.getGUITabText = function(index, returnCallback, errorCallback) {
		/*
		Returns the text for a given index as set by :func:`Set GUI Tab Text`.
		
		Additionally the `Active` parameter shows if the tab is currently active/visible
		or not.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_GUI_TAB_TEXT, [index], 'B', '? s5', returnCallback, errorCallback, false);
	};
	this.setGUITabIcon = function(index, icon, returnCallback, errorCallback) {
		/*
		Adds a icon-tab with the given index. The icon can have a width of 28 pixels
		with a height of 6 pixels. It is drawn line-by-line from left to right.
		
		You can use up to 10 tabs (index 0-9).
		
		A icon-tab with the same index as a text-tab will overwrite the text-tab.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_GUI_TAB_ICON, [index, icon], 'B ?168', '', returnCallback, errorCallback, false);
	};
	this.getGUITabIcon = function(index, returnCallback, errorCallback) {
		/*
		Returns the icon for a given index as set by :func:`Set GUI Tab Icon`.
		
		Additionally the `Active` parameter shows if the tab is currently active/visible
		or not.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_GUI_TAB_ICON, [index], 'B', '? ?168', returnCallback, errorCallback, false);
	};
	this.removeGUITab = function(index, returnCallback, errorCallback) {
		/*
		Removes the tab with the given index.
		
		You can use index 255 to remove all tabs.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_REMOVE_GUI_TAB, [index], 'B', '', returnCallback, errorCallback, false);
	};
	this.setGUITabSelected = function(index, returnCallback, errorCallback) {
		/*
		Sets the tab with the given index as selected (drawn as selected on the display).
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_GUI_TAB_SELECTED, [index], 'B', '', returnCallback, errorCallback, false);
	};
	this.setGUITabSelectedCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period in ms is the period with which the :cb:`GUI Tab Selected` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		The default value is (0, false).
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_GUI_TAB_SELECTED_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', '', returnCallback, errorCallback, false);
	};
	this.getGUITabSelectedCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set GUI Tab Selected Callback Configuration`.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_GUI_TAB_SELECTED_CALLBACK_CONFIGURATION, [], '', 'I ?', returnCallback, errorCallback, false);
	};
	this.getGUITabSelected = function(returnCallback, errorCallback) {
		/*
		Returns the index of the currently selected tab.
		If there are not tabs, the returned index is -1.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_GUI_TAB_SELECTED, [], '', 'b', returnCallback, errorCallback, false);
	};
	this.setGUIGraphConfiguration = function(index, graphType, positionX, positionY, width, height, textX, textY, returnCallback, errorCallback) {
		/*
		Sets the configuration for up to four graphs (index 0-3).
		
		The graph type can be dot-, line- or bar-graph.
		
		The x and y position are pixel positions. They have to be within
		the range of (0, 0) to (127, 63). The maximum width is 118 and the
		maximum height is 63.
		
		You can add a text for the x and y axis with at most 4 characters each.
		The text is drawn at the inside of the graph and it can overwrite some
		of the graph data. If you need the text outside of the graph you can
		leave this text here empty and use :func:`Draw Text` to draw the caption
		outside of the graph.
		
		The data of the graph can be set and updated with :func:`Set GUI Graph Data`.
		
		The graph is drawn in a separate GUI buffer and the graph-frame and data will
		always stay on top of the graphics drawn with :func:`Write Pixels`. To
		remove the graph use :func:`Remove GUI Graph`.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_GUI_GRAPH_CONFIGURATION, [index, graphType, positionX, positionY, width, height, textX, textY], 'B B B B B B s4 s4', '', returnCallback, errorCallback, false);
	};
	this.getGUIGraphConfiguration = function(index, returnCallback, errorCallback) {
		/*
		Returns the graph properties for a given `Index` as set by :func:`Set GUI Graph Configuration`.
		
		Additionally the `Active` parameter shows if a graph is currently active/visible
		or not.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_GUI_GRAPH_CONFIGURATION, [index], 'B', '? B B B B B s4 s4', returnCallback, errorCallback, false);
	};
	this.setGUIGraphDataLowLevel = function(index, dataLength, dataChunkOffset, dataChunkData, returnCallback, errorCallback) {
		/*
		Sets the data for a graph with the given index. You have to configure the graph with
		:func:`Set GUI Graph Configuration` before you can set the first data.
		
		The graph will show the first n values of the data that you set, where
		n is the width set with :func:`Set GUI Graph Configuration`. If you set
		less then n values it will show the rest of the values as zero.
		
		The maximum number of data-points you can set is 118 (which also corresponds to the
		maximum width of the graph).
		
		You have to scale your values to be between 0 and 255. 0 will be shown
		at the bottom of the graph and 255 at the top.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_GUI_GRAPH_DATA_LOW_LEVEL, [index, dataLength, dataChunkOffset, dataChunkData], 'B H H B59', '', returnCallback, errorCallback, false);
	};
	this.getGUIGraphDataLowLevel = function(index, returnCallback, errorCallback) {
		/*
		Returns the graph data for a given index as set by :func:`Set GUI Graph Data`.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_GUI_GRAPH_DATA_LOW_LEVEL, [index], 'B', 'H H B59', returnCallback, errorCallback, false);
	};
	this.removeGUIGraph = function(index, returnCallback, errorCallback) {
		/*
		Removes the graph with the given index.
		
		You can use index 255 to remove all graphs.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_REMOVE_GUI_GRAPH, [index], 'B', '', returnCallback, errorCallback, false);
	};
	this.removeAllGUI = function(returnCallback, errorCallback) {
		/*
		Removes all GUI elements (buttons, slider, graphs, tabs).
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_REMOVE_ALL_GUI, [], '', '', returnCallback, errorCallback, false);
	};
	this.setTouchLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the touch LED configuration. By default the LED is on if the
		LCD is touched.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is off.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_TOUCH_LED_CONFIG, [config], 'B', '', returnCallback, errorCallback, false);
	};
	this.getTouchLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Touch LED Config`
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_TOUCH_LED_CONFIG, [], '', 'B', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 'I I I I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 'B', returnCallback, errorCallback, false);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_BOOTLOADER_MODE, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', '', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 'B', returnCallback, errorCallback, false);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', '', returnCallback, errorCallback, false);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_RESET, [], '', '', returnCallback, errorCallback, false);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_WRITE_UID, [uid], 'I', '', returnCallback, errorCallback, false);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_READ_UID, [], '', 'I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletLCD128x64.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
	this.writePixels = function(xStart, yStart, xEnd, yEnd, pixels, returnCallback, errorCallback) {
		/*
		Writes pixels to the specified window.
		
		The x-axis goes from 0 to 127 and the y-axis from 0 to 63. The pixels are written
		into the window line by line top to bottom and each line is written from left to
		right.
		
		If automatic draw is enabled (default) the pixels are directly written to
		the screen. Only pixels that have actually changed are updated on the screen,
		the rest stays the same.
		
		If automatic draw is disabled the pixels are written to an internal buffer and
		the buffer is transferred to the display only after :func:`Draw Buffered Frame`
		is called. This can be used to avoid flicker when drawing a complex frame in
		multiple steps.
		
		Automatic draw can be configured with the :func:`Set Display Configuration`
		function.
		*/

		var pixelsLength = 0;
		var pixelsChunkData = [];
		var pixelsChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[1];

		if (pixels.length > 65535) {
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
				pixelsLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				pixelsLength = pixels.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				pixelsChunkData =
					this.ipcon.createChunkData(pixels, 0, 448, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletLCD128x64.FUNCTION_WRITE_PIXELS_LOW_LEVEL,
				                       [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData],
				                       'B B B B H H ?448',
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false);
			}
			else {
				while (pixelsChunkOffset < pixels.length) {
					pixelsChunkData =
						this.ipcon.createChunkData(pixels, pixelsChunkOffset, 448, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletLCD128x64.FUNCTION_WRITE_PIXELS_LOW_LEVEL,
					                       [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData],
					                       'B B B B H H ?448',
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false);

					pixelsChunkOffset += 448;
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
					var pixelsLength = 0;
					var pixelsChunkData = [];
					var pixelsChunkOffset = 0;

					function doNextLLCall() {
						pixelsLength = streamStateObject['responseProperties']['data'].length;
						pixelsChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						pixelsChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = pixelsLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = pixelsChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = pixelsChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletLCD128x64.FUNCTION_WRITE_PIXELS_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'B B B B H H ?448',
						                         '',
						                         returnCallback,
						                         errorCallback,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 448;
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
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 448)) {
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
				                                                           pixels);

				if (streamStateObject['streamProperties']['fixedLength']) {
					pixelsLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					pixelsLength = pixels.length;
				}

				pixelsChunkOffset = 0;
				pixelsChunkData =
					this.ipcon.createChunkData(pixels, 0, 448, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 448;
				streamStateObject['responseProperties']['streamInChunkLength'] = 448;
				streamStateObject['responseProperties']['streamInLLParams'] = [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletLCD128x64.FUNCTION_WRITE_PIXELS_LOW_LEVEL,
				                       [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData],
				                       'B B B B H H ?448',
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.writePixels.call(device, xStart, yStart, xEnd, yEnd, pixels, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};

	this.readPixels = function(xStart, yStart, xEnd, yEnd, returnCallback, errorCallback) {
		/*
		Reads pixels from the specified window.
		
		The x-axis goes from 0 to 127 and the y-axis from 0 to 63. The pixels are read
		from the window line by line top to bottom and each line is read from left to
		right.
		
		If automatic draw is enabled (default) the pixels that are read are always the
		same that are shown on the display.
		
		If automatic draw is disabled the pixels are read from the internal buffer
		(see :func:`Draw Buffered Frame`).
		
		Automatic draw can be configured with the :func:`Set Display Configuration`
		function.
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
					var pixelsLength = null;
					var pixelsChunkData = null;
					var pixelsOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var pixelsChunkOffset = null;
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
							pixelsChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							pixelsChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							pixelsLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((pixelsChunkOffset + 480) < pixelsLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletLCD128x64.FUNCTION_READ_PIXELS_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'B B B B', 'H H ?480', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

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
						pixelsOutOfSync = (pixelsChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = pixelsChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!pixelsOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < pixelsLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletLCD128x64.FUNCTION_READ_PIXELS_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'B B B B', 'H H ?480', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

							        return;
							}
						}
						else {
							pixelsOutOfSync =
								(pixelsChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!pixelsOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < pixelsLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(pixelsChunkData);

									if (streamStateObject['responseProperties']['data'].length >= pixelsLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, pixelsLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletLCD128x64.FUNCTION_READ_PIXELS_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'B B B B', 'H H ?480', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (pixelsOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, pixelsLength));
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
			                       BrickletLCD128x64.FUNCTION_READ_PIXELS_LOW_LEVEL,
			                       [xStart, yStart, xEnd, yEnd],
			                       'B B B B',
			                       'H H ?480',
			                       returnCallback,
			                       errorCallback,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.readPixels.call(device, xStart, yStart, xEnd, yEnd, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};
	this.setGUIGraphData = function(index, data, returnCallback, errorCallback) {
		/*
		Sets the data for a graph with the given index. You have to configure the graph with
		:func:`Set GUI Graph Configuration` before you can set the first data.
		
		The graph will show the first n values of the data that you set, where
		n is the width set with :func:`Set GUI Graph Configuration`. If you set
		less then n values it will show the rest of the values as zero.
		
		The maximum number of data-points you can set is 118 (which also corresponds to the
		maximum width of the graph).
		
		You have to scale your values to be between 0 and 255. 0 will be shown
		at the bottom of the graph and 255 at the top.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/

		var dataLength = 0;
		var dataChunkData = [];
		var dataChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[47];

		if (data.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			this.resetStreamStateObject(streamStateObject);

			if (streamStateObject['responseProperties']['callQueue'].length > 0) {
				streamStateObject['responseProperties']['callQueue'].shift()(device);
			}

			return;
		}

		if (!this.getResponseExpected(47)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				dataLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				dataLength = data.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				dataChunkData =
					this.ipcon.createChunkData(data, 0, 59, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletLCD128x64.FUNCTION_SET_GUI_GRAPH_DATA_LOW_LEVEL,
				                       [index, dataLength, dataChunkOffset, dataChunkData],
				                       'B H H B59',
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false);
			}
			else {
				while (dataChunkOffset < data.length) {
					dataChunkData =
						this.ipcon.createChunkData(data, dataChunkOffset, 59, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletLCD128x64.FUNCTION_SET_GUI_GRAPH_DATA_LOW_LEVEL,
					                       [index, dataLength, dataChunkOffset, dataChunkData],
					                       'B H H B59',
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false);

					dataChunkOffset += 59;
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
					var dataLength = 0;
					var dataChunkData = [];
					var dataChunkOffset = 0;

					function doNextLLCall() {
						dataLength = streamStateObject['responseProperties']['data'].length;
						dataChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						dataChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = dataLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = dataChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = dataChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletLCD128x64.FUNCTION_SET_GUI_GRAPH_DATA_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'B H H B59',
						                         '',
						                         returnCallback,
						                         errorCallback,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 59;
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
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 59)) {
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
				                                                           data);

				if (streamStateObject['streamProperties']['fixedLength']) {
					dataLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					dataLength = data.length;
				}

				dataChunkOffset = 0;
				dataChunkData =
					this.ipcon.createChunkData(data, 0, 59, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 59;
				streamStateObject['responseProperties']['streamInChunkLength'] = 59;
				streamStateObject['responseProperties']['streamInLLParams'] = [index, dataLength, dataChunkOffset, dataChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletLCD128x64.FUNCTION_SET_GUI_GRAPH_DATA_LOW_LEVEL,
				                       [index, dataLength, dataChunkOffset, dataChunkData],
				                       'B H H B59',
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.setGUIGraphData.call(device, index, data, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};

	this.getGUIGraphData = function(index, returnCallback, errorCallback) {
		/*
		Returns the graph data for a given index as set by :func:`Set GUI Graph Data`.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[48];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var dataLength = null;
					var dataChunkData = null;
					var dataOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var dataChunkOffset = null;
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
							dataChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							dataChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							dataLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((dataChunkOffset + 59) < dataLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletLCD128x64.FUNCTION_GET_GUI_GRAPH_DATA_LOW_LEVEL, [index], 'B', 'H H B59', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

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
						dataOutOfSync = (dataChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = dataChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!dataOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < dataLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletLCD128x64.FUNCTION_GET_GUI_GRAPH_DATA_LOW_LEVEL, [index], 'B', 'H H B59', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

							        return;
							}
						}
						else {
							dataOutOfSync =
								(dataChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!dataOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < dataLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(dataChunkData);

									if (streamStateObject['responseProperties']['data'].length >= dataLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, dataLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletLCD128x64.FUNCTION_GET_GUI_GRAPH_DATA_LOW_LEVEL, [index], 'B', 'H H B59', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (dataOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, dataLength));
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
			                       BrickletLCD128x64.FUNCTION_GET_GUI_GRAPH_DATA_LOW_LEVEL,
			                       [index],
			                       'B',
			                       'H H B59',
			                       returnCallback,
			                       errorCallback,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.getGUIGraphData.call(device, index, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};
}

module.exports = BrickletLCD128x64;
