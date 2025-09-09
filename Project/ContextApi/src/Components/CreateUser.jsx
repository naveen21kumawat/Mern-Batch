import React, { useState } from "react";

function CreateUser() {
  const [userData, setUserdata] = useState({ name: "", email: "", phone: "" });
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, userData]);
    setUserdata({ name: "", email: "", phone: "" });
  };

  console.log(userData);
  return (
    <>
    <div className="bg-gray-100 ">
      <div className=" m-20  rounded-lg shadow-2xl flex ">
        {users.map((user)=>(
    <div className="p-10 m-2 border-1 rounded-lg shadow-2xl mt-10" key={user.email}>
      <div className="font-bold text-2xl">{user.name}</div>
      <div className="text-xl">{user.email}</div>
      <div className="text-xl">{user.phone}</div>
    </div>
        ))}
      </div>
      <div className="form w-full p-10  rounded-lg shadow-2xl flex justify-center">
        <form className=" flex  flex-col gap-2  h-100 rounded-lg border-2 border-black shadow-4xl">
          <input
            type="text"
            className="border-2 border-white p-5 rounded-lg m-3 "
            value={userData.name}
            onChange={(e) => setUserdata({ ...userData, name: e.target.value })}
            placeholder="Enter Name"
          />
          <input
            type="text"
            className="border-2 border-white p-5 rounded-lg m-3"
            value={userData.email}
            onChange={(e) =>
              setUserdata({ ...userData, email: e.target.value })
            }
            placeholder="Enter Email"
          />
          <input
            type="text"
            className="border-2 border-white p-5 rounded-lg m-3"
            value={userData.phone}
            onChange={(e) =>
              setUserdata({ ...userData, phone: e.target.value })
            }
            placeholder="Enter Phone Number"
          />

          <button
            type="submit"
            className="border-2 border-white p-5 rounded-lg m-3 bg-green-500 cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      </div>
    </>
  );
}

export default CreateUser;
