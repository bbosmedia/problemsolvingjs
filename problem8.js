// This function helps us chaeck ends of word


function findEnds(word, end){
    console.log(word.endsWith(end))
}

function findEnds2(word, end){
   if(word.substr(-end.length) === end){
       console.log(true)
   }else{
       console.log(false)
   }
}

function findEnds3(word, end){
    var splittedWord = word.split("")
    var ends = ""
    for(var i= word.length - end.length; i< word.length; i++){
        ends += splittedWord[i]
    }
    if(ends === end){
        console.log(true)
    }else{
        console.log(false)
    }
}

findEnds("Independence", "ence")
findEnds2("Independence", "ce")
findEnds3("Independence", "ence")