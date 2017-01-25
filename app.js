var express = require('express');
var app = express();
var path = require('path');
var open = require('open');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));

});

var cache = [];
app.get('/form', function(req, res){

    if(validateForm(req.query)){
        res.status(200).send('ok');
        cache.push(req.query);
        console.log(cache);
    } else {
        res.status(200).send('error 500');
        console.log('Error - Form not Full');

    }


})



app.listen(8080);
open("127.0.0.1:8080","chrome");


function validateForm(obj){
    for(key in obj){
        if(obj[key] === ""){
            return false;
        }

    }
    return true;

}