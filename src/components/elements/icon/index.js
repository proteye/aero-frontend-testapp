import React, { Component } from 'react';
import PropTypes from 'prop-types';
import list from './img';

class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: undefined,
  };

  render() {
    const { name, className, ...rest } = this.props;

    if (!list[name]) {
      throw new Error(`Icon not found ${name}`);
    }

    return <img className={className} src={list[name]} {...rest} />;
  }
}

export default Icon;
