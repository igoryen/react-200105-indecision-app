"use strict";

console.log('App.js is running!');

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
    location: 'Earth'
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name.toUpperCase() + '!'
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        getLocation(user.location)
    )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template2, appRoot);
// ReactDOM.render(template, appRoot); /
