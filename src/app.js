class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.delOpts = this.delOpts.bind(this);
        this.pickOpt = this.pickOpt.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
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
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
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

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.pickOpt}
                    disabled={!this.props.hasOpts}
                >
                    What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {

    render(){
        return (
            <div>
                <button onClick={this.props.delOpts}>Remove all</button>
                { this.props.options.map( (opt) => <Option key={opt} optText={opt} /> ) }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optText}
            </div>
        )
    }
}

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/**
 */