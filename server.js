const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        fs.readFile('./pages/index.html', 'utf8', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        })
    };
    });

server.listen(port, host);
console.log(`we are live at ${host}:${port}`);