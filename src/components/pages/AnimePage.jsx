import React from 'react';
import AnimeCard from '../sections/AnimeCard';
// animeSearch('shield hero').then(console.log);

class Anime extends React.Component {

  state = {
    loading: false,
    results: []
  }

  search(e){
    e.preventDefault();

    this.setState({
      loading: true
    });

    animeSearch(e.target.term.value)
      .then(results => this.setState({results, loading: false}))
      .catch((e)=>{
        console.log('ERROR SEARCHING', e);
        this.setState({
          loading: false
        });
      });
  }

  render() {

    return (
      <div>
        <h1>Anime Download</h1>
        <form onSubmit={this.search.bind(this)}>
          <input name='term'/>
          <button>search</button>
        </form>
        {this.state.loading ? 'loading...' : 'ready'}
        <div className="search-container">
          {
            this.state.results.map(item=> <AnimeCard
              {...item}
              key={item.url.split('/')[item.url.split('/').length-1]}
            />)
          }
        </div>
      </div>
    );
  }

}

export default Anime;