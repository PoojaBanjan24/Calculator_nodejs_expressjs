//jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));   //for html forms

app.get("/",function(req,res){
  //console.log(request);
  res.sendFile(__dirname+"/index.html");    //constant instead of relative path
});   //get(location,function)

app.post("/",function(req,res){

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var sum = num1 + num2;

  res.send("The result of the calculation is "+sum);
});


app.get("/bmicalculator",function(req,res){
  //console.log(request);
  res.sendFile(__dirname+"/bmiCalculator.html");    //constant instead of relative path
});   //get(location,function)

app.post("/bmicalculator",function(req,res){

  var w = Number(req.body.weight);        //weight is the name in html form
  var h = Number(req.body.height);
  var n = w/(h*h);

  res.send("Your BMI is "+n);
});

app.listen(3000,function(){
  console.log("Server started on port 3000");
});  //to listen on a port
