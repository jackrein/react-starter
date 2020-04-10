import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { filterText: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ filterText: event.target.value });
    this.props.findMovie(this.state.filterText);
    event.preventDefault();
  }

  render() {
    // const filtered = this.props.movies.filter(movie => {
    //   const lc = movie.title.toLowerCase();
    //   const query = this.state.filterText.toLowerCase();
    //   return lc.includes(query);
    // });
    return (
      <div className='search-input'>
        <form className='search form' onSubmit={() => this.props.findMovie(this.state.filterText)}>
          <input
            className='search-bar search'
            type='search' 
            placeholder='Search...'
            onChange={this.handleChange}
            value={this.state.filterText} />

          <input
            className='btn search'
            type='submit'
            onClick={() => this.props.findMovie(this.state.filterText)}
            value='Go' />
        </form>
        {/* <ul>{filtered.map((movie, key) => <li key={movie.title}>{movie.title}</li>)}</ul> */}
        {/* { this.renderResults() } */}
      </div>
    );
  }
}

export default Search;