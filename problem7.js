// Find the Largest of Four


function largestFour(list){
    var greatForuList = []
    for(var i=0; i<list.length; i++){
        var currenLargest = list[i][0]
        for(var j=0; j<list[i].length; j++){
            if(currenLargest < list[i][j]){
                currenLargest = list[i][j]
            }
        }
        greatForuList.push(currenLargest)
    }
    console.log(greatForuList)
}

function largestFour2(list){
    var greatForuList = []
    list.forEach(item => {
        item.sort((a, b) => b - a)
        greatForuList.push(item[0])
    })

    console.log(greatForuList)
}

function largestFour3(list){
    var greatForuList = [];
    list.forEach(num => {
        var currenLargest = num[0]
        num.forEach(item => {
            if(item > currenLargest){
                currenLargest = item
            }
        })
        greatForuList.push(currenLargest)
    })
    console.log(greatForuList)
}


largestFour([[4,56,45,32], [34,45,23,65], [4545,666,43,87], [32,556,787,34]])
largestFour2([[4,56,45,32], [34,45,23,65], [4545,666,43,87], [32,556,787,34]])
largestFour3([[4,56,45,32], [34,45,23,65], [4545,666,43,87], [32,556,787,34]])