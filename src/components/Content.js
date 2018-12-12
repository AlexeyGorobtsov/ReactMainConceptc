import React, {Component} from "react";

export class Content extends Component {
    render() {
        const content = this.props.posts.map((post) =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        );
        return (
            <ul>
                {content}
            </ul>
        );
    }
}