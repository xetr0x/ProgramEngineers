'using strict'

const express = require('express' );
const app = express();
const fs = require('fs');
const PORT = process.env.PORT|| 8080;




app.get('/', (req,res) => {
    fs.readFile('index.html', (err, data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', data.length);
    res.send(data);
    })
})

app.get('/', (req,res) => {
    fs.readFile('stylesheet.css', (err, data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', data.length);
    res.send(data);
    })
})



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
