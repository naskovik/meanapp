// Get dependencies
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = require('./app');


// Conection with Mongo db with mongoose.

const dbURI = 'mongodb://localhost/db_mean';
mongoose.set('useFindAndModify', false);
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Mongoose conection event configuration

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + dbURI)
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err)
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected')
});

// If Node ends, close Mongoose connection

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});


// Hearing port config.
const port = process.env.PORT || '3000';
app.set('port', port);

// Make the http server with the express app and open port
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost: ${port}`));


