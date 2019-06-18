// Hello World server
// Binds REP socket to tcp://*:5555
// Expects "Hello" from client, replies with "world"

var zmq = require('zeromq');
var fs = require('fs');

// socket to talk to clients
var responder = zmq.socket('rep');

responder.on('message', function(requestFromClient) {
  console.log("Received request: [", requestFromClient.toString(), "]");

  // do some 'work'

  newJsonData = JSON.parse(requestFromClient.toString());

  fs.readFile('myjsonfile.json', 'utf8', function(err, data){
    if (err){
        console.log(err);
    } else {
    temp_data = JSON.parse(data); //now it an object
    var newData = JSON.parse(requestFromClient.toString());
    
    temp_data['data_obj'].push(newData); //add some data
    
    json = JSON.stringify(temp_data); //convert it back to json
    fs.writeFile('myjsonfile.json', json, 'utf8', function(err,data){


        console.log("Done with JSON file");

    }); // write it back 
}});

  setTimeout(function() {

    // send reply back to client.
    responder.send("I recived your JSON file");
  }, 1000);
});

responder.bind('tcp://*:8080', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on 8080...");
  }
});

process.on('SIGINT', function() {
  responder.close();
});