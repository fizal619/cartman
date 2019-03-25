import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    moveTo: (item) => {
      dispatch({
        type: 'ANIME::ITEM',
        value: item
      });
      dispatch({
        type: 'NAV::CHANGE',
        value: 'info'
      });
    }
  }
};


const AnimeCard = ({name, img, url, episodes, moveTo}) => (
  <div
    onClick={()=>moveTo({name, img, url, episodes})}
    className='anime-card'
  >
    <img height='150px' src={img} alt={name}/>
    <p>{name} - {episodes} episodes</p>
    <br/>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(AnimeCard);