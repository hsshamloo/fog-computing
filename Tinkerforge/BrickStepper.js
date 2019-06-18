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

BrickStepper.DEVICE_IDENTIFIER = 15;
BrickStepper.DEVICE_DISPLAY_NAME = 'Stepper Brick';
BrickStepper.CALLBACK_UNDER_VOLTAGE = 31;
BrickStepper.CALLBACK_POSITION_REACHED = 32;
BrickStepper.CALLBACK_ALL_DATA = 40;
BrickStepper.CALLBACK_NEW_STATE = 41;
BrickStepper.FUNCTION_SET_MAX_VELOCITY = 1;
BrickStepper.FUNCTION_GET_MAX_VELOCITY = 2;
BrickStepper.FUNCTION_GET_CURRENT_VELOCITY = 3;
BrickStepper.FUNCTION_SET_SPEED_RAMPING = 4;
BrickStepper.FUNCTION_GET_SPEED_RAMPING = 5;
BrickStepper.FUNCTION_FULL_BRAKE = 6;
BrickStepper.FUNCTION_SET_CURRENT_POSITION = 7;
BrickStepper.FUNCTION_GET_CURRENT_POSITION = 8;
BrickStepper.FUNCTION_SET_TARGET_POSITION = 9;
BrickStepper.FUNCTION_GET_TARGET_POSITION = 10;
BrickStepper.FUNCTION_SET_STEPS = 11;
BrickStepper.FUNCTION_GET_STEPS = 12;
BrickStepper.FUNCTION_GET_REMAINING_STEPS = 13;
BrickStepper.FUNCTION_SET_STEP_MODE = 14;
BrickStepper.FUNCTION_GET_STEP_MODE = 15;
BrickStepper.FUNCTION_DRIVE_FORWARD = 16;
BrickStepper.FUNCTION_DRIVE_BACKWARD = 17;
BrickStepper.FUNCTION_STOP = 18;
BrickStepper.FUNCTION_GET_STACK_INPUT_VOLTAGE = 19;
BrickStepper.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE = 20;
BrickStepper.FUNCTION_GET_CURRENT_CONSUMPTION = 21;
BrickStepper.FUNCTION_SET_MOTOR_CURRENT = 22;
BrickStepper.FUNCTION_GET_MOTOR_CURRENT = 23;
BrickStepper.FUNCTION_ENABLE = 24;
BrickStepper.FUNCTION_DISABLE = 25;
BrickStepper.FUNCTION_IS_ENABLED = 26;
BrickStepper.FUNCTION_SET_DECAY = 27;
BrickStepper.FUNCTION_GET_DECAY = 28;
BrickStepper.FUNCTION_SET_MINIMUM_VOLTAGE = 29;
BrickStepper.FUNCTION_GET_MINIMUM_VOLTAGE = 30;
BrickStepper.FUNCTION_SET_SYNC_RECT = 33;
BrickStepper.FUNCTION_IS_SYNC_RECT = 34;
BrickStepper.FUNCTION_SET_TIME_BASE = 35;
BrickStepper.FUNCTION_GET_TIME_BASE = 36;
BrickStepper.FUNCTION_GET_ALL_DATA = 37;
BrickStepper.FUNCTION_SET_ALL_DATA_PERIOD = 38;
BrickStepper.FUNCTION_GET_ALL_DATA_PERIOD = 39;
BrickStepper.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG = 231;
BrickStepper.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG = 232;
BrickStepper.FUNCTION_GET_SEND_TIMEOUT_COUNT = 233;
BrickStepper.FUNCTION_SET_SPITFP_BAUDRATE = 234;
BrickStepper.FUNCTION_GET_SPITFP_BAUDRATE = 235;
BrickStepper.FUNCTION_GET_SPITFP_ERROR_COUNT = 237;
BrickStepper.FUNCTION_ENABLE_STATUS_LED = 238;
BrickStepper.FUNCTION_DISABLE_STATUS_LED = 239;
BrickStepper.FUNCTION_IS_STATUS_LED_ENABLED = 240;
BrickStepper.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME = 241;
BrickStepper.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickStepper.FUNCTION_RESET = 243;
BrickStepper.FUNCTION_GET_IDENTITY = 255;
BrickStepper.STEP_MODE_FULL_STEP = 1;
BrickStepper.STEP_MODE_HALF_STEP = 2;
BrickStepper.STEP_MODE_QUARTER_STEP = 4;
BrickStepper.STEP_MODE_EIGHTH_STEP = 8;
BrickStepper.STATE_STOP = 1;
BrickStepper.STATE_ACCELERATION = 2;
BrickStepper.STATE_RUN = 3;
BrickStepper.STATE_DEACCELERATION = 4;
BrickStepper.STATE_DIRECTION_CHANGE_TO_FORWARD = 5;
BrickStepper.STATE_DIRECTION_CHANGE_TO_BACKWARD = 6;
BrickStepper.COMMUNICATION_METHOD_NONE = 0;
BrickStepper.COMMUNICATION_METHOD_USB = 1;
BrickStepper.COMMUNICATION_METHOD_SPI_STACK = 2;
BrickStepper.COMMUNICATION_METHOD_CHIBI = 3;
BrickStepper.COMMUNICATION_METHOD_RS485 = 4;
BrickStepper.COMMUNICATION_METHOD_WIFI = 5;
BrickStepper.COMMUNICATION_METHOD_ETHERNET = 6;
BrickStepper.COMMUNICATION_METHOD_WIFI_V2 = 7;

