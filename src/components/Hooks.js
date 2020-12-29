import React, {memo, useEffect, useMemo, useReducer, useState} from "react";
import {useDispatch, useSelector} from "react-redux";



export default function Hooks() {

    const counter = useSelector(({counter})=> counter  )
const dispatch = useDispatch();
    return (
        <div>
           Hello counter is {counter}
           <br/>
           <button onClick={()=>dispatch({type: 'INC_COUNTER'})}>INC</button>
           <button onClick={()=>dispatch({type: 'DEC_COUNTER'})}>DEC</button>
           <button onClick={()=>dispatch({type: 'RESET'})}>RESET</button>

        </div>
    );
}