import React, {Component} from 'react';
import OneUser from "../One-User/One-User";

class AllUsers extends Component {

    state = {allUsers: [], chosenUser:null};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(allUsers => {
                this.setState({allUsers})
            })
    }

    showMore = (id) => this.setState({chosenUser: this.state.allUsers.find(value => value.id === id)})

render()
{
    let {allUsers, chosenUser} = this.state;
    return (
        <div>
            <h1>All Users</h1>
            {allUsers.map(value => <OneUser user={value} key={value.id} showMore={this.showMore} isButton={true} showmore={false}/>)}
            <hr/>
            {chosenUser && <OneUser user={chosenUser} isButton={false} showmore={true} />}
        </div>
    );
}
}

export default AllUsers;