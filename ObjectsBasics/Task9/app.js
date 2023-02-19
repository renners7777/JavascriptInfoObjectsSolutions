// Create new Calculator
// importance: 5
// Create a constructor function Calculator that creates objects with 3 methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
//     sum() returns the sum of these properties.
//         mul() returns the multiplication product of these properties.
// For instance:

// let calculator = {
    //     read(a, b){
    //         a = Number(prompt("Type a number between 1 and 9", ""));
    //         b = Number(prompt("Type a number between 1 and 9", ""));
    //     },

    //     sum(a,b){
    //         return a + b
    //     },

    //     mul(a,b){
    //         return a * b
    //     }
    // };
    // My first effort - very wrong!



// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


    
    function Calculator(color, type){
        this.read = function () {
            this.a = +prompt('a?', 0);
            this.b = +prompt('b?', 0);
        };

        this.sum = function () {
            return this.a + this.b;
        };

        this.mul = function () {
            return this.a * this.b;
        };
    }

        

let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());