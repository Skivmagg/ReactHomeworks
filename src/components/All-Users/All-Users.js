import React, {Component} from 'react';
import OneUser from "../One-User/One-User";
import {UsersService} from "../../services/UsersService";
import FullUser from "../FullUser/FullUser";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


class AllUsers extends Component {

    userService = new UsersService()

    state = {allUsers: []};

    componentDidMount() {

        this.userService.getAllUsers()
            .then(value => this.setState({allUsers: value}))

    }


    render() {
        let {allUsers} = this.state;
        let {match:{url}} = this.props;

        return (
            <div>
                <h1>All Users</h1>
                {allUsers.map(value => <OneUser user={value} key={value.id}/>)}
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=>{
                        let {match:{params:{id}}} = props;
                     return <FullUser id={id} key={id}/>
                    }}/>

                </Switch>

                <hr/>
            </div>

        );
    }
}

export default withRouter(AllUsers);