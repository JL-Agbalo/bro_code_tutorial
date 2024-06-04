import React, {useState} from 'react'

function MyComponent() {
    const [age, setAge] = useState(0)
    const [name, setName] = useState("Guest")
    const updateName = () => {
        setName("Lenard")
        // console.log(name)
    }

    const incrementAge = () => {
        setAge(age + 1)
        // console.log(name)
    }
  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
    </div>
  )
}

export default MyComponent