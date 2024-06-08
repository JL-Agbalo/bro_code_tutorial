import React, { useState } from 'react'

function Cars() {

    const [cars, setCars] = useState ([]);
    const [carYear, setCarYear] = useState (new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){

    }

    function handleRemoveCar(index){

    }

    function handleYearChange(){
        
    }
  return (
    <div>Cars</div>
  )
}

export default Cars