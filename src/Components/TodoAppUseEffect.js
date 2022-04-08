import React,{useState,useEffect} from 'react'

function TodoAppUseEffect() {
     const [todos,setTodos] = useState([]);
    const[input,setInput] = useState("");

    // console.log(input)
    const handleClick = (e)=>{
        e.preventDefault();
        setTodos([...todos,input])
        setInput(" ")
    } 

  return (
    <div className='text-center'>
      
      <form>
        <div className='container row mt-5'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
            <input type="text" class="form-control" id="" 
            placeholder="add your items"
            onChange={(e)=>{setInput(e.target.value)}}
            value={input}
            />
            </div>
           
        
            <div className='col-md-4'>
            <button  onClick={handleClick} class="btn btn-primary mb-3">AddTodos</button>
            
            </div>
            <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-5'>
              
            {todos.map((todo)=>(
                <div class="alert alert-primary" role="alert">
                  <p className='border border-secondary p-1 mb-1'>{todo}</p>
                  </div>
                 ))}
           
            </div>
            <div className='col-md-3'></div>
            </div>
           
        </div>
        </form>


     
               

    </div>
  )
}

export default TodoAppUseEffect