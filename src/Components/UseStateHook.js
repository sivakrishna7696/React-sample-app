import React,{useState} from 'react'

function UseStateHook() {

    //array destructuring
    // never mutate the state directly
    // console.log(useState());
    const [count,setCount] =  useState(0);
   
    
    const handleIncrement = ()=>{
        setCount(count+5);
    }
    
    const handleDecrement = ()=>{
        setCount(count-5);
    }

  return (
    <div>
        <h2>Counter</h2>
        <h2>Count: {count}</h2>
        
        <button className="btn btn-primary me-4" onClick={handleIncrement}> Increment</button>
        <button className="btn btn-primary" onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default UseStateHook