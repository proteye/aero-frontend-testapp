import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articles from '@store/articles/actions';
import categories from '@store/categories/actions';
import HeaderContainer from '@containers/header-container';
import LayoutPage from '@components/layouts/layout-page';
import ProductList from '@containers/product-list';
import useInit from '@utils/hooks/use-init';

function Catalog(props) {
  const categoryId = props.match.params.categoryId;

  useInit(async () => {
    await articles.init({ categoryId });
  }, [categoryId]);

  useInit(async () => {
    await categories.load({ fields: '*', limit: 1000 });
  });

  return (
    <LayoutPage header={<HeaderContainer />}>
      <h1>Каталог</h1>
      <ProductList />
    </LayoutPage>
  );
}

export default React.memo(Catalog);
