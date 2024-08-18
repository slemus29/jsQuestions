// standar functions defines the this where the function is called

 function getThis () {
    return this
 }

 const obj1 = { name: 'obj1' }
 const obj2 = { name: 'obj2' }

 obj1.getThis = getThis
 obj2.getThis = getThis

 console.log(obj1.getThis())

// This is the object that call the function


// arrow functions the this in the scope where the function was defined, they don't have this

const globalObject = this
const foo = () => this;
console.log(globalObject === foo())

const jeff1 = {
    face: "face",
    whodis: function() {
        return this
    },

    butWhoAmI: () => this
}

console.log("arrow", jeff1.butWhoAmI())




