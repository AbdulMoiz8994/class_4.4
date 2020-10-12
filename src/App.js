import React,{useState} from 'react';
import './App.css';
import Parent from './parent.js';
import CounterContext from './CounterContext.js';

function App() {
const setState=useState(2); //[count, setCount]
  // const[count, setCount]=useState(0);
  return (

<CounterContext.Provider value={setState}>
    <div className="App">
       <Parent name="child"/>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
