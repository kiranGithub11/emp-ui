// App.jsx
import { useState, useEffect } from "react";
import GridView from "./components/GridView";
import TileView from "./components/TileView";
import ExpandedView from "./components/ExpandedView";
import Navbar from "./components/Navbar";

function App() {
  const [view, setView] = useState("tile");
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from Random User API
    fetch("https://randomuser.me/api/?results=21")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleView = () => setView(view === "grid" ? "tile" : "grid");
  const openExpandedView = (user) => setSelectedUser(user);
  const closeExpandedView = () => setSelectedUser(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4">
        <button
          onClick={toggleView}
          className="mb-4 p-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-300 shadow-lg"
        >
          Toggle View
        </button>
        {view === "grid" ? (
          <GridView users={users} />
        ) : (
          <TileView users={users} onClickTile={openExpandedView} />
        )}
        <ExpandedView user={selectedUser} onClose={closeExpandedView} />
      </div>
    </div>
  );
}

export default App;
