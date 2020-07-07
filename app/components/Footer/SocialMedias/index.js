import React from 'react';
import { SocialIcon } from 'react-social-icons';
import PropTypes from 'prop-types';

export default class SocialMedia extends React.PureComponent {
  render() {
    const style = {
      height: 25,
      width: 25,
    };
    const { url } = this.props;
    return (
      <div className="medias-wrapper-single">
        <SocialIcon style={style} url={url} />
      </div>
    );
  }
}


SocialMedia.propTypes = {
  url: PropTypes.string,
};
