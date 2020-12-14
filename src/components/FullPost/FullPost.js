import React, {Component} from 'react';
import {PostsService} from "../../services/PostsService";

class FullPost extends Component {
    postService = new PostsService()
    state = {post: null}

    componentDidMount() {

        let {id} = this.props;
        this.postService.getPostById(id)
            .then(value => this.setState({post: value}))

    }

    render() {
        let {post} = this.state

        return (
            <div>
                {post && <div>{post.id} - {post.tittle} - {post.body}</div>}
            </div>
        );
    }
}

export default FullPost;