import { connect } from 'react-redux';
import { fetchDetails } from '../../redux/details';
import App from './App';

// gives fetchDetails from connect/redux to App.js

const mapDispatchToProps = (dispatch) => ({
  fetchDetails: (date) => dispatch(fetchDetails(date)),
})

export default connect(null, mapDispatchToProps)(App);
