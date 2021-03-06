const express = require('express'),
bodyParser = require('body-parser'),
app = express(), 
tareaRoutes = require('./server/routes/tarea'),
path = require('path');

// Parse POST data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Config. of directory 'dist' as our static directory.
// In this directory we will have the archives obtained from the build of our 
// Angular app
app.use(express.static(path.join(__dirname, 'dist/ejMean')));

// CORS managment

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// routes config
app.get('/api', (req, res) => {
    res.send('API works');
})

app.use('/api', tareaRoutes);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/ejMean/index.html'));
});

// export module
module.exports = app;
