import React, {useState, useRef, useEffect} from 'react'

function UseRef() {
    let [number, setNumber] = useState(0)
    useEffect(() => {
        console.log("Component Rendered")
    })
    function handleClick(){
        setNumber(n => n + 1)
    }
    
  return (
    <div>
        <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default UseRef