import React from 'react';

export class TextBlock extends React.Component {
    render() {
        return (
            <div>{this.props.text}</div>
        )
    }
}