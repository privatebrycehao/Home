/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import './style.scss';

export default function NotFound() {
  return (
    <article className={'not-found'}>
      <h1>The page you are looking for maybe under construction </h1>
    </article>
  );
}
