import React from 'react';

export class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focus = this.focus.bind(this)
    }

    focus() {
        this.textInput.current.focus();
    }

    render() {
        return(
            <div>
                <input
                    type={'text'}
                    ref={this.textInput}
                />
                <button
                    onClick={this.focus}
                >focus</button>
            </div>


        )
    }
}