import React from 'react';
import {DataSource} from "./CommentList";
import {TextBlock} from "./TextBlock";


export class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPost: DataSource.getBlogPost(props.id)
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
        this.setState({
            blogPost: DataSource.getBlogPost(this.props.id)
        })
    }

    render() {
        return <TextBlock text={this.state.blogPost} />
    }
}

