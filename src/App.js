import React, {Component} from 'react';
import Mans from "./components/Mans/Mans";
import Womans from "./components/Womans/Womans";
import MarriedCouples from "./components/MarriedCouples/MarriedCouples";
import './App.css'

class App extends Component {

    state = {
        mans: [{id: 1, name: 'andrey', age: 50, status: false},
            {id: 3, name: 'viktor', age: 25, status: true},
            {id: 3, name: 'nazar', age: 39, status: true},
            {id: 2, name: 'sasha', age: 18, status: false},
            {id: 5, name: 'yra', age: 41, status: false}],
        womans: [{id:3,name: 'anya', age: 29, status: true},
            {id:5,name: 'alina', age: 15, status: false},
            {id:1,name: 'ira', age: 31, status: true},
            {id:4,name: 'diana', age: 22, status: false},
            {id:2,name: 'yulia', age: 21, status: true}],
        marriedCouples:[]
    }



    render() {
        return (
            <div className={'main'}>
                <div><Mans mans={this.state.mans}/></div>
                <div><Womans womans={this.state.womans}/></div>
                <div><MarriedCouples mans={this.state.mans} womans={this.state.womans}/></div>
            </div>
        );
    }
}

export default App;