import React from 'react'
import './HomeStyles.css' 
import styles from './homeStyles.module.css'

function Home(props) {

  const productstyles = {
    color:'green',
    backgroundColor:'yellow',
    fontSize : '25'
  }


  // console.log(props.studentMarks)
  // const [social,science,maths,physics] = props.studentMarks;
  // console.log(social);
   
  // const {name,age} = props.studentDetails;

  return (
    <div>
      <h2>Home Component</h2>
      <h2 className='clr-blue'>Product details</h2>
      <section style={{color:"red"}}>This is a section Tag in React</section>

      <div style={productstyles}>This is division tag in React</div>

      <p className={styles.itemcss}>
          This is Module css
      </p>
        {/* <h3>My Name is {props.name} and my age is {props.age}</h3> */}
      {/* <h2>Name : {props.studentDetails.name}</h2> */}
        {/* <h2>Marks for social : {social} </h2>
        <h2>Marks for science : {science} </h2>
        <h2>Name : {name}</h2>
        <h2>age : {age}</h2> */}

        {/* React.createElement('h2',null,'this is without jsx'); */}
    </div>
  )
}

export default Home