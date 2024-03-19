"use client"

import { SearchIcon } from "lucide-react"

const SearchBar = () => {
  return (
    <form className="flex transition-all items-center justify-center md:w-full relative">
       <input type="text" placeholder="Search dashboard..." className=" text-[13px] outline-none px-3 md:px-4 py-[6px] focus:border-gray-400 active:border-gray-400 active:outline-none border focus:placeholder:opacity-75 border-gray-400 placeholder:text-muted-foreground rounded-md text-gray-700 md:w-1/2" />
       <button className="" onClick={() => console.log('Clicked search box')}>
            <SearchIcon className="h-4 w-4 text-muted-foreground absolute md:right-[27%] right-2 top-1/2 -translate-y-1/2 hover:text-gray-600" />
       </button>
    </form>
  )
}

export default SearchBar