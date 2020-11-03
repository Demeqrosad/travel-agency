import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const OrderOptionNumber = ({limits, currentValue, setOptionValue, price}) => (
  <div className={styles.number}>
    <input type='number'
      className={styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    {' '}({price})
  </div>
);

OrderOptionNumber.propTypes = {
  limits: PropTypes.object,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
  price: PropTypes.node,
};

export default OrderOptionNumber;