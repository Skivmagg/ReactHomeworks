import React, {Component} from 'react';

class Man extends Component {
    render() {
        let {man}=this.props
        return (
            <div>
                {man.id} - {man.name} - {man.age}
            </div>
        );
    }
}

export default Man;