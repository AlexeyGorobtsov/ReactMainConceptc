import React from 'react';
import {CustomTextInput} from "./CustomTextInput";

export class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    render() {
        return(
            <CustomTextInput inputRef={this.inputElement}/>
        )
    }
}