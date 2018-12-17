import React from 'react';
import ThemedButton from "./ThemedButton";

export class Toolbar extends React.Component {
    render() {
        //console.log(this)
        return(
            <ThemedButton onClick={this.props.changeTheme}>
                Change Theme
            </ThemedButton>
        )
    }
}