//declearing and initializing array
var friends = [];
var friends = new Array();

//special thing in js 
//array can hold any type of data 

var hi = [47,"dinesh",5,true,null,5];

//adding something at specific index
console.log(hi[3]); 

//want to add something 
hi[6]=false;


// length property

hi.length

//METHODS IN ARRAY 

//PUSH and POP (work at last position)

hi.push(65);
console.log(hi.length);
console.log(hi);


var c= hi.pop();
console.log(c);

//UNSHIFT AND SHIFT (WORK AT THE BEIGINING OF AN ARRAY)

       //UNSHIFT (ADDING)
hi.unshift("yadav");

console.log(hi);
      
//SHIFT(REMOVING )
var shi = hi.shift(); //return the removed item

console.log(shi);

console.log(hi);

//INDEX OF (finding the index of element if present in array else returns -1)
 
var a=hi.indexOf(47);
console.log(a);

var a=hi.indexOf(5);
console.log(a);

var a=hi.indexOf("yadav");
console.log(a);

//SLICE ( used to make an array out of already existed array)

// it takes two arguments starting and ending(not inclusive) index
//if no argument the it takes whole array as it is

console.log(hi);
var hello = hi.slice(2,5); 
console.log(hello);