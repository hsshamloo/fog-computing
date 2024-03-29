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

BrickMaster.DEVICE_IDENTIFIER = 13;
BrickMaster.DEVICE_DISPLAY_NAME = 'Master Brick';
BrickMaster.CALLBACK_STACK_CURRENT = 59;
BrickMaster.CALLBACK_STACK_VOLTAGE = 60;
BrickMaster.CALLBACK_USB_VOLTAGE = 61;
BrickMaster.CALLBACK_STACK_CURRENT_REACHED = 62;
BrickMaster.CALLBACK_STACK_VOLTAGE_REACHED = 63;
BrickMaster.CALLBACK_USB_VOLTAGE_REACHED = 64;
BrickMaster.FUNCTION_GET_STACK_VOLTAGE = 1;
BrickMaster.FUNCTION_GET_STACK_CURRENT = 2;
BrickMaster.FUNCTION_SET_EXTENSION_TYPE = 3;
BrickMaster.FUNCTION_GET_EXTENSION_TYPE = 4;
BrickMaster.FUNCTION_IS_CHIBI_PRESENT = 5;
BrickMaster.FUNCTION_SET_CHIBI_ADDRESS = 6;
BrickMaster.FUNCTION_GET_CHIBI_ADDRESS = 7;
BrickMaster.FUNCTION_SET_CHIBI_MASTER_ADDRESS = 8;
BrickMaster.FUNCTION_GET_CHIBI_MASTER_ADDRESS = 9;
BrickMaster.FUNCTION_SET_CHIBI_SLAVE_ADDRESS = 10;
BrickMaster.FUNCTION_GET_CHIBI_SLAVE_ADDRESS = 11;
BrickMaster.FUNCTION_GET_CHIBI_SIGNAL_STRENGTH = 12;
BrickMaster.FUNCTION_GET_CHIBI_ERROR_LOG = 13;
BrickMaster.FUNCTION_SET_CHIBI_FREQUENCY = 14;
BrickMaster.FUNCTION_GET_CHIBI_FREQUENCY = 15;
BrickMaster.FUNCTION_SET_CHIBI_CHANNEL = 16;
BrickMaster.FUNCTION_GET_CHIBI_CHANNEL = 17;
BrickMaster.FUNCTION_IS_RS485_PRESENT = 18;
BrickMaster.FUNCTION_SET_RS485_ADDRESS = 19;
BrickMaster.FUNCTION_GET_RS485_ADDRESS = 20;
BrickMaster.FUNCTION_SET_RS485_SLAVE_ADDRESS = 21;
BrickMaster.FUNCTION_GET_RS485_SLAVE_ADDRESS = 22;
BrickMaster.FUNCTION_GET_RS485_ERROR_LOG = 23;
BrickMaster.FUNCTION_SET_RS485_CONFIGURATION = 24;
BrickMaster.FUNCTION_GET_RS485_CONFIGURATION = 25;
BrickMaster.FUNCTION_IS_WIFI_PRESENT = 26;
BrickMaster.FUNCTION_SET_WIFI_CONFIGURATION = 27;
BrickMaster.FUNCTION_GET_WIFI_CONFIGURATION = 28;
BrickMaster.FUNCTION_SET_WIFI_ENCRYPTION = 29;
BrickMaster.FUNCTION_GET_WIFI_ENCRYPTION = 30;
BrickMaster.FUNCTION_GET_WIFI_STATUS = 31;
BrickMaster.FUNCTION_REFRESH_WIFI_STATUS = 32;
BrickMaster.FUNCTION_SET_WIFI_CERTIFICATE = 33;
BrickMaster.FUNCTION_GET_WIFI_CERTIFICATE = 34;
BrickMaster.FUNCTION_SET_WIFI_POWER_MODE = 35;
BrickMaster.FUNCTION_GET_WIFI_POWER_MODE = 36;
BrickMaster.FUNCTION_GET_WIFI_BUFFER_INFO = 37;
BrickMaster.FUNCTION_SET_WIFI_REGULATORY_DOMAIN = 38;
BrickMaster.FUNCTION_GET_WIFI_REGULATORY_DOMAIN = 39;
BrickMaster.FUNCTION_GET_USB_VOLTAGE = 40;
BrickMaster.FUNCTION_SET_LONG_WIFI_KEY = 41;
BrickMaster.FUNCTION_GET_LONG_WIFI_KEY = 42;
BrickMaster.FUNCTION_SET_WIFI_HOSTNAME = 43;
BrickMaster.FUNCTION_GET_WIFI_HOSTNAME = 44;
BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_PERIOD = 45;
BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_PERIOD = 46;
BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_PERIOD = 47;
BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_PERIOD = 48;
BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_PERIOD = 49;
BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_PERIOD = 50;
BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_THRESHOLD = 51;
BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_THRESHOLD = 52;
BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_THRESHOLD = 53;
BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_THRESHOLD = 54;
BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_THRESHOLD = 55;
BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_THRESHOLD = 56;
BrickMaster.FUNCTION_SET_DEBOUNCE_PERIOD = 57;
BrickMaster.FUNCTION_GET_DEBOUNCE_PERIOD = 58;
BrickMaster.FUNCTION_IS_ETHERNET_PRESENT = 65;
BrickMaster.FUNCTION_SET_ETHERNET_CONFIGURATION = 66;
BrickMaster.FUNCTION_GET_ETHERNET_CONFIGURATION = 67;
BrickMaster.FUNCTION_GET_ETHERNET_STATUS = 68;
BrickMaster.FUNCTION_SET_ETHERNET_HOSTNAME = 69;
BrickMaster.FUNCTION_SET_ETHERNET_MAC_ADDRESS = 70;
BrickMaster.FUNCTION_SET_ETHERNET_WEBSOCKET_CONFIGURATION = 71;
BrickMaster.FUNCTION_GET_ETHERNET_WEBSOCKET_CONFIGURATION = 72;
BrickMaster.FUNCTION_SET_ETHERNET_AUTHENTICATION_SECRET = 73;
BrickMaster.FUNCTION_GET_ETHERNET_AUTHENTICATION_SECRET = 74;
BrickMaster.FUNCTION_SET_WIFI_AUTHENTICATION_SECRET = 75;
BrickMaster.FUNCTION_GET_WIFI_AUTHENTICATION_SECRET = 76;
BrickMaster.FUNCTION_GET_CONNECTION_TYPE = 77;
BrickMaster.FUNCTION_IS_WIFI2_PRESENT = 78;
BrickMaster.FUNCTION_START_WIFI2_BOOTLOADER = 79;
BrickMaster.FUNCTION_WRITE_WIFI2_SERIAL_PORT = 80;
BrickMaster.FUNCTION_READ_WIFI2_SERIAL_PORT = 81;
BrickMaster.FUNCTION_SET_WIFI2_AUTHENTICATION_SECRET = 82;
BrickMaster.FUNCTION_GET_WIFI2_AUTHENTICATION_SECRET = 83;
BrickMaster.FUNCTION_SET_WIFI2_CONFIGURATION = 84;
BrickMaster.FUNCTION_GET_WIFI2_CONFIGURATION = 85;
BrickMaster.FUNCTION_GET_WIFI2_STATUS = 86;
BrickMaster.FUNCTION_SET_WIFI2_CLIENT_CONFIGURATION = 87;
BrickMaster.FUNCTION_GET_WIFI2_CLIENT_CONFIGURATION = 88;
BrickMaster.FUNCTION_SET_WIFI2_CLIENT_HOSTNAME = 89;
BrickMaster.FUNCTION_GET_WIFI2_CLIENT_HOSTNAME = 90;
BrickMaster.FUNCTION_SET_WIFI2_CLIENT_PASSWORD = 91;
BrickMaster.FUNCTION_GET_WIFI2_CLIENT_PASSWORD = 92;
BrickMaster.FUNCTION_SET_WIFI2_AP_CONFIGURATION = 93;
BrickMaster.FUNCTION_GET_WIFI2_AP_CONFIGURATION = 94;
BrickMaster.FUNCTION_SET_WIFI2_AP_PASSWORD = 95;
BrickMaster.FUNCTION_GET_WIFI2_AP_PASSWORD = 96;
BrickMaster.FUNCTION_SAVE_WIFI2_CONFIGURATION = 97;
BrickMaster.FUNCTION_GET_WIFI2_FIRMWARE_VERSION = 98;
BrickMaster.FUNCTION_ENABLE_WIFI2_STATUS_LED = 99;
BrickMaster.FUNCTION_DISABLE_WIFI2_STATUS_LED = 100;
BrickMaster.FUNCTION_IS_WIFI2_STATUS_LED_ENABLED = 101;
BrickMaster.FUNCTION_SET_WIFI2_MESH_CONFIGURATION = 102;
BrickMaster.FUNCTION_GET_WIFI2_MESH_CONFIGURATION = 103;
BrickMaster.FUNCTION_SET_WIFI2_MESH_ROUTER_SSID = 104;
BrickMaster.FUNCTION_GET_WIFI2_MESH_ROUTER_SSID = 105;
BrickMaster.FUNCTION_SET_WIFI2_MESH_ROUTER_PASSWORD = 106;
BrickMaster.FUNCTION_GET_WIFI2_MESH_ROUTER_PASSWORD = 107;
BrickMaster.FUNCTION_GET_WIFI2_MESH_COMMON_STATUS = 108;
BrickMaster.FUNCTION_GET_WIFI2_MESH_CLIENT_STATUS = 109;
BrickMaster.FUNCTION_GET_WIFI2_MESH_AP_STATUS = 110;
BrickMaster.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG = 231;
BrickMaster.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG = 232;
BrickMaster.FUNCTION_GET_SEND_TIMEOUT_COUNT = 233;
BrickMaster.FUNCTION_SET_SPITFP_BAUDRATE = 234;
BrickMaster.FUNCTION_GET_SPITFP_BAUDRATE = 235;
BrickMaster.FUNCTION_GET_SPITFP_ERROR_COUNT = 237;
BrickMaster.FUNCTION_ENABLE_STATUS_LED = 238;
BrickMaster.FUNCTION_DISABLE_STATUS_LED = 239;
BrickMaster.FUNCTION_IS_STATUS_LED_ENABLED = 240;
BrickMaster.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME = 241;
BrickMaster.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickMaster.FUNCTION_RESET = 243;
BrickMaster.FUNCTION_GET_IDENTITY = 255;
BrickMaster.EXTENSION_TYPE_CHIBI = 1;
BrickMaster.EXTENSION_TYPE_RS485 = 2;
BrickMaster.EXTENSION_TYPE_WIFI = 3;
BrickMaster.EXTENSION_TYPE_ETHERNET = 4;
BrickMaster.EXTENSION_TYPE_WIFI2 = 5;
BrickMaster.CHIBI_FREQUENCY_OQPSK_868_MHZ = 0;
BrickMaster.CHIBI_FREQUENCY_OQPSK_915_MHZ = 1;
BrickMaster.CHIBI_FREQUENCY_OQPSK_780_MHZ = 2;
BrickMaster.CHIBI_FREQUENCY_BPSK40_915_MHZ = 3;
BrickMaster.RS485_PARITY_NONE = 'n';
BrickMaster.RS485_PARITY_EVEN = 'e';
BrickMaster.RS485_PARITY_ODD = 'o';
BrickMaster.WIFI_CONNECTION_DHCP = 0;
BrickMaster.WIFI_CONNECTION_STATIC_IP = 1;
BrickMaster.WIFI_CONNECTION_ACCESS_POINT_DHCP = 2;
BrickMaster.WIFI_CONNECTION_ACCESS_POINT_STATIC_IP = 3;
BrickMaster.WIFI_CONNECTION_AD_HOC_DHCP = 4;
BrickMaster.WIFI_CONNECTION_AD_HOC_STATIC_IP = 5;
BrickMaster.WIFI_ENCRYPTION_WPA_WPA2 = 0;
BrickMaster.WIFI_ENCRYPTION_WPA_ENTERPRISE = 1;
BrickMaster.WIFI_ENCRYPTION_WEP = 2;
BrickMaster.WIFI_ENCRYPTION_NO_ENCRYPTION = 3;
BrickMaster.WIFI_EAP_OPTION_OUTER_AUTH_EAP_FAST = 0;
BrickMaster.WIFI_EAP_OPTION_OUTER_AUTH_EAP_TLS = 1;
BrickMaster.WIFI_EAP_OPTION_OUTER_AUTH_EAP_TTLS = 2;
BrickMaster.WIFI_EAP_OPTION_OUTER_AUTH_EAP_PEAP = 3;
BrickMaster.WIFI_EAP_OPTION_INNER_AUTH_EAP_MSCHAP = 0;
BrickMaster.WIFI_EAP_OPTION_INNER_AUTH_EAP_GTC = 4;
BrickMaster.WIFI_EAP_OPTION_CERT_TYPE_CA_CERT = 0;
BrickMaster.WIFI_EAP_OPTION_CERT_TYPE_CLIENT_CERT = 8;
BrickMaster.WIFI_EAP_OPTION_CERT_TYPE_PRIVATE_KEY = 16;
BrickMaster.WIFI_STATE_DISASSOCIATED = 0;
BrickMaster.WIFI_STATE_ASSOCIATED = 1;
BrickMaster.WIFI_STATE_ASSOCIATING = 2;
BrickMaster.WIFI_STATE_ERROR = 3;
BrickMaster.WIFI_STATE_NOT_INITIALIZED_YET = 255;
BrickMaster.WIFI_POWER_MODE_FULL_SPEED = 0;
BrickMaster.WIFI_POWER_MODE_LOW_POWER = 1;
BrickMaster.WIFI_DOMAIN_CHANNEL_1TO11 = 0;
BrickMaster.WIFI_DOMAIN_CHANNEL_1TO13 = 1;
BrickMaster.WIFI_DOMAIN_CHANNEL_1TO14 = 2;
BrickMaster.THRESHOLD_OPTION_OFF = 'x';
BrickMaster.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickMaster.THRESHOLD_OPTION_INSIDE = 'i';
BrickMaster.THRESHOLD_OPTION_SMALLER = '<';
BrickMaster.THRESHOLD_OPTION_GREATER = '>';
BrickMaster.ETHERNET_CONNECTION_DHCP = 0;
BrickMaster.ETHERNET_CONNECTION_STATIC_IP = 1;
BrickMaster.CONNECTION_TYPE_NONE = 0;
BrickMaster.CONNECTION_TYPE_USB = 1;
BrickMaster.CONNECTION_TYPE_SPI_STACK = 2;
BrickMaster.CONNECTION_TYPE_CHIBI = 3;
BrickMaster.CONNECTION_TYPE_RS485 = 4;
BrickMaster.CONNECTION_TYPE_WIFI = 5;
BrickMaster.CONNECTION_TYPE_ETHERNET = 6;
BrickMaster.CONNECTION_TYPE_WIFI2 = 7;
BrickMaster.WIFI2_PHY_MODE_B = 0;
BrickMaster.WIFI2_PHY_MODE_G = 1;
BrickMaster.WIFI2_PHY_MODE_N = 2;
BrickMaster.WIFI2_CLIENT_STATUS_IDLE = 0;
BrickMaster.WIFI2_CLIENT_STATUS_CONNECTING = 1;
BrickMaster.WIFI2_CLIENT_STATUS_WRONG_PASSWORD = 2;
BrickMaster.WIFI2_CLIENT_STATUS_NO_AP_FOUND = 3;
BrickMaster.WIFI2_CLIENT_STATUS_CONNECT_FAILED = 4;
BrickMaster.WIFI2_CLIENT_STATUS_GOT_IP = 5;
BrickMaster.WIFI2_CLIENT_STATUS_UNKNOWN = 255;
BrickMaster.WIFI2_AP_ENCRYPTION_OPEN = 0;
BrickMaster.WIFI2_AP_ENCRYPTION_WEP = 1;
BrickMaster.WIFI2_AP_ENCRYPTION_WPA_PSK = 2;
BrickMaster.WIFI2_AP_ENCRYPTION_WPA2_PSK = 3;
BrickMaster.WIFI2_AP_ENCRYPTION_WPA_WPA2_PSK = 4;
BrickMaster.WIFI2_MESH_STATUS_DISABLED = 0;
BrickMaster.WIFI2_MESH_STATUS_WIFI_CONNECTING = 1;
BrickMaster.WIFI2_MESH_STATUS_GOT_IP = 2;
BrickMaster.WIFI2_MESH_STATUS_MESH_LOCAL = 3;
BrickMaster.WIFI2_MESH_STATUS_MESH_ONLINE = 4;
BrickMaster.WIFI2_MESH_STATUS_AP_AVAILABLE = 5;
BrickMaster.WIFI2_MESH_STATUS_AP_SETUP = 6;
BrickMaster.WIFI2_MESH_STATUS_LEAF_AVAILABLE = 7;
BrickMaster.COMMUNICATION_METHOD_NONE = 0;
BrickMaster.COMMUNICATION_METHOD_USB = 1;
BrickMaster.COMMUNICATION_METHOD_SPI_STACK = 2;
BrickMaster.COMMUNICATION_METHOD_CHIBI = 3;
BrickMaster.COMMUNICATION_METHOD_RS485 = 4;
BrickMaster.COMMUNICATION_METHOD_WIFI = 5;
BrickMaster.COMMUNICATION_METHOD_ETHERNET = 6;
BrickMaster.COMMUNICATION_METHOD_WIFI_V2 = 7;

