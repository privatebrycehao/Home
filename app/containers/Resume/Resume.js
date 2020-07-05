import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';
import title from '../../images/title.png';
import constants from './constants';

export default class Resume extends React.PureComponent {
  render() {
    return (
      <article>
        <Helmet>
          <link rel="icon" type="image/png" href={title} sizes="16x16" />
          <title>Bryce`s Home</title>
        </Helmet>
        <div className="resume-page">
          <section>
            <div className="resume-page-content">
              <div className="resume-page-header">About Me</div>
              <p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                  I'm Bryce Hao, Over 6 years’ experience in software engineer in United State.
                  Excellent knowledge and work experience in Object Oriented Design and development.
                  Especially in React development.
`             </p>
              <p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                  I'm also a photographer, Looking forward connect with on linkedin or shot me an email at
                  brycehao77@gmail.com
              </p>
              <div className="resume-page-header resume-page-header-space">Work History</div>
              <div className="resume-page-history">
                <div className="resume-page-history-block">
                  <div className="resume-page-history-left">
                    <div className="resume-page-history-left-company">
                      Ticketmaster/ Live Nation
                    </div>
                    <div className="resume-page-history-left-period">
                      March, 2017 - Now
                    </div>
                  </div>
                  <div className="resume-page-history-right">
                    <div className="resume-page-history-right-title">
                      Senior Software Engineer
                    </div>
                    <div className="resume-page-history-right-content">
                      <ul>
                        {constants.tm.work.map((skill) => (
                          <li key={skill}> {skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    );
  }
}
