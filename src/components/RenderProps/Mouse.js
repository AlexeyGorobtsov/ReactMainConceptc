import React from 'react';

export class Mouse extends React.Component {
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
        return(
            <div
                style={{ height: '100%' }}
                onMouseMove={this.handleMouseMove}
            >
                {/*<p>The current mouse position is*/}
                {/*({this.state.x}, {this.state.y})*/}
                {/*</p>*/}

                {this.props.render(this.state)}
            </div>
        )
    }
}