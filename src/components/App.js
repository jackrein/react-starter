import React from 'react';
import MovieList from './MovieList.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleText = this.handleText.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleText(event) {
    this.setState({value: event.target.value});
  }

  handleAdd(event) {
    movies.push({title: this.state.value});
    this.setState({value: ''});
    console.log(movies);
    event.preventDefault();
  }

  render(){
    return(
    <div className='movie-table'>
      <h2 className='title'>Movie List</h2>
      <form className='user-add row' onSubmit={this.handleAdd}>
        <input className='add-movie' type='text' value={this.state.value} onChange={this.handleText} placeholder='Add movie title here' />
        <input className='btn add' type='submit' onClick={this.handleAdd} value="Add" />
      </form>
      <div className='search row'>
        <Search movies={movies} />
      </div>
      {/* <div className='column'>
        <MovieList movies={movies} />
      </div> */}
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

// window.movies = movies;

export default App;