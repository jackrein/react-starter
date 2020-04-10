import React from 'react';
import MovieList from './MovieList';
import Search from './Search';
import '../main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results: movies
    };

    this.findMovie = this.findMovie.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  
  findMovie(search) {
    let filtered = movies.filter(movie => {
      let lc = movie.title.toLowerCase();
      let query = search.toLowerCase();
      return lc.includes(query);
    });
    this.setState({results: filtered});
  }

  handleText(event) {
    this.setState({value: event.target.value});
  }

  handleAdd(event) {
    movies.push({title: this.state.value, source: 'user', watched: false});
    this.setState({value: ''});
    event.preventDefault();
  }

  render(){
    const userMovies = movies.filter((movie) => movie.source === 'user');
    return(
    <div className='movie-table'>
      <h2 className='title-bar'>Movie List</h2>
      <form className='user-add' onSubmit={this.handleAdd}>
        <input
          className='add-movie'
          type='text'
          value={this.state.value}
          onChange={this.handleText}
          placeholder='Add movie title here' />

        <input
          className='btn add-btn'
          type='submit'
          onClick={this.handleAdd}
          value='Add' />
      </form>
      <div className='main column'>
        <Search movies={movies} findMovie={this.findMovie} />
        <MovieList movies={this.state.results} />
      </div>
      <section className='list row'>
        {this.state.results.map((movie, id) => 
          <div className='row' key={id}>
            {movie.title}
          </div>)}
      </section>
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