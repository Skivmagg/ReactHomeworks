import React, {memo, useEffect, useMemo, useReducer, useState} from "react";

const Test = () => {

    useEffect(()=>{
        console.log('mount');

        return () =>{
            console.log('unmount');
        }

    },[])

    return <h2>Lorem ipsum dolor sit amet.</h2>
}


export default function Hooks() {

    const [isVisible, setIsVisible] = useState(false)
    const [arr, setArr] = useState([40,53,22,555,343,22]);
const totalPrice = useMemo(()=>{
    return arr.reduce((acc,el) => (acc+=el),0)
},[arr])
    return (
        <div>
            {totalPrice}
            <br/>
            <button onClick={() => setIsVisible(!isVisible)}>Toogle</button>
            <button onClick={() => setArr([...arr, 50])}>addPrice</button>
            {isVisible && <Test/>}

        </div>
    );
}