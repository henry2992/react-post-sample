import React, { Component } from 'react';
// import {
//   HashRouter,
//   Route,
// } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory'
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'


import Home from './views/Home/Home';
import HomeNew from './components/Posts/PostNew';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/posts/new" component={HomeNew} />
        </div>
      </Router>
    );
  }
}

export default App;
