class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
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
    rmAll(){
        console.log(this.props.options); // (50)
        //alert('Remove All');
    }
    render(){
        return (
            <div>
                <button onClick={this.rmAll.bind(this)}>Remove all</button>
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
 * 50 - 'this' binding is broken. Error: 'this' is undefined.
 */