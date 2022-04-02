const express = require("express");
const load = require("./webscrapping/load.js");
const app = express();
const port = 3080;
const hostname = '127.0.0.1';
const fs = require('fs');
const Tweet = require('./webscrapping/Tweet/tweet');
// create application/json parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/',(req,res) => {
    res.send('Hello World !')
});

app.post('/link',async (req,res) => {
    var tweetForm = await load.launch(req.body.link,req.body.type);

    if(req.body.type == 1){
        res.contentType('application/pdf');
        res.send(tweetForm);
    }
    else{
        saveDateToFile(tweetForm)
        res.contentType('text/plain');
        res.json(tweetForm.join("------------------------------------------- \n").)
    }
    
})

app.post('/user',(req,res) => {
    console.log(req.body);
    res.write
    res.send({"enter" : "pass"});
});

function saveDateToFile(data)
{
    fs.writeFile("./test.txt",data.join("------------------------------------------- \n"), err => {
        if(err){
            console.log(err);
            return
        }
    })
}

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})