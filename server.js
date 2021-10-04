'use strict';

const express = require('express' );

const app = express();

const fs = require('fs');

app.use(express.static('public'));

/*
app.get('/stylesheet.css', (req,res) => {
    fs.readFile('stylesheet.css', (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        //res.setHeader('Content-Length', data.length);
        res.send(data);
    })
})



app.get('/img/exempelbild.jpg', (req,res) => {
    fs.readFile('img/exempelbild.jpg', (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');
        //res.setHeader('Content-Length', data.length);
        res.send(data);
    })
})

app.get('/img/logo.png', (req,res) => {
    fs.readFile('img/logo.png', (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/png');
        //res.setHeader('Content-Length', data.length);
        res.send(data);
    })
})
*/

app.get('/', (req,res) => {
    fs.readFile('index.html', (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    })
})



const port = process.env.PORT|| 8080;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
