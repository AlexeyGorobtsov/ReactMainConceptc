import React from 'react';

export class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        try {
            throw new Error('I crashed')
        } catch (error) {
            console.log(this)
            this.setState({error})
        }
    }

    render() {
        if (this.state.error) {
            return <h1>Caught an error.</h1>
        }
        return <button onClick={this.handleClick}>Click Me</button>
    }
}