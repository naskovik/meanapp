// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Conection with Mongo db with mongoose.

const dbURI = 'mongodb://localhost/db_mean';

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


// Create express app

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Config. of directory 'dist' as our static directory.
// In this directory we will have the archives obtained from the build of our 
// Angular app
app.use(express.static(path.join(__dirname, 'dist/ejMean')));

// routes config
app.get('/api', (req, res) => {
    res.send('API works');
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/ejMean/index.html'));
});

// Hearing port config.
const port = process.env.PORT || '3000';
app.set('port', port);

// Make the http server with the express app and open port
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost: ${port}`));


