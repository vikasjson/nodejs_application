
const http = require("http");
const express = require('express');
const app = express();

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end('\n Hello World ! \n');

}).listen(8060);

console.log('Server is running on port number- 8060');

module.exports = server;

