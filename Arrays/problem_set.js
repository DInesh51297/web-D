//printing in reverse order 

var arr = [5,6,7,9,10];
printReverse(arr);


function printReverse(ar){
   for(var  i = ar.length - 1 ; i >= 0;i-- )
    {
        console.log(ar[i]);
    }
}
