import React, {Component} from 'react';
import './posts.css'
class UserPosts extends Component {
    render() {
       let {posts}= this.props
        console.log(posts);
        return (
            <div className={'posts'}>
                <h3>{posts.id} - {posts.title}</h3> Body - {posts.body}
            </div>
        );
    }
}

export default UserPosts;