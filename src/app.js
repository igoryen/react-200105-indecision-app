const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); // (10)
    const option = e.target.elements.option.value; // (20)
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const wipeAll = () => {
    app.options = [];
    renderApp();
};

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

const renderApp = () => {
    // JSX - Javascript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p> }
            {(app.options && app.options.length > 0) && <p>Here are your options:</p>}
            <p>{app.options.length}</p>
            <button onClick={wipeAll}>Remove ALL</button>
            <ol>
                {
                    app.options.map((opt) => <li key={opt}>{opt}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    ); 
    ReactDOM.render(template, appRoot);
};

renderApp();

/**
 * 10 - Stop the full-page refresh so that other code below can be run. 
 * 20 - element on which the event was fired, here <form>
 * 50 - JSX doesn't support objects.
 */