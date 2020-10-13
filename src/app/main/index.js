import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import modal from '@store/modal/actions';
import LayoutPage from '@components/layouts/layout-page';
import HeaderContainer from '@containers/header-container';
import Button from '@components/elements/button';

function Main() {
  const callbacks = {
    showInfo: useCallback(async () => {
      const result = await modal.open('info', {
        overflowTransparent: false,
        overflowClose: true,
      });
    }, []),
  };

  return (
    <LayoutPage header={<HeaderContainer />}>
      <h1>Главная страница</h1>
      <p>
        <Link to="/private">Раздел для авторизованных</Link>
      </p>
      <p>
        <Button onClick={callbacks.showInfo}>Показать модалку</Button>
      </p>
    </LayoutPage>
  );
}

export default React.memo(Main);
