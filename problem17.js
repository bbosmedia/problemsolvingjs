function sumAllInRange(array){
    var total = 0;

    if(array[0] > array[1]){
        for(var i=array[1]; i<=array[0]; i++){
            total +=i;
        }
    }else{
        for(var i=array[0]; i<=array[1]; i++){
            total +=i;
        }
    }

    console.log(total)
}

function sumAllInRange2(array){
    var a = Math.min(array[0], array[1])
    var b = Math.max(array[0], array[1])
    var total = 0;

    for(var i=a; i<=b; i++){
        total+=i;
    }
    console.log(total)
}

function sumAllInRange3(array){
    var newArray = []
    var a = Math.min(array[0], array[1])
    var b = Math.max(array[0], array[1])

    for(var i=a; i<=b; i++){
        newArray.push(i)
    }

    var sum = newArray.reduce((total, num) => total+=num, 0)
    console.log(sum)
    
}


sumAllInRange([1,4])
sumAllInRange([15,10])
sumAllInRange2([1,4])
sumAllInRange2([15,10])
sumAllInRange3([1,4])
sumAllInRange3([15,10])