import React, {Component} from 'react';
import './oneUser.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    withRouter
} from "react-router-dom";


class OneUser extends Component {
    render() {
      let {user,match:{url}} = this.props

        return (
            <Router>

            <div>
                <div className={'user'}>

                    <div>{user.id} - {user.name}

                    </div>

                    <div>
                        <button><Link to={url + '/' + user.id}>Details</Link></button>
                        <button>Posts</button>
                    </div>





                </div>
                <hr/>
            </div>



            </Router>
        );
    }
}

export default withRouter(OneUser);