import React from 'react';
import {Button} from "./Button";

export class ThemedButton extends React.Component {
    render() {
        return (
            <Button theme = {this.props.theme} />
        );
    }
}