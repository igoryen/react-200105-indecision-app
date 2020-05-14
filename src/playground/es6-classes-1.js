class Person {
    constructor(name = 'Anonymous') {
        this.name = name;// (10)
    }
    getGreeting(){
        return this.name;
    }
}

const me = new Person('Andrew Mead');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());

/**
 * 10 - 'this' refers to the instance of the class.
 */