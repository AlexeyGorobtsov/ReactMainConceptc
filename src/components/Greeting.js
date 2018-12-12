import React, {Component} from 'react';
import {UserGreeting} from "./UserGreeting";
import {GuestGreeting} from "./GuestGreeting";

export class Greeting extends Component {

    innerGreeting(pr) {
        return pr ? <UserGreeting/> : <GuestGreeting/>;
    }

    render() {
        return (
            <div>
                {this.innerGreeting(this.props.isLoggedIn)}
            </div>
        );
    }

}