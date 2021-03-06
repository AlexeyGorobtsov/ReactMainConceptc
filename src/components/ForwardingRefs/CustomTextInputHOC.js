import React from 'react';

const TextInput = ({ forwardedRef, children, ...rest}) => (
    <div>
        <input ref={forwardedRef} {...rest} />
        {children}
    </div>
);

const Input = InputComponent => {
    const forwardRef = (props, ref) => {
        const onType = () => console.log(ref.current.value);
        return <InputComponent
            forwardedRef={ref}
            onChange={onType}
            {...props}
        />
    };
    return React.forwardRef(forwardRef)
};

const InputField = Input(TextInput);
//console.log(InputField);
export class CustomTextInputHOC extends React.Component {
    render() {
        const inputRef = React.createRef();
        return <InputField ref={inputRef }/>
    }
}