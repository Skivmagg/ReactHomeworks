import React, {Component} from 'react';
import UserService from "../../services/user-service";
import OneUser from "../oneuser/OneUser";
import './allUsers.css'
import FullUser from "../fullUser/FullUser";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    withRouter
} from "react-router-dom";



class AllUsers extends Component {
    userServices = new UserService()
    state = {users:[]}

    componentDidMount() {
      this.userServices.getAllUsers()
            .then(value => this.setState({users:value}))
    }


    render() {
       let {users} = this.state
        let {match:{url}} = this.props
       return (

    <div className={'allUsers'}>

        {users.map(value => <OneUser user={value} key={value.id}/>)}

        <Switch>
            <Route path={url + '/:id'} render={(props)=>{
                let {match:{params:{id}}} = props;
                return <FullUser id={id} key={id}/>
            }}/>

        </Switch>
    </div>






        );
    }
}

export default withRouter(AllUsers) ;