function palidromeChecker(str){
    var reg = /[\W_]/g;
    var smallStr = str.toLowerCase().replace(reg, "")
    var reversed = smallStr.split("").reverse().join("")


    if(reversed === smallStr){
        console.log(true)
    }else{
        console.log(false)
    }
}

palidromeChecker("eye@")