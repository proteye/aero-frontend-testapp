import React from 'react';
import PropTypes from 'prop-types';
import Preloader from '@components/elements/preloader';
import themes from '@utils/themes';

import './style.less';

function LayoutPage(props) {
  return (
    <div className={themes('LayoutPage', props.theme)}>
      <div className="LayoutPage__header">{props.header}</div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 LayoutPage__content">{props.children}</div>
        </div>
      </div>
      <div className="LayoutPage__footer">{props.footer}</div>
      {props.loader && <Preloader />}
    </div>
  );
}

LayoutPage.propTypes = {
  header: PropTypes.node,
  footer: PropTypes.node,
  loader: PropTypes.bool,
  children: PropTypes.node,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

LayoutPage.defaultProps = {
  theme: '',
};

export default React.memo(LayoutPage);
