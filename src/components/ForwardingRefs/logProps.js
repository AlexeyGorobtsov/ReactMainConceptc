import React from 'react';

function logProps(WrappedComponent) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            const {forwardedRef, ...rest} = this.props;
            return <WrappedComponent ref={forwardedRef} {...rest}/>
        }
    }

    return LogProps;
}

class FancyButton extends React.Component {
        focus() {

        }

        render() {
            return (
                <button></button>
            )
        }
}

export default logProps(FancyButton)

// function logProps(Component) {
//     class LogProps extends React.Component {
//         componentDidMount() {
//             console.log('old props:', prevProps);
//             console.log('new props:', this.props);
//         }
//
//         render() {
//             const {forwardedRef, ...rest} = this.props;
//             return (
//                 <Component>
//                     ref={forwardedRef}
//                     {...rest}
//                 </Component>
//             );
//         }
//     }
//     return React.forwardRef((props, ref) => {
//         return <LogProps {...props} forwardedRef={ref} />
//     })
// }
//
// export default logProps(FancyButton)