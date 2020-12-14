import React, {Component} from 'react';
import OnePost from "../One-Post/One-post";
import {PostsService} from "../../services/PostsService";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    withRouter
} from "react-router-dom";
import FullPost from "../FullPost/FullPost";
class AllPosts extends Component {
postService = new PostsService()
    state = {allPosts:[]}

    componentDidMount() {

    this.postService.getAllPosts()
        .then(value => this.setState({allPosts:value}))

    }



    render() {
        let {allPosts} = this.state;
        let {match:{url}} = this.props;
        return (
            <div>
                <h1>All Posts</h1>
                {allPosts.map(value => <OnePost post={value} key={value.id} />)}
<hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=>{
                        let {match:{params:{id}}} = props;
                       return <FullPost id={id} key={id}/>

                    }}/>



                </Switch>
<hr/>
            </div>
        )
    }
}

export default withRouter(AllPosts) ;