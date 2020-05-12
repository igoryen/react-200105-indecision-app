"use strict";

var app = {
    title: "Some title",
    subtitle: " Some subtitle",
    options: ['One', 'Two']
};

// JSX - Javascript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    app.options && app.options.length > 0 && React.createElement(
        "p",
        null,
        "Here are your options:"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "item 1"
        ),
        React.createElement(
            "li",
            null,
            "item 2"
        )
    )
);

var user = {
    name: 'Igor Yen',
    age: 45,
    location: 'Earth'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

//==========================================
var count = 0;
var addOne = function addOne() {
    count++;
    console.log('addOne', count);
    renderCounterApp();
};
var minOne = function minOne() {
    count--;
    console.log('minOne', count);
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    console.log('Reset');
    renderCounterApp();
};

var appRoot = document.getElementById("app");
// ReactDOM.render(template2, appRoot);
// ReactDOM.render(template, appRoot);

var renderCounterApp = function renderCounterApp() {
    var templateTwo = // (10)
    React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset"
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

/**
 * 10 - this is an Object
 */
