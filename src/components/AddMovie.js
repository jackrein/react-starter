import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
      super(props);
      this.state = {movie: ''}

      this.handleText = this.handleText.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleText(event) {
    this.setState({movie: event.target.value});
  }

//   handleSubmit() {
//     this.setState({movie: ''});
//   }

  render() {
    // const userMovies = movies.filter((movie) => movie.source === 'user');
    return(
      <form className='user-add' onSubmit={(event) => this.props.addMovie(event, this.state.movie)}>
        <input
          className='add-movie'
          type='text'
          value={this.state.movie}
          onChange={this.handleText}
          placeholder='Add movie title here' />

        <input
          className='btn add-btn'
          type='submit'
          onClick={(event) => this.props.addMovie(event, this.state.movie)}
          value='Add' />
      </form>
    );
  }
};

export default AddMovie;