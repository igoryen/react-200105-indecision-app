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
    age: 45,
    location: 'Earth'
};

function getLocation( location ) {
    if(location){
        return <p>Location: {location}</p>;
    }    
}

var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div> 
);

var appRoot = document.getElementById("app");
ReactDOM.render(template2, appRoot);
// ReactDOM.render(template, appRoot); /