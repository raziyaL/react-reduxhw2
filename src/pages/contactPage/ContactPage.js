import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";

const ContactPage = () => {

    const [input, setInput] = useState('');

    const contactTitle = useSelector(state => state.ContactPageReducer.title)
    const dispatch = useDispatch();

    const withParams = ()=>{
        dispatch({
            type:"WITH_PARAMS",
            payload: 344324233
        })
    }

    const addInput = ()=>{
        dispatch({
            type:"ADD_INPUT",
            payload: input
        })
    }
    return (
        <div>
            <h1>{contactTitle}</h1>
            <button onClick={withParams}>change title with params</button>
            <h2>================================</h2>
            <input type="text" onChange={(event)=>setInput(event.target.value)}/>
            <button onClick={addInput}> add</button>
        </div>
    )
}

export default ContactPage;