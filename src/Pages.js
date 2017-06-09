import React from 'react';
import {
  Match,
  Miss,
  } from 'react-router';

import Home from './views/Home/Home';
import PostNew from './components/Posts/PostNew';
import Error404 from './views/Error/Error404';

function Pages() {
  return (
    <main role="application">

      {/* List de artículos */}
      <Match
        pattern="/"
        exactly
        component={Home}
      />
      <Match
        pattern="/posts/new"
        exactly
        component={PostNew}
      />
      {/* Error 404 */}
      <Miss
        component={Error404}
      />
    </main>
  );
}

export default Pages;
