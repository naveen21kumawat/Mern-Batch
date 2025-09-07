import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {MoonLoader} from "react-spinners";
import { AppContext } from "../Context/AppContext";

function Users() {
  const {theme} = useContext(AppContext);
  console.log(theme);
  const [users, setusers] = useState([]);
  const navigate = useNavigate();
  const [ loading ,setLoading] = useState(false);
 

  useEffect(() => {
    (async () => {
      setLoading(true);
      let data = await axios.get("https://jsonplaceholder.typicode.com/users");
      setusers(data.data);
      console.log(data.data);
      setLoading(false);
    })();
  }, []);

  const handleSendQuery = (name) => {
    navigate(`/some-path?name=${encodeURIComponent(name)}`);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><MoonLoader color="#d636d9"/></div>;
  }


  return (
    <>
      <div className="container">
        <div className="flex flex-wrap justify-center gap-10 m-10">
          {users.map((user) => (
            <div
              className="card my-3 h-40 rounded-lg p-3  border-2 "
              key={user.id}
            >
              <h3 className="text-sm mt-1 text-center font-bold text-gray-700 bg-cyan-100 rounded-lg p-1">
                {user.name}
              </h3>
              <p className="text-sm mt-1 text-center font-bold text-gray-700 bg-cyan-100 rounded-lg p-1">
                {user.username}
              </p>
              <button className=" text-blue-400 text-sm bg-red-200 mt-2 rounded-lg p-1">
                <Link to={`/details/${user.id}`}>UseDetails</Link>
              </button>
              <button
                className="text-white text-sm bg-blue-500 mt-2 rounded-lg p-1 ml-2"
                onClick={() => handleSendQuery(user.name)}
              >
                Send Name as Query
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Users;
