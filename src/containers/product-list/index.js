import React, { useCallback } from 'react';
import useSelectorMap from '@utils/hooks/use-selector-map';
// import { DatePicker } from 'antd';

function ProductList() {
  const select = useSelectorMap(state => ({
    items: state.products.items,
    wait: state.products.wait,
  }));

  if (select.wait) {
    return <div>{select.wait && <i>Загрузка...</i>}</div>;
  } else {
    return (
      <ul>
        {select.items.map(item => (
          <li key={item._id}>
            {item.title} | {item.maidIn.title} | {item.category.title} | {item.price} руб
          </li>
        ))}
      </ul>
    );
  }
}

export default React.memo(ProductList);
