'use client';

import { SearchIcon } from 'lucide-react';

const SearchBar = () => {
  return (
    <form className="flex transition-all items-center justify-center md:w-full relative">
      <input
        type="text"
        placeholder="Search dashboard..."
        className=" text-[13px] outline-none px-3 md:px-4 py-[6px] focus:border-gray-400 active:border-gray-400 active:outline-none border focus:placeholder:opacity-75 border-gray-300 placeholder:text-gray-400 rounded-md text-gray-700 md:w-1/2"
      />

      <SearchIcon
        type="button"
        onClick={() => console.log('Clicked search box')}
        className="h-4 w-4 text-gray-800 absolute md:right-[27%] right-2 top-1/2 -translate-y-1/2 opacity-85 hover:opacity-100 cursor-pointer"
      />
    </form>
  );
};

export default SearchBar;
