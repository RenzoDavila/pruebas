/**
* @param {string} : String to be tested for validity
* @return {boolean} : Returns true if the string is valid else false
*/  

var isValid = function(s) {
    let array = [];
    if( s.length%2 == 0)
        {
            for(var i = 0; i < s.length; i++) {
                array.push(s.charAt(i))
            }

            let tmp = 0

            for(var i = 0; i < s.length/2; i++) {
                let first = array[tmp]
                let next = array[tmp+1]
                switch(first) {
                    case '(':
                        if(next == ')') {
                            array.splice(tmp, 2);
                            tmp = 0
                            i = 0
                        }
                        else{
                            tmp = tmp + 1
                        }
                        break;
                    case '{':
                        if(next == '}') {
                            array.splice(tmp, 2);
                            tmp = 0
                            i = 0
                        }
                        else{
                            tmp = tmp + 1
                        }
                        break;
                    case '[':
                        if(next == ']') {
                            array.splice(tmp, 2);
                            tmp = 0
                            i = 0
                        }
                        else{
                            tmp = tmp + 1
                        }
                        break;
                } 
            }
            console.log(array)
            if(array.length > 0){
                return false;
            }else{
                return true;
            }
        }  
        else{
            return false;
        } 
};

let s = "[[(({()}))]]{()}[(}{)]";

if(isValid(s)) console.log("valid");
else console.log("invalid");
