import React from 'react';

export class CustomTextInputCallBack extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.setTextInputRef = element => {
            this.textInput = element;
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.textInput.value);
    };

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" ref={this.setTextInputRef}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}