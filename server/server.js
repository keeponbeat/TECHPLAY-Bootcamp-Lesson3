const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {

  fs.readFile('../client/adder.html', (err, data) => {
    if(err) console.log(err);
    response.end(data.toString('UTF-8'));
  });
});

server.listen(8080, function(){
  console.log('Server listening...')
});