
function foo(str){
    var spitted = str.split("")
    var last = "";

    function distinc(value, index, self){
        return self.indexOf(value) === index;
    }

   var filtered = spitted.filter(distinc)
   for(var i=0; i<filtered.length; i++){
       var currentLength = 0;
       for(var j=0; j<spitted.length; j++){
           if(filtered[i] === spitted[j]){
               currentLength++;
           }
       }
       last+= filtered[i];
       last+=currentLength;
   }
   console.log(last)
}


foo("aabbbcc") //a2b3c2



