import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Modals from '@app/modals';
import Main from '@app/main';
import About from '@app/about';
import NotFound from '@app/not-found';

import '../theme/bootstrap.css';
import '../theme/style.less';

function App() {
  useEffect(() => {
    SSR.firstRender = false;
  }, []);
  return (
    <Fragment>
      <Helmet>
        <title>AERO Frontend test app</title>
      </Helmet>
      <Switch>
        <Route path="/" exact={true} component={Main} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
      <Modals />
    </Fragment>
  );
}

export default React.memo(App);
