import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice.js';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon.js';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.component}>
    {required ? ('') : (
      <div className={styles.icon}
        value={currentValue}
        onClick={() => setOptionValue('')}
      >
        <Icon name="times-circle" /> none
      </div>
    )} 
    {values.map(value => (
      <div 
        key={value.id}
        className={value.id === currentValue ? (styles.iconActive) : (styles.icon)}
        value={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon}/> {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;