import React, { useState } from 'react'

function Foods() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])
    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);// f prev State
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index)); // _ parameters to ignore
    }
  return (
    <div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) => 
            <li key={index} onClick={() => handleRemoveFood(index)}>
                {food}
            </li>)}
            <input type="text" id = "foodInput" placeholder='Enter food name' />
            <button onClick={handleAddFood}>Add Food</button>
        </ul>
    </div>
  )
}

export default Foods