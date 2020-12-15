import React, {Component} from 'react';
import UserService from "../../services/user-service";
import OneUser from "../oneuser/OneUser";
import './allUsers.css'
import FullUser from "../fullUser/FullUser";
import UserPosts from "../posts/UserPosts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";



class AllUsers extends Component {
    userServices = new UserService()
    state = {users: [], allPosts: null}


    componentDidMount() {
        this.userServices.getAllUsers()
            .then(value => this.setState({users: value}))
    }

    getAllPosts = (id) => {
this.userServices.getAllPostsById(id)
    .then(value => this.setState({allPosts:value}))
    }


    render() {
        let {users,allPosts} = this.state
        let {match: {url}} = this.props
        return (
            <div>
                <div className={'allUsers'}>

                    <div className={'all'}>{users.map(value => <OneUser user={value} key={value.id} getAllPosts={this.getAllPosts}/>)}</div>

                    <div className={'oneUser'}><Switch>
                        <Route path={url + '/:id'} render={(props) => {

                            let {match: {params: {id}}} = props;

                            return <FullUser id={id} key={id}/>

                        }}/>

                    </Switch></div>
                </div>


                <div className={'allPosts'}>All Posts</div>
                {allPosts && <div className={'allQ'}>{allPosts.map(value=><UserPosts posts={value} key={value.id}/>)}</div>}

            </div>


        );
    }

}

export default withRouter(AllUsers) ;