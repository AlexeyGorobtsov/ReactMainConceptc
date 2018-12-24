import React from 'react';

export class NameFormUC extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('A name was submited: ' + this.input.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <label>
                    Name:
                    <input
                        defaultValue={'Bob'}
                        type="text"
                        ref={this.input}/>
                </label>
                <input type="submit" value={'Submit'}/>
            </form>
        )
    }
}