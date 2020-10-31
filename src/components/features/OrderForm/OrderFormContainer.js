import {connect} from 'react-redux';
import OrderForm from './OrderForm.js';
import {getOrderOptions} from '../../../redux/orderRedux.js';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

export default connect(mapStateToProps)(OrderForm);