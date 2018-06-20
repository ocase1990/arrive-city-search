import { connect } from 'react-redux';
import Details from './Details'

const mapStateToProps = (state) => ({
  details: state.details.details,
})

export default connect(mapStateToProps)(Details)
