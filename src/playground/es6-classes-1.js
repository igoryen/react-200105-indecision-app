class Person {
    constructor(name) {
        this.name = name;// (10)
    }
}

const me = new Person('Andrew Mead');

console.log(me);

/**
 * 10 - 'this' refers to the instance of the class.
 */