import React, {Component} from 'react';
import AllPosts from "./components/All-Posts/All-posts";
import AllUsers from "./components/All-Users/All-Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div><Link to={'/users'}>AllUsers</Link></div>
                    <div><Link to={'/posts'}>AllPosts</Link></div>
                    <Switch>
                        <Route path={'/users'} render={() => {
                            return <AllUsers/>
                        }}/>
                        <Route path={'/posts'} render={() => {
                            return <AllPosts/>
                        }}/>


                    </Switch>


                </div>
            </Router>

        );
    }
}

export default App;