import React, {Component} from 'react';

export class LogoutButton extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Logout
            </button>
        );
    }
}