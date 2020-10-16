import React, { useCallback } from 'react';
import useSelectorMap from '@utils/hooks/use-selector-map';

import './style.less';

function ProductFilter() {
  const select = useSelectorMap(({ products }) => ({
    items: products.items,
    wait: products.wait,
    errors: products.errors,
  }));

  return (
    <div className="ProductList">
      <div className="row-no-gutters ProductList__row"></div>
    </div>
  );
}

export default React.memo(ProductFilter);