function BrickMaster(uid, ipcon) {
	//Basis to build stacks and has 4 Bricklet ports

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickMaster.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 9];
	this.responseExpected[BrickMaster.FUNCTION_GET_STACK_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_STACK_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_EXTENSION_TYPE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_EXTENSION_TYPE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_IS_CHIBI_PRESENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_MASTER_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_MASTER_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_SLAVE_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_SLAVE_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_SIGNAL_STRENGTH] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_ERROR_LOG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_FREQUENCY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_FREQUENCY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_CHIBI_CHANNEL] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIBI_CHANNEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_IS_RS485_PRESENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_RS485_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_RS485_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_RS485_SLAVE_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_RS485_SLAVE_ADDRESS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_RS485_ERROR_LOG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_RS485_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_RS485_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_IS_WIFI_PRESENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_ENCRYPTION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_ENCRYPTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_REFRESH_WIFI_STATUS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_CERTIFICATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_CERTIFICATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_POWER_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_POWER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_BUFFER_INFO] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_REGULATORY_DOMAIN] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_REGULATORY_DOMAIN] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_USB_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_LONG_WIFI_KEY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_LONG_WIFI_KEY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_HOSTNAME] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_HOSTNAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_IS_ETHERNET_PRESENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_ETHERNET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_ETHERNET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_ETHERNET_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_ETHERNET_HOSTNAME] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_SET_ETHERNET_MAC_ADDRESS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_SET_ETHERNET_WEBSOCKET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_ETHERNET_WEBSOCKET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_ETHERNET_AUTHENTICATION_SECRET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_ETHERNET_AUTHENTICATION_SECRET] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI_AUTHENTICATION_SECRET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI_AUTHENTICATION_SECRET] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CONNECTION_TYPE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_IS_WIFI2_PRESENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_START_WIFI2_BOOTLOADER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_WRITE_WIFI2_SERIAL_PORT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_READ_WIFI2_SERIAL_PORT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI2_AUTHENTICATION_SECRET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_AUTHENTICATION_SECRET] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI2_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI2_CLIENT_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_CLIENT_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI2_CLIENT_HOSTNAME] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_CLIENT_HOSTNAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI2_CLIENT_PASSWORD] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_CLIENT_PASSWORD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI2_AP_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_AP_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI2_AP_PASSWORD] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_AP_PASSWORD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SAVE_WIFI2_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_FIRMWARE_VERSION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_ENABLE_WIFI2_STATUS_LED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_DISABLE_WIFI2_STATUS_LED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_IS_WIFI2_STATUS_LED_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI2_MESH_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_MESH_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI2_MESH_ROUTER_SSID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_MESH_ROUTER_SSID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_WIFI2_MESH_ROUTER_PASSWORD] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_MESH_ROUTER_PASSWORD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_MESH_COMMON_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_MESH_CLIENT_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_WIFI2_MESH_AP_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_SEND_TIMEOUT_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_SET_SPITFP_BAUDRATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_SPITFP_BAUDRATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_ENABLE_STATUS_LED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_DISABLE_STATUS_LED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_IS_STATUS_LED_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickMaster.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickMaster.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickMaster.CALLBACK_STACK_CURRENT] = 'H';
	this.callbackFormats[BrickMaster.CALLBACK_STACK_VOLTAGE] = 'H';
	this.callbackFormats[BrickMaster.CALLBACK_USB_VOLTAGE] = 'H';
	this.callbackFormats[BrickMaster.CALLBACK_STACK_CURRENT_REACHED] = 'H';
	this.callbackFormats[BrickMaster.CALLBACK_STACK_VOLTAGE_REACHED] = 'H';
	this.callbackFormats[BrickMaster.CALLBACK_USB_VOLTAGE_REACHED] = 'H';



	this.getStackVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the stack voltage in mV. The stack voltage is the
		voltage that is supplied via the stack, i.e. it is given by a
		Step-Down or Step-Up Power Supply.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_VOLTAGE, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.getStackCurrent = function(returnCallback, errorCallback) {
		/*
		Returns the stack current in mA. The stack current is the
		current that is drawn via the stack, i.e. it is given by a
		Step-Down or Step-Up Power Supply.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_CURRENT, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setExtensionType = function(extension, exttype, returnCallback, errorCallback) {
		/*
		Writes the extension type to the EEPROM of a specified extension.
		The extension is either 0 or 1 (0 is the on the bottom, 1 is the one on top,
		if only one extension is present use 0).
		
		Possible extension types:
		
		.. csv-table::
		 :header: "Type", "Description"
		 :widths: 10, 100
		
		 "1",    "Chibi"
		 "2",    "RS485"
		 "3",    "WIFI"
		 "4",    "Ethernet"
		 "5",    "WIFI 2.0"
		
		The extension type is already set when bought and it can be set with the
		Brick Viewer, it is unlikely that you need this function.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_EXTENSION_TYPE, [extension, exttype], 'B I', '', returnCallback, errorCallback, false);
	};
	this.getExtensionType = function(extension, returnCallback, errorCallback) {
		/*
		Returns the type for a given extension as set by :func:`Set Extension Type`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_EXTENSION_TYPE, [extension], 'B', 'I', returnCallback, errorCallback, false);
	};
	this.isChibiPresent = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the Master Brick is at position 0 in the stack and a Chibi
		Extension is available.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_CHIBI_PRESENT, [], '', '?', returnCallback, errorCallback, false);
	};
	this.setChibiAddress = function(address, returnCallback, errorCallback) {
		/*
		Sets the address (1-255) belonging to the Chibi Extension.
		
		It is possible to set the address with the Brick Viewer and it will be
		saved in the EEPROM of the Chibi Extension, it does not
		have to be set on every startup.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_ADDRESS, [address], 'B', '', returnCallback, errorCallback, false);
	};
	this.getChibiAddress = function(returnCallback, errorCallback) {
		/*
		Returns the address as set by :func:`Set Chibi Address`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_ADDRESS, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setChibiMasterAddress = function(address, returnCallback, errorCallback) {
		/*
		Sets the address (1-255) of the Chibi Master. This address is used if the
		Chibi Extension is used as slave (i.e. it does not have a USB connection).
		
		It is possible to set the address with the Brick Viewer and it will be
		saved in the EEPROM of the Chibi Extension, it does not
		have to be set on every startup.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_MASTER_ADDRESS, [address], 'B', '', returnCallback, errorCallback, false);
	};
	this.getChibiMasterAddress = function(returnCallback, errorCallback) {
		/*
		Returns the address as set by :func:`Set Chibi Master Address`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_MASTER_ADDRESS, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setChibiSlaveAddress = function(num, address, returnCallback, errorCallback) {
		/*
		Sets up to 254 slave addresses. Valid addresses are in range 1-255. 0 has a
		special meaning, it is used as list terminator and not allowed as normal slave
		address. The address numeration (via ``num`` parameter) has to be used
		ascending from 0. For example: If you use the Chibi Extension in Master mode
		(i.e. the stack has an USB connection) and you want to talk to three other
		Chibi stacks with the slave addresses 17, 23, and 42, you should call with
		``(0, 17)``, ``(1, 23)``, ``(2, 42)`` and ``(3, 0)``. The last call with
		``(3, 0)`` is a list terminator and indicates that the Chibi slave address
		list contains 3 addresses in this case.
		
		It is possible to set the addresses with the Brick Viewer, that will take care
		of correct address numeration and list termination.
		
		The slave addresses will be saved in the EEPROM of the Chibi Extension, they
		don't have to be set on every startup.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_SLAVE_ADDRESS, [num, address], 'B B', '', returnCallback, errorCallback, false);
	};
	this.getChibiSlaveAddress = function(num, returnCallback, errorCallback) {
		/*
		Returns the slave address for a given ``num`` as set by
		:func:`Set Chibi Slave Address`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_SLAVE_ADDRESS, [num], 'B', 'B', returnCallback, errorCallback, false);
	};
	this.getChibiSignalStrength = function(returnCallback, errorCallback) {
		/*
		Returns the signal strength in dBm. The signal strength updates every time a
		packet is received.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_SIGNAL_STRENGTH, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.getChibiErrorLog = function(returnCallback, errorCallback) {
		/*
		Returns underrun, CRC error, no ACK and overflow error counts of the Chibi
		communication. If these errors start rising, it is likely that either the
		distance between two Chibi stacks is becoming too big or there are
		interferences.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_ERROR_LOG, [], '', 'H H H H', returnCallback, errorCallback, false);
	};
	this.setChibiFrequency = function(frequency, returnCallback, errorCallback) {
		/*
		Sets the Chibi frequency range for the Chibi Extension. Possible values are:
		
		.. csv-table::
		 :header: "Type", "Description"
		 :widths: 10, 100
		
		 "0",    "OQPSK 868MHz (Europe)"
		 "1",    "OQPSK 915MHz (US)"
		 "2",    "OQPSK 780MHz (China)"
		 "3",    "BPSK40 915MHz"
		
		It is possible to set the frequency with the Brick Viewer and it will be
		saved in the EEPROM of the Chibi Extension, it does not
		have to be set on every startup.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_FREQUENCY, [frequency], 'B', '', returnCallback, errorCallback, false);
	};
	this.getChibiFrequency = function(returnCallback, errorCallback) {
		/*
		Returns the frequency value as set by :func:`Set Chibi Frequency`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_FREQUENCY, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setChibiChannel = function(channel, returnCallback, errorCallback) {
		/*
		Sets the channel used by the Chibi Extension. Possible channels are
		different for different frequencies:
		
		.. csv-table::
		 :header: "Frequency",             "Possible Channels"
		 :widths: 40, 60
		
		 "OQPSK 868MHz (Europe)", "0"
		 "OQPSK 915MHz (US)",     "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
		 "OQPSK 780MHz (China)",  "0, 1, 2, 3"
		 "BPSK40 915MHz",         "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
		
		It is possible to set the channel with the Brick Viewer and it will be
		saved in the EEPROM of the Chibi Extension, it does not
		have to be set on every startup.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_CHIBI_CHANNEL, [channel], 'B', '', returnCallback, errorCallback, false);
	};
	this.getChibiChannel = function(returnCallback, errorCallback) {
		/*
		Returns the channel as set by :func:`Set Chibi Channel`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIBI_CHANNEL, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.isRS485Present = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the Master Brick is at position 0 in the stack and a RS485
		Extension is available.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_RS485_PRESENT, [], '', '?', returnCallback, errorCallback, false);
	};
	this.setRS485Address = function(address, returnCallback, errorCallback) {
		/*
		Sets the address (0-255) belonging to the RS485 Extension.
		
		Set to 0 if the RS485 Extension should be the RS485 Master (i.e.
		connected to a PC via USB).
		
		It is possible to set the address with the Brick Viewer and it will be
		saved in the EEPROM of the RS485 Extension, it does not
		have to be set on every startup.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_RS485_ADDRESS, [address], 'B', '', returnCallback, errorCallback, false);
	};
	this.getRS485Address = function(returnCallback, errorCallback) {
		/*
		Returns the address as set by :func:`Set RS485 Address`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_RS485_ADDRESS, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setRS485SlaveAddress = function(num, address, returnCallback, errorCallback) {
		/*
		Sets up to 255 slave addresses. Valid addresses are in range 1-255. 0 has a
		special meaning, it is used as list terminator and not allowed as normal slave
		address. The address numeration (via ``num`` parameter) has to be used
		ascending from 0. For example: If you use the RS485 Extension in Master mode
		(i.e. the stack has an USB connection) and you want to talk to three other
		RS485 stacks with the addresses 17, 23, and 42, you should call with
		``(0, 17)``, ``(1, 23)``, ``(2, 42)`` and ``(3, 0)``. The last call with
		``(3, 0)`` is a list terminator and indicates that the RS485 slave address list
		contains 3 addresses in this case.
		
		It is possible to set the addresses with the Brick Viewer, that will take care
		of correct address numeration and list termination.
		
		The slave addresses will be saved in the EEPROM of the Chibi Extension, they
		don't have to be set on every startup.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_RS485_SLAVE_ADDRESS, [num, address], 'B B', '', returnCallback, errorCallback, false);
	};
	this.getRS485SlaveAddress = function(num, returnCallback, errorCallback) {
		/*
		Returns the slave address for a given ``num`` as set by
		:func:`Set RS485 Slave Address`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_RS485_SLAVE_ADDRESS, [num], 'B', 'B', returnCallback, errorCallback, false);
	};
	this.getRS485ErrorLog = function(returnCallback, errorCallback) {
		/*
		Returns CRC error counts of the RS485 communication.
		If this counter starts rising, it is likely that the distance
		between the RS485 nodes is too big or there is some kind of
		interference.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_RS485_ERROR_LOG, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setRS485Configuration = function(speed, parity, stopbits, returnCallback, errorCallback) {
		/*
		Sets the configuration of the RS485 Extension. Speed is given in baud. The
		Master Brick will try to match the given baud rate as exactly as possible.
		The maximum recommended baud rate is 2000000 (2Mbit/s).
		Possible values for parity are 'n' (none), 'e' (even) and 'o' (odd).
		Possible values for stop bits are 1 and 2.
		
		If your RS485 is unstable (lost messages etc.), the first thing you should
		try is to decrease the speed. On very large bus (e.g. 1km), you probably
		should use a value in the range of 100000 (100kbit/s).
		
		The values are stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_RS485_CONFIGURATION, [speed, parity, stopbits], 'I c B', '', returnCallback, errorCallback, false);
	};
	this.getRS485Configuration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set RS485 Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_RS485_CONFIGURATION, [], '', 'I c B', returnCallback, errorCallback, false);
	};
	this.isWifiPresent = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the Master Brick is at position 0 in the stack and a WIFI
		Extension is available.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_WIFI_PRESENT, [], '', '?', returnCallback, errorCallback, false);
	};
	this.setWifiConfiguration = function(ssid, connection, ip, subnetMask, gateway, port, returnCallback, errorCallback) {
		/*
		Sets the configuration of the WIFI Extension. The ``ssid`` can have a max length
		of 32 characters. Possible values for ``connection`` are:
		
		.. csv-table::
		 :header: "Value", "Description"
		 :widths: 10, 90
		
		 "0", "DHCP"
		 "1", "Static IP"
		 "2", "Access Point: DHCP"
		 "3", "Access Point: Static IP"
		 "4", "Ad Hoc: DHCP"
		 "5", "Ad Hoc: Static IP"
		
		If you set ``connection`` to one of the static IP options then you have to
		supply ``ip``, ``subnet_mask`` and ``gateway`` as an array of size 4 (first
		element of the array is the least significant byte of the address). If
		``connection`` is set to one of the DHCP options then ``ip``, ``subnet_mask``
		and ``gateway`` are ignored, you can set them to 0.
		
		The last parameter is the port that your program will connect to. The
		default port, that is used by brickd, is 4223.
		
		The values are stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		
		It is recommended to use the Brick Viewer to set the WIFI configuration.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_CONFIGURATION, [ssid, connection, ip, subnetMask, gateway, port], 's32 B B4 B4 B4 H', '', returnCallback, errorCallback, false);
	};
	this.getWifiConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Wifi Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_CONFIGURATION, [], '', 's32 B B4 B4 B4 H', returnCallback, errorCallback, false);
	};
	this.setWifiEncryption = function(encryption, key, keyIndex, eapOptions, caCertificateLength, clientCertificateLength, privateKeyLength, returnCallback, errorCallback) {
		/*
		Sets the encryption of the WIFI Extension. The first parameter is the
		type of the encryption. Possible values are:
		
		.. csv-table::
		 :header: "Value", "Description"
		 :widths: 10, 90
		
		 "0", "WPA/WPA2"
		 "1", "WPA Enterprise (EAP-FAST, EAP-TLS, EAP-TTLS, PEAP)"
		 "2", "WEP"
		 "3", "No Encryption"
		
		The ``key`` has a max length of 50 characters and is used if ``encryption``
		is set to 0 or 2 (WPA/WPA2 or WEP). Otherwise the value is ignored.
		
		For WPA/WPA2 the key has to be at least 8 characters long. If you want to set
		a key with more than 50 characters, see :func:`Set Long Wifi Key`.
		
		For WEP the key has to be either 10 or 26 hexadecimal digits long. It is
		possible to set the WEP ``key_index`` (1-4). If you don't know your
		``key_index``, it is likely 1.
		
		If you choose WPA Enterprise as encryption, you have to set ``eap_options`` and
		the length of the certificates (for other encryption types these parameters
		are ignored). The certificate length are given in byte and the certificates
		themselves can be set with :func:`Set Wifi Certificate`. ``eap_options`` consist
		of the outer authentication (bits 1-2), inner authentication (bit 3) and
		certificate type (bits 4-5):
		
		.. csv-table::
		 :header: "Option", "Bits", "Description"
		 :widths: 20, 10, 70
		
		 "outer authentication", "1-2", "0=EAP-FAST, 1=EAP-TLS, 2=EAP-TTLS, 3=EAP-PEAP"
		 "inner authentication", "3", "0=EAP-MSCHAP, 1=EAP-GTC"
		 "certificate type", "4-5", "0=CA Certificate, 1=Client Certificate, 2=Private Key"
		
		Example for EAP-TTLS + EAP-GTC + Private Key: ``option = 2 | (1 << 2) | (2 << 3)``.
		
		The values are stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		
		It is recommended to use the Brick Viewer to set the Wi-Fi encryption.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_ENCRYPTION, [encryption, key, keyIndex, eapOptions, caCertificateLength, clientCertificateLength, privateKeyLength], 'B s50 B B H H H', '', returnCallback, errorCallback, false);
	};
	this.getWifiEncryption = function(returnCallback, errorCallback) {
		/*
		Returns the encryption as set by :func:`Set Wifi Encryption`.
		
		.. note::
		 Since Master Brick Firmware version 2.4.4 the key is not returned anymore.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_ENCRYPTION, [], '', 'B s50 B B H H H', returnCallback, errorCallback, false);
	};
	this.getWifiStatus = function(returnCallback, errorCallback) {
		/*
		Returns the status of the WIFI Extension. The ``state`` is updated automatically,
		all of the other parameters are updated on startup and every time
		:func:`Refresh Wifi Status` is called.
		
		Possible states are:
		
		.. csv-table::
		 :header: "State", "Description"
		 :widths: 10, 90
		
		 "0", "Disassociated"
		 "1", "Associated"
		 "2", "Associating"
		 "3", "Error"
		 "255", "Not initialized yet"
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_STATUS, [], '', 'B6 B6 B h B4 B4 B4 I I B', returnCallback, errorCallback, false);
	};
	this.refreshWifiStatus = function(returnCallback, errorCallback) {
		/*
		Refreshes the Wi-Fi status (see :func:`Get Wifi Status`). To read the status
		of the Wi-Fi module, the Master Brick has to change from data mode to
		command mode and back. This transaction and the readout itself is
		unfortunately time consuming. This means, that it might take some ms
		until the stack with attached WIFI Extension reacts again after this
		function is called.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_REFRESH_WIFI_STATUS, [], '', '', returnCallback, errorCallback, false);
	};
	this.setWifiCertificate = function(index, data, dataLength, returnCallback, errorCallback) {
		/*
		This function is used to set the certificate as well as password and username
		for WPA Enterprise. To set the username use index 0xFFFF,
		to set the password use index 0xFFFE. The max length of username and
		password is 32.
		
		The certificate is written in chunks of size 32 and the index is used as
		the index of the chunk. ``data_length`` should nearly always be 32. Only
		the last chunk can have a length that is not equal to 32.
		
		The starting index of the CA Certificate is 0, of the Client Certificate
		10000 and for the Private Key 20000. Maximum sizes are 1312, 1312 and
		4320 byte respectively.
		
		The values are stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after uploading the certificate.
		
		It is recommended to use the Brick Viewer to set the certificate, username
		and password.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_CERTIFICATE, [index, data, dataLength], 'H B32 B', '', returnCallback, errorCallback, false);
	};
	this.getWifiCertificate = function(index, returnCallback, errorCallback) {
		/*
		Returns the certificate for a given index as set by :func:`Set Wifi Certificate`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_CERTIFICATE, [index], 'H', 'B32 B', returnCallback, errorCallback, false);
	};
	this.setWifiPowerMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the power mode of the WIFI Extension. Possible modes are:
		
		.. csv-table::
		 :header: "Mode", "Description"
		 :widths: 10, 90
		
		 "0", "Full Speed (high power consumption, high throughput)"
		 "1", "Low Power (low power consumption, low throughput)"
		
		The default value is 0 (Full Speed).
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_POWER_MODE, [mode], 'B', '', returnCallback, errorCallback, false);
	};
	this.getWifiPowerMode = function(returnCallback, errorCallback) {
		/*
		Returns the power mode as set by :func:`Set Wifi Power Mode`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_POWER_MODE, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.getWifiBufferInfo = function(returnCallback, errorCallback) {
		/*
		Returns informations about the Wi-Fi receive buffer. The Wi-Fi
		receive buffer has a max size of 1500 byte and if data is transfered
		too fast, it might overflow.
		
		The return values are the number of overflows, the low watermark
		(i.e. the smallest number of bytes that were free in the buffer) and
		the bytes that are currently used.
		
		You should always try to keep the buffer empty, otherwise you will
		have a permanent latency. A good rule of thumb is, that you can transfer
		1000 messages per second without problems.
		
		Try to not send more then 50 messages at a time without any kind of
		break between them.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_BUFFER_INFO, [], '', 'I H H', returnCallback, errorCallback, false);
	};
	this.setWifiRegulatoryDomain = function(domain, returnCallback, errorCallback) {
		/*
		Sets the regulatory domain of the WIFI Extension. Possible domains are:
		
		.. csv-table::
		 :header: "Domain", "Description"
		 :widths: 10, 90
		
		 "0", "FCC: Channel 1-11 (N/S America, Australia, New Zealand)"
		 "1", "ETSI: Channel 1-13 (Europe, Middle East, Africa)"
		 "2", "TELEC: Channel 1-14 (Japan)"
		
		The default value is 1 (ETSI).
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_REGULATORY_DOMAIN, [domain], 'B', '', returnCallback, errorCallback, false);
	};
	this.getWifiRegulatoryDomain = function(returnCallback, errorCallback) {
		/*
		Returns the regulatory domain as set by :func:`Set Wifi Regulatory Domain`.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_REGULATORY_DOMAIN, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.getUSBVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the USB voltage in mV. Does not work with hardware version 2.1.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_USB_VOLTAGE, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.setLongWifiKey = function(key, returnCallback, errorCallback) {
		/*
		Sets a long Wi-Fi key (up to 63 chars, at least 8 chars) for WPA encryption.
		This key will be used
		if the key in :func:`Set Wifi Encryption` is set to "-". In the old protocol,
		a payload of size 63 was not possible, so the maximum key length was 50 chars.
		
		With the new protocol this is possible, since we didn't want to break API,
		this function was added additionally.
		
		.. versionadded:: 2.0.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_LONG_WIFI_KEY, [key], 's64', '', returnCallback, errorCallback, false);
	};
	this.getLongWifiKey = function(returnCallback, errorCallback) {
		/*
		Returns the encryption key as set by :func:`Set Long Wifi Key`.
		
		.. note::
		 Since Master Brick firmware version 2.4.4 the key is not returned anymore.
		
		.. versionadded:: 2.0.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_LONG_WIFI_KEY, [], '', 's64', returnCallback, errorCallback, false);
	};
	this.setWifiHostname = function(hostname, returnCallback, errorCallback) {
		/*
		Sets the hostname of the WIFI Extension. The hostname will be displayed
		by access points as the hostname in the DHCP clients table.
		
		Setting an empty String will restore the default hostname.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_HOSTNAME, [hostname], 's16', '', returnCallback, errorCallback, false);
	};
	this.getWifiHostname = function(returnCallback, errorCallback) {
		/*
		Returns the hostname as set by :func:`Set Wifi Hostname`.
		
		An empty String means, that the default hostname is used.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_HOSTNAME, [], '', 's16', returnCallback, errorCallback, false);
	};
	this.setStackCurrentCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Stack Current` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Stack Current` callback is only triggered if the current has changed
		since the last triggering.
		
		The default value is 0.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getStackCurrentCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Stack Current Callback Period`.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setStackVoltageCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`Stack Voltage` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Stack Voltage` callback is only triggered if the voltage has changed
		since the last triggering.
		
		The default value is 0.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getStackVoltageCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Stack Voltage Callback Period`.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setUSBVoltageCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the :cb:`USB Voltage` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`USB Voltage` callback is only triggered if the voltage has changed
		since the last triggering.
		
		The default value is 0.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_PERIOD, [period], 'I', '', returnCallback, errorCallback, false);
	};
	this.getUSBVoltageCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set USB Voltage Callback Period`.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.setStackCurrentCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Stack Current Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the current is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the current is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the current is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the current is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_STACK_CURRENT_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback, false);
	};
	this.getStackCurrentCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Stack Current Callback Threshold`.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_CURRENT_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback, false);
	};
	this.setStackVoltageCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Stack Voltage Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the voltage is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the voltage is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the voltage is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the voltage is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_STACK_VOLTAGE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback, false);
	};
	this.getStackVoltageCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Stack Voltage Callback Threshold`.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_STACK_VOLTAGE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback, false);
	};
	this.setUSBVoltageCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`USB Voltage Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the voltage is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the voltage is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the voltage is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the voltage is greater than the min value (max is ignored)"
		
		The default value is ('x', 0, 0).
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_USB_VOLTAGE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', '', returnCallback, errorCallback, false);
	};
	this.getUSBVoltageCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set USB Voltage Callback Threshold`.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_USB_VOLTAGE_CALLBACK_THRESHOLD, [], '', 'c H H', returnCallback, errorCallback, false);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period in ms with which the threshold callbacks
		
		* :cb:`Stack Current Reached`,
		* :cb:`Stack Voltage Reached`,
		* :cb:`USB Voltage Reached`
		
		are triggered, if the thresholds
		
		* :func:`Set Stack Current Callback Threshold`,
		* :func:`Set Stack Voltage Callback Threshold`,
		* :func:`Set USB Voltage Callback Threshold`
		
		keep being reached.
		
		The default value is 100.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', '', returnCallback, errorCallback, false);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		
		.. versionadded:: 2.0.5$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.isEthernetPresent = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the Master Brick is at position 0 in the stack and an Ethernet
		Extension is available.
		
		.. versionadded:: 2.1.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_ETHERNET_PRESENT, [], '', '?', returnCallback, errorCallback, false);
	};
	this.setEthernetConfiguration = function(connection, ip, subnetMask, gateway, port, returnCallback, errorCallback) {
		/*
		Sets the configuration of the Ethernet Extension. Possible values for
		``connection`` are:
		
		.. csv-table::
		 :header: "Value", "Description"
		 :widths: 10, 90
		
		 "0", "DHCP"
		 "1", "Static IP"
		
		If you set ``connection`` to static IP options then you have to supply ``ip``,
		``subnet_mask`` and ``gateway`` as an array of size 4 (first element of the
		array is the least significant byte of the address). If ``connection`` is set
		to the DHCP options then ``ip``, ``subnet_mask`` and ``gateway`` are ignored,
		you can set them to 0.
		
		The last parameter is the port that your program will connect to. The
		default port, that is used by brickd, is 4223.
		
		The values are stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		
		It is recommended to use the Brick Viewer to set the Ethernet configuration.
		
		.. versionadded:: 2.1.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_ETHERNET_CONFIGURATION, [connection, ip, subnetMask, gateway, port], 'B B4 B4 B4 H', '', returnCallback, errorCallback, false);
	};
	this.getEthernetConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Ethernet Configuration`.
		
		.. versionadded:: 2.1.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_ETHERNET_CONFIGURATION, [], '', 'B B4 B4 B4 H', returnCallback, errorCallback, false);
	};
	this.getEthernetStatus = function(returnCallback, errorCallback) {
		/*
		Returns the status of the Ethernet Extension.
		
		``mac_address``, ``ip``, ``subnet_mask`` and ``gateway`` are given as an array.
		The first element of the array is the least significant byte of the address.
		
		``rx_count`` and ``tx_count`` are the number of bytes that have been
		received/send since last restart.
		
		``hostname`` is the currently used hostname.
		
		.. versionadded:: 2.1.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_ETHERNET_STATUS, [], '', 'B6 B4 B4 B4 I I s32', returnCallback, errorCallback, false);
	};
	this.setEthernetHostname = function(hostname, returnCallback, errorCallback) {
		/*
		Sets the hostname of the Ethernet Extension. The hostname will be displayed
		by access points as the hostname in the DHCP clients table.
		
		Setting an empty String will restore the default hostname.
		
		The current hostname can be discovered with :func:`Get Ethernet Status`.
		
		.. versionadded:: 2.1.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_ETHERNET_HOSTNAME, [hostname], 's32', '', returnCallback, errorCallback, false);
	};
	this.setEthernetMACAddress = function(macAddress, returnCallback, errorCallback) {
		/*
		Sets the MAC address of the Ethernet Extension. The Ethernet Extension should
		come configured with a valid MAC address, that is also written on a
		sticker of the extension itself.
		
		The MAC address can be read out again with :func:`Get Ethernet Status`.
		
		.. versionadded:: 2.1.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_ETHERNET_MAC_ADDRESS, [macAddress], 'B6', '', returnCallback, errorCallback, false);
	};
	this.setEthernetWebsocketConfiguration = function(sockets, port, returnCallback, errorCallback) {
		/*
		Sets the Ethernet WebSocket configuration. The first parameter sets the number of socket
		connections that are reserved for WebSockets. The range is 0-7. The connections
		are shared with the plain sockets. Example: If you set the connections to 3,
		there will be 3 WebSocket and 4 plain socket connections available.
		
		The second parameter is the port for the WebSocket connections. The port can
		not be the same as the port for the plain socket connections.
		
		The values are stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		
		It is recommended to use the Brick Viewer to set the Ethernet configuration.
		
		The default values are 3 for the socket connections and 4280 for the port.
		
		.. versionadded:: 2.2.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_ETHERNET_WEBSOCKET_CONFIGURATION, [sockets, port], 'B H', '', returnCallback, errorCallback, false);
	};
	this.getEthernetWebsocketConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Ethernet Configuration`.
		
		.. versionadded:: 2.2.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_ETHERNET_WEBSOCKET_CONFIGURATION, [], '', 'B H', returnCallback, errorCallback, false);
	};
	this.setEthernetAuthenticationSecret = function(secret, returnCallback, errorCallback) {
		/*
		Sets the Ethernet authentication secret. The secret can be a string of up to 64
		characters. An empty string disables the authentication.
		
		See the :ref:`authentication tutorial <tutorial_authentication>` for more
		information.
		
		The secret is stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		
		It is recommended to use the Brick Viewer to set the Ethernet authentication secret.
		
		The default value is an empty string (authentication disabled).
		
		.. versionadded:: 2.2.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_ETHERNET_AUTHENTICATION_SECRET, [secret], 's64', '', returnCallback, errorCallback, false);
	};
	this.getEthernetAuthenticationSecret = function(returnCallback, errorCallback) {
		/*
		Returns the authentication secret as set by
		:func:`Set Ethernet Authentication Secret`.
		
		.. versionadded:: 2.2.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_ETHERNET_AUTHENTICATION_SECRET, [], '', 's64', returnCallback, errorCallback, false);
	};
	this.setWifiAuthenticationSecret = function(secret, returnCallback, errorCallback) {
		/*
		Sets the WIFI authentication secret. The secret can be a string of up to 64
		characters. An empty string disables the authentication.
		
		See the :ref:`authentication tutorial <tutorial_authentication>` for more
		information.
		
		The secret is stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		
		It is recommended to use the Brick Viewer to set the WIFI authentication secret.
		
		The default value is an empty string (authentication disabled).
		
		.. versionadded:: 2.2.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI_AUTHENTICATION_SECRET, [secret], 's64', '', returnCallback, errorCallback, false);
	};
	this.getWifiAuthenticationSecret = function(returnCallback, errorCallback) {
		/*
		Returns the authentication secret as set by
		:func:`Set Wifi Authentication Secret`.
		
		.. versionadded:: 2.2.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI_AUTHENTICATION_SECRET, [], '', 's64', returnCallback, errorCallback, false);
	};
	this.getConnectionType = function(returnCallback, errorCallback) {
		/*
		Returns the type of the connection over which this function was called.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CONNECTION_TYPE, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.isWifi2Present = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the Master Brick is at position 0 in the stack and a WIFI
		Extension 2.0 is available.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_WIFI2_PRESENT, [], '', '?', returnCallback, errorCallback, false);
	};
	this.startWifi2Bootloader = function(returnCallback, errorCallback) {
		/*
		Starts the bootloader of the WIFI Extension 2.0. Returns 0 on success.
		Afterwards the :func:`Write Wifi2 Serial Port` and :func:`Read Wifi2 Serial Port`
		functions can be used to communicate with the bootloader to flash a new
		firmware.
		
		The bootloader should only be started over a USB connection. It cannot be
		started over a WIFI2 connection, see the :func:`Get Connection Type` function.
		
		It is recommended to use the Brick Viewer to update the firmware of the WIFI
		Extension 2.0.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_START_WIFI2_BOOTLOADER, [], '', 'b', returnCallback, errorCallback, false);
	};
	this.writeWifi2SerialPort = function(data, length, returnCallback, errorCallback) {
		/*
		Writes up to 60 bytes (number of bytes to be written specified by ``length``)
		to the serial port of the bootloader of the WIFI Extension 2.0. Returns 0 on
		success.
		
		Before this function can be used the bootloader has to be started using the
		:func:`Start Wifi2 Bootloader` function.
		
		It is recommended to use the Brick Viewer to update the firmware of the WIFI
		Extension 2.0.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_WRITE_WIFI2_SERIAL_PORT, [data, length], 'B60 B', 'b', returnCallback, errorCallback, false);
	};
	this.readWifi2SerialPort = function(length, returnCallback, errorCallback) {
		/*
		Reads up to 60 bytes (number of bytes to be read specified by ``length``)
		from the serial port of the bootloader of the WIFI Extension 2.0.
		Returns the number of actually read bytes.
		
		Before this function can be used the bootloader has to be started using the
		:func:`Start Wifi2 Bootloader` function.
		
		It is recommended to use the Brick Viewer to update the firmware of the WIFI
		Extension 2.0.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_READ_WIFI2_SERIAL_PORT, [length], 'B', 'B60 B', returnCallback, errorCallback, false);
	};
	this.setWifi2AuthenticationSecret = function(secret, returnCallback, errorCallback) {
		/*
		Sets the WIFI authentication secret. The secret can be a string of up to 64
		characters. An empty string disables the authentication. The default value is
		an empty string (authentication disabled).
		
		See the :ref:`authentication tutorial <tutorial_authentication>` for more
		information.
		
		To apply configuration changes to the WIFI Extension 2.0 the
		:func:`Save Wifi2 Configuration` function has to be called and the Master Brick
		has to be restarted afterwards.
		
		It is recommended to use the Brick Viewer to configure the WIFI Extension 2.0.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI2_AUTHENTICATION_SECRET, [secret], 's64', '', returnCallback, errorCallback, false);
	};
	this.getWifi2AuthenticationSecret = function(returnCallback, errorCallback) {
		/*
		Returns the WIFI authentication secret as set by
		:func:`Set Wifi2 Authentication Secret`.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_AUTHENTICATION_SECRET, [], '', 's64', returnCallback, errorCallback, false);
	};
	this.setWifi2Configuration = function(port, websocketPort, websitePort, phyMode, sleepMode, website, returnCallback, errorCallback) {
		/*
		Sets the general configuration of the WIFI Extension 2.0.
		
		The ``port`` parameter sets the port number that your programm will connect
		to. The default value is 4223.
		
		The ``websocket_port`` parameter sets the WebSocket port number that your
		JavaScript programm will connect to. The default value is 4280.
		
		The ``website_port`` parameter sets the port number for the website of the
		WIFI Extension 2.0. The default value is 80.
		
		The ``phy_mode`` parameter sets the specific wireless network mode to be used.
		Possible values are B, G and N. The default value is G.
		
		The ``sleep_mode`` parameter is currently unused.
		
		The ``website`` parameter is used to enable or disable the web interface of
		the WIFI Extension 2.0, which is available from firmware version 2.0.1. Note
		that, for firmware version 2.0.3 and older, to disable the the web interface
		the ``website_port`` parameter must be set to 1 and greater than 1 to enable
		the web interface. For firmware version 2.0.4 and later, setting this parameter
		to 1 will enable the web interface and setting it to 0 will disable the web
		interface.
		
		To apply configuration changes to the WIFI Extension 2.0 the
		:func:`Save Wifi2 Configuration` function has to be called and the Master Brick
		has to be restarted afterwards.
		
		It is recommended to use the Brick Viewer to configure the WIFI Extension 2.0.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI2_CONFIGURATION, [port, websocketPort, websitePort, phyMode, sleepMode, website], 'H H H B B B', '', returnCallback, errorCallback, false);
	};
	this.getWifi2Configuration = function(returnCallback, errorCallback) {
		/*
		Returns the general configuration as set by :func:`Set Wifi2 Configuration`.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_CONFIGURATION, [], '', 'H H H B B B', returnCallback, errorCallback, false);
	};
	this.getWifi2Status = function(returnCallback, errorCallback) {
		/*
		Returns the client and access point status of the WIFI Extension 2.0.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_STATUS, [], '', '? B B4 B4 B4 B6 I I b ? B4 B4 B4 B6 I I B', returnCallback, errorCallback, false);
	};
	this.setWifi2ClientConfiguration = function(enable, ssid, ip, subnetMask, gateway, macAddress, bssid, returnCallback, errorCallback) {
		/*
		Sets the client specific configuration of the WIFI Extension 2.0.
		
		The ``enable`` parameter enables or disables the client part of the
		WIFI Extension 2.0. The default value is *true*.
		
		The ``ssid`` parameter sets the SSID (up to 32 characters) of the access point
		to connect to.
		
		If the ``ip`` parameter is set to all zero then ``subnet_mask`` and ``gateway``
		parameters are also set to all zero and DHCP is used for IP address configuration.
		Otherwise those three parameters can be used to configure a static IP address.
		The default configuration is DHCP.
		
		If the ``mac_address`` parameter is set to all zero then the factory MAC
		address is used. Otherwise this parameter can be used to set a custom MAC
		address.
		
		If the ``bssid`` parameter is set to all zero then WIFI Extension 2.0 will
		connect to any access point that matches the configured SSID. Otherwise this
		parameter can be used to make the WIFI Extension 2.0 only connect to an
		access point if SSID and BSSID match.
		
		To apply configuration changes to the WIFI Extension 2.0 the
		:func:`Save Wifi2 Configuration` function has to be called and the Master Brick
		has to be restarted afterwards.
		
		It is recommended to use the Brick Viewer to configure the WIFI Extension 2.0.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI2_CLIENT_CONFIGURATION, [enable, ssid, ip, subnetMask, gateway, macAddress, bssid], '? s32 B4 B4 B4 B6 B6', '', returnCallback, errorCallback, false);
	};
	this.getWifi2ClientConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the client configuration as set by :func:`Set Wifi2 Client Configuration`.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_CLIENT_CONFIGURATION, [], '', '? s32 B4 B4 B4 B6 B6', returnCallback, errorCallback, false);
	};
	this.setWifi2ClientHostname = function(hostname, returnCallback, errorCallback) {
		/*
		Sets the client hostname (up to 32 characters) of the WIFI Extension 2.0. The
		hostname will be displayed by access points as the hostname in the DHCP clients
		table.
		
		To apply configuration changes to the WIFI Extension 2.0 the
		:func:`Save Wifi2 Configuration` function has to be called and the Master Brick
		has to be restarted afterwards.
		
		It is recommended to use the Brick Viewer to configure the WIFI Extension 2.0.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI2_CLIENT_HOSTNAME, [hostname], 's32', '', returnCallback, errorCallback, false);
	};
	this.getWifi2ClientHostname = function(returnCallback, errorCallback) {
		/*
		Returns the client hostname as set by :func:`Set Wifi2 Client Hostname`.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_CLIENT_HOSTNAME, [], '', 's32', returnCallback, errorCallback, false);
	};
	this.setWifi2ClientPassword = function(password, returnCallback, errorCallback) {
		/*
		Sets the client password (up to 63 chars) for WPA/WPA2 encryption.
		
		To apply configuration changes to the WIFI Extension 2.0 the
		:func:`Save Wifi2 Configuration` function has to be called and the Master Brick
		has to be restarted afterwards.
		
		It is recommended to use the Brick Viewer to configure the WIFI Extension 2.0.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI2_CLIENT_PASSWORD, [password], 's64', '', returnCallback, errorCallback, false);
	};
	this.getWifi2ClientPassword = function(returnCallback, errorCallback) {
		/*
		Returns the client password as set by :func:`Set Wifi2 Client Password`.
		
		.. note::
		 Since WIFI Extension 2.0 firmware version 2.1.3 the password is not
		 returned anymore.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_CLIENT_PASSWORD, [], '', 's64', returnCallback, errorCallback, false);
	};
	this.setWifi2APConfiguration = function(enable, ssid, ip, subnetMask, gateway, encryption, hidden, channel, macAddress, returnCallback, errorCallback) {
		/*
		Sets the access point specific configuration of the WIFI Extension 2.0.
		
		The ``enable`` parameter enables or disables the access point part of the
		WIFI Extension 2.0. The default value is true.
		
		The ``ssid`` parameter sets the SSID (up to 32 characters) of the access point.
		
		If the ``ip`` parameter is set to all zero then ``subnet_mask`` and ``gateway``
		parameters are also set to all zero and DHCP is used for IP address configuration.
		Otherwise those three parameters can be used to configure a static IP address.
		The default configuration is DHCP.
		
		The ``encryption`` parameter sets the encryption mode to be used. Possible
		values are Open (no encryption), WEP or WPA/WPA2 PSK. The default value is
		WPA/WPA2 PSK. Use the :func:`Set Wifi2 AP Password` function to set the encryption
		password.
		
		The ``hidden`` parameter makes the access point hide or show its SSID.
		The default value is *false*.
		
		The ``channel`` parameter sets the channel (1 to 13) of the access point.
		The default value is 1.
		
		If the ``mac_address`` parameter is set to all zero then the factory MAC
		address is used. Otherwise this parameter can be used to set a custom MAC
		address.
		
		To apply configuration changes to the WIFI Extension 2.0 the
		:func:`Save Wifi2 Configuration` function has to be called and the Master Brick
		has to be restarted afterwards.
		
		It is recommended to use the Brick Viewer to configure the WIFI Extension 2.0.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI2_AP_CONFIGURATION, [enable, ssid, ip, subnetMask, gateway, encryption, hidden, channel, macAddress], '? s32 B4 B4 B4 B ? B B6', '', returnCallback, errorCallback, false);
	};
	this.getWifi2APConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the access point configuration as set by :func:`Set Wifi2 AP Configuration`.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_AP_CONFIGURATION, [], '', '? s32 B4 B4 B4 B ? B B6', returnCallback, errorCallback, false);
	};
	this.setWifi2APPassword = function(password, returnCallback, errorCallback) {
		/*
		Sets the access point password (up to 63 chars) for the configured encryption
		mode, see :func:`Set Wifi2 AP Configuration`.
		
		To apply configuration changes to the WIFI Extension 2.0 the
		:func:`Save Wifi2 Configuration` function has to be called and the Master Brick
		has to be restarted afterwards.
		
		It is recommended to use the Brick Viewer to configure the WIFI Extension 2.0.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI2_AP_PASSWORD, [password], 's64', '', returnCallback, errorCallback, false);
	};
	this.getWifi2APPassword = function(returnCallback, errorCallback) {
		/*
		Returns the access point password as set by :func:`Set Wifi2 AP Password`.
		
		.. note::
		 Since WIFI Extension 2.0 firmware version 2.1.3 the password is not
		 returned anymore.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_AP_PASSWORD, [], '', 's64', returnCallback, errorCallback, false);
	};
	this.saveWifi2Configuration = function(returnCallback, errorCallback) {
		/*
		All configuration functions for the WIFI Extension 2.0 do not change the
		values permanently. After configuration this function has to be called to
		permanently store the values.
		
		The values are stored in the EEPROM and only applied on startup. That means
		you have to restart the Master Brick after configuration.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SAVE_WIFI2_CONFIGURATION, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.getWifi2FirmwareVersion = function(returnCallback, errorCallback) {
		/*
		Returns the current version of the WIFI Extension 2.0 firmware (major, minor, revision).
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_FIRMWARE_VERSION, [], '', 'B3', returnCallback, errorCallback, false);
	};
	this.enableWifi2StatusLED = function(returnCallback, errorCallback) {
		/*
		Turns the green status LED of the WIFI Extension 2.0 on.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_ENABLE_WIFI2_STATUS_LED, [], '', '', returnCallback, errorCallback, false);
	};
	this.disableWifi2StatusLED = function(returnCallback, errorCallback) {
		/*
		Turns the green status LED of the WIFI Extension 2.0 off.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_DISABLE_WIFI2_STATUS_LED, [], '', '', returnCallback, errorCallback, false);
	};
	this.isWifi2StatusLEDEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the green status LED of the WIFI Extension 2.0 is turned on.
		
		.. versionadded:: 2.4.0$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_WIFI2_STATUS_LED_ENABLED, [], '', '?', returnCallback, errorCallback, false);
	};
	this.setWifi2MeshConfiguration = function(enable, rootIP, rootSubnetMask, rootGateway, routerBSSID, groupID, groupSSIDPrefix, gatewayIP, gatewayPort, returnCallback, errorCallback) {
		/*
		Requires WIFI Extension 2.0 firmware 2.1.0.
		
		Sets the mesh specific configuration of the WIFI Extension 2.0.
		
		The ``enable`` parameter enables or disables the mesh part of the
		WIFI Extension 2.0. The default value is *false*. The mesh part cannot be
		enabled together with the client and access-point part.
		
		If the ``root_ip`` parameter is set to all zero then ``root_subnet_mask``
		and ``root_gateway`` parameters are also set to all zero and DHCP is used for
		IP address configuration. Otherwise those three parameters can be used to
		configure a static IP address. The default configuration is DHCP.
		
		If the ``router_bssid`` parameter is set to all zero then the information is
		taken from Wi-Fi scan when connecting the SSID as set by
		:func:`Set Wifi2 Mesh Router SSID`. This only works if the the SSID is not hidden.
		In case the router has hidden SSID this parameter must be specified, otherwise
		the node will not be able to reach the mesh router.
		
		The ``group_id`` and the ``group_ssid_prefix`` parameters identifies a
		particular mesh network and nodes configured with same ``group_id`` and the
		``group_ssid_prefix`` are considered to be in the same mesh network.
		
		The ``gateway_ip`` and the ``gateway_port`` parameters specifies the location
		of the brickd that supports mesh feature.
		
		To apply configuration changes to the WIFI Extension 2.0 the
		:func:`Save Wifi2 Configuration` function has to be called and the Master Brick
		has to be restarted afterwards.
		
		It is recommended to use the Brick Viewer to configure the WIFI Extension 2.0.
		
		.. versionadded:: 2.4.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI2_MESH_CONFIGURATION, [enable, rootIP, rootSubnetMask, rootGateway, routerBSSID, groupID, groupSSIDPrefix, gatewayIP, gatewayPort], '? B4 B4 B4 B6 B6 s16 B4 H', '', returnCallback, errorCallback, false);
	};
	this.getWifi2MeshConfiguration = function(returnCallback, errorCallback) {
		/*
		Requires WIFI Extension 2.0 firmware 2.1.0.
		
		Returns the mesh configuration as set by :func:`Set Wifi2 Mesh Configuration`.
		
		.. versionadded:: 2.4.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_MESH_CONFIGURATION, [], '', '? B4 B4 B4 B6 B6 s16 B4 H', returnCallback, errorCallback, false);
	};
	this.setWifi2MeshRouterSSID = function(ssid, returnCallback, errorCallback) {
		/*
		Requires WIFI Extension 2.0 firmware 2.1.0.
		
		Sets the mesh router SSID of the WIFI Extension 2.0.
		It is used to specify the mesh router to connect to.
		
		Note that even though in the argument of this function a 32 characters long SSID
		is allowed, in practice valid SSID should have a maximum of 31 characters. This
		is due to a bug in the mesh library that we use in the firmware of the extension.
		
		To apply configuration changes to the WIFI Extension 2.0 the
		:func:`Save Wifi2 Configuration` function has to be called and the Master Brick
		has to be restarted afterwards.
		
		It is recommended to use the Brick Viewer to configure the WIFI Extension 2.0.
		
		.. versionadded:: 2.4.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI2_MESH_ROUTER_SSID, [ssid], 's32', '', returnCallback, errorCallback, false);
	};
	this.getWifi2MeshRouterSSID = function(returnCallback, errorCallback) {
		/*
		Requires WIFI Extension 2.0 firmware 2.1.0.
		
		Returns the mesh router SSID as set by :func:`Set Wifi2 Mesh Router SSID`.
		
		.. versionadded:: 2.4.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_MESH_ROUTER_SSID, [], '', 's32', returnCallback, errorCallback, false);
	};
	this.setWifi2MeshRouterPassword = function(password, returnCallback, errorCallback) {
		/*
		Requires WIFI Extension 2.0 firmware 2.1.0.
		
		Sets the mesh router password (up to 64 characters) for WPA/WPA2 encryption.
		The password will be used to connect to the mesh router.
		
		To apply configuration changes to the WIFI Extension 2.0 the
		:func:`Save Wifi2 Configuration` function has to be called and the Master Brick
		has to be restarted afterwards.
		
		It is recommended to use the Brick Viewer to configure the WIFI Extension 2.0.
		
		.. versionadded:: 2.4.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_WIFI2_MESH_ROUTER_PASSWORD, [password], 's64', '', returnCallback, errorCallback, false);
	};
	this.getWifi2MeshRouterPassword = function(returnCallback, errorCallback) {
		/*
		Requires WIFI Extension 2.0 firmware 2.1.0.
		
		Returns the mesh router password as set by :func:`Set Wifi2 Mesh Router Password`.
		
		.. versionadded:: 2.4.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_MESH_ROUTER_PASSWORD, [], '', 's64', returnCallback, errorCallback, false);
	};
	this.getWifi2MeshCommonStatus = function(returnCallback, errorCallback) {
		/*
		Requires WIFI Extension 2.0 firmware 2.1.0.
		
		Returns the common mesh status of the WIFI Extension 2.0.
		
		.. versionadded:: 2.4.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_MESH_COMMON_STATUS, [], '', 'B ? ? H I I', returnCallback, errorCallback, false);
	};
	this.getWifi2MeshClientStatus = function(returnCallback, errorCallback) {
		/*
		Requires WIFI Extension 2.0 firmware 2.1.0.
		
		Returns the mesh client status of the WIFI Extension 2.0.
		
		.. versionadded:: 2.4.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_MESH_CLIENT_STATUS, [], '', 's32 B4 B4 B4 B6', returnCallback, errorCallback, false);
	};
	this.getWifi2MeshAPStatus = function(returnCallback, errorCallback) {
		/*
		Requires WIFI Extension 2.0 firmware 2.1.0.
		
		Returns the mesh AP status of the WIFI Extension 2.0.
		
		.. versionadded:: 2.4.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_WIFI2_MESH_AP_STATUS, [], '', 's32 B4 B4 B4 B6', returnCallback, errorCallback, false);
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
		
		.. versionadded:: 2.4.6$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG, [enableDynamicBaudrate, minimumDynamicBaudrate], '? I', '', returnCallback, errorCallback, false);
	};
	this.getSPITFPBaudrateConfig = function(returnCallback, errorCallback) {
		/*
		Returns the baudrate config, see :func:`Set SPITFP Baudrate Config`.
		
		.. versionadded:: 2.4.6$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG, [], '', '? I', returnCallback, errorCallback, false);
	};
	this.getSendTimeoutCount = function(communicationMethod, returnCallback, errorCallback) {
		/*
		Returns the timeout count for the different communication methods.
		
		The methods 0-2 are available for all Bricks, 3-7 only for Master Bricks.
		
		This function is mostly used for debugging during development, in normal operation
		the counters should nearly always stay at 0.
		
		.. versionadded:: 2.4.3$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_SEND_TIMEOUT_COUNT, [communicationMethod], 'B', 'I', returnCallback, errorCallback, false);
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
		
		.. versionadded:: 2.4.3$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_SET_SPITFP_BAUDRATE, [brickletPort, baudrate], 'c I', '', returnCallback, errorCallback, false);
	};
	this.getSPITFPBaudrate = function(brickletPort, returnCallback, errorCallback) {
		/*
		Returns the baudrate for a given Bricklet port, see :func:`Set SPITFP Baudrate`.
		
		.. versionadded:: 2.4.3$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_SPITFP_BAUDRATE, [brickletPort], 'c', 'I', returnCallback, errorCallback, false);
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
		
		.. versionadded:: 2.4.3$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_SPITFP_ERROR_COUNT, [brickletPort], 'c', 'I I I I', returnCallback, errorCallback, false);
	};
	this.enableStatusLED = function(returnCallback, errorCallback) {
		/*
		Enables the status LED.
		
		The status LED is the blue LED next to the USB connector. If enabled is is
		on and it flickers if data is transfered. If disabled it is always off.
		
		The default state is enabled.
		
		.. versionadded:: 2.3.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_ENABLE_STATUS_LED, [], '', '', returnCallback, errorCallback, false);
	};
	this.disableStatusLED = function(returnCallback, errorCallback) {
		/*
		Disables the status LED.
		
		The status LED is the blue LED next to the USB connector. If enabled is is
		on and it flickers if data is transfered. If disabled it is always off.
		
		The default state is enabled.
		
		.. versionadded:: 2.3.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_DISABLE_STATUS_LED, [], '', '', returnCallback, errorCallback, false);
	};
	this.isStatusLEDEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the status LED is enabled, *false* otherwise.
		
		.. versionadded:: 2.3.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_IS_STATUS_LED_ENABLED, [], '', '?', returnCallback, errorCallback, false);
	};
	this.getProtocol1BrickletName = function(port, returnCallback, errorCallback) {
		/*
		Returns the firmware and protocol version and the name of the Bricklet for a
		given port.
		
		This functions sole purpose is to allow automatic flashing of v1.x.y Bricklet
		plugins.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME, [port], 'c', 'B B3 s40', returnCallback, errorCallback, false);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C/10 as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has an
		accuracy of +-15%. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Brick. Calling this function
		on a Brick inside of a stack will reset the whole stack.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_RESET, [], '', '', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickMaster.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickMaster;
