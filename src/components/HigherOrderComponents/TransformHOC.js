import React from 'react';

const yell = (PassedComponent) =>
    ({children, ...props}) =>
        <PassedComponent {...props}>
            {children.toUpperCase()}!
        </PassedComponent>;

const Title = (props) => <h1>{props.children}</h1>;

export const TransformHOC = yell(Title);

const higherOrderComponent = (WrappedComponent) => {
    class HOC extends React.Component {
        render() {
            return <WrappedComponent/>;
        }
    }

    return HOC;
};