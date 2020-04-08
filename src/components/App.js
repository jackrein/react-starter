import React from 'react';
import MovieList from './MovieList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
    <div className='movie-table'>
      <h2 className='row title'>Movie List</h2>
      <div className='column'>
        <MovieList movies={movies} />
      </div>
    </div>
    );
  }
}

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

export default App;