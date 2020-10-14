import React, { useCallback } from 'react';
import useSelectorMap from '@utils/hooks/use-selector-map';

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
    <ul>
      {select.items.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default React.memo(ProductList);
