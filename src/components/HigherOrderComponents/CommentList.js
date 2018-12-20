import React from 'react';

export const DataSource = {
    getComments(){
      return [
          {id: 1, comment: 'hello'},
          {id: 2, comment: 'world'},
          {id: 3, comment: 'good'},
          {id: 4, comment: 'day'},
      ]
    },

    getBlogPost(id) {
        this.posts = [
            'some post',
            'some post2',
            'some post3',
            'some post4'
        ],

        return this.posts[id];
    }
};

export class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            comments: DataSource.getComments()
        }
    }

    componentDidMount() {
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange)
    }

    handleChange() {
        this.setState({
            comments: DataSource.getComments()
        })
    }

    render() {
        return(
            <div>
                {this.state.comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </div>
        )
    }
}