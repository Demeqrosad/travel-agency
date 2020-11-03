import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption.js';
import pricing from '../../../data/pricing.json';

const OrderForm = ({tripCost, options, setOrderOption}) => {
  return (
    <Row>
      {pricing.map(pricing => (
        <Col key={pricing.id} md={4}>
          <OrderOption currentValue = {options[pricing.id]} setOrderOption = {setOrderOption} {...pricing}/>
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary options = {options} tripCost = {tripCost} />
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;