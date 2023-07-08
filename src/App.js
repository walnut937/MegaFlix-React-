import React, { useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar';
import MoiveCard from './Components/MoiveCard';

const API_URL = 'https://www.omdbapi.com?apikey=2ad92fe1'

function App() {

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  function recieve(name){
    setSearch(name);
  }

  const SearchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search);
    console.log(data.Search)
  }

  useEffect(() => {
      SearchMovies(search);
  }, [search])

  return (
    <>
    <div>
    <h1 className='text-center text-4xl font-medium font-mono my-8'>MEGAFLIX</h1>
    <SearchBar recieve={recieve} search={search} setSearch={setSearch} />
    <div className='grid grid-cols-4 gap-7 px-32'>

      {
      movies?.length > 0 ?
      ( 
        movies.map(movie => (
          <MoiveCard movie={movie}/>
        ))
      ) : (
        <div>
          <h2 className='text-center mt-20'>No Results Found</h2>
        </div>
      )  
    }

    </div>
    </div>
    </>
  );
}

export default App;
