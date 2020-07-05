/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';
import title from '../../images/title.png';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <link rel="icon" type="image/png" href={title} sizes="16x16" />
          <title>Bryce`s Home</title>
        </Helmet>
        <div className="home-page">
          <section>
            <div className="home-page">
              <div className="home-page_hey">
                Hey
              </div>
              <div className="home-page_introduce">
                You are finally here.
              </div>
              <div className="home-page_introduce-line">
                I`m Bryce, A Software Engineer from ticketmaster.
              </div>
              <div className="nav-bar">
              </div>
            </div>
          </section>
          <section className="centered">
            <a href="https://www.linkedin.com/in/bryce-hao-1b5829bb/">
              Linkedin
            </a>
          </section>
        </div>
      </article>
    );
  }
}
