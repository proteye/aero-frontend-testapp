import React from 'react';
import HeaderContainer from '@containers/header-container';
import LayoutPage from '@components/layouts/layout-page';

function About() {
  return (
    <LayoutPage header={<HeaderContainer />}>
      <h1>About</h1>
      <p>Frontend test application for AERO.</p>
    </LayoutPage>
  );
}

export default React.memo(About);
