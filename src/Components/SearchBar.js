import React from 'react'

function SearchBar({ search, setSearch, recieve }) {

    function send(name) {
        recieve(name);
    }

  return (
    <>
    <form onSubmit={send(search)}>
        <div className='flex justify-center items-center border-[1px] border-gray-200 gap-5 bg-white p-3 rounded-md shadow-lg mx-auto w-1/2'>
            <input className='w-full outline-none ' value={search} onChange={e => setSearch(e.target.value)} placeholder='Search...' type="text" />
            <i className="fa-solid fa-magnifying-glass text-xl text-gray-500"></i>
        </div>
    </form>
    </>
  )
}

export default SearchBar