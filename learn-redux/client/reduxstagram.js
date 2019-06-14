import React from 'react';
import { render } from 'react-dom';
//import css
import css from './styles/style.styl';
//import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url } from './data/config';
Raven.config(sentry_url).install();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        {/*if it matches anything with / grap the main component and then,
      depending on main structure, either pass PhotoGrid, or pass Single(they are going to be children of the main component)
      */}
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);
render(router, document.getElementById('root'));
