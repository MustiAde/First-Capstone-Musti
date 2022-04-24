const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        fs.readFile('./pages/index.html', 'utf8', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    else if (req.url === '/about'){
        fs.readFile('./pages/about.html', 'utf8', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    else {
        fs.readFile('./pages/404.html', 'utf8', function(err, data){
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(data);
        })
    };
    });

server.listen(port, host);
console.log(`website is running at ${host}:${port}`);