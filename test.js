'use strict';

process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({silent: true});

const jest = require('jest');
const argv = process.argv.slice(2);

// Watch unless on CI or in coverage mode

alert("connected");
var body=document.querySelector("body");
var button=document.querySelector("button");
var h2=document.querySelector("h2");

var red=false;
button.addEventListener("click",function(){
    if(red){
        body.style.backgroundcolor="white";
    }else{
        body.style.backgroundcolor="red";
    }
    red=!red;

});
h2.addEventListener("mouseover",function(){
    h2.style.color="red";
});

if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}


jest.run(argv);
