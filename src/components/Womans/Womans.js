import React, {Component} from 'react';
import Woman from "../Woman/Woman";

class Womans extends Component {

    render() {
        let {womans}=this.props
        return (
            <div>
                {womans.map(value => <Woman woman={value} key={value.id}/>)}
            </div>
        );
    }
}

export default Womans;