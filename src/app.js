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

function getLocation( location ) {
    if(location){
        return location;
    }
    else {
        return 'Unknown';
    }
    
}

var template2 = (
    <div>
        <h1>{user.name.toUpperCase() + '!'}</h1>
        <p>Location: {getLocation(user.location)}</p>
    </div> 
);

var appRoot = document.getElementById("app");
ReactDOM.render(template2, appRoot);
// ReactDOM.render(template, appRoot); /