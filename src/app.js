class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }
    //===================================
    // Life-cycle methods work on CBCs, not on SFCs.
    // CBC - class-based components
    // SFC - stateless functional comps

    // remotely like $(foo).load()
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options })); // = options: options
            }
        }
        catch (e) {
            // If JSON data is invalid, do nothing at all.
        }
    }

    // remotely like $(foo).change()
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    // right before the component unmounts/disappears from the screen
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    //================================
    handleDeleteOptions() {
        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const rno = Math.floor(Math.random() * this.state.options.length); // rno = random number
        const opt = this.state.options[rno];
        alert(opt);
    }
    handleAddOption(option) {
        if (!option) { // if an empty string
            return 'Enter valid value to add item'
        }
        else if (this.state.options.indexOf(option) > -1) { // array already has a match
            return 'This option already exists'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }
    //---------------------------------
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOpts={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}
IndecisionApp.defaultProps = {
    options: []
};
//========================================


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
};

Header.defaultProps = {
    title: 'Indecision'
};

// Convert CBC to SFC (Class-Based Comp to Stateless Functional Component)
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOpts}
            >
                What should I do?
            </button>
        </div>
    )
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            {props.options.map((opt) => (
                <Option
                    key={opt}
                    optionText={opt}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
        </div>
    )
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >remove</button>
        </div>
    )
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.opt.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.opt.value = ''; // clear text input field
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="opt" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/**
 */