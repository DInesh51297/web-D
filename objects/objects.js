var person = {
 name: "Dinesh",
 age: 20,
 city : "delhi",
 course : "btech cse"
}

//accessing the data 

//. dot notation ( cannot be used when property starts with a number  or have space in it )
//( ex: person.1fush is invalid   ex: person.fav place  instead use person["fav place"])
// str = name person.str it doesnt look for  the name while person["str"] it looks for name 


console.log(person.course);
//bracket []
console.log(person["course"]);

// can have  nested objects  
//object inside an object
//array inside array object 
//object inside  an array

var posts=[
    //object inside an array
     {
         title: "commenting",
         author: "dinesh",
         comment: ["bye","gtg"] //array inside an object 
         
     },
     {
         title:"deleting",
         author:"you r the one",
         comment: ["come","go to hell"]
     }
]

//accessing them
posts;
posts.length;
posts[0] //or 
posts[1]

post[0].title

posts[0].comment[1];

//methods ( function as a property inside an object)
//used to avoid namespace conflict and code indentation 
var student = {
    name: "Dinesh",
    age: 20,
    city : "delhi",
    course : "btech cse",
    add : function(x,y) 
          {
             return x+y;
          }
   }

   student.add(17,898);

   