//intro

function hi(){
    console.log("jvjbsjbj")
}

hi();
hi();
hi();
hi();
console.log("new commit 3");
console.log("vyju");
console.log("dinesh");
console.log("dineshyada");

console.log("new commit 3");
console.log("vyju");
console.log("dinesh");
console.log("dineshyada");
var a = 15;
 console.log(a+"dinesh yadav");
 var ab = "Hello world";
 console.log("ghar ja");
for (var i=0;i<10;i++){
    console.log(i);
}
console.log("sunny parihar");

//arguments
function square(num)
{
    console.log(num*num);
}

square(10);


function ask(name ,age){
console.log("hi "+ name +" are you "+ age + " years old ?");

}

ask("dinesh",20);
ask("ksnff",); //we can leave blamck arguments it will give undefined

//return
function squ(x){
    return (x*x); 
}

var nu=squ(5);
console.log(nu);

function capatalize(str){
  
     return str.charAt(0).toUpperCase() + str.slice(1);

}

var city ="delhi";
var capital=capatalize(city);

console.log(capital);

//problem set

function isEven(x)
{
  if(x%2==0)
   {
      return true;     
   }
  else
    return false;
}

var num = isEven(13);
console.log(num);
var num = isEven(1);
console.log(num);

function fact(x){
    var result=1;//result =num
    for(var i=2;i<=x;i++)//i=num-1 i>=1 i--
    result = result*i;
    return result;
}

var num = fact(10);
console.log(num);
var num = fact(5);
console.log(num);

function kebabToSnake(str){

  var s=str.replace(/i/g,"+");
  return s;
}

var n=kebabToSnake("Dinesh-yaiav-civ-jif");
console.log(n);
//scope 


//Higher order function 

function sing(){
    console.log("cheta tera");
    console.log("you look perfect tonight");
}

sing();
setInterval(sing,1000);

//anonymus function without name decleared inside an other fucntion

setInterval(function (){
    console.log("hagfk");
    console.log("jsgfgjs");
},3000);