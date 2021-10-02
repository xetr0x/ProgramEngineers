'using strict'

const express = require('express' );

const app = express();

const fs = require('fs');




app.get('/stylesheet.css', (req,res) => {
    fs.readFile('stylesheet.css', (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        //res.setHeader('Content-Length', data.length);
        res.send(data);
    })
})

app.get('/kevins_site/kevincss.css', (req,res) => {
    fs.readFile('kevins_site/kevincss.css', (err, data) => {
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
app.get('/kevins_site/portrait.png', (req,res) => {
    fs.readFile('kevins_site/portrait.png', (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/png');
        res.setHeader('Content-Length', data.length);
        res.send(data);
    })
})


app.get('/kevins_site/kevin.html', (req,res) => {
    fs.readFile('kevins_site/kevin.html', (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        //res.setHeader('Content-Length', data.length);
        res.send(data);
    })
})

app.get('/', (req,res) => {
    fs.readFile('index.html', (err, data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    })
})



const PORT = process.env.PORT|| 8080;

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
