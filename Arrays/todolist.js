var arr = new Array();
var str = prompt("What you like to do");

while(str !== "quit")
{
   
    if (str === "new")
    {
        addToDo();
    }
    else if(str === "list")
    {   
        listToDDo();
    }
    else if(str==="delete")  
    {
        deleteToDo();
    }


     var str = prompt("What you like to do");
     
}
console.log("you have quit the app");

function addToDo(){
    var val = prompt("enter a new to do");
    arr.push(val);
    console.log("Added to list");
}

function listToDDo(){
    console.log("**********");
    arr.forEach(function(todo,i){
    console.log(i + ": " + todo);
    });
    console.log("**********");
}

function deleteToDo(){
    var index = prompt("enter the index to delete");
    arr.splice(index,1);
    console.log("deleted from list");
}