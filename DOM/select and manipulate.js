var heading = document.querySelector("h1"); //select

heading.style.color="green";//manipulates



//getElecmentById method
 
var tag = document.getElementById("high");

tag;

console.dir(tag);
 
//getElementsByClassName

var tags = document.getElementsByClassName("bolded");

tags;
//its like an array but not array with less functionalities it forms an object console.dir(tags[0]); 
tags[0];
tags.length; 
//but tags.forEach won't work

//getElememtsByTagName  
var tags= document.getElementsByTagName("body");

//query selector

//it returns the first item it matches a css style selector
// takes id as #high class as .bolded

var tags = document.querySelector("#high");

var tags = document.querySelector(".bolded"); 

//querySelectorAll("h1");
//it returns all css style selector 

