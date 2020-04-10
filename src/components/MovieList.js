import React from 'react';
import MovieListItem from './MovieListItem';

const MovieList = (props) => {
  let message = props.movies.length === 0 ? 'No movies found' : '';
  
  return (
  <div className='movie-list'>
    {message}
    {props.movies.map((movie, id) => 
      <MovieListItem movie={movie} key={id} />
    )}
  </div>
  )
};

export default MovieList;