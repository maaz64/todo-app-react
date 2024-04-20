import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";



function TodoForm() {

  // creating state to store the todo text send by the users
  const [todoText, setTodoText] = useState("");

  // using useDispatch hook to dispatch our actions
  const dispatch = useDispatch();

  // function to handle the todo form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // if todoText is empty, just return by alerting the user that todo can't be empty
    if (!todoText) {
      alert("Todo can't be empty")
      return
    }
    // dispatching the addTodo action with the todoText
    dispatch(addTodo(todoText));

    // clearing the todoText
    setTodoText("")
  };

  // creating form component
  return (
    <>
      <div className="w-full max-w-2xl mt-6">
        <form className="bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="todo">
              Add Todo
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-white" id="todo" value={todoText} onChange={(e) => { setTodoText(e.target.value) }} type="text" />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="select-none rounded-lg bg-gray-700 hover:bg-gray-800  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Create Todo
            </button>
          </div>
        </form>
      </div>

    </>

  )
}

export default TodoForm
