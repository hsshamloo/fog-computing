var Tinkerforge = require('tinkerforge');

var HOST = 'localhost';
var PORT = 4223;
var UID = 'XYZ'; // Change XYZ to the UID of your Distance US Bricklet

var ipcon = new Tinkerforge.IPConnection(); // Create IP connection
var dus = new Tinkerforge.BrickletDistanceUS(UID, ipcon); // Create device object

ipcon.connect(HOST, PORT,
    function (error) {
        console.log('Error: ' + error);
    }
); // Connect to brickd
// Don't use device before ipcon is connected

ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
    function (connectReason) {
        // Set period for distance value callback to 0.2s (200ms)
        // Note: The distance value callback is only called every 0.2 seconds
        //       if the distance value has changed since the last call!
        dus.setDistanceCallbackPeriod(200);
    }
);

// Register distance value callback
dus.on(Tinkerforge.BrickletDistanceUS.CALLBACK_DISTANCE,
    // Callback function for distance value callback
    function (distance) {
        console.log('Distance Value: ' + distance);
    }
);

console.log('Press key to exit');
process.stdin.on('data',
    function (data) {
        ipcon.disconnect();
        process.exit(0);
    }
);
