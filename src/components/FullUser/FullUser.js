import React, {Component} from 'react';
import {UsersService} from "../../services/UsersService";

class FullUser extends Component {
userService = new UsersService()
    state = {user:null}


    componentDidMount() {
        let {id} = this.props;
    this.userService.getUserbyId(id)
        .then(value => this.setState({user:value}))
    }

    render() {

        let {user} = this.state;
        return (
            <div>
                {user && <div>
                    {user.id} - {user.name} - {user.email}
                </div>}

            </div>
        );
    }
}

export default FullUser;