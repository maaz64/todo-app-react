import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [toggleForm, setToggleForm] = useState(true)

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
      <Navbar setToggleForm={setToggleForm} toggleForm={toggleForm}/>
      {toggleForm?<TodoForm  />:null}
      
        <TodoList/>
      </div>
    </>
  )
}

export default App
