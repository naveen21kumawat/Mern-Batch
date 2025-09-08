import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from "../Context/AppContext";
import { useContext } from 'react';


function UserDetails() {
    const {theme} = useContext(AppContext);
    console.log(theme);
  const [data, setdata] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      let user = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setdata(user.data);
    })();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="card w-96 bg-white shadow-lg rounded-lg p-6 border-2">
        <h2 className="text-xl font-bold mb-2 text-center text-blue-700">{theme}</h2>
        <h2 className="text-xl font-bold mb-2 text-center text-blue-700">{data.name}</h2>
        <p className="text-gray-700 mb-1"><span className="font-semibold">Username:</span> {data.username}</p>
        <p className="text-gray-700 mb-1"><span className="font-semibold">Email:</span> {data.email}</p>
        <p className="text-gray-700 mb-1"><span className="font-semibold">Phone:</span> {data.phone}</p>
        <p className="text-gray-700 mb-1"><span className="font-semibold">Website:</span> {data.website}</p>
        <div className="mt-4">
          <h3 className="font-bold text-md text-cyan-700 mb-1">Address</h3>
          <p className="text-gray-700 text-sm">{data.address.suite}, {data.address.street}</p>
          <p className="text-gray-700 text-sm">{data.address.city}, {data.address.zipcode}</p>
          <p className="text-gray-700 text-sm">Geo: {data.address.geo.lat}, {data.address.geo.lng}</p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-md text-cyan-700 mb-1">Company</h3>
          <p className="text-gray-700 text-sm"><span className="font-semibold">Name:</span> {data.company.name}</p>
          <p className="text-gray-700 text-sm"><span className="font-semibold">CatchPhrase:</span> {data.company.catchPhrase}</p>
          <p className="text-gray-700 text-sm"><span className="font-semibold">BS:</span> {data.company.bs}</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetails