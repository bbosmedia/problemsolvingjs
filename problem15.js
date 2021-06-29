// Seek and Destrofy


function seekAndDestroy(arr){

    var newarr = arr[0]

    var list = []

    arr.splice(0,1)
    var targest =  arr

    for(var num of newarr){
        if(targest.indexOf(num) === -1){
            list.push(num)
        }
    }

    console.log(list)

}

function seekAndDestroy2(arr){
    var a = arr[0]
    arr.splice(0,1)
    var newa = a.filter(item => arr.indexOf(item) === -1)
    console.log(newa)
}


seekAndDestroy([[1,2,3,4,5,4,3,4,2], 2, 3])
seekAndDestroy2([[1,2,3,4,5,4,3,4,2], 2, 3])