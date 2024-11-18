import React from "react";

const SearchBar = () => {
  return (
    <form className="w-full md:w-[700px] lg:w-[800px] mx-auto px-5 sm:px-12 mt-9">
      <div className="relative shadow-lg">
        <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
          <svg
            viewBox="0 0 512 512"
            fill="blue"
            height="1.5em"
            width="1.5em"
          >
            <path
              fill="none"
              stroke="#0079FF"
              strokeMiterlimit={10}
              strokeWidth={32}
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            />
            <path
              fill="none"
              stroke="#0079FF"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={32}
              d="M338.29 338.29L448 448"
            />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full px-4 py-6 ps-10 sm:ps-14 outline-none text-[0.85rem] md:text-base text-gray-900 rounded-xl bg-gray-50 dark:bg-[#1E2A47] placeholder-gray-500 dark:placeholder-white dark:text-white"
          placeholder="Search Github username..."
          required
        />
        <button
          type="submit"
          className="text-white font-semibold absolute end-3 bottom-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 rounded-lg text-sm px-4 py-3 sm:px-3 sm:py-3 md:px-6 md:py-3.5 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
