"use strict";

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); // (10)
    var option = e.target.elements.option.value; // (20)
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var wipeAll = function wipeAll() {
    app.options = [];
    renderApp();
};

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

var renderApp = function renderApp() {
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
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: wipeAll },
            "Remove ALL"
        ),
        [99, 98, 87] // (50)
        ,
        99,
        ", ",
        98,
        ", ",
        97,
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
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();

/**
 * 10 - Stop the full-page refresh so that other code below can be run. 
 * 20 - element on which the event was fired, here <form>
 * 50 - JSX doesn't support objects.
 */
