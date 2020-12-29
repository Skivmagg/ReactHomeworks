import React, {memo, useEffect, useMemo, useReducer, useState} from "react";


const reducer = (state, action) => {
    switch (action.type){
        case "SET_TODO": {
            return action.payload
        }
        case "CHANGE_TODO_STATUS": {
            return {
                ...state,
                completed: !state.completed,
            };
        }
        case "CHANGE_TODO_TITLE":{
            return {
                ...state,
                title: state.title + '!'
            };
        }
        default : {
            return state;
        }
    }

}
const initialState = {
    userId: null,
    id: null,
    title: "",
    completed: false
}

export default function Hooks() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [userNumber, setNumber] = useState(1);

    useEffect(() => {
        console.log('Hello');
        fetch(`https://jsonplaceholder.typicode.com/todos/${userNumber}`)
            .then(value => value.json())
            .then(value => {
                dispatch({type:'SET_TODO', payload: value})
            });

    }, [userNumber])

    let plusEvent = () => {
        setNumber((prevState) => prevState < 10 ? prevState + 1 : prevState);
    }
    let minusEvent = () => {
        setNumber((prevState) => prevState > 1 ? prevState - 1 : prevState);
    }
    const changeStatus = () =>{
        dispatch({type:'CHANGE_TODO_STATUS'})
    }
const changeTitle = () => {
        dispatch({type:"CHANGE_TODO_TITLE"})
}
    return (
        <div>
            <button onClick={minusEvent}>- age</button>
            <button onClick={plusEvent}>+ age</button>
            <button onClick={changeStatus}>change status</button>
            <button onClick={changeTitle}>change Title</button>
            <br/>
            <h1>User number {userNumber}</h1>
            <hr/>
<>
            {!!state &&
            (<div>
                <p>{state.id} - {state.title} - {state.completed.toString()} </p>
            </div>)
            }
</>

        </div>
    );
}