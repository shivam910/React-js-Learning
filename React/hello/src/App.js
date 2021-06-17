import logo from './logo.svg';
import './App.css';
// import { Greet } from "./componenets/Greet.js"
import  Greet  from "./componenets/Greet.js"
import Welcome from "./componenets/Welcome.js"
import Hello from "./componenets/Hello.js"
import Message from "./componenets/Message.js"
import Counter from "./componenets/Counter.js"
import Destructuring from './componenets/Destructuring.js';
import FunctionClick from "./componenets/FunctionClick.js";
import ClassClick from './componenets/ClassClick';
import EventBind from './componenets/EventBind';
import ParentComponent from './componenets/ParentComponent';
import UserGreeting from './componenets/UserGreeting';
import NameList from './componenets/NameList';
import Stylesheets from './componenets/Stylesheets';
import Inline from './componenets/Inline';
import "./appStyles.css"
import styles from "./appStyles.module.css"


function App() {
  return (
    <div className="App">
      <h1 className = "error">Error</h1>
      <h1 className= {styles.success}>Success</h1>
      <Inline />
      <Stylesheets primary = {true} />
      <NameList />
      <UserGreeting />
      <ParentComponent />
      <EventBind />
      <ClassClick />
      <FunctionClick />
      <Counter />
      <Message></Message>
      <Greet name = "Harry" depart = "youtube" />
      {/* reusable component meaing */}
      <Greet name = "Shivam">
        <p>Heheh its a paragraph</p>
        </Greet> 
        <Greet name= "Stolen King">
          <button>Here</button>
          </Greet>
      <Destructuring name="Shivam" depart="Developer" />
      <Welcome name ="Adarsh" depart = "Mechanical"></Welcome>
      <Welcome name = "Yuvraj" depart = "Electrical"></Welcome>
      <Welcome name = "Ritesh" depart = "Electronics"></Welcome>
      <Hello></Hello> 
    </div>
  );
}

export default App;
