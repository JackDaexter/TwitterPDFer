const express = require("express");
const load = require("./webscrapping/load.js");
const app = express();
const port = 3080;
const hostname = '127.0.0.1';

// create application/json parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/',(req,res) => {
    res.send('Hello World !')
});

app.post('/link',async (req,res) => {
    var tweetForm = await load.launch(req.body.link,req.body.type);
    res.contentType('application/pdf');
    res.send(tweetForm);
})

app.post('/link',async (req,res) => {
    var fs = require('fs')
    var pdf;
    pdf = fs.readFileSync(__dirname + '/thread.pdf');

    console.log(pdf.byteLength);
    //fs.writeFileSync('thepdf.pdf',pdf)
    //var tweetForm = await load.launch(req.body.link,req.body.type);
    var elem = {"pdf" : pdf}
    console.log(typeof elem);
    console.log(elem.pdf.byteLength);
    res.contentType('application/pdf');
    res.send({"pdf" : pdf});
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})