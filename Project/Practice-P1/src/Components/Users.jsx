import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { AppContext } from "../Context/AppContext";

function Users() {
  const { theme, setTheme } = useContext(AppContext);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      let data = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(data.data);
      setLoading(false);
    })();
  }, []);

  const handleSendQuery = (name) => {
    navigate(`/some-path?name=${encodeURIComponent(name)}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <MoonLoader color="#2563eb" />
      </div>
    );
  }

  // ✅ If search has value → filter users, else show all
  const filteredUsers = search
    ? users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    : users;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Search Box */}
      <div className="max-w-3xl mx-auto">
        <input
          type="search"
          className="w-full p-4 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search user by name..."
        />
      </div>

      {/* Users Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-5 border border-gray-200"
              key={user.id}
            >
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {user.name}
              </h3>
              <p className="text-sm text-gray-500 text-center mt-1">
                @{user.username}
              </p>

              <div className="flex justify-center gap-3 mt-4">
                <Link
                  to={`/details/${user.id}`}
                  className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 transition"
                >
                  Details
                </Link>
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                  onClick={() => handleSendQuery(user.name)}
                >
                  Send Query
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center font-semibold text-red-500 text-lg">
            No users found 🚫
          </p>
        )}
      </div>

      {/* Theme Box */}
      <div className="max-w-2xl mx-auto text-center mt-10">
        <div className="border-2 border-dashed border-gray-400 rounded-xl py-6 font-bold text-xl text-gray-700 bg-white shadow-sm">
          Current Theme: {theme}
        </div>
        <button
          className="mt-5 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition"
          onClick={() => setTheme(theme + 1)}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default Users;
