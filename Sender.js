// Hello World client
// Connects REQ socket to tcp://localhost:5555
// Sends "Hello" to server.

var zmq = require('zeromq');
var fs = require('fs');
var temp_data = {
    data_obj: []
 };

// socket to talk to server
console.log("Connecting to  Fog Computing Weather server...");


var requester = zmq.socket('req');

var x = 0;
requester.on("message", function(replyFromServer) {
  console.log("Received reply", x, ": [", replyFromServer.toString(), ']');
  x += 1;
  //if (x === 1) {
    //requester.close();
    //process.exit(0);
  //}
});


function sendMessage(json){
requester.connect("tcp://ec2-13-53-135-104.eu-north-1.compute.amazonaws.com:8080");

//for (var i = 0; i < 10; i++) {
//  console.log("Sending request", i, '...');
  console.log("Sending request", '...');
  try {
    requester.send(json);
    
    //temp_data["data_obj"] = []; //add some data
    
    /*
    json = JSON.stringify(temp_data); //convert it back to json

    fs.writeFile('myjsonfile.json', json, 'utf8', function(err,data){

        console.log("Temp file deleted",data);

        if(err){
            console.log("There is error on deleting file");
        }

    }); */
    
    // write it back 

/*
    fs.readFile('myjsonfile.json', 'utf8', function(err, data){
        if (err){
            console.log(err);
        } else {
        temp_data = JSON.parse(data); //now it an object
        temp_data["data_obj"] = []; //add some data
        json = JSON.stringify(temp_data); //convert it back to json

        fs.writeFile('myjsonfile.json', json, 'utf8', function(err,data){

            console.log("Temp file deleted");

        }); // write it back 
    }});*/



  } catch (error) {
      
    console.log("there is error in connection",error)
  }
  
//}
}



process.on('SIGINT', function() {
  requester.close();
});





module.exports.sendMessage = sendMessage;