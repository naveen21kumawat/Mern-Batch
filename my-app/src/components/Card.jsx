import React from 'react';
// import '../App.css';


const Card = ({ membersdata }) => {
  // Sample data with image, name, and title
 
  return (
    <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4  mt-10 place-items-center gap-6">
      {/* <h2>Team Members</h2> */}
      {membersdata.map((m)=>(
  <div className="w-40   border-2 rounded-lg mt-10" key={m.id}>
        <img className='rounded-lg' src={m.image} alt="image" />
        <h3 className='bg-gray-200 '>{m.name}</h3>
        <p className='bg-red-200 '>{m.title} Engineer</p>
        
      </div>
      ))}
    
    </div>
  );
};

export default Card;