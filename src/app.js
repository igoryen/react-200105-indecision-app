const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['One', 'Two']
};


// JSX - Javascript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p> }
        {(app.options && app.options.length > 0) && <p>Here are your options:</p>}
        <ol>
            <li>item 1</li>
            <li>item 2</li>
        </ol>  
    </div>
); 

const user = {
    name: 'Igor Yen',
    age: 45,
    location: 'Earth'
};

function getLocation( location ) {
    if(location){
        return <p>Location: {location}</p>;
    }    
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div> 
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);