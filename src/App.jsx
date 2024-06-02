// import Card from "./Card";
import Student from "./Student";
// import Button from "./Button";
import UserGreeting from "./UserGreeting"
function App() {
return( 
  <>
  {/* <Card/> */}
  {/* <Student name="Lenard" age={24}  isStudent={true}></Student>
  <Student name="Strong" age={23}  isStudent={false}></Student>
  <Student name="Fish" age={27}  isStudent={true}></Student>
  <Student name="Fishdol" age={21}  isStudent={true}></Student>
  <Student name="Larry" ></Student> */}
  {/* <Button></Button> */}
  <UserGreeting isLoggedIn={true} username="LenardCode"></UserGreeting>
  <UserGreeting isLoggedIn={true} ></UserGreeting>
  <UserGreeting ></UserGreeting>
  </>
  );
}

export default App
