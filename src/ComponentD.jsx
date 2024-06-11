import React from 'react'

function ComponentD(props) {
  return (
    <div className='box'>
    <h1>Component D</h1>
    <h2>{`Bye ${props.user}`}</h2>
        {/* <ComponentD></ComponentD> */}
    </div>
  )
}

export default ComponentD