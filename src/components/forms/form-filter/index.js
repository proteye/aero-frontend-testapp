import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@components/elements/button';

import './style.less';
import Checkbox from '@components/elements/checkbox';

class FormFilter extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    wait: PropTypes.bool,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    params: {},
    onChange: () => {},
    onClear: () => {},
    onSubmit: () => {},
  };

  onManufacturerChange = name => value => {
    const manufacturers = this.props.params.manufacturers.map(item => {
      if (name === item.label) {
        return { ...item, value };
      }
      return item;
    });
    this.onChange('manufacturers')(manufacturers);
  };

  onChange = name => value => {
    const { params, onChange } = this.props;
    onChange({ ...params, [name]: value });
  };

  onSubmit = () => {
    const { params, onSubmit } = this.props;
    onSubmit(params);
  };

  onClear = () => {
    const { onClear } = this.props;
    onClear();
  };

  render() {
    const { params, wait } = this.props;

    return (
      <div className="FormFilter">
        <div className="FormFilter__actions">
          <Button theme="blue" disabled={wait} onClick={this.onSubmit}>
            Показать результат
          </Button>
          <Button theme="gray" disabled={wait} onClick={this.onClear}>
            Очистить фильтр
          </Button>
        </div>
        <div className="FormFilter__manufacturer">
          <div className="FormFilter__title">Производитель</div>
          <div className="FormFilter__checkboxes">
            {params.manufacturers.map((item, index) => (
              <Checkbox
                key={index}
                value={item.value}
                label={item.label}
                theme="gray"
                onChange={this.onManufacturerChange(item.label)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FormFilter;
