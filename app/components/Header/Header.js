import React from 'react';
// import { Link } from 'react-router-dom';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
// <Link className="router-link" to="/">
// Home
// </Link>
  render() {
    return (
      <div className="header">
        <div className="header_hey">
          Hey
        </div>
        <div className="header_introduce">
          You finally here.
        </div>
        <div className="header_introduce-line">
           I`m Bryce, A Software Engineer III from ticketmaster.
        </div>
        <div className="nav-bar">
        </div>
      </div>
    );
  }
}

export default Header;
