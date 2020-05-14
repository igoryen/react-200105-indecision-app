class Person {
    constructor(name) {
        this.name = name || 'default';// (10)
    }
}

const me = new Person('Andrew Mead');
console.log(me);

const other = new Person();
console.log(other);

/**
 * 10 - 'this' refers to the instance of the class.
 */