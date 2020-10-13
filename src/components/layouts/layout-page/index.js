import React from 'react';
import PropTypes from 'prop-types';
import themes from '@utils/themes';

import './style.less';

function LayoutPage(props) {
  return (
    <div className={themes('LayoutPage', props.theme)}>
      <div className="container">
        <div className="row">
          <div className="LayoutPage__header col-lg-12">{props.header}</div>
        </div>
        <div className="row">
          <div className="LayoutPage__content col-lg-12">{props.children}</div>
        </div>
        <div className="row">
          <div className="LayoutPage__footer col-lg-12">{props.footer}</div>
        </div>
      </div>
    </div>
  );
}

LayoutPage.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

LayoutPage.defaultProps = {
  theme: '',
};

export default React.memo(LayoutPage);
