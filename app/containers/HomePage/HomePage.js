/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';
// import linkedin from '../../images/LI-In-Bug.png';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  // componentDidMount() {
  //   const { username, onSubmitForm } = this.props;
  //   if (username && username.trim().length > 0) {
  //     onSubmitForm();
  //   }
  // }

  render() {
    return (
      <article>
        <Helmet>
          <title>Bryce`s Home</title>
        </Helmet>
        <div className="home-page">
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

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
};
