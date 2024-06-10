// import Card from "./Card";
// import Student from "./Student";
import Button from "./Button";
// import UserGreeting from "./UserGreeting"
import Counter from "./Counter";
import List from "./List";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import ColorPicker from "./ColorPicker";
import MyCar from "./MyCar";
import Foods from "./Foods";
import Cars from "./Cars";
import ToDoList from "./ToDoList";
import UseStateEx from "./UseStateEx";
import WandH from "./WandH";

function App() {
  const fruits = [{id: 1, name: "Apple", calories: 23},
  {id: 2, name: "Banana", calories: 21},
  {id: 3, name: "Orange", calories: 62},
  {id: 4, name: "Strawberry", calories: 211}];

  const vegetables = [{id: 5, name: "Carrot", calories: 61},
  {id: 6, name: "Corn", calories: 53},
  {id: 7, name: "Eggplant", calories: 12},
  {id: 8, name: "Potatoes", calories: 21}];
return( 
  <>
  {/* <Card/> */}
  {/* <Student name="Lenard" age={24}  isStudent={true}></Student>
  <Student name="Strong" age={23}  isStudent={false}></Student>
  <Student name="Fish" age={27}  isStudent={true}></Student>
  <Student name="Fishdol" age={21}  isStudent={true}></Student>
  <Student name="Larry" ></Student> */}
  {/* <UserGreeting isLoggedIn={true} username="LenardCode"></UserGreeting>
  <UserGreeting isLoggedIn={true} ></UserGreeting>
  <UserGreeting ></UserGreeting> */}
  {/* {fruits.length > 0 ? <List items={fruits} category ="Fruits"></List> : null} */}
  {/* {fruits.length > 0 && <List items={fruits} category ="Fruits"></List>}  */}

  {/* {vegetables.length > 0 ?  <List items={vegetables} category ="Vegetables"></List>: null} */}
  {/* <Button></Button> */}
  {/* <ProfilePicture></ProfilePicture> */}
  {/* <MyComponent></MyComponent> */}
  {/* <Counter></Counter> */}
  {/* <MyComponent2></MyComponent2> */}
  {/* <ColorPicker></ColorPicker> */}
  {/* <MyCar></MyCar> */}
  {/* <Foods></Foods> */}
  {/* <Cars></Cars> */}
  {/* <ToDoList></ToDoList> */}
  {/* <UseStateEx></UseStateEx> */}
  <WandH></WandH>
  </>
  );
}

export default App


// https://www.youtube.com/watch?v=CgkZ7MvWUAA
// Continue 3:14mins 