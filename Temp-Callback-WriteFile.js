var Tinkerforge = require('./Tinkerforge.js');

var HOST = 'localhost';
var PORT = 4223;
var UID = 'EKx'; // Change the ID to the UID of  Temperature Bricklet


var ipcon = new Tinkerforge.IPConnection(); // Create IP connection
var BrickletTemperature = new Tinkerforge.BrickletTemperature(UID, ipcon); // Create device object
var fs = require('fs');
let date = require('date-and-time');



ipcon.connect(HOST, PORT,
    function (error) {
        console.log('Error: ' + error);
    }
); // Connect to brickd
// Don't use device before ipcon is connected

ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
    function (connectReason) {
        // Set period for temperature callback to 1s (1000ms)
        // Note: The temperature callback is only called every 10 seconds
        // if the temperature has changed since the last call!
        BrickletTemperature.setTemperatureCallbackPeriod(10000);
    }
);

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'file.csv',
    header: [
        {id: 'time', title: 'TIME'},
        {id: 'temp', title: 'Temperature'}
    ]
});
 

// Register temperature callback
BrickletTemperature.on(Tinkerforge.BrickletTemperature.CALLBACK_TEMPERATURE,
    // Callback function for temperature callback
    function (temperature) {
        console.log('Temperature: ' + temperature/100.0 + ' °C');
            
        var Time = new Date;
        date.format(Time, 'YYYY/MM/DD HH:mm:ss'); 
        
        var Temp = temperature/100.0;

        const records = [
            {time: Time,  temp: Temp}
        ];

        csvWriter.writeRecords(records).then(() => 
        {      
            // returns a promise
            console.log('...Done'); 
        });

        
        fs.appendFile('mynewfile1.txt', Temp , function (err) {
         
            if (err) throw err;
         console.log('Saved!');
        });
    }
);

console.log('Press key to exit');
process.stdin.on('data',
    function (data) {
        ipcon.disconnect();
        process.exit(0);
    }
);