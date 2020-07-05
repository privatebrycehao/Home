import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

class HeaderWrapper extends React.PureComponent {
  render() {
    const { link } = this.props;
    const { route, content } = link;
    return (
      <Link className="router-link" to={route}>
        {content}
      </Link>
    );
  }
}

export default HeaderWrapper;


HeaderWrapper.propTypes = {
  link: PropTypes.object,
};
