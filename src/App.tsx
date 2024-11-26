import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Toast } from "./components/Toast";

function App() {
  const nameList = [
    {
      first: "vaishnavi",
      last: "patil",
    },
    {
      first: "John",
      last: "Doe",
    },
    {
      first: "Jane",
      last: "Smith",
    },
  ]
  return (
    <div className="App">
      {/* <Greet name="John" massageCount={20} isLoggedIn={true} />
      <Person firstName="vaishnavi" lastName="patil" />
      <PersonList names={nameList} />
      <Status status="loading"/>
      <Heading>Placeholder text</Heading> */}
      {/* <Button handleClick={()=>{console.log('button Clicked')}}/> */}
      {/* <Container styles={{border:'1px solid black',padding:'1rem'}}/> */}
      <Toast position="center"/> 
    </div>
  );
}

export default App;
