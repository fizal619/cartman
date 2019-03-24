import React from 'react';

class Anime extends React.Component {

  render() {
    animeSearch('shield hero').then(console.log);

    return (
      <div>
        <h1>Anime Download</h1>
      </div>
    );
  }

}

export default Anime;