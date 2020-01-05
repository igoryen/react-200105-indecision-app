"use strict";

console.log('App.js is running!');

// JSX - Javascript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
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

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "igoryen"
    ),
    React.createElement(
        "p",
        null,
        "Location: Earth"
    )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template2, appRoot);
