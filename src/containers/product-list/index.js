import React, { useCallback } from 'react';
import useSelectorMap from '@utils/hooks/use-selector-map';
import products from '@store/products/actions';
import ProductItem from '@components/elements/product-item';

import './style.less';

function ProductList() {
  const select = useSelectorMap(({ products }) => ({
    items: products.items,
    favWait: products.favWait,
  }));

  const callbacks = {
    onBuy: useCallback(id => {
      console.log('Buy', `{id: ${id}}`);
    }, []),
    onFavorite: useCallback(id => {
      products.favAdd(id);
    }, []),
    onComparison: useCallback(id => {
      console.log('Comparison', `{id: ${id}}`);
    }, []),
  };

  return (
    <div className="ProductList">
      <div className="row-no-gutters ProductList__row">
        {select.items.map(item => (
          <div className="col-xs-4" key={item.id}>
            <ProductItem
              product={item}
              favWait={select.favWait}
              onBuy={callbacks.onBuy}
              onFavorite={callbacks.onFavorite}
              onComparison={callbacks.onComparison}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(ProductList);
