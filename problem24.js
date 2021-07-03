// Mumbling

function mumbling(word){
    var letters = word.split("")
    var mubled = ""

    for(var i=0; i< letters.length; i++){
        var num = i+1
        var letter = letters[i].toUpperCase()
        if(num >= 2){
            for(var j = 0; j< num - 1; j++){
                letter += letters[i].toLowerCase()
            }
        }
        if( i !== letters.length - 1){
            letter += "-"
        }
        mubled+=letter;
    }

    console.log(mubled)
}

mumbling("abcdef")