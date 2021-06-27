// Truncate a String


function truncate(str, num){
    var text = ""
    if(str.length > 3){
        text = str.slice(0, num - 3) + "..."
    }else if(str.length <=3 && num === 3){
        text = str
    }else{
        text = str
    }

    console.log(text)
}

truncate("Get my FREE project-based Javascript course, zeeee best Free Javascript course in the.", 50)
truncate("Get my FREE project-based Javascript course, zeeee best Free Javascript course in the.", 5)
truncate("Get", 50)