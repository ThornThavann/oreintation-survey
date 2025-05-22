import React from 'react';

function Button({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition" >
      {name}
    </button>
  );
}

export default Button;
