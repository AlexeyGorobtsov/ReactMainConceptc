import React from 'react';



export class Cat extends React.Component {
    render() {
        const urlCat = require('./Cat.jpg');
        const mouse = this.props.mouse;
        return(
            <img
                src={urlCat}
                alt="cat"
                style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
            />
        )
    }
}