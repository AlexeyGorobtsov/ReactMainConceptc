import * as React from "react";

export class BoilingVerdict extends React.Component {
    render() {
        return (
            <p>
                {
                    this.props.celsius >= 100
                    ? 'The water would boil.'
                    : 'The water would not boil.'
                }
            </p>

        )
    }
}