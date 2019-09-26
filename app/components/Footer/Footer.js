import React from 'react';
import './style.scss';
import { SocialIcon } from 'react-social-icons';

const Footer = () => (
  <footer>
    <section>This page is made by Bryce Hao.</section>
    <div className="medias-wrapper">
      <div className="medias-wrapper-single">
        <SocialIcon url="https://www.linkedin.com/in/bryce-hao-1b5829bb/" />
      </div>
      <div className="medias-wrapper-single">
        <SocialIcon url="https://www.facebook.com/myhaoboyi" />
      </div>
      <div className="medias-wrapper-single">
        <SocialIcon url="https://github.com/privatebrycehao" />
      </div>
    </div>
  </footer>
);

export default Footer;
