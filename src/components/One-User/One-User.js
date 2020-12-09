import React, {Component} from 'react';

class OneUser extends Component {
    render() {
        let {user, showMore, isButton, showmore} = this.props;
        return (
            <div>
                {user.name} - {user.email} - {user.address.city}
                {isButton && <button onClick={() => showMore(user.id)}>Show More</button>}

                {showmore && user.phone}

                {showmore && user.company.name}

            </div>


        );
    }
}

export default OneUser;