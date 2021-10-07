
var fs=require('fs');
var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var moment = require('moment');
app.locals.moment = moment;  
app.use(express.static('public'));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',require('./routes/news'));

app.set('views','./views');

app.listen(3000);
