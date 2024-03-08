import React from "react";

const Navbar = () => {
  return (
    <div className="main z-20 lg:flex md:flex  flex-wrap bg-cyan-900  justify-between items-center px-4 py-4 shadow-md sticky top-0">
      <div className="left  items-center space-x-3 ">
        <h2 className="font-bold text-2xl text-white text-center">SearchMovies..</h2>
      </div>
      <div className="right">
      <ul className="flex space-x-4 text-white justify-center font-medium cursor-pointer">
        <li>New </li>
        <li>Articles</li>
        <li>Popular</li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
