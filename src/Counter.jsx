// updater function
import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount( c => c + 1)
        setCount( c => c + 1)
        setCount( c => c + 1)
        // setCount( prevCount => count + 1)
    }

    const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    const reset = () => {
        setCount(0)
    }
  return (
    <div className='counter-container'>
        <p className='count-display'>{count}</p>
        <button className='counter-button' onClick={increment}>+ 1</button>
        <button className='counter-button' onClick={reset}>Reset</button>
        <button className='counter-button' onClick={decrement}>- 1</button>
        </div>
  )
}

export default Counter