import React, {Component} from 'react';

export class WarningBanner extends Component {
    render() {
        if(!this.props.warn) {
            return null;
        }
        return(
            <div className={'warning'}>
                Warning!
            </div>
        )
    }
}