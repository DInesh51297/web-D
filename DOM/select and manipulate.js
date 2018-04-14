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

//query selector (jack of all ,work for id tag classes)

//it returns the first item it matches a css style selector
// takes id as #high class as .bolded

var tags = document.querySelector("#high");

var tags = document.querySelector(".bolded"); 

//querySelectorAll("h1");
//it returns all css style selector 


//Manipulation 

//use when only one or 2 proprty to be changed
var heading = document.querySelector("h1"); //select

heading.style.color="green";//manipulates
heading.style.background="red";
heading.style.border="5px solid black";


//ClassList

//add remove toggle(true and false)

//creat a class in css refer to it to do changes

var tag= document.getElementById("high");

tag.classList.add("big");

tag.classList.remove("boom");

tag.classList.toggle("big");


//text content (only conent no tag ) and inner html( shows tags also , when updting recognize tags )

var par= document.querySelector("p");

par.textContent;
//result - "jxbfhbhjsbjsbfjjs"
par.innerHTML;
//result - "jxbfhbh<strong>jsbjsbfjjs</strong>"

par.textContent="<h1>sjbfjak<</h1>";//<h1>xhsbaavh</h1>
par.innerHTML="<h1>sjbfjak<</h1>"; //hbjsbjsbfj in h1 font

