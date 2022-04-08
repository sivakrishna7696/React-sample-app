import React, { useEffect, useState } from 'react'

function UseeffectPagination() {
    const [userData,setUserData] = useState([{}]);
    const [pageNumber,setPageNumber] = useState(1);

    const getTheDataFromServer = async()=>{
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
        {
            method:'GET',
            headers:{
                "app-id" :"624eb9f97de5e302f383760b",
            }
        }
        )
        const {data} = await response.json();
        console.log(data)
        setUserData(data);
    }

    //mounting phase
    useEffect(()=>{
        getTheDataFromServer();
    },[])   

    //updating phase
        useEffect(()=>{
            getTheDataFromServer();
        },[pageNumber])

    // https://dummyapi.io/data/v1/user?page=1&limit=10
  return (
    <div className=''>
        <h2>Pagination</h2>
        <div className='d-flex justify-content-center'>
        <table className='border border-primary text-center'>
            <thead>
            <tr className='border border-primary'>
                <th>user id</th>
                <th>Title</th>
                <th>firstname</th>
                <th>lastname</th>
            </tr>
            </thead>
            
            <tbody>
                {userData.map((user)=>(
                    <tr className='border border-primary m-4' style={{"padding":"20px"}}>
                        <td style={{"padding":"20px"}}>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                    </tr>
                ))}
                </tbody>
        </table>
        </div>


        <div className='text-center my-5'>      
        <button className='btn btn-warning me-3' onClick={()=>{setPageNumber(1)}}>1</button>
        <button  className='btn btn-warning me-3' onClick={()=>{setPageNumber(2)}}>2</button>
        <button  className='btn btn-warning me-3' onClick={()=>{setPageNumber(3)}}>3</button>
    </div>
    </div>
  )
}

export default UseeffectPagination