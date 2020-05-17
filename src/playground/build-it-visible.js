class VizTog extends React.Component {
    constructor(props) {
        super(props);
        this.togViz = this.togViz.bind(this);
        this.state = {
            viz: false
        };
    }
    
    togViz() {
        this.setState((prevState)=>{
            return {
                viz: !prevState.viz
            }
        });
    }
    render() {
        return(    
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.togViz}>
                    {this.state.viz ? 'Hide' : 'Show'} deets.
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
