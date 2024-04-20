

export default function Navbar({setToggleForm, toggleForm}) {


  return (
    

<nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-black text-2xl font-semibold whitespace-nowrap">Todo App</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button onClick={()=>{setToggleForm(!toggleForm)}} type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-600  ">Add Todo</button>
  </div>

  </div>
</nav>

  )
}
