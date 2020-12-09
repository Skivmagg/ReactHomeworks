import React, {Component} from 'react';
import OneUser from "../One-User/One-User";
import {UserService} from "../../services/UserService";

class AllUsers extends Component {

    userService = new UserService();

    state = {allUsers: [], chosenUser: null};

    componentDidMount() {

        this.userService.getAllUsers()
            .then(value => this.setState({allUsers: value}))

    }

    showMore = (id) => {
        this.userService.getUserbyId(id)
            .then(value => this.setState({chosenUser: value}))
    }

    render() {
        let {allUsers, chosenUser} = this.state;
        return (
            <div>
                <h1>All Users</h1>
                {allUsers.map(value => <OneUser user={value} key={value.id} showMore={this.showMore} isButton={true}
                                                showmore={false}/>)}
                <hr/>
                {chosenUser && <OneUser user={chosenUser} isButton={false} showmore={true}/>}
            </div>
        );
    }
}

export default AllUsers;