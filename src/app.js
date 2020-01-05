console.log('App.js is running!');

var app = {
    title: "Aaa",
    subtitle: " Bbb"
};

// JSX - Javascript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>item 1</li>
            <li>item 2</li>
        </ol>  
    </div>
); 

var user = {
    name: 'Igor Yen',
    location: 'Earth'
};
var username = 'Igor';
var userLocation = 1;
var template2 = (
    <div>
        <h1>{user.name.toUpperCase() + '!'}</h1>
        <p>Location: {user.location}</p>
    </div> 
);

var appRoot = document.getElementById("app");
// ReactDOM.render(template2, appRoot);
ReactDOM.render(template, appRoot);