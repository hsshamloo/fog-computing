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

BrickletLaserRangeFinder.DEVICE_IDENTIFIER = 255;
BrickletLaserRangeFinder.DEVICE_DISPLAY_NAME = 'Laser Range Finder Bricklet';
BrickletLaserRangeFinder.CALLBACK_DISTANCE = 20;
BrickletLaserRangeFinder.CALLBACK_VELOCITY = 21;
BrickletLaserRangeFinder.CALLBACK_DISTANCE_REACHED = 22;
BrickletLaserRangeFinder.CALLBACK_VELOCITY_REACHED = 23;
BrickletLaserRangeFinder.FUNCTION_GET_DISTANCE = 1;
BrickletLaserRangeFinder.FUNCTION_GET_VELOCITY = 2;
BrickletLaserRangeFinder.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD = 3;
BrickletLaserRangeFinder.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD = 4;
BrickletLaserRangeFinder.FUNCTION_SET_VELOCITY_CALLBACK_PERIOD = 5;
BrickletLaserRangeFinder.FUNCTION_GET_VELOCITY_CALLBACK_PERIOD = 6;
BrickletLaserRangeFinder.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD = 7;
BrickletLaserRangeFinder.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD = 8;
BrickletLaserRangeFinder.FUNCTION_SET_VELOCITY_CALLBACK_THRESHOLD = 9;
BrickletLaserRangeFinder.FUNCTION_GET_VELOCITY_CALLBACK_THRESHOLD = 10;
BrickletLaserRangeFinder.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletLaserRangeFinder.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletLaserRangeFinder.FUNCTION_SET_MOVING_AVERAGE = 13;
BrickletLaserRangeFinder.FUNCTION_GET_MOVING_AVERAGE = 14;
BrickletLaserRangeFinder.FUNCTION_SET_MODE = 15;
BrickletLaserRangeFinder.FUNCTION_GET_MODE = 16;
BrickletLaserRangeFinder.FUNCTION_ENABLE_LASER = 17;
BrickletLaserRangeFinder.FUNCTION_DISABLE_LASER = 18;
BrickletLaserRangeFinder.FUNCTION_IS_LASER_ENABLED = 19;
BrickletLaserRangeFinder.FUNCTION_GET_SENSOR_HARDWARE_VERSION = 24;
BrickletLaserRangeFinder.FUNCTION_SET_CONFIGURATION = 25;
BrickletLaserRangeFinder.FUNCTION_GET_CONFIGURATION = 26;
BrickletLaserRangeFinder.FUNCTION_GET_IDENTITY = 255;
BrickletLaserRangeFinder.THRESHOLD_OPTION_OFF = 'x';
BrickletLaserRangeFinder.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletLaserRangeFinder.THRESHOLD_OPTION_INSIDE = 'i';
BrickletLaserRangeFinder.THRESHOLD_OPTION_SMALLER = '<';
BrickletLaserRangeFinder.THRESHOLD_OPTION_GREATER = '>';
BrickletLaserRangeFinder.MODE_DISTANCE = 0;
BrickletLaserRangeFinder.MODE_VELOCITY_MAX_13MS = 1;
BrickletLaserRangeFinder.MODE_VELOCITY_MAX_32MS = 2;
BrickletLaserRangeFinder.MODE_VELOCITY_MAX_64MS = 3;
BrickletLaserRangeFinder.MODE_VELOCITY_MAX_127MS = 4;
BrickletLaserRangeFinder.VERSION_1 = 1;
BrickletLaserRangeFinder.VERSION_3 = 3;

