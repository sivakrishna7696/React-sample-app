import React, { Component } from 'react'

export class Pagination extends Component {
    state ={
        PageNumber :1,
        users :[]
    }


    

     getUserData = async()=>{
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.PageNumber}&limit=10`,{
            method:'GET',
            headers:{
                "app-id" : "624eb9f97de5e302f383760b"
            }
        }    
        )   
        const {data} = await response.json();
        console.log(data);
       this.setState({users:data})
    }

    handleButtonClick = (num)=>{
        // alert(num);  
        // num = parseInt(num);
      this.setState({PageNumber:num})
    }

    // componentdid mount - when it is injucted to the DOM.
    componentDidMount(){
       this.getUserData();
       
    }

    componentDidUpdate(prevsProps,presState){
        // console.log(prevsProps,presState)
        // this.getUserData();

        if(presState.PageNumber !== this.state.PageNumber){
            this.getUserData();
        }
    }

    componentWillUnmount(){
        alert('unmounting')
    }

  render() {
    return (
      <div className="container">
        <div className='row'>
            {this.state.users && this.state.users.length>0 && this.state.users.map((user)=>(
                <div className="col-md-6 mt-4">
                    <div className=' p-5'>
                       <div className='row'>
                            <div class="col-md-4">
                                <img className='img-fluid' src={user.picture} alt={user.firstName} />
                            </div>
                            <div class="col-md-8">
                                <h3>{user.id}</h3>
                                <p>{user.firstName}</p>
                                <p>{user.lastName}</p>
                            </div>
                         </div> 
                    </div>
                </div>
                
                ))}
        </div>
        {/* pagination */}
        <div className='container mb-5 mt-3'> 
            {
                [1,2,3,4,5,6,7,8,9].map((num)=>
                <button className='btn btn-primary m-2' 
                onClick={()=>this.handleButtonClick(num)}>{num}</button>)
            }
        </div>

      </div>
    )   
  }
}

export default Pagination