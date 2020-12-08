import React, {Component} from 'react';
import OnePost from "../One-Post/One-post";

class AllPosts extends Component {

    state = {allPosts:[], comment: null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {
                this.setState({allPosts})
    })
    }

    showComment = (id) => {
      let comment = this.state.allPosts.find(value => value.id === id);
      this.setState({comment})
    }


    render() {
        let {allPosts,comment} = this.state;
        return (
            <div>
                <h1>All Posts</h1>
                {allPosts.map(value => <OnePost post={value} key={value.id} showComment={this.showComment} showBody={false} isButton={true}/>)}

                {comment && <OnePost post={comment} showBody={true} isButton={false}/>}
            </div>
        )
    }
}

export default AllPosts;