
import React, { useState, useEffect } from 'react';


interface Movie {
  id: number;
  title: string;
  poster_path?: string; // Make poster_path optional
  // Add other properties as needed
}

function MovieTmdb() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  const getMovieTmdb = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=2003fa241979b0e0ae44ada5c765f43c")
      .then(res => res.json())
      .then(json => setMovieList(json.results));
  }
  
  useEffect(() => {
    getMovieTmdb();
  }, []);

  console.log(movieList);

  return (
    <div className='flex flex-row '>
      {movieList.map((movie) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={180}
          height={30}
          alt={movie.title}
        />
      ))}
    </div>
  );
}

export default MovieTmdb;
