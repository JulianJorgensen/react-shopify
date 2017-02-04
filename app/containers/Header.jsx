import React from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <header id="site-header">
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Shopify</li>
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
              </li>
              <li>
                <Link to="/collections" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Collections</Link>
              </li>
              <li>
                <Link to="/products" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

module.exports = Header;
