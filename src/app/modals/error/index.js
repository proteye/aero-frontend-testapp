import React, { useCallback } from 'react';
import modal from '@store/modal/actions';
import LayoutModal from '@components/layouts/layout-modal';

import './style.less';

function Error(props) {
  const callbacks = {
    onCancel: useCallback(async () => {
      await modal.close(false);
    }, []),
  };

  return (
    <LayoutModal
      onClose={callbacks.onCancel}
      overflowTransparent={props.overflowTransparent}
      overflowClose={props.overflowClose}
    >
      <div className="ModalError">{props.message}</div>
    </LayoutModal>
  );
}

export default React.memo(Error);
