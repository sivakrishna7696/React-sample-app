import React,{useEffect, useState} from 'react'

function UseStateHook() {

    //array destructuring
    // never mutate the state directly
    // console.log(useState());
    const [count,setCount] =  useState(0);
   
    useEffect(()=>{
        console.log("use effect triggered")
    })
    
    // mounting phase 
    // similar to componentdidmount
        useEffect(()=>{
            console.log("mounting phase triggered");
        },[])

    // updating phase
    // similar to componentupdate
        useEffect(()=>{
            console.log("this is updating phase");
        },[count])


    //unmounting phase
    // similar to componentwillunmount
    useEffect(()=>{
        return ()=>{
            console.log('unmounting phase');
        }
    },[count])


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