import React, { useCallback } from 'react';
import useSelectorMap from '@utils/hooks/use-selector-map';
import ProductItem from '@components/elements/product-item';

import './style.less';

function ProductList() {
  const select = useSelectorMap(({ products }) => ({
    items: products.items,
    wait: products.wait,
    errors: products.errors,
  }));

  // if (select.wait) {
  //   return <div></div>;
  // }

  return (
    <div className="ProductList">
      <div className="row-no-gutters ProductList__row">
        {select.items.map(item => (
          <div className="col-xs-4" key={item.id}>
            <ProductItem product={item} />
          </div>
        ))}
        {select.items.map(item => (
          <div className="col-xs-4" key={item.id}>
            <ProductItem product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(ProductList);
