import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions/todoActions";


function TodoList() {

  const todos = useSelector((state) => state.todos);
  const disptach = useDispatch();
  const handleChechBox = (index)=>{
    disptach(toggleTodo(index));
  }

  return (
   
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border mt-4">
  <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
    {todos.map((todo,index)=>(
       <div key={index} role="button"
       className= {"flex items-center w-full p-3 py-1 pl-4 pr-1 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"}>
       <p className={todo.completed?"line-through":null}>{todo.text}</p>
       <div className="flex ml-auto place-items-center justify-self-end">
            <input type="checkbox" name="toggle"  id="toggle" checked={todo.completed} onChange={()=>{handleChechBox(index)}}/>
         <button
           onClick={() => { disptach(removeTodo(index)) }}
           className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
           type="button">
           <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
               <path fillRule="evenodd"
                 d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                 clipRule="evenodd"></path>
             </svg>
           </span>
         </button>
       </div>
     </div>
    ))}
   
    
  </nav>
</div>
  );
}

export default TodoList




 // <div classNameNameName="flex justify-center items-center ">
    //   <ul classNameNameName='max-w-2xl mt-6 bg-green-100 shadow-md rounded px-8 pt-6 pb-4'>
    //     {todos.map((todo, index) => (
    //       <li key={index} classNameNameName="pb-3 sm:pb-4">
    //         <div classNameNameName="flex items-center space-x-4 rtl:space-x-reverse">
    //           <div classNameNameName="flex-1 min-w-0">
    //             <p classNameNameName="text-lg font-medium text-gray-900 truncate ">
    //               {todo.text}
    //             </p>
    //           </div>
    //           <div classNameNameName='flex justify-between items-center'>
    //             {todo.completed ? <p classNameNameName='bg-green-400 text-black font-medium ml-2 border rounded-lg text-center text-wrap p-2'>Completed</p> : <p classNameNameName='bg-red-400 text-black font-medium ml-2 border rounded-lg text-center text-wrap p-2'>Pending</p>}


    //             <button
    //               onClick={() => { disptach(toggleTodo(index)) }}
    //               classNameNameName="select-none rounded-lg bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
    //               type="button"
    //             >
    //               Toggle
    //             </button>
    //             <button
    //               onClick={() => { disptach(removeTodo(index)) }}
    //               classNameNameName="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
    //               type="button"
    //             >
    //               Delete
    //             </button>
    //           </div>

    //         </div>
    //       </li>
    //     ))}


    //   </ul>
    // </div>




