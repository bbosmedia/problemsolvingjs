// Repat String


function repearStr(word, repeatNumber){
    var repeated = ""

    if(repeatNumber === 0 && repeatNumber < 0){
        repeated = ""
    }else{
        for(var i = 0; i<repeatNumber; i++){
            repeated +=word
        }
    }

    console.log(repeated)
}

function repearStr2(word, repeatNumber){
    console.log(word.repeat(repeatNumber))
}

repearStr("abc", 3)
repearStr2("abc", 3)