import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import DocumentMeta from 'react-document-meta';
var $ = require('jquery');

var Main = require('Main');
var Index = require('Index');

import ReactGA from 'react-ga';
ReactGA.initialize('UA-6241825-9'); // initialize Google Analytics

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

ReactDOM.render(
  <Router history={hashHistory} onUpdate={logPageView}>
    <Route path="/" component={Main}>
      <IndexRoute component={Index}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
