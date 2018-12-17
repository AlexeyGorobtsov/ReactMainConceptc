import React from 'react';
import {ThemedButton} from "./ThemedButton";

export class Toolbar extends React.Component {
    render() {
        return (
            <div>
                <ThemedButton theme={this.props.theme}/>
            </div>
        )
    }
}