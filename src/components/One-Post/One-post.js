import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    withRouter
} from "react-router-dom";

class OnePost extends Component {
    render() {
        let {post, match:{url}} = this.props;
        return (
            <div>
                {post.id} - {post.title} - <Link to={url+'/'+ post.id}>Info</Link>
<br/>


            </div>
        );
    }
}

export default withRouter(OnePost);