import React, {Component} from 'react';

export class Sidebar extends Component {
    render() {
        const posts = this.props.posts.map((post =>
                <li key={post.id}>{post.title}</li>
        ));
        return (
            <ul>
                {posts}
            </ul>
        );
    }
}