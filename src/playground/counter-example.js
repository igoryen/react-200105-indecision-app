class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        if (!isNaN(count)) { // if number
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter count={-10} />, document.getElementById('app'));


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