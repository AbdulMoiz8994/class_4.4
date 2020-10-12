import React from 'react';


const Parent = (props) =>{

   return(
    <div>
     <h1>hello {props.name}</h1>
     {props.children}
   <p>Now, we are starting {props.message}</p>
    </div>
   ); 
}
export default Parent;