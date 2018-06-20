import { connect } from 'react-redux';
import Details from './Details'
import { fetchDetails } from '../../redux/details'

const mapStateToProps = (state) => ({
  details: state.details.details,
})

// gives fetchDetails from connect/redux to Details.js
const mapDispatchToProps = (dispatch) => ({
  fetchDetails: (detailId) => dispatch(fetchDetails(detailId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)
