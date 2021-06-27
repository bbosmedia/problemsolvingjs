function chuckArrayInGroups(arr, size){
    var newList = []
    var sizedList = []
    for(var i=0; i<arr.length; i++){
       if(sizedList.length === size){
           newList.push(sizedList)
           sizedList = []
           sizedList.push(arr[i])
       }
       else{
           sizedList.push(arr[i])
       }
    }
    newList.push(sizedList)
    console.log(newList)
}


function chuckArrayInGroups2(arr, size){
    var groups = []
    while(arr.length > 0){
        groups.push(arr.splice(0, size))
    }
    console.log(groups)
}




chuckArrayInGroups(["a", "b", "c", "d", "e", "f", "h"], 2)
chuckArrayInGroups2(["a", "b", "c", "d", "e", "f", "h"], 2)