const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function(request, response) {

  const path = url.parse(request.url).pathname;
  console.log(path);  // for debug
  const filePath = '.' + path;

  fs.exists(filePath, doesExist => {
    if (!doesExist) {
      response.setHeader('Content-Type', 'text/html; charset=UTF-8');
      response.statusCode = 404;
      response.end(`ERROR CODE 404 - ファイル(${path})が存在しませんでした。`.toString('UTF-8'));
    } else {
      fs.readFile(filePath, (err, data) => {
        if(err) {
          response.statusCode = 500;
          response.end(`Internal Server Error!! \n ${err}`.toString('UTF-8'));
        }
        response.end(data.toString('UTF-8'));
      });
    }
  });
});

server.listen(3000, function(){
  console.log('Server listening...')
});