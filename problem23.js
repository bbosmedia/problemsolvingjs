function toJadenCase(words){
    var splittedWords = words.split(" ")
    var newwords = ""

    for(var word of splittedWords){
        var newword = ""

        if(splittedWords.indexOf(word) === splittedWords.length - 1){
            newword = word[0].toUpperCase() + word.slice(1).toLowerCase()
        }else{
            newword = word[0].toUpperCase() + word.slice(1).toLowerCase() + " "
        }

        newwords+=newword
    }
    console.log(newwords)
}

toJadenCase("I'm working now in the United States")