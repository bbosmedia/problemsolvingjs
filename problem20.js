function countaVowels(word){
    var vowels ="aeiou"

    var count = 0;

    word = word.toLowerCase()

    for(var i=0; i<word.length; i++){
        if(vowels.indexOf(word[i]) !== -1){
            count++;
        }
    }

    console.log(count)
}

countaVowels("Abbos")
countaVowels("Muhammad")
countaVowels("Elephant")
countaVowels("Independence")