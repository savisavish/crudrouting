import React from 'react'

const UseReducerHook = () => {
    return (
        <div>
            <li>useReducer is a hook that is used for state management in React. it is an alternative to useState and the difference is useState is built using useReducer</li>
            <li>useReducer is releated to reducer hooks</li>
            <li>useReducer(reducer , initialstate)</li>
            <li>reducer(currentState,action)</li>
            <li>Accepts two parameter useReducer(reducer, initialstate)</li>
            <li>reducer accepts new state
            newState = reducer(currentState, action)</li>
            <li>useReducer returns a pair of values [newState,dispatch]</li>
        </div>
    )
}
export default UseReducerHook;