let viz = false; // viz = visibility
const toggleViz = () => {
    viz = !viz;
    render();
};
const render = () => {
    let btnlbl = (viz ? 'Hide' : 'Show') + ' details'; 
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleViz}>{btnlbl}</button>
        </div>
    ); 
    ReactDOM.render(jsx, document.getElementById('app'));
};

render();