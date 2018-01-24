const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function(request, response) {

  const path = url.parse(request.url).pathname;
  let filePath = './client' + path;
  console.log(filePath);  // for debug

  fs.exists(filePath, doesExist => {
    if (!doesExist) {
      response.setHeader('Content-Type', 'text/html; charset=UTF-8');
      response.statusCode = 404;
      response.end(`ERROR CODE 404 - ファイル('${path}')が存在しませんでした。`.toString('UTF-8'));
    } else {
      fs.stat(filePath, (err, fileInfo) => {
        if (err) {
          response.setHeader('Content-Type', 'text/html; charset=UTF-8');
          response.statusCode = 500;
          response.end(`Internal Server Error!! \n ${err}`.toString('UTF-8'));
        } else {
          if (fileInfo.isDirectory()) {
            filePath += '/index.html';
          }
          fs.readFile(filePath, (err, data) => {
            if(err) {
              response.setHeader('Content-Type', 'text/html; charset=UTF-8');
              response.statusCode = 500;
              response.end(`Internal Server Error!! \n ${err}`.toString('UTF-8'));
            }
            if(/.*\.css$/.test(filePath)) {
							response.setHeader('Content-Type', 'text/css; charset=UTF-8');
            } else {
							response.setHeader('Content-Type', 'charset=UTF-8');
            }
            response.statusCode = 200;
            response.end(data.toString('UTF-8'));
          });
        }
      });
    }
  });
});

server.listen(3000, function(){
  console.log('Server listening...')
});