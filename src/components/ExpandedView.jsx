import PropTypes from 'prop-types';

const ExpandedView = ({ user, onClose }) => {
    if (!user) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 transform transition-transform duration-300 flex flex-col">
          <button onClick={onClose} className="text-gray-500 mb-4 absolute p-2 border border-black bg-slate-100 rounded-lg hover:text-slate-600 hover:bg-white right-2 top-2">
            Close
          </button>
          <img
            src={user.picture.large}
            alt="User"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-lg font-bold">{`${user.name.first} ${user.name.last}`}</h2>
          <p>Email: {user.email}</p>
          <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
          <p>Gender: {user.gender}</p>
          <p>Age: {user.dob.age}</p>
          <p>Phone: {user.phone}</p>
          <p className="font-semibold ">Credentials</p>
          <p>Username: {user.login.username}</p>
          <p>Password: {user.login.password}</p>
          {/* Add additional details as desired */}
        </div>
      </div>
    );
  };

  // Define prop types for the ExpandedView component
ExpandedView.propTypes = {
  user: PropTypes.shape({
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
    gender: PropTypes.string.isRequired,
    dob: PropTypes.shape({
      age: PropTypes.number.isRequired,
    }).isRequired,
    phone: PropTypes.string.isRequired,
    login: PropTypes.shape({
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};
  
  export default ExpandedView;
  
  // In ExpandedView.jsx
  