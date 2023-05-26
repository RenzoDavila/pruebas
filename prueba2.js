/**
 * @param {string[]} ops - List of operations
 * @return {number} - Sum of scores after performing all operations
 */
var calPoints = function(ops) {
    var result = null;
    let array = []

    ops.forEach((value) => {
        if(value.includes('1') || value.includes('2') || value.includes('3') || value.includes('4') || value.includes('5') || value.includes('6') || value.includes('7') || value.includes('8') || value.includes('9') || value.includes('0') ){
            array.push(value)
        }

        if(value == 'C') {
            array.pop();
        }

        if(value == 'D') {
            console.log("D", array[array.length - 1])
            let operation = array[array.length - 1] * 2
            array.push(operation.toString())
        }

        if(value == '+') {
            let operation = Math.floor(array[array.length - 1]) + Math.floor(array[array.length - 2])
            array.push(operation.toString())
        }
    });

    array.forEach((value) => {
        result = result + Math.floor(value)
    });

return result;
};

// var ops = readline().split(" ");
var ops = ["1"];

console.log(calPoints(ops));
