function mutation(arr){
    var arr1 = arr[0].toLowerCase();
    var arr2 = arr[1].toLowerCase();
    var bolean = true

    for(var i=0; i<arr2.length; i++){
        if(bolean=== true && arr1.indexOf(arr2[i]) === -1){
            bolean = false
        }
    }

    console.log(bolean);
    
}

mutation(["Hello", "hello"])