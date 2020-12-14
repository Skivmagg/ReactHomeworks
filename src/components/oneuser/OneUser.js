import React, {Component} from 'react';
import './oneUser.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class OneUser extends Component {
    render() {
      let {user} = this.props
        return (
            <Router>

            <div>
                <div className={'user'}>

                    <div>{user.id} - {user.name}

                    </div>

                    <div>
                        <button><Link to={`/users/${user.id}`}>Details</Link></button>
                        <button>Posts</button>
                    </div>

                </div>
                <hr/>
            </div>



            </Router>
        );
    }
}

export default OneUser;