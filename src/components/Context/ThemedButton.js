import React from 'react';
import {Button} from "../Button";
import {ThemedContext} from './themed'

export class ThemedButton extends React.Component {

    render() {
        return <Button theme={this.context}/>
    }
}

ThemedButton.contextType = ThemedContext;
export default ThemedButton;