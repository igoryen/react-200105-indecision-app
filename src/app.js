const app = {
    title: "Some title",
    subtitle: " Some subtitle",
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

//==========================================
let count = 0;
const addOne = () => {
    count++;
    console.log('addOne', count);
    renderCounterApp();
};
const minOne = () => {
    count--;
    console.log('minOne', count)
    renderCounterApp();
};
const reset = () => {
    count = 0;
    console.log('Reset')
    renderCounterApp();
};

const appRoot = document.getElementById("app");
// ReactDOM.render(template2, appRoot);
// ReactDOM.render(template, appRoot);

const renderCounterApp =() => {
    const templateTwo = ( // (10)
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp()

/**
 * 10 - this is an Object
 */