console.log('App.js is running!');

// JSX - Javascript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>item 1</li>
            <li>item 2</li>
        </ol>  
    </div>
); 

var username = 'Igor';
var userLocation = 1;
var template2 = (
    <div>
        <h1>{username.toUpperCase() + '!'}</h1>
        <p>Location: {userLocation}</p>
    </div> 
);

var appRoot = document.getElementById("app");
ReactDOM.render(template2, appRoot);