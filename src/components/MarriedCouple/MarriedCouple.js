import React, {Component} from 'react';

class MarriedCouple extends Component {
    render() {
        let {couple}=this.props
        return (
            <div>
                {couple.man.name} - {couple.man.age} - {couple.woman.name} -{couple.woman.age}
            </div>
        );
    }
}

export default MarriedCouple;