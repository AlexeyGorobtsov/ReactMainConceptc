import React, {Component} from 'react';

export class LoginButton extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Login
            </button>
        );
    }
}