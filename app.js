const http = require('http');

const server = http.createServer((req, res)=>{
    res.end("connection stablished");
});

server.listen(3000);