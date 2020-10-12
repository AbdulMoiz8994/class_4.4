import React,{useContext} from 'react';
import CounterContext from './CounterContext.js'

const Child = () =>{
    let counterValue=useContext(CounterContext);
    
    return(
        <div>
         <h1>We are on the: {counterValue[0]}</h1>
         <button onClick={() => {counterValue[1](++counterValue[0])}}>Increment</button>
        </div>
    );
}
export default Child;