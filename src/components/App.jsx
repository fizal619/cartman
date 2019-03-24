import React from 'react';
import { connect } from 'react-redux'
import HomePage from './pages/HomePage';
import AnimePage from './pages/AnimePage';
import YoutubePage from './pages/YoutubePage';
import Nav from './sections/Nav';


const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}


class App extends React.Component {

  pages = {
    home: <HomePage/>,
    anime: <AnimePage/>,
    youtube: <YoutubePage/>
  }

  render() {
    return (
      <div>
        <Nav/>
        {this.pages[this.props.nav.currentPage]}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);