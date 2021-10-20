import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from'./Person/Person';

class App extends Component {

state= {
  person: [
    {Name: 'Mrigank',}

  ]
};
  
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
const fs=require("file-system");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(cookieParser());
app.use(function(req,res,next){
  var date=Date(Date.now()).toString();
  console.log(date.slice(8,25), req.method, req.originalUrl);
  // if(req.originalUrl=="/shop"&&req.method=="POST"){
  //     console.log(res.body.returnedData);
  // }
  fs.appendFile('./log/logs.txt',
  date + ` ${req.method} ${req.originalUrl} \n`
  , function(err) {
      if(!err){
          next();
      }
      else console.log(err);
  });
});
mongoose.connect("mongodb://localhost:27017/polling");
var TeamSchema = new mongoose.Schema({
  Name: {
    type: String,
    unique: true,
    required:true
  },
  Members: [{ type: String }],
  votes: {
    type: Number,
    default: 0
  }
});

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Person name="mrigank" age="50"></Person>
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
