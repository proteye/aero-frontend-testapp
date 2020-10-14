import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';
import Modals from '@app/modals';
import Loading from '@app/loading';

import '../theme/bootstrap.css';
import '../theme/style.less';

const Main = loadable(() => import('@app/main'), { fallback: <Loading /> });
const About = loadable(() => import('@app/about'), { fallback: <Loading /> });
const NotFound = loadable(() => import('@app/not-found'), { fallback: <Loading /> });

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
