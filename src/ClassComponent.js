import React, { Component } from 'react'
import './HomeStyles.css'

export class ClassComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      welcome :'wecome to state',
      count:0
    }
  }

  changeMessage(){
   this.setState({
     welcome:"thank you"
   })
  }

  increment(){
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement(){
    this.setState({
      count: this.state.count - 1
    })
  }

  reset(){
    this.setState({
      count:0
    })
  }

  render() {
    return (
     
      <div>
        <h2 className='clr-blue'>ClassComponent</h2>
        <div>
            <div>{this.state.welcome}</div>
            <button onClick={()=>this.changeMessage()}>Click here</button>

            <h2>Counter</h2>
            <div>Count - {this.state.count}</div>
            <button onClick={()=>this.increment()}>Increment</button>
            <button onClick={()=>this.decrement()}>Decrement</button>
            <button onClick={()=>this.reset()}>Reset</button>
        </div>


          {/* <h3>My name is {this.props.name} and my age is {this.props.age}</h3>
          <h2>Marks: {this.props.studentMarks}</h2> */}
      </div>
    )
  }
}

export default ClassComponent