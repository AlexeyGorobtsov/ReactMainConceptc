import React from 'react';
import {Cat} from "./Cat";

export class MouseWithCat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        return (
            <div
                style={{ height: '100%' }}
                onMouseMove={this.handleMouseMove}
            >
                <Cat mouse={this.state}/>
            </div>
        )
    }
}