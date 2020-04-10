import React from 'react';
import MovieList from './MovieList';
import Search from './Search';
import AddMovie from './AddMovie';
import '../main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: movies
    };

    this.findMovie = this.findMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }
  
  findMovie(search) {
    let filtered = movies.filter(movie => {
      let lc = movie.title.toLowerCase();
      let query = search.toLowerCase();
      return lc.includes(query);
    });
    this.setState({results: filtered});
  }

  addMovie(event, movie) {
    event.preventDefault();
    this.setState({
      results: [...this.state.results, {title: movie, source: 'user', watched: false}]
    });
  }

  render(){
    return(
    <div className='movie-table'>
      <div className='title-bar'><h2>Movie List</h2></div>
      <div className='main column'>
        <AddMovie addMovie={this.addMovie} />
        <Search movies={movies} findMovie={this.findMovie} />
        <MovieList movies={this.state.results} />
      </div>
    </div>
    );
  }
}

const movies = [
  {title: 'Mean Girls', source: 'preset', watched: false},
  {title: 'Hackers', source: 'preset', watched: false},
  {title: 'The Grey', source: 'preset', watched: false},
  {title: 'Sunshine', source: 'preset', watched: false},
  {title: 'Ex Machina', source: 'preset', watched: false},
];

export default App;