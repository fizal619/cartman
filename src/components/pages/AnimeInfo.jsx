import React from 'react';
import { connect } from 'react-redux';
import AnimeCard from '../sections/AnimeCard';
import EpisodeList from '../sections/EpisodeList';

const mapStateToProps = state => {
  return {
    item: state.anime.item,
    link: state.anime.link
  }
}

class AnimeInfo extends React.Component {

  state = {
    link: ''
  }

  render() {
    return (
      this.props.item ?
      <div>
        <AnimeCard {...this.props.item}/>
        <p>Click an episode to generate a link: {this.props.link}</p>
        <EpisodeList url={this.props.item.url} episodes={this.props.item.episodes} />
      </div>
      :
      null
    );
  }

}

export default connect(mapStateToProps)(AnimeInfo);