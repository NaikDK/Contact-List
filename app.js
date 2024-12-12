//  impporting modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');
const auth = require('./routes/authRoutes');

//connect to mondoDB
mongoose.connect('mongodb://127.0.0.1:27017/contactlist', {useNewUrlParser:true, useUnifiedTopology:true});

//on Connection
mongoose.connection.on('connected', ()=>{
    console.log("Connected to database @ 27017");
});

mongoose.connection.on('error', (err)=>{
    if(err){
        console.log("Error occured while connecting.."+err);
    }
});


//port number

const port = 3000;

//adding middleware - cors
app.use(cors());

//body-parser
// app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname,  'public')));

app.use('/auth/', auth);
app.use('/',route);

//testing server
// app.get('/',(req,res)=>{
//     res.send("Hello World");
// })

app.listen(port,()=>{
    console.log("Server started at port: "+port);
});