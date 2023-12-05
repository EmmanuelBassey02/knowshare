import React, { useState } from 'react';

const Dropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue" >
        (EN)
      </button>

      {isDropdownOpen && (
        <div className="absolute mt-2 bg-white border rounded-md shadow-md w-[100px]">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 1</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 2</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Option 3</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
