/**
* @param {string} : String to be tested for validity
* @return {boolean} : Returns true if the string is valid else false
*/  

function isValid(p) {
    let array = []
    let loop = p.length - 1
    console.log(p.length)

    for (let y = 0; y < loop; y++) {
        for (let i = 0; i < loop; i++) {
            
            if(y != i + 1){
            console.log("p["+y+"]", p[y])
            console.log("p["+(i + 1)+"]", p[i + 1])
            let a = p[y];
            let b = p[i + 1];

            let num = 0;
            num = a.map((x, i) => Math.abs( x - b[i] ) ** 2).reduce((sum, now) => sum + now) ** (1/2);

                array.push(num)
            }
        }
    }
    console.log("array", array)
    var min = array[0];
    for (var i = 0; i < array.length ; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    console.log("min", min)
    
    return min;
}

let p = [[0, 11], [-7, 1], [-5, -3], [9, 7], [-10, 10], [5, -13]];

if(isValid(p) > 0) console.log("valid");
