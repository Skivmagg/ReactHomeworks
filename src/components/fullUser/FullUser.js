import React, {Component} from 'react';
import UserService from "../../services/user-service";

class FullUser extends Component {
    state = {user: null}
    userServices = new UserService()


    componentDidMount() {
        let {id} = this.props
        this.userServices.getUserById(id)
            .then(value => this.setState({user: value}))

    }

    render() {
        let {user} = this.state
        return (
            <div>
                {user && <div>
                    <h5>{user.name} <br/>{user.username}</h5>
                    <h6>Phone - {user.phone}</h6>
                    <h6>Email - {user.email}</h6>
                    <h6>Website - {user.website}</h6>
                </div>}
            </div>
        );
    }
}

export default FullUser;