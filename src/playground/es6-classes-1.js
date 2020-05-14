class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;// (10)
        this.age = age;
    }
    getGreeting() {
        return `Hi! I am ${this.name}!`;// (20)
    }
    getDesc() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

const me = new Person('Andrew Mead', 26);
console.log(me.getDesc());

const other = new Person();
console.log(other.getDesc());

/**
 * 10 - 'this' refers to the instance of the class.
 * 20 - template string. Uses graves.
 */