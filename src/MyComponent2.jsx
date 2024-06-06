import React, { useState } from 'react'

function MyComponent2() {
    const [name, setName] = useState("")
    function handleNameChange(event){
        setName(event.target.value)
    }
    return (
    <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>
    </div>
  )
}

export default MyComponent2