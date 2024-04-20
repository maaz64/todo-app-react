import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  // creating state for toggling the form component on click of the button
  const [toggleForm, setToggleForm] = useState(true)

  return (
    <>
      <div className="flex flex-col justify-center items-center ">

      <Navbar setToggleForm={setToggleForm} toggleForm={toggleForm}/>
      {/* conditional rendering of TodoForm Component */}
      {toggleForm?<TodoForm  />:null}
      
        <TodoList/>
      </div>
    </>
  )
}

// exporting the app
export default App