function BrickStepper(uid, ipcon) {
	//Drives one bipolar stepper motor with up to 38V and 2.5A per phase

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickStepper.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 4];
	this.responseExpected[BrickStepper.FUNCTION_SET_MAX_VELOCITY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_MAX_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_CURRENT_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_SPEED_RAMPING] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_SPEED_RAMPING] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_FULL_BRAKE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_SET_CURRENT_POSITION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_CURRENT_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_TARGET_POSITION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_TARGET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_STEPS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_STEPS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_REMAINING_STEPS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_STEP_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_STEP_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_DRIVE_FORWARD] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_DRIVE_BACKWARD] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_STOP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_STACK_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_CURRENT_CONSUMPTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_MOTOR_CURRENT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_MOTOR_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_ENABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_DISABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_IS_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_DECAY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_DECAY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_SYNC_RECT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_IS_SYNC_RECT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_TIME_BASE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_TIME_BASE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_ALL_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_ALL_DATA_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_ALL_DATA_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_SEND_TIMEOUT_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_SET_SPITFP_BAUDRATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_SPITFP_BAUDRATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_ENABLE_STATUS_LED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_DISABLE_STATUS_LED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_IS_STATUS_LED_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickStepper.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickStepper.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickStepper.CALLBACK_UNDER_VOLTAGE] = 'H';
	this.callbackFormats[BrickStepper.CALLBACK_POSITION_REACHED] = 'i';
	this.callbackFormats[BrickStepper.CALLBACK_ALL_DATA] = 'H i i H H H';
	this.callbackFormats[BrickStepper.CALLBACK_NEW_STATE] = 'B B';



	this.setMaxVelocity = function(velocity, returnCallback, errorCallback) {
		/*
		Sets the maximum velocity of the stepper motor in steps per second.
		This function does *not* start the motor, it merely sets the maximum
		velocity the stepper motor is accelerated to. To get the motor running use
		either :func:`Set Target Position`, :func:`Set Steps`, :func:`Drive Forward` or
		:func:`Drive Backward`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_MAX_VELOCITY, [velocity], 'H', '', returnCallback, errorCallback, false);
	};
	this.getMaxVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the velocity as set by :func:`Set Max Velocity`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_MAX_VELOCITY, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.getCurrentVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the *current* velocity of the stepper motor in steps per second.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_CURRENT_VELOCITY, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setSpeedRamping = function(acceleration, deacceleration, returnCallback, errorCallback) {
		/*
		Sets the acceleration and deacceleration of the stepper motor. The values
		are given in *steps/s²*. An acceleration of 1000 means, that
		every second the velocity is increased by 1000 *steps/s*.
		
		For example: If the current velocity is 0 and you want to accelerate to a
		velocity of 8000 *steps/s* in 10 seconds, you should set an acceleration
		of 800 *steps/s²*.
		
		An acceleration/deacceleration of 0 means instantaneous
		acceleration/deacceleration (not recommended)
		
		The default value is 1000 for both
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_SPEED_RAMPING, [acceleration, deacceleration], 'H H', '', returnCallback, errorCallback, false);
	};
	this.getSpeedRamping = function(returnCallback, errorCallback) {
		/*
		Returns the acceleration and deacceleration as set by
		:func:`Set Speed Ramping`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_SPEED_RAMPING, [], '', 'H H', returnCallback, errorCallback, false);
	};
	this.fullBrake = function(returnCallback, errorCallback) {
		/*
		Executes an active full brake.
		
		.. warning::
		 This function is for emergency purposes,
		 where an immediate brake is necessary. Depending on the current velocity and
		 the strength of the motor, a full brake can be quite violent.
		
		Call :func:`Stop` if you just want to stop the motor.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_FULL_BRAKE, [], '', '', returnCallback, errorCallback, false);
	};
	this.setCurrentPosition = function(position, returnCallback, errorCallback) {
		/*
		Sets the current steps of the internal step counter. This can be used to
		set the current position to 0 when some kind of starting position
		is reached (e.g. when a CNC machine reaches a corner).
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_CURRENT_POSITION, [position], 'i', '', returnCallback, errorCallback, false);
	};
	this.getCurrentPosition = function(returnCallback, errorCallback) {
		/*
		Returns the current position of the stepper motor in steps. On startup
		the position is 0. The steps are counted with all possible driving
		functions (:func:`Set Target Position`, :func:`Set Steps`, :func:`Drive Forward` or
		:func:`Drive Backward`). It also is possible to reset the steps to 0 or
		set them to any other desired value with :func:`Set Current Position`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_CURRENT_POSITION, [], '', 'i', returnCallback, errorCallback, false);
	};
	this.setTargetPosition = function(position, returnCallback, errorCallback) {
		/*
		Sets the target position of the stepper motor in steps. For example,
		if the current position of the motor is 500 and :func:`Set Target Position` is
		called with 1000, the stepper motor will drive 500 steps forward. It will
		use the velocity, acceleration and deacceleration as set by
		:func:`Set Max Velocity` and :func:`Set Speed Ramping`.
		
		A call of :func:`Set Target Position` with the parameter *x* is equivalent to
		a call of :func:`Set Steps` with the parameter
		(*x* - :func:`Get Current Position`).
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_TARGET_POSITION, [position], 'i', '', returnCallback, errorCallback, false);
	};
	this.getTargetPosition = function(returnCallback, errorCallback) {
		/*
		Returns the last target position as set by :func:`Set Target Position`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_TARGET_POSITION, [], '', 'i', returnCallback, errorCallback, false);
	};
	this.setSteps = function(steps, returnCallback, errorCallback) {
		/*
		Sets the number of steps the stepper motor should run. Positive values
		will drive the motor forward and negative values backward.
		The velocity, acceleration and deacceleration as set by
		:func:`Set Max Velocity` and :func:`Set Speed Ramping` will be used.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_STEPS, [steps], 'i', '', returnCallback, errorCallback, false);
	};
	this.getSteps = function(returnCallback, errorCallback) {
		/*
		Returns the last steps as set by :func:`Set Steps`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_STEPS, [], '', 'i', returnCallback, errorCallback, false);
	};
	this.getRemainingSteps = function(returnCallback, errorCallback) {
		/*
		Returns the remaining steps of the last call of :func:`Set Steps`.
		For example, if :func:`Set Steps` is called with 2000 and
		:func:`Get Remaining Steps` is called after the motor has run for 500 steps,
		it will return 1500.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_REMAINING_STEPS, [], '', 'i', returnCallback, errorCallback, false);
	};
	this.setStepMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the step mode of the stepper motor. Possible values are:
		
		* Full Step = 1
		* Half Step = 2
		* Quarter Step = 4
		* Eighth Step = 8
		
		A higher value will increase the resolution and
		decrease the torque of the stepper motor.
		
		The default value is 8 (Eighth Step).
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_STEP_MODE, [mode], 'B', '', returnCallback, errorCallback, false);
	};
	this.getStepMode = function(returnCallback, errorCallback) {
		/*
		Returns the step mode as set by :func:`Set Step Mode`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_STEP_MODE, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.driveForward = function(returnCallback, errorCallback) {
		/*
		Drives the stepper motor forward until :func:`Drive Backward` or
		:func:`Stop` is called. The velocity, acceleration and deacceleration as
		set by :func:`Set Max Velocity` and :func:`Set Speed Ramping` will be used.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_DRIVE_FORWARD, [], '', '', returnCallback, errorCallback, false);
	};
	this.driveBackward = function(returnCallback, errorCallback) {
		/*
		Drives the stepper motor backward until :func:`Drive Forward` or
		:func:`Stop` is triggered. The velocity, acceleration and deacceleration as
		set by :func:`Set Max Velocity` and :func:`Set Speed Ramping` will be used.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_DRIVE_BACKWARD, [], '', '', returnCallback, errorCallback, false);
	};
	this.stop = function(returnCallback, errorCallback) {
		/*
		Stops the stepper motor with the deacceleration as set by
		:func:`Set Speed Ramping`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_STOP, [], '', '', returnCallback, errorCallback, false);
	};
	this.getStackInputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the stack input voltage in mV. The stack input voltage is the
		voltage that is supplied via the stack, i.e. it is given by a
		Step-Down or Step-Up Power Supply.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_STACK_INPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.getExternalInputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the external input voltage in mV. The external input voltage is
		given via the black power input connector on the Stepper Brick.
		
		If there is an external input voltage and a stack input voltage, the motor
		will be driven by the external input voltage. If there is only a stack
		voltage present, the motor will be driven by this voltage.
		
		.. warning::
		 This means, if you have a high stack voltage and a low external voltage,
		 the motor will be driven with the low external voltage. If you then remove
		 the external connection, it will immediately be driven by the high
		 stack voltage
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.getCurrentConsumption = function(returnCallback, errorCallback) {
		/*
		Returns the current consumption of the motor in mA.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_CURRENT_CONSUMPTION, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setMotorCurrent = function(current, returnCallback, errorCallback) {
		/*
		Sets the current in mA with which the motor will be driven.
		The minimum value is 100mA, the maximum value 2291mA and the
		default value is 800mA.
		
		.. warning::
		 Do not set this value above the specifications of your stepper motor.
		 Otherwise it may damage your motor.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_MOTOR_CURRENT, [current], 'H', '', returnCallback, errorCallback, false);
	};
	this.getMotorCurrent = function(returnCallback, errorCallback) {
		/*
		Returns the current as set by :func:`Set Motor Current`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_MOTOR_CURRENT, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.enable = function(returnCallback, errorCallback) {
		/*
		Enables the driver chip. The driver parameters can be configured (maximum velocity,
		acceleration, etc) before it is enabled.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_ENABLE, [], '', '', returnCallback, errorCallback, false);
	};
	this.disable = function(returnCallback, errorCallback) {
		/*
		Disables the driver chip. The configurations are kept (maximum velocity,
		acceleration, etc) but the motor is not driven until it is enabled again.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_DISABLE, [], '', '', returnCallback, errorCallback, false);
	};
	this.isEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the driver chip is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_IS_ENABLED, [], '', '?', returnCallback, errorCallback, false);
	};
	this.setDecay = function(decay, returnCallback, errorCallback) {
		/*
		Sets the decay mode of the stepper motor. The possible value range is
		between 0 and 65535. A value of 0 sets the fast decay mode, a value of
		65535 sets the slow decay mode and a value in between sets the mixed
		decay mode.
		
		Changing the decay mode is only possible if synchronous rectification
		is enabled (see :func:`Set Sync Rect`).
		
		For a good explanation of the different decay modes see
		`this <http://ebldc.com/?p=86/>`__ blog post by Avayan.
		
		A good decay mode is unfortunately different for every motor. The best
		way to work out a good decay mode for your stepper motor, if you can't
		measure the current with an oscilloscope, is to listen to the sound of
		the motor. If the value is too low, you often hear a high pitched
		sound and if it is too high you can often hear a humming sound.
		
		Generally, fast decay mode (small value) will be noisier but also
		allow higher motor speeds.
		
		The default value is 10000.
		
		.. note::
		 There is unfortunately no formula to calculate a perfect decay
		 mode for a given stepper motor. If you have problems with loud noises
		 or the maximum motor speed is too slow, you should try to tinker with
		 the decay value
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_DECAY, [decay], 'H', '', returnCallback, errorCallback, false);
	};
	this.getDecay = function(returnCallback, errorCallback) {
		/*
		Returns the decay mode as set by :func:`Set Decay`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_DECAY, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setMinimumVoltage = function(voltage, returnCallback, errorCallback) {
		/*
		Sets the minimum voltage in mV, below which the :cb:`Under Voltage` callback
		is triggered. The minimum possible value that works with the Stepper Brick is 8V.
		You can use this function to detect the discharge of a battery that is used
		to drive the stepper motor. If you have a fixed power supply, you likely do
		not need this functionality.
		
		The default value is 8V.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_MINIMUM_VOLTAGE, [voltage], 'H', '', returnCallback, errorCallback, false);
	};
	this.getMinimumVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the minimum voltage as set by :func:`Set Minimum Voltage`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_MINIMUM_VOLTAGE, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setSyncRect = function(syncRect, returnCallback, errorCallback) {
		/*
		Turns synchronous rectification on or off (*true* or *false*).
		
		With synchronous rectification on, the decay can be changed
		(see :func:`Set Decay`). Without synchronous rectification fast
		decay is used.
		
		For an explanation of synchronous rectification see
		`here <https://en.wikipedia.org/wiki/Active_rectification>`__.
		
		.. warning::
		 If you want to use high speeds (> 10000 steps/s) for a large
		 stepper motor with a large inductivity we strongly
		 suggest that you disable synchronous rectification. Otherwise the
		 Brick may not be able to cope with the load and overheat.
		
		The default value is *false*.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_SYNC_RECT, [syncRect], '?', '', returnCallback, errorCallback, false);
	};
	this.isSyncRect = function(returnCallback, errorCallback) {
		/*
		Returns *true* if synchronous rectification is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_IS_SYNC_RECT, [], '', '?', returnCallback, errorCallback, false);
	};
	this.setTimeBase = function(timeBase, returnCallback, errorCallback) {
		/*
		Sets the time base of the velocity and the acceleration of the stepper brick
		(in seconds).
		
		For example, if you want to make one step every 1.5 seconds, you can set
		the time base to 15 and the velocity to 10. Now the velocity is
		10steps/15s = 1steps/1.5s.
		
		The default value is 1.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_TIME_BASE, [timeBase], 'I', '', returnCallback, errorCallback, false);
	};
	this.getTimeBase = function(returnCallback, errorCallback) {
		/*
		Returns the time base as set by :func:`Set Time Base`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_TIME_BASE, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.getAllData = function(returnCallback, errorCallback) {
		/*
		Returns the following parameters: The current velocity,
		the current position, the remaining steps, the stack voltage, the external
		voltage and the current consumption of the stepper motor.
		
		There is also a callback for this function, see :cb:`All Data` callback.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_ALL_DATA, [], '', 'H i i H H H', returnCallback, errorCallback, false);
	};
	this.setAllDataPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`All Data` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_ALL_DATA_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getAllDataPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set All Data Period`.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_ALL_DATA_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setSPITFPBaudrateConfig = function(enableDynamicBaudrate, minimumDynamicBaudrate, returnCallback, errorCallback) {
		/*
		The SPITF protocol can be used with a dynamic baudrate. If the dynamic baudrate is
		enabled, the Brick will try to adapt the baudrate for the communication
		between Bricks and Bricklets according to the amount of data that is transferred.
		
		The baudrate will be increased exponentially if lots of data is send/received and
		decreased linearly if little data is send/received.
		
		This lowers the baudrate in applications where little data is transferred (e.g.
		a weather station) and increases the robustness. If there is lots of data to transfer
		(e.g. Thermal Imaging Bricklet) it automatically increases the baudrate as needed.
		
		In cases where some data has to transferred as fast as possible every few seconds
		(e.g. RS485 Bricklet with a high baudrate but small payload) you may want to turn
		the dynamic baudrate off to get the highest possible performance.
		
		The maximum value of the baudrate can be set per port with the function
		:func:`Set SPITFP Baudrate`. If the dynamic baudrate is disabled, the baudrate
		as set by :func:`Set SPITFP Baudrate` will be used statically.
		
		The minimum dynamic baudrate has a value range of 400000 to 2000000 baud.
		
		By default dynamic baudrate is enabled and the minimum dynamic baudrate is 400000.
		
		.. versionadded:: 2.3.6$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG, [enableDynamicBaudrate, minimumDynamicBaudrate], '? I', '', returnCallback, errorCallback, false);
	};
	this.getSPITFPBaudrateConfig = function(returnCallback, errorCallback) {
		/*
		Returns the baudrate config, see :func:`Set SPITFP Baudrate Config`.
		
		.. versionadded:: 2.3.6$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG, [], '', '? I', returnCallback, errorCallback, false);
	};
	this.getSendTimeoutCount = function(communicationMethod, returnCallback, errorCallback) {
		/*
		Returns the timeout count for the different communication methods.
		
		The methods 0-2 are available for all Bricks, 3-7 only for Master Bricks.
		
		This function is mostly used for debugging during development, in normal operation
		the counters should nearly always stay at 0.
		
		.. versionadded:: 2.3.4$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_SEND_TIMEOUT_COUNT, [communicationMethod], 'B', 'I', returnCallback, errorCallback, false);
	};
	this.setSPITFPBaudrate = function(brickletPort, baudrate, returnCallback, errorCallback) {
		/*
		Sets the baudrate for a specific Bricklet port ('a' - 'd'). The
		baudrate can be in the range 400000 to 2000000.
		
		If you want to increase the throughput of Bricklets you can increase
		the baudrate. If you get a high error count because of high
		interference (see :func:`Get SPITFP Error Count`) you can decrease the
		baudrate.
		
		If the dynamic baudrate feature is enabled, the baudrate set by this
		function corresponds to the maximum baudrate (see :func:`Set SPITFP Baudrate Config`).
		
		Regulatory testing is done with the default baudrate. If CE compatibility
		or similar is necessary in you applications we recommend to not change
		the baudrate.
		
		The default baudrate for all ports is 1400000.
		
		.. versionadded:: 2.3.3$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_SET_SPITFP_BAUDRATE, [brickletPort, baudrate], 'c I', '', returnCallback, errorCallback, false);
	};
	this.getSPITFPBaudrate = function(brickletPort, returnCallback, errorCallback) {
		/*
		Returns the baudrate for a given Bricklet port, see :func:`Set SPITFP Baudrate`.
		
		.. versionadded:: 2.3.3$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_SPITFP_BAUDRATE, [brickletPort], 'c', 'I', returnCallback, errorCallback, false);
	};
	this.getSPITFPErrorCount = function(brickletPort, returnCallback, errorCallback) {
		/*
		Returns the error count for the communication between Brick and Bricklet.
		
		The errors are divided into
		
		* ACK checksum errors,
		* message checksum errors,
		* framing errors and
		* overflow errors.
		
		The errors counts are for errors that occur on the Brick side. All
		Bricklets have a similar function that returns the errors on the Bricklet side.
		
		.. versionadded:: 2.3.3$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_SPITFP_ERROR_COUNT, [brickletPort], 'c', 'I I I I', returnCallback, errorCallback, false);
	};
	this.enableStatusLED = function(returnCallback, errorCallback) {
		/*
		Enables the status LED.
		
		The status LED is the blue LED next to the USB connector. If enabled is is
		on and it flickers if data is transfered. If disabled it is always off.
		
		The default state is enabled.
		
		.. versionadded:: 2.3.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_ENABLE_STATUS_LED, [], '', '', returnCallback, errorCallback, false);
	};
	this.disableStatusLED = function(returnCallback, errorCallback) {
		/*
		Disables the status LED.
		
		The status LED is the blue LED next to the USB connector. If enabled is is
		on and it flickers if data is transfered. If disabled it is always off.
		
		The default state is enabled.
		
		.. versionadded:: 2.3.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_DISABLE_STATUS_LED, [], '', '', returnCallback, errorCallback, false);
	};
	this.isStatusLEDEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the status LED is enabled, *false* otherwise.
		
		.. versionadded:: 2.3.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_IS_STATUS_LED_ENABLED, [], '', '?', returnCallback, errorCallback, false);
	};
	this.getProtocol1BrickletName = function(port, returnCallback, errorCallback) {
		/*
		Returns the firmware and protocol version and the name of the Bricklet for a
		given port.
		
		This functions sole purpose is to allow automatic flashing of v1.x.y Bricklet
		plugins.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME, [port], 'c', 'B B3 s40', returnCallback, errorCallback, false);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C/10 as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has an
		accuracy of +-15%. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Brick. Calling this function
		on a Brick inside of a stack will reset the whole stack.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_RESET, [], '', '', returnCallback, errorCallback, false);
	};
	this.getIdentity = function(returnCallback, errorCallback) {
		/*
		Returns the UID, the UID where the Brick is connected to,
		the position, the hardware and firmware version as well as the
		device identifier.
		
		The position can be '0'-'8' (stack position).
		
		The device identifier numbers can be found :ref:`here <device_identifier>`.
		|device_identifier_constant|
		*/
		this.ipcon.sendRequest(this, BrickStepper.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickStepper;
