import React from 'react';

function Result({ name, onClick }) {
  return (
    <div className="flex items-center justify-between bg-[#e67e22] p-4 rounded-md border-2 border-pink-200">
    <div className="text-white text-lg">{text}</div>

    {/* White circle on the right */}
    <div className="bg-white rounded-full h-14 w-14"></div>
  </div>
  );
}

export default Result;
