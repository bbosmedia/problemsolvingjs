// Find The Difference Between in Array Items

function diffArray(array){

    var difference = []

    for(var i=0; i<array[0].length; i++){
        if(array[1].indexOf(array[0][i]) === -1){
            difference.push(array[0][i])
        }
    }

    for(var i=0; i<array[1].length; i++){
        if(array[0].indexOf(array[1][i]) === -1){
            difference.push(array[1][i])
        }
    }

    console.log(difference.sort())

}

diffArray([[1,2,3,4,7], [1,2,3,4,5]])