 var libray = [
     { 
    Aurthor: "Bill Bates",
    Tittle: " The Road Ahead",
    librayID: "1254",
     },

     { 
        Aurthor: "Steve Jobs",
            Tittle: " Welther isaacson",
            librayID: "4264",
         },
         { 
            Aurthor: " suszanne collins",
            Tittle: "MockingJay: The final bood of the hunger Games ",
            librayID: " 3245",
             },
 ]

 libray.sort((a,b) =>{
     if (a>b)
     return -1;
      if(b<a)
      return 1;
      return 0;
 })

 libray.reverse()
 console.log(libray);




 var array1 = [ 1, 2, 3]
 var array2 = [ 2, 30, 1]

 function mergeUnique (array1, array2){
     return array1.concat(array2.filter(function(item){
         return array1.indexOf(item) ===-1;
     }))
    }

    console.log(mergeUnique (array1, array2));