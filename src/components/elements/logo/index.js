import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import themes from '@utils/themes';

import './style.less';

class Logo extends Component {
  static propTypes = {
    to: PropTypes.string,
    title: PropTypes.string,
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  };

  static defaultProps = {
    to: '/',
    title: '',
    theme: '',
  };

  render() {
    const { to, title } = this.props;

    return (
      <Link className={themes('Logo', this.props.theme)} to={to} title={title}>
        AERO FRONTEND
      </Link>
    );
  }
}

export default Logo;
