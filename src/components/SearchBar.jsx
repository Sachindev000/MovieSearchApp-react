import React from "react";

const SearchBar = ({ searchMovie, setSearchMovie, fetchMovieData }) => {
   

  return (
    <div className="">
      <div className="input flex justify-center px-5 lg:px-0 py-5">
        
        <input
          onChange={(e) => setSearchMovie(e.target.value)}
          value={searchMovie}
          type="text"
          placeholder="Search here..."
          className="bg-gray-200 placeholder:gray-400 rounded-l-lg px-2 py-2 w-80 border-2 border-gray-500 text-black"
        />
        <button
          onClick={fetchMovieData}
          className="bg-cyan-900 px-4 rounded-r-lg text-white shadow-md border border-b-2 border-t-2 border-gray-500"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
