import React, {Component} from 'react';

export class FormatteDate extends Component {
    render() {
        return (
            <h2>It is {this.props.date.toLocaleTimeString()}</h2>
        )
    }
}