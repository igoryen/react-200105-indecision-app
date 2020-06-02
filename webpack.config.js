const path = require('path');

module.exports = {
    entry: './src/app.js', // The entry point of the app = where the app kicks off
    output: {
        path: path.join(__dirname, 'public'), // absolute path + /public
        filename: 'bundle.js'
    }
};