import React from "react";

// Hier krijg je de props steeds binnen in een React component -> Object
const MyButton = (props) => {
  // Destructuren uit het props object
  const { title, onClick, children } = props;

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 m-4"
      id="btn">
      {children}
    </button>
  );
};

export default MyButton;
