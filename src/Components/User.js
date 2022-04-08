import React, { Component } from 'react'

export class User extends Component {

    constructor(props){
        super(props);
        this.state ={
            users:[{}]
        }
        console.log("constructor")
    }

    //static getderievedstatefromprops
    static getDerivedStateFromProps(props, state){
            console.log("static getderievedstatefrom props")
        }

       async getUserData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response)
        const data = await response.json();
        console.log(data);
        this.setState({users:data},function(){
            console.log(this.state.users)
        })
       }

        componentDidMount(){
            console.log('component did Mount');
            this.getUserData();
        }

  render() {
      console.log("render excuted")
    return (
      <div>
          <h2>User Data Component</h2>
    <div class="container">
    <table class="table table-striped table-hover">
                <tr>
                    <th >id</th>
                    <th>name</th>
                    <th>userName</th>
                    <th>Email</th>
                </tr>
               
                {
                this.state.users.map((user)=>(
                  <tr>
                      <td className='pt-4'>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                  </tr>
                ))
            }  
               
            </table>
    </div>
      
      </div>
    )
  }
}

export default User