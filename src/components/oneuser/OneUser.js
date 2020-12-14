import React, {Component} from 'react';
import './oneUser.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    withRouter
} from "react-router-dom";
import FullUser from "../fullUser/FullUser";


class OneUser extends Component {
    render() {
      let {user,match:{url}, getAllPosts} = this.props

        return (


            <div>
                <div className={'user'}>

                    <div>{user.id} - {user.name}

                    </div>

                    <div>
                        <button className={'btn1'}><Link className={'link1'} to={url + '/' + user.id}>Details</Link></button>
                        <button className={'btn2'} onClick={()=> getAllPosts(user.id)}>Posts</button>
                    </div>





                </div>
                <hr/>
            </div>




        );
    }
}

export default withRouter(OneUser);