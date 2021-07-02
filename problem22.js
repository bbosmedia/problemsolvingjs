function findTheMiddle(str){
    if(str.length % 2 === 0){
        console.log(str[str.length / 2 - 1] + str[str.length / 2])
    }else if(str.length >= 3){
        console.log(str[Math.floor(str.length / 2)])
    }else{
        console.log(str)
    }

}

findTheMiddle("test")
findTheMiddle("A")
findTheMiddle("Abbos")