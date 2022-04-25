const http = require('http');
const fs = require('fs');
const os = require('os');

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
    else if(req.url === '/sys'){
        res.writeHead(201, {'Content-Type': 'text/plain'});
        res.end('Your OS info has been saved successfully!');
        const osInfo = {
            hello_there: 'Stop peeping my specs you creep!',
            hostname: os.hostname(),
            platform: os.platform(),
            architecture: os.arch(),
            numberOfCPUS: os.cpus().length,
            networkInterfaces: os.networkInterfaces(),
            uptime: os.uptime()
        };
        fs.writeFile('./osinfo.json', JSON.stringify(osInfo), ()=>{
            console.log('Succesfully saved client os info');
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