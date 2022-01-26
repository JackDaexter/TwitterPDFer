const { log } = require("console");
const express = require("express");
var bodyParser = require('body-parser');
const text = require("./bin.js");
const app = express();
const port = 3080;
const hostname = '127.0.0.1';

// create application/json parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/',(req,res) => {
    res.send('Hello World !')
});


app.post('/user',(req,res) => {
    console.log(req.body);
    res.send({"enter" : "pass"});
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})