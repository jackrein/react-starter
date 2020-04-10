import React from 'react';

var MovieListItem = (props) => (
  <div className='movie-list-item row'>
    {props.movie.title}
  </div>
);

export default MovieListItem;