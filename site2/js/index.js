/*

	# web_applications

		web_applications - TPSIT A.S.: 2019/2020 5^Finf.
	
	
			Utilizzo di JavaScript
			
*/

const express=require('express');

const log=require('morgan');

const app=express();

const path=require('path');

let counter=0;

app.listen(3000);

app.use(log('dev'));

app.use(function(req,res,next){
	counter++;
	console.log('Counter: ',counter);
	next();});

app.get('/',function(req,res){
	res.sendfile(path.join(__dirname,'public','index.html'));});	

app.use(express.static('public'));

app.use(express.static('images'));		
	
app.use(function(req,res){
	res.sendfile(path.join(__dirname,'public','404.html'));});
