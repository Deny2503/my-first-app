import React from "react";

class Hello extends React.Component {

    name = "";

    constructor(props) {
        super(props);
        const name = "Andrew";
        console.log(1, this.name);
        this.state = { count: 0 };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <>
                <h1>Hello {this.name}</h1>
                <div>
                    <p> Counter {this.state.count}</p>
                    <button onClick={this.increment}>
                        +1
                    </button>
                </div>
            </>
        )
    }
}

export default Hello;