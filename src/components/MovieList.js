import React from 'react';
import MovieListItem from './MovieListItem.js';

var MovieList = (props) => (
  <div className='movie-list'>
    {props.movies.map((movie, key) => 
      <MovieListItem movie={movie} key={movie.title} />
    )}
  </div>
);

// MovieList.propTypes

export default MovieList;