import React, { useState } from 'react'

function MyComponent2() {
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState()

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlepaymentChange(event){
        setPayment(event.target.value)
    }
    return (
    <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <p>Quantity: {quantity}</p>
        <textarea name="" value={comment} id="" placeholder='Enter delivery instructions' onChange={handleCommentChange}></textarea>
        <p>Comment: {comment}</p>

        <select name="" id="" value={payment} onChange={handlepaymentChange}>
            <option value="">Select and Option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Master Card</option>
            <option value="Giftcard">Gift Card</option>
        </select>
        <p>Payment: {payment}</p>
    </div>
  )
}

export default MyComponent2