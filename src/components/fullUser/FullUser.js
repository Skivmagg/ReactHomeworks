import React, {Component} from 'react';
import UserService from "../../services/user-service";

class FullUser extends Component {

    userServices = new UserService()
    state = {user: null}

    componentDidMount() {
        let {id} = this.props
        this.userServices.getUserById(id)
            .then(value => this.setState({user: value}))

    }

    render() {
        let {user}=this.state
        return (
       <div>

           {user && <div>{user.name} - {user.id}</div>}


       </div>


        );
    }
}

export default FullUser;