"use strict";

var app = {
    title: "Aaa",
    subtitle: " Bbb"
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
    React.createElement(
        "p",
        null,
        app.subtitle
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

var appRoot = document.getElementById("app");
ReactDOM.render(template2, appRoot);
// ReactDOM.render(template, appRoot); /
