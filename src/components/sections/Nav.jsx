import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeScreen: (e) => {
      dispatch({
        type: 'NAV::CHANGE',
        value: e.target.id
      });
    }
  }
};

class Nav extends React.Component {
  render() {
    // console.log('NAVPROPS', this.props);
    return (
      <div>
        <button onClick={this.props.changeScreen} id='home'> Home </button>
        <button onClick={this.props.changeScreen} id='anime'> Anime </button>
        <button onClick={this.props.changeScreen} id='youtube'> Youtube </button>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);