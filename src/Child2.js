import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer.js';


const Child2 = () =>{
let [state, dispatch]=useReducer(CounterReducer, 1);
    return(
<div>
    <h1>Hello This is value of {state}</h1>
    <button onClick={() =>dispatch('INCREMENT')}>Increment Reducer</button>
</div>

    );
}
export default Child2;