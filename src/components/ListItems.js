import React, {Component} from 'react';

export class ListItems extends Component {
    render() {
        const listItems = this.props.numbers.map((number) => {
            return <li key={`${number}ListItems`}>{number}</li>
        });
        return(
            <ul>
                {listItems}
            </ul>
        )
    }
}