function BrickletLaserRangeFinder(uid, ipcon) {
	//Measures distance up to 40m with laser light

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletLaserRangeFinder.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_GET_DISTANCE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_GET_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_SET_VELOCITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_GET_VELOCITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_SET_VELOCITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_GET_VELOCITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_SET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_GET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_SET_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_GET_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_ENABLE_LASER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_DISABLE_LASER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_IS_LASER_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_GET_SENSOR_HARDWARE_VERSION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLaserRangeFinder.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletLaserRangeFinder.CALLBACK_DISTANCE] = 'H';
	this.callbackFormats[BrickletLaserRangeFinder.CALLBACK_VELOCITY] = 'h';
	this.callbackFormats[BrickletLaserRangeFinder.CALLBACK_DISTANCE_REACHED] = 'H';
	this.callbackFormats[BrickletLaserRangeFinder.CALLBACK_VELOCITY_REACHED] = 'h';



	this.getDistance = function(returnCallback, errorCallback) {
		/*
		Returns the measured distance. The value has a range of 0 to 4000
		and is given in cm.
		
		Sensor hardware version 1 (see :func:`Get Sensor Hardware Version`) cannot
		measure distance and velocity at the same time. Therefore, the distance mode
		has to be enabled using :func:`Set Mode`.
		Sensor hardware version 3 can measure distance and velocity at the same
		time. Also the laser has to be enabled, see :func:`Enable Laser`.
		
		If you want to get the distance periodically, it is recommended to
		use the :cb:`Distance` callback and set the period with
		:func:`Set Distance Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_GET_DISTANCE, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.getVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the measured velocity. The value has a range of -12800 to 12700
		and is given in 1/100 m/s.
		
		Sensor hardware version 1 (see :func:`Get Sensor Hardware Version`) cannot
		measure distance and velocity at the same time. Therefore, the velocity mode
		has to be enabled using :func:`Set Mode`.
		Sensor hardware version 3 can measure distance and velocity at the same
		time, but the velocity measurement only produces stables results if a fixed
		measurement rate (see :func:`Set Configuration`) is configured. Also the laser
		has to be enabled, see :func:`Enable Laser`.
		
		If you want to get the velocity periodically, it is recommended to
		use the :cb:`Velocity` callback and set the period with
		:func:`Set Velocity Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_GET_VELOCITY, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.setDistanceCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Distance` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Distance` callback is only triggered if the distance value has
		changed since the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_SET_DISTANCE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getDistanceCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Distance Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_GET_DISTANCE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setVelocityCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Velocity` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Velocity` callback is only triggered if the velocity value has
		changed since the last triggering.
		
		The default value is 0.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_SET_VELOCITY_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getVelocityCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Velocity Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_GET_VELOCITY_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setDistanceCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Distance Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the distance value is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the distance value is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the distance value is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the distance value is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_SET_DISTANCE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback, false);
	};
	this.getDistanceCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Distance Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_GET_DISTANCE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback, false);
	};
	this.setVelocityCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Velocity Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the velocity is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the velocity is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the velocity is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the velocity is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_SET_VELOCITY_CALLBACK_THRESHOLD, [option, min, max], 'c h h', '', returnCallback, errorCallback, false);
	};
	this.getVelocityCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Velocity Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_GET_VELOCITY_CALLBACK_THRESHOLD, [], '', 'c h h', returnCallback, errorCallback, false);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :cb:`Distance Reached`,
		* :cb:`Velocity Reached`,
		
		are triggered, if the thresholds
		
		* :func:`Set Distance Callback Threshold`,
		* :func:`Set Velocity Callback Threshold`,
		
		keep being reached.
		
		The default value is 100.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback, false);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setMovingAverage = function(distanceAverageLength, velocityAverageLength, returnCallback, errorCallback) {
		/*
		Sets the length of a `moving averaging <https://en.wikipedia.org/wiki/Moving_average>`__
		for the distance and velocity.
		
		Setting the length to 0 will turn the averaging completely off. With less
		averaging, there is more noise on the data.
		
		The range for the averaging is 0-30.
		
		The default value is 10.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_SET_MOVING_AVERAGE, [distanceAverageLength, velocityAverageLength], 'B B', '', returnCallback, errorCallback, false);
	};
	this.getMovingAverage = function(returnCallback, errorCallback) {
		/*
		Returns the length moving average as set by :func:`Set Moving Average`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_GET_MOVING_AVERAGE, [], '', 'B B', returnCallback, errorCallback, false);
	};
	this.setMode = function(mode, returnCallback, errorCallback) {
		/*
		.. note::
		 This function is only available if you have a LIDAR-Lite sensor with hardware
		 version 1. Use :func:`Set Configuration` for hardware version 3. You can check
		 the sensor hardware version using :func:`Get Sensor Hardware Version`.
		
		The LIDAR-Lite sensor (hardware version 1) has five different modes. One mode is
		for distance measurements and four modes are for velocity measurements with
		different ranges.
		
		The following modes are available:
		
		* 0: Distance is measured with resolution 1.0 cm and range 0-400 cm
		* 1: Velocity is measured with resolution 0.1 m/s and range is 0-12.7 m/s
		* 2: Velocity is measured with resolution 0.25 m/s and range is 0-31.75 m/s
		* 3: Velocity is measured with resolution 0.5 m/s and range is 0-63.5 m/s
		* 4: Velocity is measured with resolution 1.0 m/s and range is 0-127 m/s
		
		The default mode is 0 (distance is measured).
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_SET_MODE, [mode], 'B', '', returnCallback, errorCallback, false);
	};
	this.getMode = function(returnCallback, errorCallback) {
		/*
		Returns the mode as set by :func:`Set Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_GET_MODE, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.enableLaser = function(returnCallback, errorCallback) {
		/*
		Activates the laser of the LIDAR.
		
		We recommend that you wait 250ms after enabling the laser before
		the first call of :func:`Get Distance` to ensure stable measurements.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_ENABLE_LASER, [], '', '', returnCallback, errorCallback, false);
	};
	this.disableLaser = function(returnCallback, errorCallback) {
		/*
		Deactivates the laser of the LIDAR.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_DISABLE_LASER, [], '', '', returnCallback, errorCallback, false);
	};
	this.isLaserEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the laser is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_IS_LASER_ENABLED, [], '', '?', returnCallback, errorCallback, false);
	};
	this.getSensorHardwareVersion = function(returnCallback, errorCallback) {
		/*
		Returns the LIDAR-Lite hardware version.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_GET_SENSOR_HARDWARE_VERSION, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setConfiguration = function(acquisitionCount, enableQuickTermination, thresholdValue, measurementFrequency, returnCallback, errorCallback) {
		/*
		.. note::
		 This function is only available if you have a LIDAR-Lite sensor with hardware
		 version 3. Use :func:`Set Mode` for hardware version 1. You can check
		 the sensor hardware version using :func:`Get Sensor Hardware Version`.
		
		The **Acquisition Count** defines the number of times the Laser Range Finder Bricklet
		will integrate acquisitions to find a correlation record peak. With a higher count,
		the Bricklet can measure longer distances. With a lower count, the rate increases. The
		allowed values are 1-255.
		
		If you set **Enable Quick Termination** to true, the distance measurement will be terminated
		early if a high peak was already detected. This means that a higher measurement rate can be achieved
		and long distances can be measured at the same time. However, the chance of false-positive
		distance measurements increases.
		
		Normally the distance is calculated with a detection algorithm that uses peak value,
		signal strength and noise. You can however also define a fixed **Threshold Value**.
		Set this to a low value if you want to measure the distance to something that has
		very little reflection (e.g. glass) and set it to a high value if you want to measure
		the distance to something with a very high reflection (e.g. mirror). Set this to 0 to
		use the default algorithm. The other allowed values are 1-255.
		
		Set the **Measurement Frequency** in Hz to force a fixed measurement rate. If set to 0,
		the Laser Range Finder Bricklet will use the optimal frequency according to the other
		configurations and the actual measured distance. Since the rate is not fixed in this case,
		the velocity measurement is not stable. For a stable velocity measurement you should
		set a fixed measurement frequency. The lower the frequency, the higher is the resolution
		of the calculated velocity. The allowed values are 10Hz-500Hz (and 0 to turn the fixed
		frequency off).
		
		The default values for Acquisition Count, Enable Quick Termination, Threshold Value and
		Measurement Frequency are 128, false, 0 and 0.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_SET_CONFIGURATION, [acquisitionCount, enableQuickTermination, thresholdValue, measurementFrequency], 'B ? B H', '', returnCallback, errorCallback, false);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_GET_CONFIGURATION, [], '', 'B ? B H', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletLaserRangeFinder.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletLaserRangeFinder;
