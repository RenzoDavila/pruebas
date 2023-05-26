/**
* @param {string} : String to be tested for validity
* @return {boolean} : Returns true if the string is valid else false
*/  

var isValid = function(a, b) {
    let objArray = [];
    let timesArray = [];

    for(var i = 0; i < a.length; i++) {
        let letter = a.charAt(i)
        tempObj = {
            value: letter,
            repeated: 1
        }
        var indice = objArray.map(function(e) { return e.value; }).indexOf(letter); 

        console.log(indice)
        if(indice == -1){
            objArray.push(tempObj)
        }else{
            objArray[indice].repeated = objArray[indice].repeated + 1;
        }
    }

    for (let i = 0; i < objArray.length; i++) {
        let times = 0;
        times = b.split(objArray[i].value).length-1
        timesArray.push(times / objArray[i].repeated)
    }
    console.log("objArray", objArray)
    console.log("timesArray", timesArray)



    var min = timesArray[0];
    for (var i = 0; i < timesArray.length ; i++) {
        if (timesArray[i] < min) {
            min = timesArray[i];
        }
    }
    
    return Math.floor(min);
};

let a = "acabcccbb";
let b = "bcaaabcbbcaaabbacbcbabbbaaacb";

if(isValid(a,b) > 0) console.log("valid");
