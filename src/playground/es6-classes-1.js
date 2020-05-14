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

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);// (30)
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDesc() {
        let desc = super.getDesc();
        if(this.hasMajor()) {
            desc += `Their major is ${this.major}.`;
        }
        return desc;
    }
}

const me = new Student('Andrew Mead', 26, 'Computer Science');
console.log(me.getDesc());

const other = new Student();
console.log(other.getDesc());

/**
 * 10 - 'this' refers to the instance of the class.
 * 20 - template string. Uses graves.
 * 30 - call parent's constructor.
 */