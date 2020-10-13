import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function NotFound() {
  return (
    <Fragment>
      <Helmet>
        <title>404</title>
        <meta name="status" content="404" />
      </Helmet>
      <div>
        <h1>404</h1>
        <p>Страница не найдена</p>
        <Link to="/">На главную</Link>
      </div>
    </Fragment>
  );
}

export default React.memo(NotFound);
