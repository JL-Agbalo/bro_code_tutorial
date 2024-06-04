function Button() {
  // let count = 0;
  // const handleClick = () => console.log("Cllicked")
  // const handleClick2 = (name) => console.log(`${name} stop clicking me`)

//   const handleClick = (name) => {
//     if(count < 3){
//       count ++;
//     console.log(`${name} you clicked me ${count} time/s`)
//   }
//     else
//     {
//       console.log(`${name} stop clicking me!`)
//     }
//   }
//   return (
//     <button className="button" onClick={() => handleClick("Bro")}>Click Me</button>
//     // <button className="button" onClick={() => handleClick2("Bro")}>Click Me</button>
//   )
// }


const handleClick = (e) => e.target.textContent = "OUCH!"

return(<button onClick={(e) => handleClick(e)}>Click Me</button>)
}
export default Button