import React, { Component } from 'react';
import PropTypes from 'prop-types';
import themes from '@utils/themes';

import './style.less';

export default class Checkbox extends Component {
  static propTypes = {
    value: PropTypes.bool,
    label: PropTypes.string,
    required: PropTypes.bool,
    focused: PropTypes.bool,
    disabled: PropTypes.bool,
    tabIndex: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    theme: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  };

  static defaultProps = {
    label: '',
    value: false,
    onChange: () => {},
    disabled: false,
    theme: '',
  };

  onChange = e => {
    const { onChange } = this.props;

    const value = e.target.checked;
    return onChange(value);
  };

  render() {
    const { label, value, required, focused, disabled, tabIndex } = this.props;

    return (
      <div className={themes('Checkbox', this.props.theme)}>
        <label className="Checkbox__wrap">
          <input
            className="Checkbox__input"
            type="checkbox"
            checked={value}
            tabIndex={tabIndex}
            disabled={disabled}
            required={required}
            autoFocus={focused}
            onChange={this.onChange}
          />
          <span className="Checkbox__label">{label}</span>
        </label>
      </div>
    );
  }
}
