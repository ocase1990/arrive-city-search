import { connect } from 'react-redux';
import { fetchCarriers } from '../../redux/carriers';
import App from './App';

// gives fetchCarriers from connect/redux to App.js

const mapDispatchToProps = (dispatch) => ({
  fetchCarriers: (currentCity) => dispatch(fetchCarriers(currentCity)),
})

export default connect(null, mapDispatchToProps)(App);
