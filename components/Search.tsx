import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
interface Props {
  handleSearch?: (search: string) => Promise<void>,
  placeholder?: string,
}
const Search = ({handleSearch, placeholder="Search for freelancers"}: Props) => {
  const [searchInput, setInput] = useState("");
  const handleClick = async () => {
    await handleSearch(searchInput)
  }
  return (
    <div className='w-full relative'>
      <input
        type='text'
        value={searchInput}
        placeholder={placeholder}
        className='pl-3 pr-9 py-1 md:py-2 w-full placeholder:text-gray-200 placeholder:text-xs outline-none bg-white text-gray-800 text-xs md:text-sm lg:text-base border rounded-[5px]'
        onChange={(evt) => setInput(evt.target.value)}
      />
      <button className='absolute top-1 md:top-1.5 lg:top-2 bg-orange p-1 rounded-sm right-1 md:right-2' onClick={handleClick}>
        <BiSearch className='w-3 h-3 md:w-4 md:h-4' />
      </button>
  </div>
  )
}

export default Search;