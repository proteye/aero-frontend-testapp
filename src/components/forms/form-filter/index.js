import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.less';

class FormFilter extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    errors: PropTypes.any,
    wait: PropTypes.bool,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  };

  static defaultProps = {
    theme: ['default'],
    errors: {},
    onChange: () => {},
    onSubmit: () => {},
  };

  onChange = name => value => {
    const { data, onChange } = this.props;

    onChange({ ...data, [name]: value });
  };

  onSubmit = e => {
    const { data, onSubmit } = this.props;

    e.preventDefault();
    onSubmit({ ...data });
  };

  render() {
    const { data, errors, wait, theme } = this.props;

    return <div></div>;
  }
}

export default FormFilter;
