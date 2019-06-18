var Tinkerforge = require('tinkerforge');

var HOST = 'localhost';
var PORT = 4223;
var UID = 'XYZ'; // Change XYZ to the UID of your Industrial Analog Out Bricklet

var ipcon = new Tinkerforge.IPConnection(); // Create IP connection
var iao = new Tinkerforge.BrickletIndustrialAnalogOut(UID, ipcon); // Create device object

ipcon.connect(HOST, PORT,
    function (error) {
        console.log('Error: ' + error);
    }
); // Connect to brickd
// Don't use device before ipcon is connected

ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
    function (connectReason) {
        // Set output current to 4.5mA
        iao.setCurrent(4500);
        iao.enable();
    }
);

console.log('Press key to exit');
process.stdin.on('data',
    function (data) {
        iao.disable();
        ipcon.disconnect();
        process.exit(0);
    }
);
