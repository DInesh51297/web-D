var arr = new Array();
var str = prompt("What you like to do");

while(str !== "quit")
{
   
    if (str === "new")
     {
        var val = prompt("enter a new to do");
        arr.push(val);
     }
    else if(str === "list")
     {   
          console.log(arr);
     }
 
     var str = prompt("What you like to do");
     
}
console.log("you have quit the app");

