import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveLink: (link) =>{
      dispatch({
        type: 'ANIME::GET',
        value: link
      })
    }
  }
}

class EpisodeList extends React.Component {

  getEpisodeLink(e){
    console.log(e.target.dataset.id);
    this.props.saveLink('trying to get episode' + e.target.dataset.id);

    animeStream(this.props.url, e.target.dataset.id)
      .then(link => this.props.safeLink(link))
      .catch(e => {
        console.log(e);
        this.props.saveLink('try again.');
      });
  }

  render(){
    const episodes = [];

    for (let i = 0; i < this.props.episodes; i++) {
      episodes.push(
        <button
          onClick={this.getEpisodeLink.bind(this)}
          data-id={i+1}
          key={`ep${i+1}`}
        >
          {i+1}
        </button>
      );
    }

    return (
      <div>
        {episodes}
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeList);