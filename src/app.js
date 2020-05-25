class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.delOpts = this.delOpts.bind(this);
        this.pickOpt = this.pickOpt.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        };
    }
    delOpts(){
        this.setState(()=>{
            return {
                options: [] // wipe the state
            }
        });
    }
    pickOpt(){
        const rno = Math.floor(Math.random() * this.state.options.length); // rno = random number
        const opt = this.state.options[rno];
        alert(opt);
    }
    handleAddOption(option){
        if(!option) { // if an empty string
            return 'Add valid value to add item'
        }
        else if (this.state.options.indexOf(option) > -1){ // array already has a match
            return 'This option already exists'
        }
        this.setState((prevState) => {
            return {

                options: prevState.options.concat(option)
            }
        });
    }
    //---------------------------------
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOpts={this.state.options.length > 0}
                    pickOpt={this.pickOpt}
                />
                <Options 
                    options={this.state.options}
                    delOpts={this.delOpts}
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
                onClick={props.pickOpt}
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
            <button onClick={props.delOpts}>Remove all</button>
            { props.options.map( (opt) => <Option key={opt} optText={opt} /> ) }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optText}
        </div>
    )
};

class AddOption extends React.Component {
    constructor(props){
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
        this.setState(() => {
            return {
                error // aka error: error
            }
        });

    }
    render() {
        return(
            <div>
                { this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="opt"/>
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

ReactDOM.render(<IndecisionApp options={['Devils den', 'Second district']} />, document.getElementById('app'));

/**
 */