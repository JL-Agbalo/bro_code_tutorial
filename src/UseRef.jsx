import React, {useState, useRef, useEffect} from 'react'

function UseRef() {
    // let [number, setNumber] = useState(0)

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Component Rendered")
        console.log("Input Ref: ", {inputRef})
    })
    function handleClick(){
        // setNumber(n => n + 1)
        inputRef.current.focus();
    }
    
  return (
    <div>
        <button onClick={handleClick}>Click Me!</button>
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default UseRef