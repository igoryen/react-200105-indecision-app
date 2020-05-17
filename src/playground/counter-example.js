class Counter extends React.Component {
    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button>+1</button>
                <button>-1</button>
                <button>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// //==========================================
// let count = 0;
// const addOne = () => {
//     count++;
//     console.log('addOne', count);
//     renderCounterApp();
// };
// const minOne = () => {
//     count--;
//     console.log('minOne', count)
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     console.log('Reset')
//     renderCounterApp();
// };

// const appRoot = document.getElementById("app");
// // ReactDOM.render(template2, appRoot);
// // ReactDOM.render(template, appRoot);

// const renderCounterApp =() => {
//     const templateTwo = ( // (10)
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp()

// /**
//  * 10 - this is an Object
//  */