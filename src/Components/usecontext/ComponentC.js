import React from 'react'
import {UserContext} from '../../App'


function ComponentC() {
  return (
    <div>ComponentC
        <UserContext.Consumer>
                {value=><div>{value}</div>}
            </UserContext.Consumer>
    </div>
    
  )
}

export default ComponentC