import React,{useReducer} from 'react'


function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {count : state.count + 1};
        case 'decrement':
            return {count : state.count - 1};
        default:
            throw new Error()
    }
}


function UseReducercomp() {

    const initialState = {count:0}
    const [state,dispatch] = useReducer(reducer,initialState)

    //Redux - use to store state values in redux-store
    //useReducer - use to store state value to local const variable

    // const[state,dispatch] = userReducer(reducer,initialState)

  return (
    <>
        <center>
           <h2>Count : {state.count}</h2>
           <button className='btn btn-info me-3'
            onClick={()=>dispatch({type:'increment'})}>Add+</button> 

           <button className='btn btn-info' 
           onClick={()=>dispatch({type:'decrement'})}>Sub-</button> 

        </center>
    </>
  )
}

export default UseReducercomp