import React from 'react';
import LayoutPage from '@components/layouts/layout-page';

function Loading() {
  return (
    <LayoutPage>
      <p>Загрузка...</p>
    </LayoutPage>
  );
}

export default React.memo(Loading);
