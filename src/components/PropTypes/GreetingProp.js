import PropTypes from 'prop-types';

export class GreetingProp extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        )
    }
}

GreetingProp.propTypes = {
  name: PropTypes.string
};