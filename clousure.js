// Clousure is I have functions that invoke other functions and the internal function can acess to the names and variables
// or parameters of the external function 

function makeAdder (x) {
    return function(y) {
        return x + y;
    }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2))