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
            { viz && (
                <div>
                    <p>Hey, these are some details you can now see!</p>
                </div>
            )}
        </div>
    ); 
    ReactDOM.render(jsx, document.getElementById('app'));
};

render();