import React, { useState } from 'react'
import { useContext } from 'react';
import { useAuth, UserContext } from '../Context/AppContext';
function Todo() {

  const {todo,setTodo} = useAuth()
  // console.log(data)
  
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    setTodo([...todo, newTodo]);
    setNewTodo('');
  };

  const handleDelete = (to) => {
    const updateTodo = todo.filter((t) => t !== to);
    setTodo(updateTodo);
  }
 


  return (
    <>
    <div className=" flex flex-col justify-center items-center font-bold  gap-5 border-2 m-10 p-10 rounded-2xl">

    <div className="text-3xl">task Manager</div>
     
    <input type="text" className='rounded-2xl p-2 border-2 border-black ' placeholder='Enter Task' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />


    <button className='border-2 border-black p-2 rounded-2xl bg-amber-200 '  onClick={() =>handleAddTodo()}>Add Todo</button>


    </div>
    <div className="border-2 m-10 p-10 rounded-2xl  ">
      <div className="text-center font-bold">Your Taskss</div>
      <div className="">
        {

          todo.map((t)=>(
            <div className="border-2 bg-gray-200 rounded-4xl text-center p-2 ml-10 mr-10 font-bold  text-2xl flex flex-row  justify-around items-center" key={Date.now()} >
              <div className="">{t}</div>

              <button type='button 'className='border-1 text-sm  border-red p-2 rounded-2xl bg-red-200' onClick={()=>handleDelete(t)}>X</button>
            </div>
          ))
        }
      </div>
    </div>


    </>
  )
}

export default Todo