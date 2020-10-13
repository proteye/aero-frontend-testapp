import React from 'react';
import HeaderContainer from '@containers/header-container';
import LayoutPage from '@components/layouts/layout-page';

function About() {
  return (
    <LayoutPage header={<HeaderContainer />}>
      <h1>О проекте</h1>
      <p>Тестовое задание для AERO.</p>
    </LayoutPage>
  );
}

export default React.memo(About);
