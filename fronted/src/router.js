import React from 'react';
import { Router, Route } from 'dva/router';
import Comments from "./routes/Comments.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Comments} />
    </Router>
  );
}

export default RouterConfig;
