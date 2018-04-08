var movie= [

   {
      title:"A",
      rating: 4 ,
      hasWatched: true ,
   } ,

   {
      title:"B" ,
      rating:5 ,
      hasWatched: true ,
   } ,


   {
     title:"C" ,
     rating: 4 ,
     hasWatched:false ,
   } ,

   {
     title:"D" ,
     rating: 3.5 ,
     hasWatched: true,
   } 

]

function printing(t)
{  
   if(t.hasWatched) 
   {
    console.log("You have seen the  " + "\"" + t.title + "\""  + "  -  " + t.rating );
   }
   else
   {
    console.log("You have not seen the  " +  "\""  + t.title +  "\""   +   "  -  " + t.rating );
   }

}

movie.forEach(printing);

