import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption.js';
import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings.js';
import {formatPrice} from '../../../utils/formatPrice.js';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import Button from '../../common/Button/Button.js';

const sendOrder = (options, tripCost, tripName, tripId, tripCountry) => {
  const alertContact = 'Please enter your contact data first!';
  const alertName = 'Please enter your name first!';
  const alertContactAndName = 'Please enter your name and contact data first!';

  if(options.name === '' && options.contact === '') {
    alert(alertContactAndName);
    return;
  }

  if(options.name === '') {
    alert(alertName);
    return;
  }

  if(options.contact === '') {
    alert(alertContact);
    return;
  }

  const totalCost = formatPrice(calculateTotal(tripCost, options));
  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    tripCountry,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({tripCost, options, setOrderOption, tripName, tripId, tripCountry}) => {
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
      <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, tripCountry)}>Order now!</Button>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.string,
  tripCountry: PropTypes.string,
  tripId: PropTypes.string,
};

export default OrderForm;