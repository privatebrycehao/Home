import React from 'react';
import './style.scss';
import HeaderWrapper from './HeaderWapper/HeaderWrapper';

const NAVIGATION = {
  home: {
    route: '/',
    content: 'HOME'
  },
  resume: {
    route: '/resume',
    content: 'RESUME'
  }
};
class Header extends React.PureComponent {
  render() {
    return (
      <div className="header">
        <div className="nav-bar">
          <HeaderWrapper className="router-link" link={NAVIGATION.home} />
          <HeaderWrapper className="router-link" link={NAVIGATION.resume} />
        </div>
      </div>
    );
  }
}

export default Header;
// {/*<Link className="router-link" to="/">*/}
// {/* Home*/}
// {/*</Link>*/}
