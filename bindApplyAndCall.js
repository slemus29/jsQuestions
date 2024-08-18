// bind 

const test = {
    x: 42,
    getX: function () {
        return this.x;
    },
};

const valentina = test.getX
console.log(valentina())

const santy = valentina.bind(test)
console.log(santy())


// call is a function that you use to change the value of this inside a function with arguments separated by commads

const person = {
    fullName: function(city, country) {
        return `${this.firstName} ${this.lastName} ${city} ${country}`
    }
}

const person1 = {
    firstName: 'John',
    lastName: 'Doe',
}

const person1Full = person.fullName.apply(person1, ['Oslo', 'Norway'])
console.log(person1Full)

// and apply is the same but requires parameters as an array.

const person2 = {
    fullName: function(city, country) {
        return `${this.firstName} ${this.lastName} ${city} ${country}`
    }
}

const person3 = {
    firstName: 'Lionel',
    lastName: 'Messi',
}

const person3Full = person2.fullName.call(person3, 'Argentina', 'Buenos Aires')
console.log(person3Full)

