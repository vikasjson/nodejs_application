
const http = require("http");

const app = http.createServer((req, res) =>{

    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end('\n Hello World ! \n');

}).listen(8060);

console.log('Welcome to nodejs application');

