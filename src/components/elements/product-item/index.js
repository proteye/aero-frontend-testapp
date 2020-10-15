import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import defaultImage from '@theme/img/image.jpg';

import './style.less';
import Button from '@components/elements/button';

function ProductItem(props) {
  console.log('props', props.product);
  const { product } = props;
  const _id = product.id;

  const callbacks = {
    onBuy: useCallback(
      e => {
        e.preventDefault();
        props.onBuy && props.onBuy(_id);
      },
      [props.onBuy],
    ),
    onFavorite: useCallback(
      e => {
        e.preventDefault();
        props.onFavorite && props.onFavorite(_id);
      },
      [props.onFavorite],
    ),
    onComparison: useCallback(
      e => {
        e.preventDefault();
        props.onComparison && props.onComparison(_id);
      },
      [props.onComparison],
    ),
  };

  return (
    <div className="ProductItem">
      <div className="ProductItem-top">
        <div className="ProductItem-top__stars"></div>
        <div className="ProductItem-top__code">Арт. {product.code}</div>
      </div>
      <div className="ProductItem__photo">
        <img src={defaultImage} />
      </div>
      <div
        className={cn('ProductItem__available', {
          ProductItem__available_true: product.availability,
        })}
      >
        {product.availability ? 'В наличии' : 'Нет в наличии'}
      </div>
      <div className="ProductItem__title">{product.title}</div>
      <div className="ProductItem-params">
        <ul className="ProductItem-params__list">
          {product.params.map((param, index) => (
            <li className="ProductItem-params__list-item" key={index}>
              <div className="ProductItem-params__name">{param.name}</div>
              <div className="ProductItem-params__value">{param.value}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="ProductItem__price">{product.price.toLocaleString()} руб.</div>
      <div className="ProductItem__bonuses">+{product.bonuses} бонусов</div>
      <div className="ProductItem-actions">
        <div className="ProductItem-actions__buy">
          <Button onClick={callbacks.onBuy}>Купить</Button>
        </div>
        <div className="ProductItem-actions__more">
          <Button onClick={callbacks.onFavorite}>fav</Button>
          <Button onClick={callbacks.onComparison}>comp</Button>
        </div>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  onBuy: PropTypes.func,
  onFavorite: PropTypes.func,
  onComparison: PropTypes.func,
};

ProductItem.defaultProps = {
  product: null,
};

export default React.memo(ProductItem);
