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

class Traveler extends Person {
    constructor(name, age, homeloc) {
        super(name, age);
        this.homeloc = homeloc; // (40)
    }
    getGreeting() {
        let greet = super.getGreeting();
        if(this.homeloc) {
            greet += ` I'm visiting from ${this.homeloc}`
        }
        return greet;
    }
    // homeLoc
    // override getGreeting
    // if have homeLoc - Hi, I am AndrewMead. I'm visiting from Philadelphia
    // else Hi, I am AndrewMead.
}

const me = new Traveler('Andrew Mead', 26, 'Philadelphia');
console.log(me.getGreeting());

const other = new Traveler(); // (50)
console.log(other.getGreeting());

/**
 * 10 - 'this' refers to the instance of the class.
 * 20 - template string. Uses graves.
 * 30 - call parent's constructor.
 * 40 - home location
 * 50 - can also be 'new Traveler(undefined, undefined, "Nowhere")'
 */