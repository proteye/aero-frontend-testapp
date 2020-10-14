import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '@store/products/actions';
import HeaderContainer from '@containers/header-container';
import LayoutPage from '@components/layouts/layout-page';
import ProductList from '@containers/product-list';
import useInit from '@utils/hooks/use-init';

function Catalog(props) {
  const categoryId = props.match.params.categoryId;

  useInit(async () => {
    await products.fetchList();
  }, []);

  return (
    <LayoutPage header={<HeaderContainer />}>
      <h1>Каталог</h1>
      <ProductList />
    </LayoutPage>
  );
}

export default React.memo(Catalog);
