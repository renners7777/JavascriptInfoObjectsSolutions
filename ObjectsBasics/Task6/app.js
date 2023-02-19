// Create a calculator
// importance: 5
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
//     sum() returns the sum of saved values.
//         mul() multiplies saved values and returns the result.
let calculator = {
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

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());