import React from 'react';
import {Modal} from "./Modal";
import {Child} from "./Child";

export class ParentPortal extends React.Component {
    constructor(props) {
        super(props);
       this.state = { clicks: 0 };
       this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            clicks: state.clicks + 1
        }))
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Number of clicks: {this.state.clicks}</p>
                <p>
                    Open up the browser DevTools
                    to observe that the button
                    is not a child of the div
                    with the onClick handler.
                </p>
                <Modal>
                    <Child/>
                </Modal>
            </div>
        )
    }


}