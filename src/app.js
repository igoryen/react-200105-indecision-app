class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing 3']
        }
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={this.state.options}/>
                <AddOption />
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
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) { // (42)
        super(props); // (45)
        this.rmAll = this.rmAll.bind(this); // (47)
    }
    rmAll(){
        console.log(this.props.options); // (50)
        //alert('Remove All');
    }
    render(){
        return (
            <div>
                <button onClick={this.rmAll}>Remove all</button>
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
    handleAddOpt(e) {
        e.preventDefault();
        const opt = e.target.elements.opt.value.trim();
        if(opt){
            alert(opt);
        }
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleAddOpt}>
                    <input type="text" name="opt"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/**
 * 42 - pass in the `props` object
 * 45 - to get access to `this.props`
 * 47 - ensure that context is correct on every call of `rmAll()`
 * 50 - 'this' binding is broken. Error: 'this' is undefined.
 */