import React from 'react'

function MoiveCard({ movie }) {
  return (
    <>
    <div className='rounded-md w-48 mt-10 p-4 bg-white shadow-lg'>
        <img className='w-full rounded-md' src={movie.Poster} alt="" />
        <div className='flex flex-col'>
            <p className='text-sm'>{movie.Type}</p>
            <h1 className='font-medium'>{movie.Title}</h1>
        </div>
    </div>
    </>
  )
}

export default MoiveCard