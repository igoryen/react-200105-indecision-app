'use strict';

var viz = false; // viz = visibility
var toggleViz = function toggleViz() {
    viz = !viz;
    render();
};
var render = function render() {
    var btnlbl = (viz ? 'Hide' : 'Show') + ' details';
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleViz },
            btnlbl
        ),
        viz && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, these are some details you can now see!'
            )
        )
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
