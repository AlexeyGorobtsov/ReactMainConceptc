import React from 'react';

export class MyComponentR extends React.Component {
    constructor(props) {
        super(props);
        this.firstRef = React.createRef();
    }

    render() {
        return <div ref={this.firstRef} />
    }
}