import React, {Component} from 'react';
import Man from "../Man/Man";

class Mans extends Component {


    render() {
        let {mans}=this.props
        return (
            <div>
                {mans.map(value => <Man man={value} key={value.id}/>)}

            </div>
        );
    }
}

export default Mans;