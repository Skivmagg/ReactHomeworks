import React, {memo, useEffect, useMemo, useReducer, useState} from "react";

export default function Hooks() {

    const [userNumber, setNumber] = useState(1);
    const [user, setUser] = useState();


    useEffect(() => {
        console.log('Hello');
        fetch(`https://jsonplaceholder.typicode.com/users/${userNumber}`)
            .then(value => value.json())
            .then(value => setUser(value))

    }, [userNumber])

    let plusEvent = () => {
        setNumber((prevState) => prevState < 10 ? prevState + 1 : prevState);
    }
    let minusEvent = () => {
        setNumber((prevState) => prevState > 1 ? prevState - 1 : prevState);
    }

    return (
        <div>
            <button onClick={minusEvent}>- age</button>
            <button onClick={plusEvent}>+ age</button>
            <br/>
            <h1>User number {userNumber}</h1>
            <hr/>

            {!!user &&
            (<div>
                <p>{user.id} - {user.name} - {user.email} </p>
            </div>)
            }


        </div>
    );
}