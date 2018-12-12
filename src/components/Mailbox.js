import React, {Component} from 'react';

export class Mailbox extends Component {
    render() {
        const unreadMessage = this.props.unreadMessages;
        return (
            <div>
                <h1>Hello!</h1>
                {unreadMessage.length > 0 &&
                <h2>
                    You have {unreadMessage.length} unread messages.
                </h2>
                }
            </div>
        );
    }
}