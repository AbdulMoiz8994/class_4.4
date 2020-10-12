import React from 'react';
import Child from './child.js';
import Child2 from './Child2.js';

const Parent = (props) =>{

   return(
    <div>
       <Child name={props.name}/>
      <Child2/>
    </div>
   ); 
}
export default Parent;