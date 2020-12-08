import React, {Component} from 'react';

class Woman extends Component {
    render() {
        let {woman}=this.props;
        return (
            <div>
                {woman.id} - {woman.name} - {woman.age}
            </div>
        );
    }
}

export default Woman;