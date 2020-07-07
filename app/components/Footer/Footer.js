import React from 'react';
import './style.scss';
import constants from './constants';
import SocialMedia from './SocialMedias';

export default class Footer extends React.PureComponent {
  render() {
    const style = {
      height: 25,
      width: 25,
    };
    const { URL, content } = constants;
    return (
      <footer className="footer">
        <section>{content}</section>
        <div className="medias-wrapper">
          {URL.map((url) => (
            <SocialMedia key={url} style={style} url={url} />
          ))}
        </div>
      </footer>
    );
  }
}
