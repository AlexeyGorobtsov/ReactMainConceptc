import React from 'react';

export class CustomTextInput2 extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.textInput.current.value);
    };

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" ref={this.textInput}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}