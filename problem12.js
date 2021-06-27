function slasher(list, num){
    list.splice(0, num)
    console.log(list)
}


function slasher2(list, num){
    var finished = []

    for(var i = num; i < list.length; i++){
        finished.push(list[i])
    }

    console.log(finished)
}

function slasher3(list, num){
    var finished = []
    list.forEach(item => {
        if(list.indexOf(item) >= num){
            finished.push(item)
        }
    })

    console.log(finished)
}


slasher([1, 2, 3, 4], 3)
slasher2([1, 2, 3, 4], 0)
slasher3([1, 2, 3, 4], 2)