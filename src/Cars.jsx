import React, { useState } from 'react'

function Cars() {

    const [cars, setCars] = useState ([]);
    const [carYear, setCarYear] = useState (new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {
            year: carYear, 
            make: carMake, 
            model: carModel}

            setCars(c => [...c, newCar])
            setCarYear(new Date().getFullYear());
            setCarMake("")
            setCarModel("")
    }

    function handleRemoveCar(index){
        setCars(c => c.pushfilter((_, i) => i !== index)); // if naka _ is hindi ginagamit, _ to ignote this parameter
    }

    function handleYearChange(){
        setCarYear(event.target.value);
    }

    function handleMakeChange(){
        setCarMake(event.target.value);

    }
    function handleModelChange(){
        setCarModel(event.target.value);
        
    }
  return (
    <div>
        <h2>List of Car Object</h2>
        <ul>
            {cars.map((car, index) =>
            <li key={index} onClick={() => handleRemoveCar(index)}>
                {car.year} {car.make} {car.model}
            </li>)}
        </ul>
        <input type="number" value ={carYear} onChange={handleYearChange}/><br></br>
        <input type="text" value ={carMake} onChange={handleMakeChange} placeholder='Enter car make'/><br></br>
        <input type="text" value ={carModel} onChange={handleModelChange} placeholder='Enter car model'/><br></br>
        <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}

export default Cars