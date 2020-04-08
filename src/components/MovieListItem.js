import React from 'react';

var MovieListItem = (props) => (
  <div className='movie-list-item row'>
    {props.movie.title}
  </div>
);

// MovieListItem.propTypes

export default MovieListItem;