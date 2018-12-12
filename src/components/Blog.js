import React, {Component} from 'react';
import {Sidebar} from "./Sidebar";
import {Content} from "./Content";

export class Blog extends Component {
    render() {
        return (
            <div>
                <Sidebar posts = {this.props.posts}/>
                <hr/>
                <Content posts = {this.props.posts} />
            </div>
        );
    }
}