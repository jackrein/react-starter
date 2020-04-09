import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { filterText: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ filterText: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ filterText: event.target.value });
  }

  // renderResults() {
  //   const {results} = this.state;

  //   if (Object.keys(results).length && results.length) {
  //     return (
  //       <div className='results-container'>
  //         {results.map((result) => {
  //           return (
  //             <a key={result.id} href={result.previewURL} className='result-items'>
  //               <h6 className='movie'>{result.movie}</h6>
  //             </a>
  //           );
  //         })}
  //       </div>
  //     );
  //   }
  // }
      // if (!this.props.movies.includes(query)) {
      //   return alert("no movie by that name found");
      // }
  render() {
    const filtered = this.props.movies.filter(movie => {
      const lc = movie.title.toLowerCase();
      const query = this.state.filterText.toLowerCase();
      return lc.includes(query);
    });
    // const { query } = this.state;      value={query}
    return (
      <div className='form-input'>
        <input className='search-bar search' type='search'  placeholder='Search...' onChange={this.handleChange} value={this.state.filterText} />
        <button className='btn search' type='button' onClick={this.handleSubmit} value={this.state.filterText} >Go</button>
        <ul>{filtered.map((movie, key) => <li key={movie.title}>{movie.title}</li>)}</ul>
        {/* { this.renderResults() } */}
      </div>
    );
  }
}

export default Search;