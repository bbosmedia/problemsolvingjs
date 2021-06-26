// TitelCase Make Every Word with Capital Letter

function titelcase(str){
    var splitted = str.split(" ")

    var capitilized = splitted.map(item => item[0].toUpperCase() + item.slice(1)).join(" ")

    console.log(capitilized)
}

function titelcase2(str){
    var splitted = str.split(" ")
    var capitilized = []

    for(var i=0; i<splitted.length; i++){
        var word = splitted[i][0].toUpperCase() + splitted[i].slice(1)
        capitilized.push(word)
    }
    capitilized = capitilized.join(" ")
    console.log(capitilized)
}

titelcase("I'm a little tea pot")
titelcase2("I'm a little tea pot")