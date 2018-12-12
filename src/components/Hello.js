import React, {Component} from 'react';

export class Hello extends Component {
    render() {
        return <h1>Hello {this.props.name}</h1>
    }
}