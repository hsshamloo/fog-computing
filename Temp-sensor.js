var sendFile = require("../Thinkforge/Sender");
var fs = require('fs');

var dateFormat = require('dateformat');


var temp_data = {
    "data_obj": [""]
 };




function Temperature_to_file (temperature) {
    
    console.log('Temperature: ' + temperature );
    
    var Time = new Date();
    dateFormat(Time, "default");
    
    var Time = new Date();
    dateFormat(Time, "default");
    
    temp_data.data_obj.push({time: Time, temp:temperature});
    var json = JSON.stringify(temp_data);


    fs.writeFile('myjsonfile.json', json, 'utf8', function(){

        console.log("Done with JSON file");

    });
}

function Temperature_to_file_Appendable (temperature) {
    
    console.log('Temperature: ' + temperature );
    
    var Time = new Date();
    dateFormat(Time, "default");
    
   // var Time = new Date();
   // dateFormat(Time, "default");
    
    fs.readFile('myjsonfile.json', 'utf8', function(err, data){
        if (err){
            console.log("There is problem in reading file", err);
            temp_data ["data_obj"].push({time: Time, temp: temperature}); //add some data
            json = JSON.stringify(temp_data, null, 4); //convert it back to json
            fs.writeFile('myjsonfile.json', json, 'utf8', function(err,data){

            console.log("Done with JSON file");

             }); // write it back 

            
        } else {
        temp_data = JSON.parse(data); //now it an object
        temp_data.data_obj.push({time: Time, temp: temperature}); //add some data
        json = JSON.stringify(temp_data, null, 4); //convert it back to json
        fs.writeFile('myjsonfile.json', json, 'utf8', function(err,data){

            console.log("Done with JSON file");

        }); // write it back 
    }});
}

function random_func_temp (max,min) {
    var current_temp = (random * (max - min) + min).toFixed(2);
    Temperature_to_file_Appendable (current_temp)
  }


function updateTempFile ()
{
    var random = Math.random(); 
    random_func_temp(120,-40);
}

var i = 0; 
setInterval(function(){

    setInterval(function(){
    
        var random = Math.random(); 
    
        try{
            function random_func (max,min) {
                var current_temp = (random * (max - min) + min).toFixed(2);
                Temperature_to_file_Appendable (current_temp)
              }
            random_func(120,-40);
        }
        catch(e)
        {
            console.log("Error in JSON file");
            function random_func (max,min) {
                var current_temp = (random * (max - min) + min).toFixed(2);
                Temperature_to_file_Appendable (current_temp)
              }
            random_func(120,-40);
        }
        
        
    
    },3000);


    fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            
        console.log("I start sending file");
        temp_data = JSON.parse(data); //now it an object
        json = JSON.stringify(temp_data); //convert it back to json
        sendFile.sendMessage(json);
    
    }});

    
    console.log("File Server Sent...");

},6000);




