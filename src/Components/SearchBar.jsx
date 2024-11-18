import React, { useState } from "react";
import { SearchIcon} from "./Icons/index.js"

const SearchBar = ({ fetchGithubUser }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      // If input is empty, show octocat data
      fetchGithubUser("octocat");
      setQuery("");
      return;
    }
    fetchGithubUser(query);
  };

  return (
    <form className="w-full md:w-[700px] lg:w-[800px] mx-auto px-5 sm:px-8 mt-6">
      <div className="relative shadow-lg">
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 sm:ps-5 pointer-events-none">
        <SearchIcon />
        </div>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="search"
          className="block w-full px-4 py-6 ps-10 sm:ps-14 outline-none text-[0.85rem] md:text-base text-gray-900 rounded-xl bg-gray-50 dark:bg-[#1E2A47] placeholder-gray-500 dark:placeholder-white dark:text-white"
          placeholder="Search Github username..."
        />
        <button
          onClick={handleSubmit}
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
