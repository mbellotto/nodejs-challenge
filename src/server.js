#!/usr/bin/env node

const http = require('http');
require('dotenv').config();
const app = require('./app');


const server = http.createServer(app);

const port = process.env.APP_PORT || '3000';

server.listen(port);

server.on('error', (error ) => {
    switch (error.code) {
        case 'EACCES':
            console.log(`Not enough privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(`Port is already in use`);
            process.exit(1);
            break;
        default:
            break;
    }
    console.log(error);
    throw error;
});

server.on('listening', () => {
    const addr = server.address();
    console.log(`server is listening at ${JSON.stringify(addr)}`);
});

module.exports = server;