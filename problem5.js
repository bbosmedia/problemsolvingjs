function findLOngestWord(text){
    var splittedText = text.split(" ");
    var longestWord = text[0];

    for(var i=0; i<splittedText.length; i++){
        if(splittedText[i].length > longestWord.length){
            longestWord = splittedText[i]
        }
    }
    console.log(longestWord)
}


function findLOngestWord2(text){
    var splittedText = text.split(" ");
    var longestWord = splittedText[0];
    splittedText.map(word =>{
        if(word.length > longestWord.length){
            longestWord = word
        }
    })
    console.log(longestWord)
}

function findLongestWord3(text){
    var splittedText = text.split(" ");

    var filteredListByLength = splittedText.sort((a, b) => a.length - b.length).reverse()
    console.log(filteredListByLength[0])
}

findLOngestWord("The quick brown fox jumped over the lazy dog")
findLOngestWord2("The quick brown fox jumped over the lazy dog")
findLongestWord3("The quick brown fox jumped over the lazy dog")