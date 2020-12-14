import React, {Component} from 'react';
import './App.css'
import AllUsers from "./components/users/AllUsers";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <h1><Link to={'/users'} className={'header'}>Users</Link></h1>
                <div className={'main'}>
                    <Switch>
                        <Route path={'/users'} render={() => {
                            return <AllUsers/>
                        }}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;