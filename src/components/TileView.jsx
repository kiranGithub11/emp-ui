import { useState } from "react";
import PropTypes from "prop-types";

const TileView = ({ users, onClickTile }) => {
  // Track which dropdown is open for each tile
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {users.map((user, index) => (
        <div
          key={index}
          className="relative bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          <img
            src={user.picture.medium}
            alt="User"
            className="w-16 h-16 rounded-full mb-2 mx-auto"
          />
          <h2 className="text-lg font-semibold text-center">{`${user.name.first} ${user.name.last}`}</h2>
          <p className="text-gray-500 text-center">{user.email}</p>
          <button
            onClick={() => onClickTile(user)}
            className="mt-4 p-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            View Details
          </button>

          {/* Button for additional options */}
          <div className="absolute top-2 right-2">
            <button
              onClick={() => toggleDropdown(index)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 font-bold text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {activeDropdown === index && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
                <ul className="py-1">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      console.log("Edit clicked");
                      setActiveDropdown(null);
                    }}
                  >
                    Edit
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      console.log("Flag clicked");
                      setActiveDropdown(null);
                    }}
                  >
                    Flag
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      console.log("Delete clicked");
                      setActiveDropdown(null);
                    }}
                  >
                    Delete
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// Define prop types for the TileView component
TileView.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.shape({
        medium: PropTypes.string.isRequired,
      }).isRequired,
      name: PropTypes.shape({
        first: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired,
      }).isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickTile: PropTypes.func.isRequired,
};

export default TileView;
