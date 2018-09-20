
const http = require("http");
const express = require('express');
const app = express();

const expressConfig = require('./config/express');

expressConfig(app);

const server = http.createServer(app);

server.listen(3000);

 console.log('Server is running on port number- 3000');

module.exports = server;


