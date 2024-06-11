import React, {useContext} from 'react'
import { UserContext } from './ComponentA.jsx'
import ComponentD from './ComponentD'

function ComponentC() {

    const user = useContext(UserContext);
  return (
    <div className='box'>
    <h1>Component C</h1>
    <h2>{`Hello Again ${user}`}</h2>
        <ComponentD
        ></ComponentD>
    </div>
  )
}

export default ComponentC

// use Context = React hook that allows you to share values between multiple levels of components withou passing props though each level