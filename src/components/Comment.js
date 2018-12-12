import React, {Component} from 'react';
import {UserInfo} from "./UserInfo";

export class Comment extends Component {
    constructor(props) {
        super(props);
    }

    formatDate(date) {
        return date.toLocaleString();
    }

    render() {
        return(
            <div className={'Comment'}>
                <UserInfo user={this.props.author}/>
                <div className={'Comment-text'}>
                    {this.props.text}
                </div>
                <div className={'Comment-date'}>
                    {this.formatDate(this.props.date)}
                </div>
            </div>
        )
    }
}