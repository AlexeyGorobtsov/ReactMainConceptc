import React, {Component} from 'react';

export class Avatar extends Component {
    render() {
        return (
            <div>
                <img
                    className={'Avatar'}
                    src={this.props.user.avatarUrl}
                    alt={this.props.user.name}
                />
            </div>
        );
    }
}