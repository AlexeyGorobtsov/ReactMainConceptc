import React from 'react';

const TextInput = React.forwardRef((props, ref) => (
        <input type={'text'} placeholder={'Hello World'} ref={ref} />
    )
);

const inputRef = React.createRef();

export class CustomTextInputForward extends React.Component {
    handleSubmit = e => {
        //console.log(this);
        e.preventDefault();
        //console.log(inputRef)
        console.log(inputRef.current.value)
    };

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <TextInput ref={inputRef}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}