import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';
import { Link } from 'react-router-dom';
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
              <div className="home-page_introduce">
                <div className="home-page_introduce-line">
                  <Link className="a-clear font-50" to="/resume">Bryce Hao</Link>
                </div>
                <div className="home-page_introduce-line">
                  A Software Engineer and Photographer
                </div>
                <div className="home-page_introduce-line">
                  Bay Area/ SF/ California
                </div>
                <div className="home-page_introduce-space">
                  I was working on box office sales tool at
                  <a className="external-link ticketmaster" href="https://www.ticketmaster.com"> Ticketmaster</a>
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img className="logo" src="https://brycehao77.s3.us-east-2.amazonaws.com/Solid-T-Azure.png" />
                  and
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <a className="external-link livenation" href="https://www.livenation.com"> Live Nation </a>
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img className="logo" src="https://brycehao77.s3.us-east-2.amazonaws.com/3494dabe-e984-43ad-a6c3-bbc56338510c_medium.png" />
                </div>
                <div className="home-page_introduce-space">
                  Find me:
                  <br />
                  Tech:
                  <a className="a-clear" href="https://github.com/privatebrycehao">Github</a> /  <a className="a-clear" href="https://dev.to/bryce_hao"> dev.to</a>
                  <br />
                  Email:
                  <a className="a-clear" href="mailto:brycehao@gmail.com">Email</a>
                  <br />
                  Photographer:
                  <Link to="/photos" className="a-clear">Photo Sample</Link>
                  <br />
                  Resume:
                  <Link to="/resume" className="a-clear">Resume</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    );
  }
}
