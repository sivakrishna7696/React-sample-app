import React from 'react'
import ComponentC from './ComponentC'
import {UserContext} from '../../App'

function ComponentB() {
  return (
    <div>
            <p>ComponentB</p>
            <ComponentC />
            {/* <UserContext.Consumer>
                {value=><div>{value}</div>}
            </UserContext.Consumer> */}
    </div>
  )
}

export default ComponentB