var express = require('express'),
    fs = require('fs');

var app = express.createServer(express.logger());
var buffer = new Buffer('nothing here yet');
fs.readFile('index.html', 'utf-8', function(err, data){
    if(err) throw err;
        console.log(data);
    buffer = new Buffer(data, 'utf-8');
    //now write the buffer 
});

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
