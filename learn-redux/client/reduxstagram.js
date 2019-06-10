import React from 'react';
import { render } from 'react-dom';
//import css
import css from './styles/style.styl';
//import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {/*if it matches anything with / grap the main component and then,
      depending on main structure, either pass PhotoGrid, or pass Single(they are going to be children of the main component)
      */}
      <IndexRoute component={PhotoGrid} />
      <Route path="/view/:postId" component={Single} />
    </Route>
  </Router>
);
render(router, document.getElementById('root'));
