import React, { Component } from 'react';
import PropTypes from 'prop-types';
import themes from '@utils/themes';

import './style.less';

class LayoutHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    left: PropTypes.node,
    right: PropTypes.node,
    center: PropTypes.node,
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  };

  static defaultProps = {
    theme: '',
  };

  render() {
    const { left, children, right, center, theme } = this.props;

    return (
      <div className={themes('LayoutHeader', theme)}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="LayoutHeader__wrap">
                <div className="LayoutHeader__left">{left}</div>
                <div className="LayoutHeader__center">{children || center}</div>
                <div className="LayoutHeader__right">{right}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutHeader;
