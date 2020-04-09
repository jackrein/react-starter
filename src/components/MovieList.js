import React from 'react';
import MovieListItem from './MovieListItem.js';

var MovieList = (props) => (
  <div className='movie-list'>
    {/* <ul> */}
    {props.movies.map((movie, key) => 
      <MovieListItem movie={movie} key={movie.title} />
    )}
    {/* </ul> */}
  </div>
);

// MovieList.propTypes

export default MovieList;