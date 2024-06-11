import React, {useContext} from 'react'
import { UserContext } from './ComponentA.jsx'

function ComponentD() {
    const user = useContext(UserContext);


  return (
    <div className='box'>
    <h1>Component D</h1>
    <h2>{`Bye ${user}`}</h2>
        {/* <ComponentD></ComponentD> */}
    </div>
  )
}

export default ComponentD