function uniqeArrayItems(arr){
    var newArray = []

    for(var item of arr){
        if(newArray.indexOf(item) === -1){
            newArray.push(item)
        }
    }

    console.log(newArray.sort())
}

function uniqeArrayItems2(arr){
    var newArray = arr.filter((item, index, self) => self.indexOf(item) === index)
    console.log(newArray.sort())
}


uniqeArrayItems([1,2,7,3,7,4,5,3,3,3,2,3])
uniqeArrayItems2([1,2,7,3,7,4,5,3,3,3,2,3])