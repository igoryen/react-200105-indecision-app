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
    console.log('addOne');
};
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
    )
);

var appRoot = document.getElementById("app");
// ReactDOM.render(template2, appRoot);
// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);

/**
 * 10 - this is an Object
 */
