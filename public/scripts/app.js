'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name; // (10)
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            return 'Hi! I am ' + this.name + '!'; // (20)
        }
    }, {
        key: 'getDesc',
        value: function getDesc() {
            return this.name + ' is ' + this.age + ' year(s) old.';
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, major) {
        _classCallCheck(this, Student);

        // (30)
        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            return !!this.major;
        }
    }, {
        key: 'getDesc',
        value: function getDesc() {
            var desc = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDesc', this).call(this);
            if (this.hasMajor()) {
                desc += 'Their major is ' + this.major + '.';
            }
            return desc;
        }
    }]);

    return Student;
}(Person);

var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, homeloc) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

        _this2.homeloc = homeloc; // (40)
        return _this2;
    }

    _createClass(Traveler, [{
        key: 'getGreeting',
        value: function getGreeting() {
            var greet = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGreeting', this).call(this);
            if (this.homeloc) {
                greet += ' I\'m visiting from ' + this.homeloc;
            }
            return greet;
        }
    }]);

    return Traveler;
}(Person);

var me = new Traveler('Andrew Mead', 26, 'Philadelphia');
console.log(me.getGreeting());

var other = new Traveler(undefined, undefined, "Nowhere"); // (50)
console.log(other.getGreeting());

/**
 * 10 - 'this' refers to the instance of the class.
 * 20 - template string. Uses graves.
 * 30 - call parent's constructor.
 * 40 - home location
 * 50 - can also be 'new Traveler(undefined, undefined, "Nowhere")'
 */
