'use strict';

console.log('App.js is running!');

// JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item 1'
        ),
        React.createElement(
            'li',
            null,
            'item 2'
        )
    )
);

var user = {
    name: 'Igor Yen',
    location: 'Earth'
};
var username = 'Igor';
var userLocation = 1;
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name.toUpperCase() + '!'
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template2, appRoot);
