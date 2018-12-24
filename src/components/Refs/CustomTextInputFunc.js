import React from 'react';

export function CustomTextInputFunc(props) {
    let textInput = React.createRef();

    function hanldeClick() {
        textInput.current.focus();
    }

    return (
        <div>
            <input
                type="text"
                ref={textInput}
            />
            <input
                type="button"
                onClick={hanldeClick}
                value={'Focus the text input func'}
            />
        </div>
    )
}