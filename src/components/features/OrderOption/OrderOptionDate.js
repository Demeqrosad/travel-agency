import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import {useState, useEffect} from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({currentValue, setOptionValue}) => {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {setStartDate(currentValue);});
  return (
    <div className={styles.component}>
      <DatePicker
        dateFormat='yyyy-MM-dd'
        selected={startDate}
        onChange={date => setOptionValue(date)}
      />
    </div>
  );
};
OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;