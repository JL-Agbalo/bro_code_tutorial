import React, {useState, useRef, useEffect} from 'react'

function UseRef() {
    // let [number, setNumber] = useState(0)

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Rendered")
        // console.log("Input Ref: ", {inputRef})
    })
    function handleClick1(){
        // setNumber(n => n + 1)
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor ="yellow"
        inputRef2.current.style.backgroundColor =""
        inputRef3.current.style.backgroundColor =""
  
    }
    
    function handleClick2(){
        // setNumber(n => n + 1)
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor ="yellow"
        inputRef1.current.style.backgroundColor =""
        inputRef3.current.style.backgroundColor =""
    
    }

    function handleClick3(){
        // setNumber(n => n + 1)
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor ="yellow"
        inputRef1.current.style.backgroundColor =""
        inputRef2.current.style.backgroundColor =""
    }
  return (
    <div>
        <button onClick={handleClick1}>Click Me 1!</button>
        <input type="text" ref={inputRef1} />

        <br />
        <button onClick={handleClick2}>Click Me 2!</button>
        <input type="text" ref={inputRef2} />

        <br />

        <button onClick={handleClick3}>Click Me 3!</button>
        <input type="text" ref={inputRef3} />
    </div>
  )
}

export default UseRef