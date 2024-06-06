import React, { useState } from 'react'

function MyComponent2() {
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }
    return (
    <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <p>Quantity: {quantity}</p>
        <textarea name="" value={comment} id="" placeholder='Enter delivery instructions' onChange={handleCommentChange}></textarea>
        <p>Comment: {comment}</p>
    </div>
  )
}

export default MyComponent2