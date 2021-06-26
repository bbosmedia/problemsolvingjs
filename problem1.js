// Reverse String

function reverseString(str){
    return str.toLowerCase().split("").reverse().join("")
}

function reverseString2(str){
    var splitted = str.split("")
    var reversed = ""

    for(var i= str.length; i>=0; i--){
        reversed += splitted[i]
    }

    return reversed
}

console.log(reverseString2("Hello"))





