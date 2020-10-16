import React, { useCallback, useEffect } from 'react';
import modal from '@store/modal/actions';
import LayoutPage from '@components/layouts/layout-page';
import HeaderContainer from '@containers/header-container';
import ProductList from '@containers/product-list';
import products from '@store/products/actions';
import useInit from '@utils/hooks/use-init';
import useSelectorMap from '@utils/hooks/use-selector-map';

import './style.less';

function Main() {
  useInit(async () => {
    await products.fetchList();
  }, []);

  const select = useSelectorMap(({ products }) => ({
    wait: products.wait,
    errors: products.errors,
  }));

  const callbacks = {
    showError: useCallback(async message => {
      await modal.open('error', {
        message,
        overflowTransparent: false,
        overflowClose: true,
      });
    }, []),
  };

  useEffect(() => {
    if (select.errors) {
      callbacks.showError(select.errors);
    }
  }, [select.errors]);

  return (
    <LayoutPage theme="gray" header={<HeaderContainer />} loader={select.wait}>
      <div className="Main">
        <div className="row">
          <div className="col-xs-9">
            <ProductList />
          </div>
          <div className="col-xs-3">Filter</div>
        </div>
      </div>
    </LayoutPage>
  );
}

export default React.memo(Main);
