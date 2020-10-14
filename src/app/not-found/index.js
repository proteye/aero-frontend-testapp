import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LayoutPage from '@components/layouts/layout-page';
import HeaderContainer from '@containers/header-container';

function NotFound() {
  return (
    <Fragment>
      <Helmet>
        <title>404</title>
        <meta name="status" content="404" />
      </Helmet>
      <LayoutPage header={<HeaderContainer />}>
        <h1>404</h1>
        <p>Страница не найдена</p>
        <Link to="/">На главную</Link>
      </LayoutPage>
    </Fragment>
  );
}

export default React.memo(NotFound);
