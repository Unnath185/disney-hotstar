// import React, { useState, useEffect } from 'react';

// interface Movie {
//   id: number;
//   title: string;
//   original_title: string;
//   overview: string;
//   poster_path?: string;
// }

// function MovieTmdb() {
//   const [movieList, setMovieList] = useState<Movie[]>([]);

//   const getMovieTmdb = () => {
//     fetch("https://api.themoviedb.org/3/discover/movie?api_key=2003fa241979b0e0ae44ada5c765f43c")
//       .then(res => res.json())
//       .then(json => setMovieList(json.results));
//   }

//   useEffect(() => {
//     getMovieTmdb();
//   }, []);

//   // Set background image to the first movie's poster
//   const backgroundImage = movieList.length > 0 ? `url('https://image.tmdb.org/t/p/w500${movieList[0].poster_path}')` : undefined

//   return (
//     <div className="flex flex-col items-center">
//       <div
//         className="bg-cover bg-center w-screen h-screen flex flex-col items-center justify-center"
//         style={{ backgroundImage }}
//       >
//         {movieList.length > 0 && (
//           <div className="text-white text-center">
//             <h1 className="text-4xl font-bold mb-2">{movieList[0].original_title}</h1>
//             <p className="text-lg">{movieList[0].overview}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MovieTmdb;

import React, { useState, useEffect } from 'react';

interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path?: string;
  genre_ids: number[]; // Array of genre IDs
  release_date: string; // Release date in the format "YYYY-MM-DD"
}

interface Genre {
  id: number;
  name: string;
}

function MovieTmdb() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

  const getMovieTmdb = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=2003fa241979b0e0ae44ada5c765f43c")
      .then(res => res.json())
      .then(json => setMovieList(json.results));
  }

  const getGenres = () => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=2003fa241979b0e0ae44ada5c765f43c")
      .then(res => res.json())
      .then(json => setGenres(json.genres));
  }

  useEffect(() => {
    getMovieTmdb();
    getGenres();
  }, []);

  // Set background image to the first movie's poster
  const backgroundImage = movieList.length > 0 ? `url('https://image.tmdb.org/t/p/w500${movieList[1].poster_path}')` : undefined

  return (
    <div className="flex flex-col">
      <div
        className="bg-cover bg-center w-screen h-screen flex flex-col items-center justify-center"
        style={{ backgroundImage }}
      >
        {movieList.length > 0 && (
          <div className="text-white ml-5">
            <h1 className="text-4xl font-bold mb-2">{movieList[1].original_title}</h1>
            <p className="text-sm mt-2">Genres: {movieList[1].genre_ids.map(genreId => genres.find(g => g.id === genreId)?.name).join(', ')}</p>
            <p className="text-sm">Released Year: {movieList[1].release_date.substring(0, 4)}</p>
            <p className="text-lg">{movieList[1].overview}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieTmdb;



