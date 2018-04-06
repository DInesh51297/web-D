
var arr = [5,6,7,9,10];
var str = ["h","a","p","p","y"]
var uni = [1,1,1,1,1,1];
var nun = [1,1,5,1,1];
var un  = ["a","b","a","a"];


printReverse(arr);
printReverse(str);

uniformArray(uni);
uniformArray(nun);

sumArray(uni);
sumArray(arr);
sumArray(nun);

maxArray([4,5,10,7,8,25,13]);

//printing in reverse order 
function printReverse(ar){
   for(var  i = ar.length - 1 ; i >= 0;i-- )
    {
        console.log(ar[i]);
    }
}

//check for uniform array

function uniformArray(ar){
    var f = ar[0];
    for(var i=1;i<ar.length;i++)
    { 
        if(f!==ar[i])
         {
           return false;
         }
    }
   return true;
}

//sumArray

function sumArray(ar){
   var sum=0;
   for(var i=0;i<ar.length;i++) // using forEach ar.forEach(function(element){ su,+=element } ); return sum
   {                                 
        sum+=ar[i];
   }
   console.log(sum);

}

//max
function maxArray(ar){
    var max=ar[0];
    for(var i=1;i<ar.length;i++) 
    {     
         if(ar[i]>max)                              
         max=ar[i];
    }
    return max;
 
 }
 
