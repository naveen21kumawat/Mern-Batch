import React, { useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../Context/AppContext';
function Todo() {

  const {data,setData} = useContext(UserContext)
  console.log(data)
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    setData([...data, newTodo]);
    setNewTodo('');
  };


  return (
    <>
    <div className=" flex flex-col justify-center items-center font-bold  gap-5 border-2 m-10 p-10 rounded-2xl">

    <div className="text-3xl">task Manager</div>
     
    <input type="text" className='border-2 border-black ' placeholder='Enter Task' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />


    <button className='border-2 border-black p-2 rounded-2xl bg-amber-200 '  onClick={() =>handleAddTodo()}>Add Todo</button>


    </div>
    <div className="border-2 m-10 p-10 rounded-2xl  ">
      <div className="text-center font-bold">Your Taskss</div>
      <div className="">
        {
          data.map((t)=>(
            <div className="border-2 bg-gray-200 rounded-4xl text-center p-2 ml-10 mr-10 font-bold text-red-900 text-2xl" key={Date.now()} >
              <div className="">{t}</div>
            </div>
          ))
        }
      </div>
    </div>


    </>
  )
}

export default Todo