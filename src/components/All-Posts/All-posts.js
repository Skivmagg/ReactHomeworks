import React, {Component} from 'react';
import OnePost from "../One-Post/One-post";
import {PostsService} from "../../services/PostsService";

class AllPosts extends Component {

    postService = new PostsService();

    state = {allPosts: [], comment: null}

    componentDidMount() {

        this.postService.getAllPosts()
            .then(value => this.setState({allPosts: value}))

    }


    showComment = (id) => {
        this.postService.getPostById(id)
            .then(value => this.setState({comment: value}))

    }


    render() {
        let {allPosts, comment} = this.state;
        return (
            <div>
                <h1>All Posts</h1>
                {allPosts.map(value => <OnePost post={value} key={value.id} showComment={this.showComment}
                                                showBody={false} isButton={true}/>)}

                {comment && <OnePost post={comment} showBody={true} isButton={false}/>}
            </div>
        )
    }
}

export default AllPosts;