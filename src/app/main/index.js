import React, { useCallback } from 'react';
import modal from '@store/modal/actions';
import LayoutPage from '@components/layouts/layout-page';
import HeaderContainer from '@containers/header-container';
import ProductList from '@containers/product-list';
import products from '@store/products/actions';
import useInit from '@utils/hooks/use-init';
import useSelectorMap from '@utils/hooks/use-selector-map';

function Main() {
  useInit(async () => {
    await products.fetchList();
  }, []);

  const select = useSelectorMap(({ products }) => ({
    wait: products.wait,
  }));

  const callbacks = {
    showInfo: useCallback(async () => {
      const result = await modal.open('info', {
        overflowTransparent: false,
        overflowClose: true,
      });
    }, []),
  };

  return (
    <LayoutPage header={<HeaderContainer />} loader={select.wait}>
      <ProductList />
    </LayoutPage>
  );
}

export default React.memo(Main);
