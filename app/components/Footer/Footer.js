import React from 'react';
import './style.scss';
import { SocialIcon } from 'react-social-icons';

export default class Footer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.style = {
      height: 25,
      width: 25,
    };
  }

  render() {
    return (
      <footer>
        <section>This page is made by Bryce Hao.</section>
        <div className="medias-wrapper">
          <div className="medias-wrapper-single">
            <SocialIcon style={this.style} url="https://www.linkedin.com/in/bryce-hao-1b5829bb/" />
          </div>
          <div className="medias-wrapper-single">
            <SocialIcon style={this.style} url="https://www.facebook.com/myhaoboyi" />
          </div>
          <div className="medias-wrapper-single">
            <SocialIcon style={this.style} url="https://github.com/privatebrycehao" />
          </div>
        </div>
      </footer>
    );
  }
}
