
const http = require("http");
const express = require('express');


const expressConfig = require('./config/express');
const { env, ip, port } = require('./config/environment');

const db = require('./conn/sqldb');

// Setup server
const { log } = console;
const app = express();

// Express configuration call
expressConfig(app);

const server = http.createServer(app);

// Start server
startServer = () => {
    return new Promise((res, rej) => {
        if (env === 'test') return res();
        return server.listen(port, ip, (err) => {
            if (err) return rej(err);
            return res();
        });
    });
};

function connect() {
    return Promise.all([
        db.sequelize.authenticate(),
        db.sequelize.query('update socket_sessions set is_online=false'),
    ]).catch(err => log('Error starting', err));
}

process.on('unhandledRejection', (reason, p) => {
    log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});

process.on('uncaughtException', (err) => {
    log('uncaughtException', err);
});

app.loadComplete = connect().then(startServer);

app.loadComplete.then(() => {
    log('API: Express server listening on %d, in %s mode', port, app.get('env'));
});
// Expose app


module.exports = server;


