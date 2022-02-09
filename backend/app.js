const express = require("express");
const load = require("./webscrapping/load.js");
const app = express();
const port = 3080;
const fs = require('fs')
const hostname = '127.0.0.1';

// create application/json parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/',(req,res) => {
    res.send('Hello World !')
});

app.post('/link',async (req,res) => {
    var fs = require('fs')
    var pdf;
    pdf = fs.readFileSync(__dirname + '/thread2.pdf');
        
    //var tweetForm = await load.launch(req.body.link,req.body.type);
    res.contentType('application/pdf');
    res.send({"pdf" : pdf});
})

app.post('/user',(req,res) => {
    console.log(req.body);
    res.write
    res.send({"enter" : "pass"});
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})