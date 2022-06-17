import logo from './logo.svg';
import './App.css';
import APIComponent from "./Component/APIComponent";
import FormComponent from './Component/FormComponent';
import RefsComponent from './Component/RefsComponent';
import UseStateComponent from './Component/Hooks/UseStateComponent';
import ToDoList from './Component/Hooks/Projects/ToDoList';
function App() {
  return (
    <div className="App">
      {/* <APIComponent /> */}
      {/* <FormComponent /> */}
      {/* <RefsComponent /> */}
      {/* <UseStateComponent/> */}
      <ToDoList />
      {/* <h1>Home</h1> */}
    </div>
  );
}

export default App;
