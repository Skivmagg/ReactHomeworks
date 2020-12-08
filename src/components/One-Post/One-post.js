import React, {Component} from 'react';

class OnePost extends Component {
    render() {
        let {post, showComment,showBody,isButton} = this.props;
        return (
            <div>
                {post.id} - {post.title} - {isButton && <button onClick={()=>showComment(post.id)}>Show comment</button>}
<br/>
                {showBody && post.body }

            </div>
        );
    }
}

export default OnePost;