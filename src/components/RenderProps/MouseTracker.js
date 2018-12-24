import React from 'react';
import {Mouse} from "./Mouse";
import {MouseWithCat} from "./MouseWithCat";
import {Cat} from "./Cat";
import {withMouse} from "./withMouse";

// export class MouseTracker extends React.Component  {
//     constructor(props) {
//         super(props);
//         this.state = { x: 0, y: 0 };
//         this.handleMouseMove = this.handleMouseMove.bind(this);
//     }
//
//     handleMouseMove(event) {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         });
//     }
//
//     render() {
//         return (
//             <div
//                 style ={{ height: '100%' }}
//                 onMouseMove={this.handleMouseMove}
//             >
//                 <h1>Move the mouse around!</h1>
//                 <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
//             </div>
//         );
//     }
// }

const Cat2 = () => {
    const urlCat = require('./Cat.jpg');
    const mouse = this.props.mouse;
    return(
        <img
            src={urlCat}
            alt="cat"
            style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
        />
    )
};

export class MouseTracker extends React.Component {
    render() {

        return(
            <div>
                <h1>Move the mouse around!</h1>
                {/*<Mouse/>*/}
                {/*<MouseWithCat/>*/}
                <Mouse
                    render={mouse => (
                        <Cat mouse={mouse} />
                    )}
                />
            </div>
        )
    }
}