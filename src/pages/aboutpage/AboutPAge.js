import React from 'react';
import {useDispatch} from "react-redux";
import {asyncFunctionAction} from "../../redux/actions";

function AboutPAge() {
    const dispatch = useDispatch();
    return (
        <button onClick={dispatch(asyncFunctionAction())}>2 sec</button>
    );
}

export default AboutPAge;