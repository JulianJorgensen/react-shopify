import React from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends React.Component {
  constructor(){
    super();

    this.state = {
      isNavActive: false
    }
  }

  toggleSiteNav() {
    this.setState({isNavActive: !this.state.isNavActive});
  }

  render() {
    return (
      <header id="site-header" className={this.state.isNavActive ? 'show-site-nav' : ''}>
        <div className="site-logo">
          <div>Elevate<span className="font-red">Sex</span></div>
        </div>
        <nav className="site-nav" onClick={this.toggleSiteNav.bind(this)}>
          <div className={`site-nav-icon ${this.state.isNavActive ? 'open' : ''}`}>
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
            <li><a href="/">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="/about/">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

module.exports = Header;
