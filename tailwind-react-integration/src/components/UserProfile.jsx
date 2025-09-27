function UserProfile() {
  return (
    <div className="user-profile max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto border-4 border-blue-200 shadow-md hover:border-blue-400 transition-colors duration-200"
      />
      <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800 mt-4 hover:text-blue-600 transition-colors duration-200">
        John Doe
      </h1>
      <p className="text-gray-600 text-center mt-2 text-sm md:text-base leading-relaxed">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
