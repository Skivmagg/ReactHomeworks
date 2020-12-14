import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class OneUser extends Component {
    render() {
        let {user, match: {url}} = this.props;
        return (
            <div>
                {user.name} - {user.email} - {user.address.city} - <Link to={url + '/'+user.id}>Info</Link>


            </div>


        );
    }
}

export default withRouter(OneUser);