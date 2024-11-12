// components/GridView.jsx
import PropTypes from "prop-types";
const GridView = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">
      {users.map((user, index) => (
        <div
          key={index}
          className="bg-white flex flex-col justify-center items-center rounded-lg shadow-md p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img
            src={user.picture.large}
            alt="User"
            className="w-1/2 rounded-full mb-4"
          />
          <h2 className="text-lg font-semibold">{`${user.name.first} ${user.name.last}`}</h2>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500">{`${user.location.city}, ${user.location.country}`}</p>
        </div>
      ))}
    </div>
  );
};

// Define prop types for the GridView component
GridView.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.shape({
        large: PropTypes.string.isRequired,
      }).isRequired,
      name: PropTypes.shape({
        first: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired,
      }).isRequired,
      email: PropTypes.string.isRequired,
      location: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default GridView;
