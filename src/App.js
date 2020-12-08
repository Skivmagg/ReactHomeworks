import React, {Component} from 'react';
import AllPosts from "./components/All-Posts/All-posts";
import AllUsers from "./components/All-Users/All-Users";

class App extends Component {
    render() {
        return (
            <div>

                <div><AllUsers/></div>

                <div><AllPosts/></div>

            </div>
        );
    }
}

export default App;