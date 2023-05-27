var myFunction = function(n) {

    for (let i = 1; i < n+1; i++) {
        let res = ""
        let multiplo5 = false;
        let multiplo3 = false;

        if(i == 0){
            res = i
        }else{
            if ( i > 0 && i % 5 == 0 ) { //hacemos la comparación
                multiplo5 = true
            }
            if ( i > 0 && i % 3 == 0 ) { //hacemos la comparación
                multiplo3 = true
            }
        }
        

        if(multiplo3 == true && multiplo5 == true ){
            res = "FizzBuzz";
        };
        
        if(multiplo3 == true && multiplo5 == false){
            res = "Fizz";
        };
        
        if(multiplo3 == false && multiplo5 == true){
            res = "Buzz";
        };
        
        if(multiplo3 == false && multiplo5 == false){
            res = i;
        }; 

        console.log(res);
    
    }

};

let i = 15;

myFunction(i);
