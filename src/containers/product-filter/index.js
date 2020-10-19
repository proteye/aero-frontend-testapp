import React, { useCallback } from 'react';
import useSelectorMap from '@utils/hooks/use-selector-map';
import FormFilter from '@components/forms/form-filter';
import formFilter from '@store/form-filter/actions';

import './style.less';

function ProductFilter() {
  const select = useSelectorMap(({ formFilter, products }) => ({
    params: formFilter.params,
    wait: products.wait,
  }));

  const callbacks = {
    onChange: useCallback(params => {
      formFilter.change(params);
    }, []),
    onClear: useCallback(() => {
      formFilter.clear();
    }, []),
    onSubmit: useCallback(params => {
      formFilter.submit(params);
    }, []),
  };

  return (
    <div className="ProductFilter">
      <FormFilter
        params={select.params}
        wait={select.wait}
        onChange={callbacks.onChange}
        onClear={callbacks.onClear}
        onSubmit={callbacks.onSubmit}
      />
    </div>
  );
}

export default React.memo(ProductFilter);
