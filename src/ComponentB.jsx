import React from 'react'
import ComponentC from './ComponentC'

function ComponentB() {
  return (
    <div className='box'>
    <h1>Component C</h1>
        <ComponentC
       ></ComponentC>
    </div>
  )
}

export default ComponentB