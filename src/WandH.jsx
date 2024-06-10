import React, {useState, useEffect} from 'react'

function WandH() {

    const [width, setWidth] = useState(window.innerWidth);
    const [heigh, setHeigh] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listerner Added");

        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("Event Listerner Removed")
        }

    }, []);

    useEffect(() => { 
        document.title = `Size: ${width} x ${heigh}`
        }, [width, heigh]);

    function handleResize(){

        setWidth(window.innerWidth)
        setHeigh(window.innerHeight)
    }

  return (
    <div>
        <p>Window Width: {width}</p>
        <p>Window heigh: {heigh}</p>
    </div>
  )
}

export default WandH