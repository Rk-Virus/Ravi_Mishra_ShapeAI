const bodyParser = require('body-parser');
const express = require('express')
// create an app object from express module 
const app = express();
// sets port number for localhost
const port = 2000;

// using body-parser to get form info
app.use(bodyParser.urlencoded({extended:true}));


// getting root request and serving front-end code
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')   // sending HTML file with current directory
})

// handling post requests
app.post("/",(req, res)=>{
    console.log(req.body);
    var weight = Number(req.body.w);
    var height = Number(req.body.h)/100;
    var result = weight/Math.pow(height,2);
    res.status(200).send(`<h2 style="text-align:center; margin:40vh;background-color:#5e5e5e; color:white;padding:10px;"> Your BMI = ${result} Kg/cm<sup>2</sup></h2>`)
});


// starting server and listnening requests at port (2000)
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
})