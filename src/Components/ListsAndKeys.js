import React, { Component } from 'react'

export class ListsAndKeys extends Component {

    employeeDetails = [
        {
            id:1,
            name:'virat',
            age:30
        },
        {
            id:2,
            name:'dhoni',
            age:30
        },
        {
            id:3,
            name:'sachin',
            age:30
        },
         {
            id:4,
            name:'raina',
            age:30
        }
    ]


    EmployeeList = this.employeeDetails.map(employee=>(
        <Employee key={employee.id} name={employee.name} age={employee.age} />
        ))


  render() {
    return (
      <div>
          <h2>ListsAndKeys</h2>
            <div>{this.EmployeeList}</div>
      </div>
    )
  }
}

const Employee = props =>{
    return(
        <div>
            <h2>Name : {props.name} and age : {props.age}</h2>
        </div>
    )
}



export default ListsAndKeys