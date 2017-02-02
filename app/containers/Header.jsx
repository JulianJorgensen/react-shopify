import React from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
let { connect } = require('react-redux');
let actions = require('actions');

class Header extends React.Component {
  constructor(){
    super();
  }

  componentWillMount(){
    browserHistory.listen((location) => {
      console.log(location);
      this.props.dispatch(actions.closeNav());
      // let state = store.getState();
      // console.log("state:", state);
    });
  }

  render() {
    let {dispatch, nav} = this.props;

    return (
      <header id="site-header" className={nav.showNav ? 'show-site-nav' : ''}>
        <div className="site-logo">
          <div>Elevate<span className="font-red">Sex</span></div>
        </div>
        <nav className="site-nav">
          <div className={`site-nav-icon ${nav.showClose ? 'open' : ''}`} onClick={this.toggleNav.bind(this)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        <nav id="main-nav">
          <ul>
            <li><IndexLink to="/" activeClassName="active-link">Home</IndexLink></li>
            <li><Link to="/about" activeClassName="active-link">About</Link></li>
            <li><Link to="/contact" activeClassName="active-link">Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
  }

  toggleNav(){
    let {dispatch, nav, video} = this.props;
    if(nav.showClose && !nav.showNav){
      console.log('close icon was active, but not the nav, so just toggle the icon...')
      // only toggle the nav icon
      dispatch(actions.toggleNavIcon());
      dispatch(actions.stopVideo(video.player));
    }else{
      console.log('toggle nav icon and nav');
      // toggle both nav icon and the nav
      dispatch(actions.toggleNav());
    }
  }
}

export default connect(
  (state) => {
    return {
      nav: state.nav,
      video: state.video
    }
  }
)(Header);
