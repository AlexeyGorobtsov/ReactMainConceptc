import React from 'react';

export class CustomTextInputCallback extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.setTextInputRef = elem => {
            this.textInput = elem;
        };

        this.focusTextInput = () => {
            if (this.textInput) this.textInput.focus();
        }
    }

    componentDidMount() {
        this.focusTextInput();
    }

    render() {
        return(
            <div>
                <input
                    type="text"
                    ref={this.setTextInputRef}
                />
                <input
                    type="button"
                    value={'Focus the text input'}
                    onClick={this.focusTextInput}
                />
            </div>
        )
    }
}