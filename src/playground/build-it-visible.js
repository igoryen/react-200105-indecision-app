class VizTog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viz: false
        };
    }
    
    togViz() {
        alert('working');
    }
    render() {
        return(    
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.togViz}>
                    {this.state.viz ? 'Hide' : 'Show'}
                </button>
                { this.state.viz && (
                    <div>
                        <p>Hey, these are some details you can now see!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VizTog />, document.getElementById('app'));
