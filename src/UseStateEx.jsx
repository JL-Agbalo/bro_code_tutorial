import React, {useState, useEffect} from 'react'

function UseStateEx() {

    const [count, setCount] = useState(0);

    const[color, setColor] = useState ("green");
    // useEffect(() => {document.title=`Count: ${count}`});  // Runs after every re-render

    // useEffect(() => {document.title=`Count: ${count}`}, []); // Run only on mount
    useEffect(() => {document.title=`Count: ${count} ${color}`}, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green"? "red" : "green") 
    }

  return (
    <div>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <br />
        <button onClick={changeColor}>Change Color</button>

    </div>
  )
}

export default UseStateEx