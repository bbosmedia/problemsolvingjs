// Falsy Bouncer

function falsyBouncer(arr){
    var newArr = []

    for(var i=0; i<arr.length; i++){
        if(arr[i]){
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}


function falsyBouncer2(arr){
    arr = arr.filter(elem => {return elem})
    console.log(arr)
    
}

falsyBouncer([7, false, 8, "", "Abbos"])
falsyBouncer2([7, false, 8, "", "Abbos"])