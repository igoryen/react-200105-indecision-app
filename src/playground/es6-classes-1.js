class Person {
    constructor(name = 'Anonymous') {
        this.name = name;// (10)
    }
    getGreeting(){
        // return 'Hi! I am ' + this.name + '!';
        return `Hi! I am ${this.name}!`;// (20)
    }
}

const me = new Person('Andrew Mead');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());

/**
 * 10 - 'this' refers to the instance of the class.
 * 20 - template string. Uses graves.
 */