var Tinkerforge = require('tinkerforge');

var HOST = 'localhost';
var PORT = 4223;
var UID = 'XYZ'; // Change XYZ to the UID of your LED Strip Bricklet
var NUM_LEDS = 16;

var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var g = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var rIndex = 0;

var ipcon = new Tinkerforge.IPConnection(); // Create IP connection
var ls = new Tinkerforge.BrickletLEDStrip(UID, ipcon); // Create device object

ipcon.connect(HOST, PORT,
    function (error) {
        console.log('Error: ' + error);
    }
); // Connect to brickd
// Don't use device before ipcon is connected

ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
    function (connectReason) {
        // Set frame duration to 50ms (20 frames per second)
        ls.setFrameDuration(50);
        // Set initial rgb values to get started
        ls.setRGBValues(0, NUM_LEDS, r, g, b);
    }
);

// Register frame rendered callback
ls.on(Tinkerforge.BrickletLEDStrip.CALLBACK_FRAME_RENDERED,
    // Use frame rendered callback to move the active LED every frame
    function (length) {
        b[rIndex] = 0;
        if(rIndex === NUM_LEDS-1) {
            rIndex = 0;
        }
        else {
            rIndex += 1;
        }
        b[rIndex] = 255;

        // Set new data for next render cycle
        ls.setRGBValues(0, NUM_LEDS, r, g, b)
    }
);

console.log('Press key to exit');
process.stdin.on('data',
    function (data) {
        ipcon.disconnect();
        process.exit(0);
    }
);
