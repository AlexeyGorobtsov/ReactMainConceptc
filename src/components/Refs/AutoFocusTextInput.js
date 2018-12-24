import React from 'react';

import {CustomTextInputRef} from "./CustomTextInputRef";

export class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focusTextInput();
    }

    render() {
        return(
            <CustomTextInputRef ref={this.textInput}/>
        )
    }
}